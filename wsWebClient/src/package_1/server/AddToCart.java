package package_1.server;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import package_1.client.Cart;
import package_1.client.ReqParam;
import package_1.essence.telephone.Telephone;
import package_1.server.dao.TelephoneDAO;
import package_1.server.dao.DAOException;

/**
 * Add product to the {@link Cart}. Cart must be in session as Attribute 'cart'.
 */
public class AddToCart extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(AddToCart.class);
	private TelephoneDAO TelephoneService = null;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddToCart() {
		super();
	}

	@Override
	public void init() {
    	log.trace("init start");
    	TelephoneService = (TelephoneDAO) getServletContext().getAttribute("TelephoneDao");
    	log.debug("Get TelephoneDao from context -- > " + TelephoneService);
    	log.trace("init finish");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		log.trace("doPost start");
		HttpSession session = request.getSession(false);
		log.debug("Params --> " + request.getParameterMap());
		
		String sid = request.getParameter("tocart");
		@SuppressWarnings("unchecked")
		Cart<Telephone> cart = (Cart<Telephone>) session.getAttribute("cart");
		if (cart == null) {
			log.debug("Cart not found. Create new.");
			cart = new Cart<Telephone>();
		}
		try {
			int count;
			try {
				count = Integer.parseInt(request.getParameter("count"));
				log.debug("Get parameter count --> " + count);
				if (count < 0) count = 1;
			} catch (Exception e) {
				count = 1;
				log.debug("Set count --> " + count);
			}
			int id = Integer.parseInt(sid);
			cart.add(TelephoneService.getTelephone(id), count);
			log.debug("Telephone added to cart --> " + cart);
			request.setAttribute("info", "Вы купили книгу");
		} catch (NumberFormatException e) {
			log.debug("Wrong telephone id --> " + sid);
			request.setAttribute("error", "Неизвестная книга");
		} catch (DAOException e) {
			log.debug("Wrong number of telephones");
			request.setAttribute("error", "Не достаточно книг в наличии");
		}
		session.setAttribute("cart", cart);
		// For return to the refered page
		ReqParam params = new ReqParam();
		params.setParams(request.getParameterMap());
		params.removeParam("tocart");
		params.removeParam("count");
		response.sendRedirect("Catalog.jsp?" + params);
		log.debug("Params --> " + params);
		log.debug("Redirect to Catalog.jsp");
		log.trace("doPost finish");
	}

}
