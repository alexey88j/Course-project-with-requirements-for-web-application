//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2016.03.03 at 08:22:14 AM EET 
//


package package_1.essence.order;

import java.util.Map;
import java.util.Map.Entry;

import package_1.essence.Product;

/**
 * <p>Store {@link Product} as {@code key} and count of payed product as {@code value}
 * 
 * <p>Encapsulates order status flow as: newed --> (inprogress || rejected) --> (completed || rejected)
 * 
 * @manufacture engsyst
 * @see OrderStatus
 *
 */
public class Order extends Product {

	private static final long serialVersionUID = -2130624107521935696L;
	protected Map<Product, Integer> items;
	protected OrderStatus status;
	protected Delivery delivery;
    
	public Order() {
		super();
	}

	public Order(Map<Product, Integer> items) {
		super();
		this.items = items;
	}

	public Order(Integer id, Map<Product, Integer> items) {
		super(id);
		this.items = items;
	}
	
	public Order(Integer id, Map<Product, Integer> items, Delivery delivery) {
		super(id);
		this.items = items;
		this.delivery = delivery;
	}
	
	public Map<Product, Integer> getItems() {
		return items;
	}

	public  void setItems(Map<Product, Integer> items) {
		this.items = items;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		if (this.status == null)
			this.status = status;
		if (!in(status,nextStatus())) {
			throw new IllegalStateException("Can not perform rejected after completed");
		}
	}

	public Delivery getDelivery() {
		return delivery;
	}

	public void setDelivery(Delivery delivery) {
		this.delivery = delivery;
	}

	@Override
	public double getPrice() {
		price = 0.;
		for (Entry<Product, Integer> e : items.entrySet()) {
			price += e.getKey().getPrice() * e.getValue();
		}
		return price;
	}
	
	public OrderStatus[] nextStatus() {
		switch (status) {
			case newed:
				return new OrderStatus[] {OrderStatus.newed, OrderStatus.inprogress, OrderStatus.rejected, };
			case inprogress:
				return new OrderStatus[] {OrderStatus.inprogress, OrderStatus.completed, OrderStatus.rejected, };
			case completed:
				return new OrderStatus[] {OrderStatus.completed, OrderStatus.rejected, };
			default:
				return new OrderStatus[] {OrderStatus.newed, OrderStatus.inprogress, OrderStatus.completed, OrderStatus.rejected, };
		}
	}
	
	public boolean in(OrderStatus status, OrderStatus[] statuses) {
		for (OrderStatus s : statuses) {
			if (s == status) {
				return true;
			}
		}
		return false;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Order [id=");
		builder.append(id);
		builder.append(", title=");
		builder.append(title);
		builder.append(", price=");
		builder.append(price);
		builder.append(", status=");
		builder.append(status);
		builder.append(", items=");
		builder.append(items);
		builder.append("]");
		return builder.toString();
	}
}
