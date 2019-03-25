package package_1.server.dao.mysql;

public interface Querys {
	static final String SQL_ADD_TELEPHONE = "INSERT INTO `telephone` "
			+ "(`title`, `batch_number`, `price`, `count`, `category_id`) "
			+ "VALUES (?, ?, ?, ?, ?);";
	
	static final String SQL_FIND_TELEPHONES = "SELECT `id`, `title`, `manufactures`, "
			+ "`batch_number`, `price`, `count`, `category` FROM `telephones` ";
	
	static final String SQL_FIND_TELEPHONE_BY_ID = "SELECT `id`, `title`, `manufactures`, "
			+ "`batch_number`, `price`, `count`, `category` FROM `telephones` WHERE ID = ?";
	
	static final String SQL_FIND_TELEPHONES_COUNT = "SELECT count(*) FROM `telephones` ";

	static final String SQL_UPDATE_TELEPHONES_COUNT = "SELECT count(*) FROM `telephones` ";

	static final String SQL_DELETE_MANUFACTURE_HAS_TELEPHONE = "DELETE FROM `manufacture_has_telephone` WHERE `telephone_id`=?";
	
	static final String SQL_UPDATE_TELEPHONE = "UPDATE `telephone` SET `title` = ?,`batch_number` = ?,`price` = ?,`count` = ?,`category_id`= ?,`cover` = ?,`description`= ? WHERE `id` = ?";

	static final String SQL_GET_CATEGORIES = "SELECT `id`,`title` FROM `category`";
	
	/**
	 *  use makeManufacturesValues(List? manufactures, int telephoneId)
	 *  to generate values string in format: (name1,n),(name2,n) ... ;
	 */
	static final String SQL_ADD_MANUFACTURE = "INSERT INTO `manufacture` "
			+ "(`title`) VALUES ";

	static final String SQL_ADD_TELEPHONE_MANUFACTURES = "INSERT INTO `manufacture_has_telephone` (`manufacture_id`, `telephone_id`) VALUES ";

	static final String SQL_GET_CATEGORY_ID = "SELECT id FROM category WHERE title = ?";
	
	static final String SQL_GET_MANUFACTURES = "SELECT id, title FROM manufacture WHERE ";
	
	static final String SQL_GET_TELEPHONE_MANUFACTURES = "select manufacture.id, manufacture.title from manufacture "
			+ "inner join manufacture_has_telephone on manufacture.id = manufacture_id "
			+ "inner join telephone on telephone_id = telephone.id where telephone.id = ?";
	
	static final String SQL_LIST_MANUFACTURES = "SELECT id, title FROM manufacture";
	
	static final String SQL_GET_USER = "SELECT `id`,`login`,`password`,`role`,`e-mail`,`phone`,`name`,`address`,`avatar`,`description` FROM `user` WHERE login = ?";

	static final String SQL_ADD_USER = "INSERT INTO `user` (`login`,`password`,`role`,`e-mail`,`phone`,`name`,`address`,`avatar`,`description`) "
			+ "VALUES (?,?,?,?,?,?,?,?,?)";

	static final String SQL_UPDATE_USER = "UPDATE `user` "
			+ "SET `login` = ?,`password` = ?,`role` = ?,`e-mail` = ?,`phone` = ?,"
			+ "`name` = ?,`address` = ?,`avatar` = ?,`description` = ? WHERE `id` = ?;";
	
	static final String SQL_INSERT_ORDER = "INSERT INTO `order` (`no`, `delivery_id`, `user_id`) VALUES (?, ?, ?);";
	
	static final String SQL_INSERT_TELEPHONE_HAS_ORDER = "INSERT INTO `telephone_has_order` "
			+ "(`telephone_id`, `order_id`, `count`) VALUES (?, ?, ?);";
	
	static final String SQL_INSERT_DELIVERY = "INSERT INTO `delivery` (`name`, `phone`, `email`, `address`,  `description`, `user_id`) VALUES (?, ?, ?, ?, ?, ?)";

	static final String SQL_GET_TELEPHONES_COUNT = "SELECT `id`, `count` FROM `telephone` WHERE `id` IN ";
	
	static final String SQL_GET_FULL_ORDERS = "SELECT `user_id`,`login`,`order_id`,`status`,`telephone_id`,`title`,`count`,`price`,`osum` FROM orders ";
	
	static final String SQL_GET_ORDER_BY_ID = "SELECT `id`,`no`,`user_id`,`date`,`status` FROM `order` WHERE `id` = ?";

	static final String SQL_GET_ORDER_STATUS = "SELECT `id`,`status` FROM `order` WHERE `id` = ?";

	static final String SQL_GET_ORDER_DETAL = "SELECT DISTINCT `orders`.`user_id`,`login`,`order_id`,`status`,"
			+ "`telephone_id`,`title`,`count`,`price`,`osum`,`name`,`phone`,`email`,`address`,`description` "
			+ "FROM `orders`,`delivery` WHERE `order_id` = ? AND `delivery_id` = `delivery`.`id`;";

	static final String SQL_UPDATE_ORDER_STATUS = "UPDATE `order` SET `status` = ? WHERE `id` = ?";

	static final String SQL_FIND_ORDERS_COUNT = "SELECT count(*) FROM `order` ";

	static final String SQL_GET_ORDERS_ID = "SELECT DISTINCT `order_id` FROM `orders` ";

}
