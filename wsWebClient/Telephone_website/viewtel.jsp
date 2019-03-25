<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="ru">
<head>
<title>View telephone</title>
<%@ include file="jspf/headtag.jspf" %>
</head>
<body>
<%@ include file="jspf/menu.jspf" %>
			<div class="container main-content">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
			<div class="col-lg-4 col-md-4 col-sm-4">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12">
							<header>
								<h2><p>Телефон: ${telephone.title}<p></h2>
							</header>
								<div class="form-group">
								<div>
								<style>
   								ul {
    								list-style-type: square; 
   										}
  								</style>
								<ul type = 'Square'>
						<li>
							<p>Производитель:<c:forEach var="a" items="${telephone.manufacture }"> ${a.title }<br/> </p>
							</c:forEach>
						</li>
						<li><p>Номер партии: ${telephone.batch_number}</li></p>
						<li><p>Цена: ${telephone.price}</li>
						<li><p>Доступное количество: ${telephone.count}</li>
						<strong><big><p>Удачных вам покупок!</p></big></strong>
								</ul>
							   </div>
							   </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
		</div>
	</div>
<%@ include file="jspf/bootstrap.jspf" %>
</body>
</html>