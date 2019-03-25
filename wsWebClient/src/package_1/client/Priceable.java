package package_1.client;


/**
 * Uses any class that need to calculate price, such as {@link Cart} etc.
 * @manufacture engsyst
 *
 */
public interface Priceable {
	/**
	 * Calculate price of single item or collection of items.
	 * @return value of calculated price
	 */
	double getPrice();
}
