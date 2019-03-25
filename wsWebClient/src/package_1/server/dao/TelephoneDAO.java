package package_1.server.dao;

import java.util.List;
import java.util.Map;
import java.util.Set;

import package_1.client.Paginable;
import package_1.client.SQLCountWrapper;
import package_1.essence.telephone.Telephone;

public interface TelephoneDAO extends Paginable<Telephone> {
	/**
	 * Add a telephone to order
	 * 
	 * @param telephone
	 * @return
	 * @throws DAOException 
	 */
	public int addtelephone(Telephone item) throws DAOException;

	/**
	 * Get count of each telephone
	 * 
	 * @param telephone
	 * @return
	 * @throws DAOException 
	 */
	public boolean getTelephonesCount(Set<Telephone> telephones) throws DAOException;
	
	/**
	 * 
	 * @return All telephones in order
	 * @throws DAOException 
	 */
	public List<Telephone> listTelephones(String pattern) throws DAOException;

	@Override
	public List<Telephone> list(String pattern, String orderColumn, boolean ascending, int start, int count,
			SQLCountWrapper total) throws DAOException;
	
	Map<Integer, String> listManufactures() throws DAOException;

	public Telephone getTelephone(int id) throws DAOException;

	public void updateTelephone(Telephone telephone) throws DAOException;

	public Map<Integer, String> getCategories() throws DAOException;

}
