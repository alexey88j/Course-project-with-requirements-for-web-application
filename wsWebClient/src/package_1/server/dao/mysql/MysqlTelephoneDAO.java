package package_1.server.dao.mysql;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.apache.log4j.Logger;

import package_1.client.SQLCountWrapper;
import package_1.essence.telephone.Manufacture;
import package_1.essence.telephone.Telephone;
import package_1.essence.telephone.Category;
import package_1.server.dao.TelephoneDAO;
import package_1.server.dao.DAOException;
import package_1.server.dao.InsertException;
import package_1.server.dao.UpdateException;

class MysqlTelephoneDAO implements TelephoneDAO {
	private static final Logger log = Logger.getLogger(MysqlTelephoneDAO.class);

	private static MysqlTelephoneDAO dao;
	
	public static TelephoneDAO getInstance() {
		log.trace("Try get instance.");
		if (dao == null) {
			log.trace("Instance not found. Create new.");
			dao = new MysqlTelephoneDAO();
		}
		return dao;
	}
	
	Connection getConnection() throws SQLException {
		Connection con = null;
		try {
			log.trace("Try get connection from pool.");
			con = MysqlDAOFactory.getConnection();
		} catch (SQLException e) {
			log.error("Cannot get connection from pool. Try use DriverManager.");
			e.printStackTrace();
//			con = MysqlDAOFactory.getDBConnection();
		}
		return con;
		
	}


	void mapTelephone(PreparedStatement st, Telephone item) throws SQLException {
		// telephone` (`title`, `batch_number`, `price`, `count`, `category_id`) 
		int k = 0;
		st.setString(++k, item.getTitle());
		st.setString(++k, item.getBatch_number());
		st.setDouble(++k, item.getPrice());
		st.setInt(++k, item.getCount());
		st.setInt(++k, item.getCategory().ordinal() + 1);
	}

	Telephone unmapTelephone(ResultSet rs) throws SQLException {
		List<Manufacture> manufactures = new ArrayList<>();
		String[] a = rs.getString("manufactures").split(",");
		for (String title : a) {
			manufactures.add(new Manufacture(title));
		}
		Telephone telephone = new Telephone(rs.getInt("id"), rs.getString("title"), manufactures, rs.getString("batch_number"),
				rs.getDouble("price"), Category.fromValue(rs.getString("category")), rs.getInt("count"));
		return telephone;
	}

	List<Integer> getExistedManufactures(Connection con, List<Manufacture> auth) throws SQLException {
		log.trace("Start");
		// Make query string
		StringBuilder sb = new StringBuilder();
		for (Manufacture a : auth) {
			sb.append("title = '");
			sb.append(a.getTitle());
			sb.append("' or ");
		}
		sb.delete(sb.lastIndexOf("'")+1, sb.length());
		sb.append(";");
		String getQuery = Querys.SQL_GET_MANUFACTURES + sb.toString();
		log.debug("Query --> " + getQuery);
		
		List<Integer> res = new ArrayList<>();
		PreparedStatement st = null;
		try {
			log.debug("Try execute");
			st = con.prepareStatement(getQuery);
			ResultSet rs = st.executeQuery();
			log.debug("Try get result");
			while (rs.next()) {
				res.add(rs.getInt(1));
				auth.remove(new Manufacture(rs.getString(2)));
			}
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		log.debug("Result --> " + res);
		log.trace("Finish");
		return res;
		
	}
	
	@Override
	public int addtelephone(Telephone item) throws InsertException {
		Connection con = null;
		int telephoneId = 0;
		try {
			con = getConnection();
			log.debug("Try add telephone");
			telephoneId = addtelephone(con, item);
			con.commit();
		} catch (SQLException e) {
			MysqlDAOFactory.rollback(con);
			log.error("Can not add telephone", e);
			throw new InsertException("Can not add telephone", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
		return telephoneId;
	}

	int addtelephone(Connection con, Telephone item) throws SQLException {
		log.trace("Start");
		int telephoneId = 0;
		PreparedStatement st = null;
		try {
			log.debug("Query --> " + Querys.SQL_ADD_TELEPHONE);
			log.debug("Telephone --> " + item);
			st = con.prepareStatement(Querys.SQL_ADD_TELEPHONE, PreparedStatement.RETURN_GENERATED_KEYS);
			mapTelephone(st, item);
			int count = st.executeUpdate();
			if (count == 0) {
				throw new SQLException("addManufactures: No data inserted");
			}
			ResultSet rs = st.getGeneratedKeys();
			if (rs.next()) {
				telephoneId = rs.getInt(1);
				log.debug("Inserted telephone id --> " + telephoneId);
			} else {
				log.error("No data inserted");
				throw new SQLException("addtelephone: No data inserted");
			}
			
			log.debug("Try add manufactures");
			List<Integer> aIds = addManufactures(con, item.getManufacture());
			String q = Querys.SQL_ADD_TELEPHONE_MANUFACTURES + SqlUtil.pairToValues(aIds, telephoneId);
			log.debug("Query --> " + q);
			st = con.prepareStatement(q, PreparedStatement.RETURN_GENERATED_KEYS);
			count = st.executeUpdate();
			
		} finally {
			st.close();
		}
		log.debug("Result --> " + telephoneId);
		log.trace("Finish");
		return telephoneId;
		
	}

	@Override
	public List<Telephone> listTelephones(String pattern) throws DAOException {
		return list(pattern, "title", true, 0, 0, null);
	}

	@Override
	public List<Telephone> list(String pattern, String orderColumn, boolean ascending, 
			int start, int count, SQLCountWrapper total) throws DAOException {
		log.trace("Start");
		List<Telephone> telephones = null;
		Connection con = null;
		try {
			con = getConnection();
			log.debug("Try list telephone with pattern --> " + pattern + "; orderColumn --> " + orderColumn 
					+ "; ascending --> " + ascending + "; start --> " + start + "; count --> " + count);
			telephones = listTelephones(con, pattern, orderColumn, ascending, start, count, total);
		} catch (SQLException e) {
			log.error("Can not listTelephones", e);
			throw new DAOException("Can not listTelephones", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
		log.trace("Finish");
		return telephones;
	}

	List<Telephone> listTelephones(Connection con, String pattern, String orderColumn, boolean ascending, 
			int start, int count, SQLCountWrapper total) throws SQLException {
		log.trace("Start");
		List<Telephone> telephones = new ArrayList<>();
		PreparedStatement st = null;
		try {
			String where = pattern == null || pattern.length() == 0 ? "" : 
				" WHERE title LIKE '%" + pattern + "%' OR manufactures LIKE '%" + pattern + "%' ";
			String order = orderColumn == null || orderColumn.length() == 0 ? "" : "ORDER BY " 
					+ orderColumn + (ascending ? " ASC" : " DESC");
			String limit = (count == 0 ? "" : " LIMIT " + start + "," + count);
			String query = Querys.SQL_FIND_TELEPHONES + where + order + limit;
			log.debug("Query --> " + query);
			st = con.prepareStatement(query);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				telephones.add(unmapTelephone(rs));
			}
			st.close();
			if (total != null) {
				log.debug("Try get total telephones.");
				query = Querys.SQL_FIND_TELEPHONES_COUNT + where;
				log.debug("Query --> " + query);
				st = con.prepareStatement(query);
				rs = st.executeQuery();
				while (rs.next()) {
					total.setCount(rs.getInt(1));
					log.debug("Total --> " + total);
				}
			}
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		log.debug("Result -- >" + telephones);
		log.trace("Finish");
		return telephones;
	}
	
	@Override
	public Map<Integer, String> listManufactures() throws DAOException {
		log.trace("Start");
		Map<Integer, String> manufactures = null;
		Connection con = null;
		try {
			con = getConnection();
			log.debug("Try list manufactures.");
			manufactures = listManufactures(con);
		} catch (SQLException e) {
			log.error("Can not add telephone", e);
			throw new DAOException("Can not add telephone", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
		log.trace("Finish");
		return manufactures;
	}

	public Map<Integer, String> listManufactures(Connection con) throws SQLException {
		log.trace("Start");
		Map<Integer, String> manufactures = new TreeMap<>();
		PreparedStatement st = null;
		try {
			log.debug("Query --> " + Querys.SQL_LIST_MANUFACTURES);
			st = con.prepareStatement(Querys.SQL_LIST_MANUFACTURES);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				manufactures.put(rs.getInt(1), rs.getString(2));
			}
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		
		log.debug("Result -- >" + manufactures);
		log.trace("Finish");
		return manufactures;
	}
	
	List<Integer> addManufactures(Connection con, List<Manufacture> list) throws SQLException {
		log.trace("Start");
		assert list.isEmpty() : "Empty manufactures";
		List<Manufacture> auth = new ArrayList<>(list);
		log.debug("Make copy of telephone manufactures --> " + auth);
		log.debug("Try get Existed Manufactures and remove it from insert -- >");
		List<Integer> res = getExistedManufactures(con, auth);
		if (auth.isEmpty()) {
			log.debug("Nothing to add.");
			log.trace("Finish");
			return res;
		}
		List<String> toAdd = new ArrayList<>();
		for (Manufacture a : auth) {
			toAdd.add(a.getTitle());
		}
		String addQuery = Querys.SQL_ADD_MANUFACTURE + SqlUtil.listToValues(toAdd);
		PreparedStatement st = null;
		try {
			log.debug("Query -- >" + addQuery);
			st = con.prepareStatement(addQuery, PreparedStatement.RETURN_GENERATED_KEYS);
			int count = st.executeUpdate();
			if (count == 0) {
				log.error("No data inserted");
				throw new SQLException("addManufactures: No data inserted");
			}
			ResultSet rs = st.getGeneratedKeys();
			while (rs.next()) {
				res.add(rs.getInt(1));
			}
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		log.debug("Result -- >" + res);
		log.trace("Finish");
		return res;
	}

	@Override
	public Telephone getTelephone(int id) throws DAOException {
		log.trace("Start");
		Connection con = null;
		try {
			con = getConnection();
			log.debug("Try get telephone --> " + id);
			return getTelephone(con, id);
		} catch (SQLException e) {
			log.error("listTelephones: Can not listTelephones", e);
			throw new DAOException("Can not listTelephones", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
	}

	public Telephone getTelephone(Connection con, int id) throws SQLException {
		log.trace("Start");
		Telephone telephone = null;
		PreparedStatement st = null;
		try {
			log.debug("Query --> " + Querys.SQL_FIND_TELEPHONE_BY_ID);
			st = con.prepareStatement(Querys.SQL_FIND_TELEPHONE_BY_ID);
			st.setInt(1, id);
			ResultSet rs = st.executeQuery();
			if (rs.next()) {
				return unmapTelephone(rs);
			}
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		log.debug("Result -- >" + telephone);
		log.trace("Finish");
		return telephone;
	}

	@Override
	public boolean getTelephonesCount(Set<Telephone> telephones) throws DAOException {
		log.trace("Start");
		Connection con = null;
		try {
			con = getConnection();
			log.debug("Try get telephones count.");
			return getTelephonesCount(con, telephones);
		} catch (SQLException e) {
			log.error("Can not get telephone count", e);
			throw new DAOException("Can not get telephone count", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
	}

	boolean getTelephonesCount(Connection con, Set<Telephone> telephones) throws SQLException {
		log.trace("Start");
		if (telephones == null || telephones.isEmpty()) {
			log.debug("Initial --> " + telephones);
			return false;
		}
		PreparedStatement st = null;
		List<Integer> ids = new ArrayList<>();
		for (Telephone b : telephones) {
			ids.add(b.getId());
		}
		log.debug("Initial --> " + telephones);
		try {
			String query = Querys.SQL_GET_TELEPHONES_COUNT + SqlUtil.listToIN(ids);
			log.debug("Query --> " + query);
			st = con.prepareStatement(query);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				int id = rs.getInt(1);
				int c = rs.getInt(2);
				for (Telephone b : telephones) {
					if (b.getId() == id) {
						b.setCount(c);
						break;
					}
				}
			}
			log.debug("Result -- >" + telephones);
			log.trace("Finish");
			return true;
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
	}

	@Override
	public void updateTelephone(Telephone item) throws UpdateException {
		// TODO 
		// 1. ?????????
		// getTelephone with id
		// replace changed fields
		// updateTelephone
		// OR
		// 2. ????????????
		// simply updateTelephone
		log.trace("Start");
		Connection con = null;
		try {
			con = getConnection();
			log.debug("Try add telephone");
			updateTelephone(con, item);
			con.commit();
		} catch (SQLException e) {
			MysqlDAOFactory.rollback(con);
			log.error("Can not update telephone", e);
			throw new UpdateException("Can not update telephone", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
		log.trace("Finish");
	}

	void updateTelephone(Connection con, Telephone item) throws SQLException {
		log.trace("Start");
		Telephone telephone = null;
		PreparedStatement st = null;
		try {
			st = con.prepareStatement(Querys.SQL_UPDATE_TELEPHONE);
			int k = 0;
			// SET `title` = ?,`batch_number` = ?,`price` = ?,`count` = ?,`category_id`= ?,`cover` = ?,`description`= ? WHERE `id` = ?;

			st.setString(++k, item.getTitle());
			st.setString(++k, item.getBatch_number());
			st.setDouble(++k, item.getPrice());
			st.setInt(++k, item.getCount());
			st.setInt(++k, item.getCategory().ordinal() + 1);
			st.setString(++k, item.getCover());
			st.setString(++k, item.getDescription());
			st.setInt(++k, item.getId());
			log.debug("Query --> " + st);
			st.executeUpdate();
			st.close();
			st = con.prepareStatement(Querys.SQL_DELETE_MANUFACTURE_HAS_TELEPHONE);
			st.setInt(1, item.getId());
			log.debug("Query --> " + st);
			st.executeUpdate();
			log.debug("Try add manufactures");
			List<Integer> aIds = addManufactures(con, item.getManufacture());
			String q = Querys.SQL_ADD_TELEPHONE_MANUFACTURES + SqlUtil.pairToValues(aIds, item.getId());
			log.debug("Query --> " + q);
			st = con.prepareStatement(q, PreparedStatement.RETURN_GENERATED_KEYS);
			st.executeUpdate();
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		log.debug("Result -- >" + telephone);
		log.trace("Finish");
	}

	@Override
	public Map<Integer, String> getCategories() throws DAOException {
		Connection con = null;
		Map<Integer, String> cats = null;
		try {
			con = getConnection();
			log.debug("Try add telephone");
			cats = getCategories(con);
			con.commit();
		} catch (SQLException e) {
			MysqlDAOFactory.rollback(con);
			log.error("Can not update telephone", e);
			throw new UpdateException("Can not update telephone", e);
		} finally {
			MysqlDAOFactory.close(con);
		}
		return cats;
	}
	
	Map<Integer, String> getCategories(Connection con) throws SQLException {
		log.trace("Start");
		LinkedHashMap<Integer, String> cats = new LinkedHashMap<>();
		PreparedStatement st = null;
		try {
			st = con.prepareStatement(Querys.SQL_GET_CATEGORIES);
			log.debug("Query --> " + st);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				cats.put(rs.getInt(1), rs.getString(2));
			}
			rs.close();
		} finally {
			MysqlDAOFactory.closeStatement(st);
		}
		log.debug("Result -- >" + cats);
		log.trace("Finish");
		return cats;
	}

}
