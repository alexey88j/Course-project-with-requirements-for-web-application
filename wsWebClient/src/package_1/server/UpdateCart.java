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
import package_1.client.ReqParam;
import package_1.essence.telephone.Telephone;

/**
 * <p>
 * Updates count of one product in the {@link Cart}. Cart must be in session as
 * attribute 'cart'. Perform two actions {@code update} and {@code remove}.
 * Value of action is {@code id} of product.
 * <p>
 * If action is {@code update} then sets {@code count} of product in the
 * {@code cart} from request parameter. If action is {@code remove} then remove
 * product from the {@code cart}.
 * 
 * @manufacture engsyst
 */
@WebServlet("/updatecart")
public class UpdateCart extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(UpdateCart.class);
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateCart() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		log.trace("doPost start");
		HttpSession session = request.getSession(false);
		@SuppressWarnings("unchecked")
		Cart<Telephone> cart = (Cart<Telephone>) session.getAttribute("cart");
		log.debug("Get cart from session --> " + cart);
		if (cart == null) {
			cart = new Cart<>();
			session.setAttribute("cart", cart);
			response.sendRedirect("list_basket.jsp");
			log.debug("New Cart created. Redirect to list_basket.jsp");
		}
		int id = 0;
		String uId = request.getParameter("update");
		log.debug("Update id --> " + uId);
		String rId = request.getParameter("remove");
		log.debug("Remove id --> " + uId);
		int count = 0;
		if (uId != null && !uId.trim().equals("")) {
			try {
				id = Integer.parseInt(uId);
				String sCount = request.getParameter("count");
				log.debug("Count of telephones --> " + sCount);
				count = Integer.parseInt(sCount);
				if (count <= 0) {
					session.setAttribute("error", "Не допустимое количество товара");
				} else {
					cart.put(cart.getItem(id), count);
					session.setAttribute("info", "Корзина обновлена");
				}
				log.debug("Cart updated --> " + cart);
			} catch (Exception e) {
				log.error("Unknown product. Operation update. Id: " + uId);
				throw new ServletException("Unknown product. Operation update. Id: " + uId);
			}
		}
		if (rId != null && !rId.trim().equals("")) {
			try {
				id = Integer.parseInt(rId);
				count = Integer.parseInt(request.getParameter("count"));
				cart.remove(cart.getItem(id));
				session.setAttribute("info", "Книга удалена из корзины");
				log.debug("Cart updated. Removed telephone --> " + rId);
			} catch (Exception e) {
				log.error("Unknown product. Operation remove. Id: " + uId);
				throw new ServletException("Unknown product. Operation remove. Id: " + rId);
			}
		}
		session.setAttribute("cart", cart);
		log.debug("Cart to session --> " + cart);
		ReqParam params = new ReqParam();
		params.setParams(request.getParameterMap());
		params.removeParam("update").removeParam("remove").removeParam("count");
		log.debug("Params --> " + params);
		response.sendRedirect("list_basket.jsp?" + params);
		log.debug("Redirect to list_basket.jsp");
		log.trace("doPost finish");
	}

}
