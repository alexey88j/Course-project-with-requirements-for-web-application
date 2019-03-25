package package_1.server;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import package_1.essence.telephone.Telephone;
import package_1.essence.telephone.Category;
import package_1.server.dao.TelephoneDAO;
import package_1.server.dao.DAOException;
import package_1.server.dao.InsertException;
import package_1.server.dao.UpdateException;
import package_1.shared.Util;

/**
 * Get telephone from web-form and updates it in database
 * 
 * @manufacture engsyst
 *
 */
@WebServlet("/telephone/update")
public class UpdateTelephone extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(UpdateTelephone.class);
	private TelephoneDAO TelephoneService = null;
       
    @Override
	public void init() {
    	log.trace("init start");
    	TelephoneService = (TelephoneDAO) getServletContext().getAttribute("TelephoneDao");
    	log.debug("Get TelephoneDao from context -- > " + TelephoneService);
    	log.trace("init finish");
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		Telephone telephone = createTelephone(request);
		log.debug("Telephone --> " + telephone);
		try {
			if (telephone.getId() == null) {
				telephone.setId(TelephoneService.addtelephone(telephone));
			} else {
				TelephoneService.updateTelephone(telephone);
			}
		} catch (InsertException e) {
			log.error(e.getMessage(), e.getCause());
			request.setAttribute("error", "Невозможно добавить книгу. Повторите запрос позже.");
		} catch (UpdateException e) {
			log.error(e.getMessage(), e.getCause());
			request.setAttribute("error", "Невозможно обновить книгу. Повторите запрос позже.");
		} catch (DAOException e) {
			log.error(e.getMessage(), e.getCause());
			request.setAttribute("error", "Ошибка доступа базе данных. Повторите запрос позже.");
		}
		request.setAttribute("telephone", telephone);
		response.sendRedirect("Catalog.jsp");
	}

	private Telephone createTelephone(HttpServletRequest request) {
		Telephone telephone = new Telephone();
		try {
			String param = request.getParameter("id");
			log.trace("param id --> " + param);
			telephone.setId(Util.getIntOrElse(param, null));
			param = request.getParameter("title");
			log.trace("param title --> " + param);
			telephone.setTitle(param);
			param = request.getParameter("manufacture");
			log.trace("param manufacture --> " + param);
			telephone.setManufacture(param);
			param = request.getParameter("batch_number");
			log.trace("param batch_number --> " + param);
			telephone.setBatch_number(param);
			param = request.getParameter("category");
			log.trace("param category --> " + param);
			telephone.setCategory(Category.fromValue(param));
			param = request.getParameter("price");
			log.trace("param price --> " + param);
			telephone.setPrice(Util.getDoubleOrElse(param, null));
			param = request.getParameter("count");
			log.trace("param count --> " + param);
			telephone.setCount(Util.getIntOrElse(param, null));
			param = request.getParameter("description");
			log.trace("param description --> " + param);
			telephone.setDescription(param);
			param = request.getParameter("cover");
			log.trace("param cover --> " + param);
			telephone.setCover(request.getParameter("cover"));
		} catch (Exception e) {
			// do nothing
		}
		return telephone;
	}

	private Telephone updateTelephone(Telephone telephone, HttpServletRequest request) {
		String param = Util.getOrElse(request.getParameter("id"), "");
//		if (param.isEmpty())
//			crea
//		if (telephone.getId() == null) {
//			telephone.setId(Util.getIntOrElse(param, null));
//		}
		param = request.getParameter("title");
		if (telephone.getTitle() == null) {
			telephone.setTitle(param);
		} else if (param != null) {
			telephone.setTitle(param);
		}
		param = request.getParameter("manufacture");
		if (telephone.getManufacture() == null) {
			telephone.setManufacture(param);
		} else if (param != null) {
			telephone.setManufacture(param);
		}
		param = request.getParameter("batch_number");
		if (telephone.getBatch_number() == null) {
			telephone.setBatch_number(param);
		} else if (param != null) {
			telephone.setBatch_number(param);
		}
		param = request.getParameter("price");
		Double p = Util.getDoubleOrElse(request.getParameter("price"), null);
		if (telephone.getPrice() == 0.) {
			telephone.setPrice(p);
		} else if (p != null) {
			telephone.setPrice(p);
		}
		param = request.getParameter("price");
		Integer c = Util.getIntOrElse(request.getParameter("count"), null);
		if (telephone.getCount() == 0) {
			telephone.setPrice(c);
		} else if (c != null) {
			telephone.setPrice(c);
		}
		param = request.getParameter("description");
		if (telephone.getDescription() == null) {
			telephone.setDescription(param);
		} else if (param != null) {
			telephone.setDescription(param);
		}
		// telephone.setCover(request.getParameter("cover"));
		return telephone;
	}
	
}
