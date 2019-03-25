package package_1.essence;

import package_1.client.Priceable;

@SuppressWarnings("serial")
public class Product extends Essence implements Priceable {
	protected String title;
	protected double price;
	
	public Product() {
		super();
	}
	
	public Product(Integer id) {
		super(id);
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public double getPrice() {
		return price;
	}
}
