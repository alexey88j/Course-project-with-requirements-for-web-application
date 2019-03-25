<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ru">
<head>
<title>Корзина</title>
<%@ include file="jspf/headtag.jspf" %>
</head>
<body>
<%@ include file="jspf/menu.jspf" %>

<%-- PAGE VARIABLES --%>
	<jsp:useBean id="params" class="package_1.client.ReqParam" scope="page">
		<jsp:setProperty property="params" name="params" value="${paramValues }"/>
	</jsp:useBean>
	
	<jsp:useBean id="cartDao" class="package_1.client.CartTelephoneDAO" scope="page">
		<jsp:setProperty property="cart" name="cartDao" value="${sessionScope.cart }"/>
	</jsp:useBean>
	<jsp:useBean id="pag" class="package_1.shared.Pagination" scope="request" >
		<jsp:setProperty property="ascending" name="pag" value="true"/>
		<jsp:setProperty property="sortField" name="pag" value="title"/>
	</jsp:useBean>
	<jsp:setProperty property="dao" name="pag" value="${cartDao }"/>
	<jsp:setProperty property="*" name="pag" />

	<c:set var="telephones" value="${pag.items }" scope="page" />

<%-- CONTENT --%>

	<div class="section main-content" >
		<%@ include file="jspf/showmsg.jspf" %>
	
		<div class="container">
		 	<c:choose>
		 	<c:when test="${empty cart }">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
				 		<h1>Корзина пуста</h1>
					</div>
				</div>
		 	</c:when>
			<c:otherwise>
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
					<h1>Ваша корзина</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

					<table class="table table-bordered table-striped">
						<col class="col-position" />
						<col class="col-title" />
						<col class="col-manufacture" />
						<col class="col-price" />
						<col class="col-count" />
						<col class="col-action" />
						<thead>
							<tr class="text-center">
								<th class="text-center">№</th>
								<th class="text-center">
									<div class="btn-group drop${pag.ascending ? 'down' : 'up' }">
										<a href="?${params.setParam('ascending', !pag.ascending).setParam('field', 'title') }">Название<b class="caret"></b></a>
									</div>
								</th>
								<th class="text-center">Фирма</th>
								<th class="text-center">Цена</th>
								<th class="text-center">Кол-во</th>
								<th class="text-center">В корзину</th>
							</tr>
						</thead>
						<tbody>
							<c:set var="k" value="0" />
							<c:forEach var="telephone" items="${telephones }">
								<%-- <tr ${cart.get(telephone) > telephone.count ? "class='row-warning' title='Телефоны закончились.'" :'' }> --%>
								<tr class="${cart.get(telephone) > telephone.count ? 'alert-danger' : '' }" title="В наличии: ${telephone.count }">
									<c:set var="k" value="${k + 1}" />
									<td><c:out value="${k}" /></td>
									<td><a href="${context }/ViewTelephone?id=${telephone.id}">${telephone.title}</a></td>
									<td>
										<c:forEach var="a" items="${telephone.manufacture}">
											${a.title}<br/>
										</c:forEach>
									</td>
									<td class="text-right">${telephone.price }</td>
									<td>
										<form id="update-${telephone.id }" action="updatecart?${params.setParam('ascending', pag.ascending) }" method="post">
											<c:set value="${cart.get(telephone) }" var="c"></c:set>
											<input type="number" name="count" 
												value="${c > telephone.count ? telephone.count : c }" 
												class="form-control" min="0" max="${telephone.count }">
 										</form>
									</td>
									<td class="text-center">
										<button type="submit"  name="remove" form="update-${telephone.id }"
											title="Удалить из корзины"
											class="btn btn-danger" value="${telephone.id }">
											<i class="glyphicon glyphicon-remove"></i>
										</button>
									</td>
								</tr>
							</c:forEach>			
						</tbody>
					</table>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
					<p class="text-right lead">Всего: ${sessionScope.cart.getPrice() }</p>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <a href="filldelivery.jsp" class="btn btn-primary btn-block">Оформить заказ</a>
				</div>
			</div>
			
			<%-- <c:set value="${pag }" var="paging" scope="request" />
			<jsp:include page="jspf/pagination.jsp" /> --%>

	</c:otherwise>
	</c:choose>
		</div>
	</div>

<%@ include file="jspf/bootstrap.jspf" %>
</body>
</html>