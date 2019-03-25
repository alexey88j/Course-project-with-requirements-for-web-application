package package_1.server.dao;

import java.util.List;
import java.util.Map;

import package_1.client.Paginable;
import package_1.essence.Product;
import package_1.essence.order.Delivery;
import package_1.essence.order.Order;
import package_1.essence.order.OrderStatus;

public interface OrderDAO extends Paginable<Order> {
	int makeOrder(Integer userId, Map<Product, Integer> items, Delivery delivery) throws DAOException;
	List<Order> getOrders() throws DAOException;
	Order getOrderDetal(int id) throws DAOException;
	Order getOrderStatus(int id) throws DAOException;
	void updateStatus(int id, OrderStatus status) throws DAOException;
}
