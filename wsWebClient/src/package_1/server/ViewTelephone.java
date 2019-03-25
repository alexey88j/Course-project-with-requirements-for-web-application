package package_1.server;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import package_1.essence.telephone.Telephone;
import package_1.server.dao.TelephoneDAO;

/**
 * Get telephone from database by id and forward to view telephone page
 * @param id in request
 * 
 * @manufacture engsyst
 *
 */
public class ViewTelephone extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(ViewTelephone.class);
	private TelephoneDAO TelephoneService = null;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewTelephone() {
        super();
    }

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
		log.trace("doPost start");
		RequestDispatcher rd = request.getRequestDispatcher("/error.jsp");
		String id = request.getParameter("id");
		Telephone telephone = null;
		if (id != null)
			try {
				telephone = TelephoneService.getTelephone(Integer.parseInt(id));
				log.debug("Get Telephone from dao -- > " + telephone);
			} catch (Exception e) {
				log.error("Telephone with id = " + id + " not found", e.getCause());
				rd.forward(request, response);
			}
		rd = request.getRequestDispatcher("viewtel.jsp");
		request.setAttribute("telephone", telephone);
		rd.forward(request, response);
		log.debug("Forvard to viewtel.jsp");
		log.trace("doPost finish");
	}
	
}
