package package_1.server;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import package_1.client.Cart;
import package_1.essence.Product;
import package_1.essence.order.Delivery;
import package_1.essence.order.Order;
import package_1.essence.user.User;
import package_1.server.dao.DAOException;
import package_1.server.dao.OrderDAO;
import package_1.shared.Util;

/**
 * Create order from the cart. If cart not valid redirect to main page for
 * unregistered user. If delivery not valid redirect to fill {@link Delivery}.
 * 
 * @param cart
 *            in the session
 * @param delivery
 *            in the session
 * 
 * @manufacture engsyst
 *
 */
@WebServlet("/makeorder")
public class MakeOrder extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(MakeOrder.class);
	private static OrderDAO orderService = null;
	
	@Override
	public void init() {
		log.trace("Init start");
		orderService = (OrderDAO) getServletContext().getAttribute("OrderDao");
		log.debug("Get order service --> " + orderService);
		log.trace("Init finish");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		log.trace("doPost start");
		
		HttpSession session = request.getSession(false);
		log.debug("Get session --> " + session);
		
		@SuppressWarnings("unchecked")
		Cart<Product> cart = (Cart<Product>) session.getAttribute("cart");
		log.debug("Get attribute cart --> " + cart);
		if (cart == null || cart.isEmpty()) {
			cart = new Cart<>();
			session.setAttribute("cart", cart);
			response.sendRedirect("list_basket.jsp");
			log.debug("Cart is empty. Redirect to list_basket.jsp");
			return;
		} 
		Delivery delivery = (Delivery) session.getAttribute("delivery");
		log.debug("Get Delivery from session --> " + delivery);
		if (delivery == null) {
			response.sendRedirect("filldelivery.jsp");
			log.debug("Delivery is empty. Redirect to filldelivery.jsp");
			return;
		}
		if (!delivery.validate()) {
			session.setAttribute("error", "Некорректно заполнены поля формы.");
			response.sendRedirect("filldelivery.jsp");
			log.debug("Delivery invalid. Redirect to filldelivery.jsp");
			return;
		}
		User user = (User) session.getAttribute("user");
		log.debug("Get User from session --> " + user);
		Integer userId = null;
		if (user != null)
			userId = user.getId();
		try {
			log.debug("Try make order.");
			int orderId = orderService.makeOrder(userId, cart, delivery);
			Order order = new Order(orderId, cart, delivery);
			session.setAttribute("order", order);
			log.debug("Order created --> " + order);
			cart = new Cart<>();
			log.debug("Create new cart --> " + order);
			session.setAttribute("cart", cart);
		} catch (DAOException e) {
			session.setAttribute("error", "Невозможно оформить заказ. "
					+ "Не достаточно телефонов в наличии.");
			response.sendRedirect("list_basket.jsp");
			log.debug("Not enouth phone. Redirect to list_basket.jsp");
			return;
		}
		
		response.sendRedirect("basket.jsp");
		log.debug("Redirect to basket.jsp");
		log.trace("doPost finish");
	}

}
