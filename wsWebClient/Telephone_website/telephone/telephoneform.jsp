<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="context" value="${pageContext.request.contextPath}" />

<div class="modal-content">

	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		<h4 class="modal-title">Телефон</h4>
	</div>
	<div class="form-group">
                        <button type="submit" class="btn btn-info" title="${title }" >
                        	<i class="glyphicon ${icon }"></i></button>
    </div>
	<div class="modal-body">
		<div class="row">
		<form class="form-horizintal" action="update" id="edittelephone" method="post">
			<!-- <fieldset> -->
	
				<!-- Form Name -->
				<!-- <legend>Телефон</legend> -->
	
				<!-- Text input-->
				<div class="form-group required">
					<label class="col-sm-2 control-label" for="title">Название<!-- <span class="asteriskField"> * </span> --></label>
					<div class="col-sm-10">
						<input id="textinput" name="title" placeholder="Название"
							class="form-control input-md" required="required" type="text"
							value="${telephone.title }">
						<span class="help-block">Название Телефона</span>
					</div>
				</div>
	
				<!-- Appended Input-->
				<div class="form-group required">
					<label class="col-sm-2 control-label" for="manufacture">Фирма</label>
					<div class="col-sm-10">
						<div class="input-group">
							<input id="manufacture" name="manufacture" class="form-control"
								placeholder="Фирма" required="required" type="text"
								value="${telephone.manufactures() }">
								<span class="input-group-addon"> </span>
						</div>
						<p class="help-block">Введите название фирмы</p>
					</div>
				</div>
				
				<div class="col-sm-6">
				<!-- Text input-->
				<div class="form-group required">
					<label class="col-sm-12 control-label requiredField" for="price">Цена</label>
					<div class="col-sm-12">
						<input id="price" name="price" placeholder="цена"
							class="form-control input-md" type="number"
							min="0" step="0.01" value="${telephone.price }">
							<span class="help-block">Цена за телефон</span>
					</div>
				</div>
				</div>
	
				<div class="col-sm-6">
				<!-- Text input-->
				<div class="form-group required">
					<label class="col-sm-12 control-label" for="count">Количество</label>
					<div class="col-sm-12">
						<input id="count" name="count" placeholder="Количество"
							class="form-control input-md" required="required" 
							type="number" min="0" value="${telephone.count }">
						<span class="help-block">На складе</span>
					</div>
				</div>
				</div>

				<!-- Text input-->
				<div class="form-group">
					<label class="col-sm-2 control-label" for="batch_number">Номер партии</label>
					<div class="col-sm-10">
						<input id="batch_number" name="batch_number" placeholdebatch_numberомер партии"
							class="form-control input-md" type="text" 
							value="${telephone.batch_number }">
							<span class="help-block">Формат:888974651</span>
					</div>
				</div>
	
				<!-- Select Basic -->
				<div class="form-group">
					<label class="col-sm-2 control-label" for="category">Категория</label>
					<div class="col-sm-10">
						<select id="category" name="category" class="form-control">
							<c:forEach var="cat" items="${categories }">
								<c:set var="c" value="${telephone.category.ordinal() }" ></c:set>
								<option ${cat.key == c ? 'selected="selected"' : '' } 
									value="${cat.value }" >${cat.value }</option>
							</c:forEach>
						</select>
						<span class="help-block">Выберите одну категорию</span>
					</div>
				</div>
			<!-- </fieldset> -->
		</form>
		</div>
	</div>
	<div class="modal-footer">
		<button class="btn btn-success" type="submit" form="edittelephone" name="id" value="${telephone.id }">Подтвердить</button>
		<button class="btn btn-danger" type="button" data-dismiss="modal">Отмена</button>
	</div>
</div>
