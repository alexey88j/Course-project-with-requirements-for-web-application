package package_1.client;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

import package_1.essence.telephone.Telephone;
import package_1.server.dao.TelephoneDAO;
import package_1.server.dao.DAOException;
import package_1.server.dao.DAOFactory;

/**
 * Wrapper class used to get data from the {@link Cart} at jsp.
 * @manufacture engsyst
 *
 */
public class CartTelephoneDAO implements Paginable<Telephone> {
	
	Cart<Telephone> cart;
	
	public Cart<Telephone> getCart() {
		return cart;
	}

	public void setCart(Cart<Telephone> cart) {
		this.cart = cart;
	}

	Comparator<Telephone> titleAsc  = new Comparator<Telephone>() {

		@Override
		public int compare(Telephone o1, Telephone o2) {
			return o1.getTitle().compareTo(o2.getTitle());
		}
	};

	Comparator<Telephone> titleDesc  = new Comparator<Telephone>() {
		
		@Override
		public int compare(Telephone o1, Telephone o2) {
			return o2.getTitle().compareTo(o1.getTitle());
		}
	};
	
	Comparator<Telephone> price  = new Comparator<Telephone>() {
		
		@Override
		public int compare(Telephone o1, Telephone o2) {
			return Double.compare(o1.getPrice(), o2.getPrice());
		}
	};
	
	Comparator<Telephone> countComp  = new Comparator<Telephone>() {
		
		@Override
		public int compare(Telephone o1, Telephone o2) {
			return Integer.compare(o1.getCount(), o2.getCount());
		}
	};
	
	Comparator<Telephone> batch_number  = new Comparator<Telephone>() {
		
		@Override
		public int compare(Telephone o1, Telephone o2) {
			return o1.getBatch_number().compareTo(o2.getBatch_number());
		}
	};

	Comparator<Telephone> manufacture  = new Comparator<Telephone>() {
		
		@Override
		public int compare(Telephone o1, Telephone o2) {
			return o1.getManufacture().get(0).getTitle().compareTo(o2.getManufacture().get(0).getTitle());
		}
	};
	
	@Override
	public List<Telephone> list(String pattern, String orderColumn, boolean ascending, int start, int count,
			SQLCountWrapper total) throws DAOException {
		Comparator<Telephone> comparator = null;
		switch (orderColumn) {
		case "title":
			comparator = ascending ? titleAsc : titleDesc;
			break;
		case "manufacture":
			comparator = manufacture;
			break;
		case "count":
			comparator = countComp;
			break;
		case "price":
			comparator = price;
			break;
		default:
			comparator = titleAsc;
			break;
		}
		if (cart == null) {
			total.setCount(0);
			return new ArrayList<Telephone>();
		}
		TelephoneDAO bdao = DAOFactory.getDAOFactory(DAOFactory.MYSQL).getTelephoneDAO();
		bdao.getTelephonesCount(cart.keySet());
		Set<Telephone> b = cart.keySet();
		ArrayList<Telephone> a = new ArrayList<>();
		for (Telephone telephone : b) {
			a.add(telephone);
		}
		Collections.sort(a, comparator);
		total.setCount(a.size());
//		Telephone[] telephones = (Telephone[]) cart.keySet().toArray();
//		Arrays.sort(telephones, comparator);
//		return Arrays.asList(telephones);
		return a;
	}
	
}
