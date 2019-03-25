package package_1.client;

import package_1.essence.order.OrderStatus;
import package_1.essence.user.Role;

public class Util {
	public boolean equals(OrderStatus o1, OrderStatus o2) {
		return o1 == o2;
	}

	public boolean equals(OrderStatus o1, String o2) {
		return o1 == OrderStatus.valueOf(o2);
	}

	public boolean equals(String o1, String o2) {
		if (o1 == null)
			return o1 == o2;
		return o1.equals(o2);
	}

	public OrderStatus get(String e) {
		return OrderStatus.valueOf(e);
	}

	public OrderStatus get(int i) {
		return OrderStatus.values()[i];
	}

	public String nextStatus(OrderStatus o) {
		if (o == OrderStatus.completed || o == OrderStatus.rejected)
			return o.toString();
		return OrderStatus.values()[o.ordinal() + 1].toString();
	}

	public String statusIconName(OrderStatus o) {
		switch (o) {
		case newed:
			return "glyphicon-info-sign";
		case inprogress:
			return "glyphicon-chevron-up";
		case completed:
			return "glyphicon-saved";
		case rejected:
			return "glyphicon-remove";
		}
		return "";
	}

	public Role getRole(String name) {
		return Role.valueOf(name);
	}
}
