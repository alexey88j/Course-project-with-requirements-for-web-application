package package_1.server;

import java.io.IOException;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import jdk.nashorn.internal.ir.RuntimeNode.Request;
import package_1.essence.telephone.Telephone;
import package_1.server.dao.TelephoneDAO;
import package_1.server.dao.DAOException;

/**
 * Get telephone from database by id and forward to edit telephone form
 * @param id in request
 * 
 * @manufacture engsyst
 *
 */
@WebServlet("/telephone/get")
public class GetTelephone extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(GetTelephone.class);
	private TelephoneDAO TelephoneService = null;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetTelephone() {
        super();
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
    @Override
	public void init() {
    	log.trace("init start");
    	TelephoneService = (TelephoneDAO) getServletContext().getAttribute("TelephoneDao");
    	log.debug("Get TelephoneDao from context -- > " + TelephoneService);
    	log.trace("init finish");
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		log.trace("Start");
		String sId = request.getParameter("id");
		
		Telephone telephone = null;
		Map<Integer, String> categories = null;
		try {
			categories = TelephoneService.getCategories();
			log.debug("Found categories -- > " + categories);
			request.setAttribute("categories", categories);
			if (sId == null || sId.isEmpty()) {
				telephone = new Telephone();
				log.debug("Create new Telephone -- > ");
			} else {
				telephone = TelephoneService.getTelephone(Integer.parseInt(sId));
				log.debug("Found Telephone -- > " + telephone);
			}
			request.setAttribute("telephone", telephone);
		} catch (DAOException e) {
			log.error("DB access error --> ", e.getCause());
			request.setAttribute("error", e.getMessage());
		} catch (NumberFormatException e) {
			log.error("Unknown id --> " + sId);
			throw new ServletException("Unknown id -->" + sId);
		}
		request.getRequestDispatcher("telephoneform.jsp").forward(request, response);
		log.debug("Forward to -- > telephoneform.jsp");
		log.trace("Finish");
	}
}
