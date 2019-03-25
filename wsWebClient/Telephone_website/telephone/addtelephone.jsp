<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<title>Add phone</title>
<%@ include file="../jspf/headtag.jspf" %>
</head>
<body>
	<%@ include file="../jspf/menu.jspf" %>
	<jsp:useBean id="telephone" class="package_1.essence.telephone.Telephone" scope="session"/>
	<jsp:setProperty property="*" name="telephone"/>
	<div>
		<div id="form">
			<form action="addtelephone" method="post">
				<table>
					<caption>add phone</caption>
					<tr>
						<td colspan="2"><span id="formError"><c:out value="${errors['title'] }" /></span></td>
					</tr>
					<tr>
						<td><span id="formLabel">Title:</span></td>
						<td><input type="text" name="title" value="${telephone.title } " 
								autofocus="autofocus" required="required" /></td>
					</tr>
					<tr>
						<td colspan="2"><span id="formError"><c:out value="${errors['pass'] }" /></span></td>
					</tr>
					<tr>
						<td><span id="formLabel">BATCH_NUMBER:</span></td>
						<td><input type="text" name="batch_number" value="${telephone.batch_number }" 
								 pattern="898787564512" /></td>
					</tr>
					<tr>
						<td colspan="2"><span id="formError"><c:out value="${errors['count'] }" /></span></td>
					</tr>
					<tr>
						<td><span id="formLabel">Count:</span></td>
						<td><input type="number" name="count" value="${telephone.count }" 
								min="0" required="required" /></td>
					</tr>
					<tr>
						<td colspan="2"><span id="formError"><c:out value="${errors['manufacture'] }" /></span></td>
					</tr>
					<c:set var="k" value="0"/>
					<c:if test="${fn:length(telephone.manufacture) != 0 }">
						<c:forEach var="a" items="${telephone.manufacture }">
							<tr>
								<td><span id="formLabel">Manufacture:</span></td>
								<td><input type="text" name="manufacture" value="${telephone.manufacture[k] }" />
									<input type="submit" value="+" formaction="addmanufacture" /></td>
							</tr>
						<c:set var="k" value="${k + 1 }"/>
						</c:forEach>
					</c:if>
					<tr>
						<td><span id="formLabel">Manufacture:</span></td>
						<td><input type="text" name="manufacture" value="${telephone.manufacture[k] }" />
							<input type="submit" value="+" formaction="addmanufacture" /></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" value="Add"  /></td>
					</tr>
				</table>
			</form>
		</div>
	</div>

<%@ include file="../jspf/bootstrap.jspf" %>
</body>
</html>
