//
// Definitions for schema: http://service.server.package_1/
//  http://localhost:8080/ws/services/TelephoneService?xsd=Fimpl_schema1.xsd
//
//
// Constructor for XML Schema item {http://service.server.package_1/}getTelephoneResponse
//
function getTelephoneResponse() {
	this.typeMarker = 'getTelephoneResponse';
	this._return = null;
}

//
// accessor is getTelephoneResponse.prototype.getReturn
// element get for return
// - element type is {http://package_1/essence/telephone/}Telephone
// - optional element
//
// element set for return
// setter function is is
// getTelephoneResponse.prototype.setReturn
//
function getTelephoneResponse_getReturn() {
	return this._return;
}

getTelephoneResponse.prototype.getReturn = getTelephoneResponse_getReturn;

function getTelephoneResponse_setReturn(value) {
	this._return = value;
}

getTelephoneResponse.prototype.setReturn = getTelephoneResponse_setReturn;
//
// Serialize {http://service.server.package_1/}getTelephoneResponse
//
function getTelephoneResponse_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._return != null) {
			xml = xml + this._return.serialize(cxfjsutils, 'return', null);
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

getTelephoneResponse.prototype.serialize = getTelephoneResponse_serialize;

function getTelephoneResponse_deserialize(cxfjsutils,
		element) {
	var newobject = new getTelephoneResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing return');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			item = Telephone_deserialize(cxfjsutils,
					curElement);
		}
		newobject.setReturn(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}addtelephoneResponse
//
function addtelephoneResponse() {
	this.typeMarker = 'addtelephoneResponse';
	this._return = null;
}

//
// accessor is addtelephoneResponse.prototype.getReturn
// element get for return
// - element type is {http://package_1/essence/telephone/}Telephone
// - optional element
//
// element set for return
// setter function is is
// addtelephoneResponse.prototype.setReturn
//
function addtelephoneResponse_getReturn() {
	return this._return;
}

addtelephoneResponse.prototype.getReturn = addtelephoneResponse_getReturn;

function addtelephoneResponse_setReturn(value) {
	this._return = value;
}

addtelephoneResponse.prototype.setReturn = addtelephoneResponse_setReturn;
//
// Serialize {http://service.server.package_1/}addtelephoneResponse
//
function addtelephoneResponse_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._return != null) {
			xml = xml + this._return.serialize(cxfjsutils, 'return', null);
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

addtelephoneResponse.prototype.serialize = addtelephoneResponse_serialize;

function addtelephoneResponse_deserialize(cxfjsutils,
		element) {
	var newobject = new addtelephoneResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing return');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			item = Telephone_deserialize(cxfjsutils,
					curElement);
		}
		newobject.setReturn(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://service.server.package_1/}getTelephone
//
function getTelephone() {
	this.typeMarker = 'getTelephone';
	this._id = 0;
}

//
// accessor is getTelephone.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for id
// setter function is is getTelephone.prototype.setId
//
function getTelephone_getId() {
	return this._id;
}

getTelephone.prototype.getId = getTelephone_getId;

function getTelephone_setId(value) {
	this._id = value;
}

getTelephone.prototype.setId = getTelephone_setId;
//
// Serialize {http://service.server.package_1/}getTelephone
//
function getTelephone_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<id>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._id);
		xml = xml + '</id>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

getTelephone.prototype.serialize = getTelephone_serialize;

function getTelephone_deserialize(cxfjsutils, element) {
	var newobject = new getTelephone();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing id');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}listTelephonesResponse
//
function listTelephonesResponse() {
	this.typeMarker = 'listTelephonesResponse';
	this._return = [];
}

//
// accessor is
// listTelephonesResponse.prototype.getReturn
// element get for return
// - element type is {http://package_1/essence/telephone/}Telephone
// - required element
// - array
//
// element set for return
// setter function is is
// listTelephonesResponse.prototype.setReturn
//
function listTelephonesResponse_getReturn() {
	return this._return;
}

listTelephonesResponse.prototype.getReturn = listTelephonesResponse_getReturn;

function listTelephonesResponse_setReturn(value) {
	this._return = value;
}

listTelephonesResponse.prototype.setReturn = listTelephonesResponse_setReturn;
//
// Serialize {http://service.server.package_1/}listTelephonesResponse
//
function listTelephonesResponse_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._return != null) {
			for (var ax = 0; ax < this._return.length; ax++) {
				if (this._return[ax] == null) {
					xml = xml + '<return/>';
				} else {
					xml = xml
							+ this._return[ax].serialize(cxfjsutils, 'return',
									null);
				}
			}
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

listTelephonesResponse.prototype.serialize = listTelephonesResponse_serialize;

function listTelephonesResponse_deserialize(
		cxfjsutils, element) {
	var newobject = new listTelephonesResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing return');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
		item = [];
		do {
			var arrayItem = null;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				arrayItem = Telephone_deserialize(
						cxfjsutils, curElement);
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		} while (curElement != null
				&& cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
		newobject.setReturn(item);
		var item = null;
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}updateTelephoneCount
//
function updateTelephoneCount() {
	this.typeMarker = 'updateTelephoneCount';
	this._id = 0;
	this._count = 0;
}

//
// accessor is updateTelephoneCount.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for id
// setter function is is
// updateTelephoneCount.prototype.setId
//
function updateTelephoneCount_getId() {
	return this._id;
}

updateTelephoneCount.prototype.getId = updateTelephoneCount_getId;

function updateTelephoneCount_setId(value) {
	this._id = value;
}

updateTelephoneCount.prototype.setId = updateTelephoneCount_setId;
//
// accessor is updateTelephoneCount.prototype.getCount
// element get for count
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for count
// setter function is is
// updateTelephoneCount.prototype.setCount
//
function updateTelephoneCount_getCount() {
	return this._count;
}

updateTelephoneCount.prototype.getCount = updateTelephoneCount_getCount;

function updateTelephoneCount_setCount(value) {
	this._count = value;
}

updateTelephoneCount.prototype.setCount = updateTelephoneCount_setCount;
//
// Serialize {http://service.server.package_1/}updateTelephoneCount
//
function updateTelephoneCount_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<id>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._id);
		xml = xml + '</id>';
	}
	// block for local variables
	{
		xml = xml + '<count>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._count);
		xml = xml + '</count>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

updateTelephoneCount.prototype.serialize = updateTelephoneCount_serialize;

function updateTelephoneCount_deserialize(cxfjsutils,
		element) {
	var newobject = new updateTelephoneCount();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing id');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing count');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setCount(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}updateTelephoneCountResponse
//
function updateTelephoneCountResponse() {
	this.typeMarker = 'updateTelephoneCountResponse';
	this._return = '';
}

//
// accessor is
// updateTelephoneCountResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for return
// setter function is is
// updateTelephoneCountResponse.prototype.setReturn
//
function updateTelephoneCountResponse_getReturn() {
	return this._return;
}

updateTelephoneCountResponse.prototype.getReturn = updateTelephoneCountResponse_getReturn;

function updateTelephoneCountResponse_setReturn(value) {
	this._return = value;
}

updateTelephoneCountResponse.prototype.setReturn = updateTelephoneCountResponse_setReturn;
//
// Serialize {http://service.server.package_1/}updateTelephoneCountResponse
//
function updateTelephoneCountResponse_serialize(
		cxfjsutils, elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<return>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._return);
		xml = xml + '</return>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

updateTelephoneCountResponse.prototype.serialize = updateTelephoneCountResponse_serialize;

function updateTelephoneCountResponse_deserialize(
		cxfjsutils, element) {
	var newobject = new updateTelephoneCountResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing return');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = (value == 'true');
	}
	newobject.setReturn(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}updateTelephoneResponse
//
function updateTelephoneResponse() {
	this.typeMarker = 'updateTelephoneResponse';
	this._return = null;
}

//
// accessor is
// updateTelephoneResponse.prototype.getReturn
// element get for return
// - element type is {http://package_1/essence/telephone/}Telephone
// - optional element
//
// element set for return
// setter function is is
// updateTelephoneResponse.prototype.setReturn
//
function updateTelephoneResponse_getReturn() {
	return this._return;
}

updateTelephoneResponse.prototype.getReturn = updateTelephoneResponse_getReturn;

function updateTelephoneResponse_setReturn(value) {
	this._return = value;
}

updateTelephoneResponse.prototype.setReturn = updateTelephoneResponse_setReturn;
//
// Serialize {http://service.server.package_1/}updateTelephoneResponse
//
function updateTelephoneResponse_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._return != null) {
			xml = xml + this._return.serialize(cxfjsutils, 'return', null);
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

updateTelephoneResponse.prototype.serialize = updateTelephoneResponse_serialize;

function updateTelephoneResponse_deserialize(
		cxfjsutils, element) {
	var newobject = new updateTelephoneResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing return');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			item = Telephone_deserialize(cxfjsutils,
					curElement);
		}
		newobject.setReturn(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}deleteTelephoneResponse
//
function deleteTelephoneResponse() {
	this.typeMarker = 'deleteTelephoneResponse';
	this._return = null;
}

//
// accessor is
// deleteTelephoneResponse.prototype.getReturn
// element get for return
// - element type is {http://package_1/essence/telephone/}Telephone
// - optional element
//
// element set for return
// setter function is is
// deleteTelephoneResponse.prototype.setReturn
//
function deleteTelephoneResponse_getReturn() {
	return this._return;
}

deleteTelephoneResponse.prototype.getReturn = deleteTelephoneResponse_getReturn;

function deleteTelephoneResponse_setReturn(value) {
	this._return = value;
}

deleteTelephoneResponse.prototype.setReturn = deleteTelephoneResponse_setReturn;
//
// Serialize {http://service.server.package_1/}deleteTelephoneResponse
//
function deleteTelephoneResponse_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._return != null) {
			xml = xml + this._return.serialize(cxfjsutils, 'return', null);
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

deleteTelephoneResponse.prototype.serialize = deleteTelephoneResponse_serialize;

function deleteTelephoneResponse_deserialize(
		cxfjsutils, element) {
	var newobject = new deleteTelephoneResponse();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing return');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			item = Telephone_deserialize(cxfjsutils,
					curElement);
		}
		newobject.setReturn(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}updateTelephone
//
function updateTelephone() {
	this.typeMarker = 'updateTelephone';
	this._telephone = null;
}

//
// accessor is updateTelephone.prototype.getTelephone
// element get for telephone
// - element type is {http://package_1/essence/telephone/}Telephone
// - optional element
//
// element set for telephone
// setter function is is
// updateTelephone.prototype.setTelephone
//
function updateTelephone_getTelephone() {
	return this._telephone;
}

updateTelephone.prototype.getTelephone = updateTelephone_getTelephone;

function updateTelephone_setTelephone(value) {
	this._telephone = value;
}

updateTelephone.prototype.setTelephone = updateTelephone_setTelephone;
//
// Serialize {http://service.server.package_1/}updateTelephone
//
function updateTelephone_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._telephone != null) {
			xml = xml + this._telephone.serialize(cxfjsutils, 'telephone', null);
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

updateTelephone.prototype.serialize = updateTelephone_serialize;

function updateTelephone_deserialize(cxfjsutils,
		element) {
	var newobject = new updateTelephone();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing telephone');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'telephone')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			item = Telephone_deserialize(cxfjsutils,
					curElement);
		}
		newobject.setTelephone(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item {http://service.server.package_1/}addtelephone
//
function addtelephone() {
	this.typeMarker = 'addtelephone';
	this._telephone = null;
}

//
// accessor is addtelephone.prototype.getTelephone
// element get for telephone
// - element type is {http://package_1/essence/telephone/}Telephone
// - optional element
//
// element set for telephone
// setter function is is addtelephone.prototype.setTelephone
//
function addtelephone_getTelephone() {
	return this._telephone;
}

addtelephone.prototype.getTelephone = addtelephone_getTelephone;

function addtelephone_setTelephone(value) {
	this._telephone = value;
}

addtelephone.prototype.setTelephone = addtelephone_setTelephone;
//
// Serialize {http://service.server.package_1/}addtelephone
//
function addtelephone_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._telephone != null) {
			xml = xml + this._telephone.serialize(cxfjsutils, 'telephone', null);
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

addtelephone.prototype.serialize = addtelephone_serialize;

function addtelephone_deserialize(cxfjsutils, element) {
	var newobject = new addtelephone();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing telephone');
	if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'telephone')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			item = Telephone_deserialize(cxfjsutils,
					curElement);
		}
		newobject.setTelephone(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}listTelephones
//
function listTelephones() {
	this.typeMarker = 'listTelephones';
	this._pattern = null;
}

//
// accessor is listTelephones.prototype.getPattern
// element get for pattern
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for pattern
// setter function is is
// listTelephones.prototype.setPattern
//
function listTelephones_getPattern() {
	return this._pattern;
}

listTelephones.prototype.getPattern = listTelephones_getPattern;

function listTelephones_setPattern(value) {
	this._pattern = value;
}

listTelephones.prototype.setPattern = listTelephones_setPattern;
//
// Serialize {http://service.server.package_1/}listTelephones
//
function listTelephones_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._pattern != null) {
			xml = xml + '<pattern>';
			xml = xml + cxfjsutils.escapeXmlEntities(this._pattern);
			xml = xml + '</pattern>';
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

listTelephones.prototype.serialize = listTelephones_serialize;

function listTelephones_deserialize(cxfjsutils,
		element) {
	var newobject = new listTelephones();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing pattern');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'pattern')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			value = cxfjsutils.getNodeText(curElement);
			item = value;
		}
		newobject.setPattern(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}deleteTelephone
//
function deleteTelephone() {
	this.typeMarker = 'deleteTelephone';
	this._id = 0;
}

//
// accessor is deleteTelephone.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for id
// setter function is is
// deleteTelephone.prototype.setId
//
function deleteTelephone_getId() {
	return this._id;
}

deleteTelephone.prototype.getId = deleteTelephone_getId;

function deleteTelephone_setId(value) {
	this._id = value;
}

deleteTelephone.prototype.setId = deleteTelephone_setId;
//
// Serialize {http://service.server.package_1/}deleteTelephone
//
function deleteTelephone_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<id>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._id);
		xml = xml + '</id>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

deleteTelephone.prototype.serialize = deleteTelephone_serialize;

function deleteTelephone_deserialize(cxfjsutils,
		element) {
	var newobject = new deleteTelephone();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing id');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setId(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Constructor for XML Schema item
// {http://service.server.package_1/}DAOException
//
function DAOException() {
	this.typeMarker = 'DAOException';
	this._message = null;
}

//
// accessor is DAOException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is
// DAOException.prototype.setMessage
//
function DAOException_getMessage() {
	return this._message;
}

DAOException.prototype.getMessage = DAOException_getMessage;

function DAOException_setMessage(value) {
	this._message = value;
}

DAOException.prototype.setMessage = DAOException_setMessage;
//
// Serialize {http://service.server.package_1/}DAOException
//
function DAOException_serialize(cxfjsutils,
		elementName, extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		if (this._message != null) {
			xml = xml + '<message>';
			xml = xml + cxfjsutils.escapeXmlEntities(this._message);
			xml = xml + '</message>';
		}
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

DAOException.prototype.serialize = DAOException_serialize;

function DAOException_deserialize(cxfjsutils,
		element) {
	var newobject = new DAOException();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing message');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			value = cxfjsutils.getNodeText(curElement);
			item = value;
		}
		newobject.setMessage(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	return newobject;
}

//
// Definitions for schema: null
// http://localhost:8080/ws/services/TelephoneService?wsdl#types1
//
//
// Definitions for schema: http://package_1/essence/telephone/
// http://localhost:8080/ws/services/TelephoneService?xsd=TelephoneServiceimpl_schema3.xsd
//
//
// Constructor for XML Schema item {http://package_1/essence/telephone/}Telephone
//
function Telephone() {
	this.typeMarker = 'Telephone';
	this._title = '';
	this._manufacture = [];
	this._batch_number = null;
	this._price = 0.0;
	this._category = 'none';
	this._count = 0;
	this._id = null;
}

//
// accessor is Telephone.prototype.getTitle
// element get for title
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for title
// setter function is is Telephone.prototype.setTitle
//
function Telephone_getTitle() {
	return this._title;
}

Telephone.prototype.getTitle = Telephone_getTitle;

function Telephone_setTitle(value) {
	this._title = value;
}

Telephone.prototype.setTitle = Telephone_setTitle;
//
// accessor is Telephone.prototype.getManufacture
// element get for manufacture
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for manufacture
// setter function is is Telephone.prototype.setManufacture
//
function Telephone_getManufacture() {
	return this._manufacture;
}

Telephone.prototype.getManufacture = Telephone_getManufacture;

function Telephone_setManufacture(value) {
	this._manufacture = value;
}

Telephone.prototype.setManufacture = Telephone_setManufacture;
//
// accessor is Telephone.prototype.getBatch_number
// element get for Batch_number
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Batch_number
// setter function is is Telephone.prototype.setBatch_number
//
function Telephone_getBatch_number() {
	return this._batch_number;
}

TeleBatch_numbere.prototype.getBatch_number = Telephone_getBatch_number;

function Telephone_setBatch_number(value) {
	this._batch_number = value;
}

Telephone.prototype.setBatch_number = Telephone_setBatch_number;
//
// accessor is Telephone.prototype.getPrice
// element get for price
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for price
// setter function is is Telephone.prototype.setPrice
//
function Telephone_getPrice() {
	return this._price;
}

Telephone.prototype.getPrice = Telephone_getPrice;

function Telephone_setPrice(value) {
	this._price = value;
}

Telephone.prototype.setPrice = Telephone_setPrice;
//
// accessor is Telephone.prototype.getCategory
// element get for category
// - element type is {http://package_1/essence/telephone/}Category
// - required element
//
// element set for category
// setter function is is Telephone.prototype.setCategory
//
function Telephone_getCategory() {
	return this._category;
}

Telephone.prototype.getCategory = Telephone_getCategory;

function Telephone_setCategory(value) {
	this._category = value;
}

Telephone.prototype.setCategory = Telephone_setCategory;
//
// accessor is Telephone.prototype.getCount
// element get for count
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for count
// setter function is is Telephone.prototype.setCount
//
function Telephone_getCount() {
	return this._count;
}

Telephone.prototype.getCount = Telephone_getCount;

function Telephone_setCount(value) {
	this._count = value;
}

Telephone.prototype.setCount = Telephone_setCount;
//
// accessor is Telephone.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for id
// setter function is is Telephone.prototype.setId
//
function Telephone_getId() {
	return this._id;
}

Telephone.prototype.getId = Telephone_getId;

function Telephone_setId(value) {
	this._id = value;
}

Telephone.prototype.setId = Telephone_setId;
//
// Serialize {http://package_1/essence/telephone/}Telephone
//
function Telephone_serialize(cxfjsutils, elementName,
		extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		xml = xml + ' ';
		xml = xml
				+ 'xmlns:jns0=\'http://package_1/essence/telephone/\' xmlns:jns1=\'http://package_1/essence/\' ';
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	// block for local variables
	{
		xml = xml + '<jns0:title>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._title);
		xml = xml + '</jns0:title>';
	}
	// block for local variables
	{
		if (this._manufacture != null) {
			for (var ax = 0; ax < this._manufacture.length; ax++) {
				if (this._manufacture[ax] == null) {
					xml = xml + '<jns0:manufacture/>';
				} else {
					xml = xml + '<jns0:manufacture>';
					xml = xml + cxfjsutils.escapeXmlEntities(this._manufacture[ax]);
					xml = xml + '</jns0:manufacture>';
				}
			}
		}
	}
	// block for local variables
	{
		if (this._batch_number != null) {
			xml = xml + '<jns0:batch_number>';
			xml = xml + cxfjsutils.escapeXmlEntities(this._batch_number);
			xml = xml + '</jns0:batch_number>';
		}
	}
	// block for local variables
	{
		xml = xml + '<jns0:price>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._price);
		xml = xml + '</jns0:price>';
	}
	// block for local variables
	{
		xml = xml + '<jns0:category>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._category);
		xml = xml + '</jns0:category>';
	}
	// block for local variables
	{
		xml = xml + '<jns0:count>';
		xml = xml + cxfjsutils.escapeXmlEntities(this._count);
		xml = xml + '</jns0:count>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

Telephone.prototype.serialize = Telephone_serialize;

function Telephone_deserialize(cxfjsutils, element) {
	var newobject = new Telephone();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing title');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setTitle(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing manufacture');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement,
					'http://package_1/essence/telephone/', 'manufacture')) {
		item = [];
		do {
			var arrayItem = null;
			var value = null;
			if (!cxfjsutils.isElementNil(curElement)) {
				value = cxfjsutils.getNodeText(curElement);
				arrayItem = value;
			}
			item.push(arrayItem);
			curElement = cxfjsutils.getNextElementSibling(curElement);
		} while (curElement != null
				&& cxfjsutils.isNodeNamedNS(curElement,
						'http://package_1/essence/telephone/', 'manufacture'));
		newobject.setManufacture(item);
		var item = null;
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing batch_number');
	if (curElement != null
			&& cxfjsutils.isNodeNamedNS(curElement,
					'http://package_1/essence/telephone/', 'batch_number')) {
		var value = null;
		if (!cxfjsutils.isElementNil(curElement)) {
			value = cxfjsutils.getNodeText(curElement);
			item = value;
		}
		newobject.setBatch_number(item);
		var item = null;
		if (curElement != null) {
			curElement = cxfjsutils.getNextElementSibling(curElement);
		}
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing price');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseFloat(value);
	}
	newobject.setPrice(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing category');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = value;
	}
	newobject.setCategory(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
	cxfjsutils.trace('processing count');
	var value = null;
	if (!cxfjsutils.isElementNil(curElement)) {
		value = cxfjsutils.getNodeText(curElement);
		item = parseInt(value);
	}
	newobject.setCount(item);
	var item = null;
	if (curElement != null) {
		curElement = cxfjsutils.getNextElementSibling(curElement);
	}
	return newobject;
}

//
// Simple type (enumeration) {http://package_1/essence/telephone/}Category
//
// - Fantasy
// - Action
// - Love novel
// - none
//
// Definitions for schema: http://package_1/essence/
// http://localhost:8080/ws/services/TelephoneService?xsd=TelephoneServiceimpl_schema4.xsd
//
//
// Constructor for XML Schema item {http://package_1/essence/}Essence
//
function Essence() {
	this.typeMarker = 'Essence';
	this._id = null;
}

//
// accessor is Essence.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for id
// setter function is is Essence.prototype.setId
//
function Essence_getId() {
	return this._id;
}

Essence.prototype.getId = Essence_getId;

function Essence_setId(value) {
	this._id = value;
}

Essence.prototype.setId = Essence_setId;
//
// Serialize {http://package_1/essence/}Essence
//
function Essence_serialize(cxfjsutils, elementName,
		extraNamespaces) {
	var xml = '';
	if (elementName != null) {
		xml = xml + '<';
		xml = xml + elementName;
		xml = xml + ' ';
		xml = xml
				+ 'xmlns:jns0=\'http://package_1/essence/telephone/\' xmlns:jns1=\'http://package_1/essence/\' ';
		if (extraNamespaces) {
			xml = xml + ' ' + extraNamespaces;
		}
		xml = xml + '>';
	}
	if (elementName != null) {
		xml = xml + '</';
		xml = xml + elementName;
		xml = xml + '>';
	}
	return xml;
}

Essence.prototype.serialize = Essence_serialize;

function Essence_deserialize(cxfjsutils, element) {
	var newobject = new Essence();
	cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
	var curElement = cxfjsutils.getFirstElementChild(element);
	var item;
	return newobject;
}

//
// Definitions for service: {http://service.server.package_1/}TelephoneService
//

// Javascript for {http://service.server.package_1/}TelephoneService

function TelephoneService() {
	this.jsutils = new CxfApacheOrgUtil();
	this.jsutils.interfaceObject = this;
	this.synchronous = false;
	this.url = null;
	this.client = null;
	this.response = null;
	this.globalElementSerializers = [];
	this.globalElementDeserializers = [];
	this.globalElementSerializers['{http://service.server.package_1/}getTelephoneResponse'] = getTelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}getTelephoneResponse'] = getTelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}addtelephoneResponse'] = addtelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}addtelephoneResponse'] = addtelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}listTelephonesResponse'] = listTelephonesResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}listTelephonesResponse'] = listTelephonesResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}getTelephone'] = getTelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}getTelephone'] = getTelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephoneCount'] = updateTelephoneCount_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephoneCount'] = updateTelephoneCount_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephoneCountResponse'] = updateTelephoneCountResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephoneCountResponse'] = updateTelephoneCountResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephoneResponse'] = updateTelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephoneResponse'] = updateTelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephone'] = updateTelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephone'] = updateTelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}deleteTelephoneResponse'] = deleteTelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}deleteTelephoneResponse'] = deleteTelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}addtelephone'] = addtelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}addtelephone'] = addtelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}listTelephones'] = listTelephones_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}listTelephones'] = listTelephones_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}deleteTelephone'] = deleteTelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}deleteTelephone'] = deleteTelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}DAOException'] = DAOException_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}DAOException'] = DAOException_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}getTelephoneResponse'] = getTelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}getTelephoneResponse'] = getTelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}addtelephoneResponse'] = addtelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}addtelephoneResponse'] = addtelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}getTelephone'] = getTelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}getTelephone'] = getTelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}listTelephonesResponse'] = listTelephonesResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}listTelephonesResponse'] = listTelephonesResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephoneCount'] = updateTelephoneCount_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephoneCount'] = updateTelephoneCount_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephoneCountResponse'] = updateTelephoneCountResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephoneCountResponse'] = updateTelephoneCountResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephoneResponse'] = updateTelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephoneResponse'] = updateTelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}deleteTelephoneResponse'] = deleteTelephoneResponse_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}deleteTelephoneResponse'] = deleteTelephoneResponse_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}updateTelephone'] = updateTelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}updateTelephone'] = updateTelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}addtelephone'] = addtelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}addtelephone'] = addtelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}listTelephones'] = listTelephones_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}listTelephones'] = listTelephones_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}deleteTelephone'] = deleteTelephone_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}deleteTelephone'] = deleteTelephone_deserialize;
	this.globalElementSerializers['{http://service.server.package_1/}DAOException'] = DAOException_serialize;
	this.globalElementDeserializers['{http://service.server.package_1/}DAOException'] = DAOException_deserialize;
	this.globalElementSerializers['{http://package_1/essence/telephone/}Telephone'] = Telephone_serialize;
	this.globalElementDeserializers['{http://package_1/essence/telephone/}Telephone'] = Telephone_deserialize;
	this.globalElementSerializers['{http://package_1/essence/}Essence'] = Essence_serialize;
	this.globalElementDeserializers['{http://package_1/essence/}Essence'] = Essence_deserialize;
}

function updateTelephone_op_onsuccess(client,
		responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: '
				+ this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: '
				+ this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element,
				'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: '
				+ this.jsutils.traceElementName(element));
		this.jsutils
				.trace('calling updateTelephoneResponse_deserializeResponse');
		responseObject = updateTelephoneResponse_deserializeResponse(
				this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

TelephoneService.prototype.updateTelephone_onsuccess = updateTelephone_op_onsuccess;

function updateTelephone_op_onerror(client) {
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch (e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		client.user_onerror(httpStatus, httpStatusText);
	}
}

TelephoneService.prototype.updateTelephone_onerror = updateTelephone_op_onerror;

//
// Operation {http://service.server.package_1/}updateTelephone
// Wrapped operation.
// parameter telephone
// - Object constructor is Telephone
//
function updateTelephone_op(successCallback,
		errorCallback, telephone) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(1);
	args[0] = telephone;
	xml = this.updateTelephone_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.updateTelephone_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client) {
		closureThis.updateTelephone_onerror(client);
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = 'urn:UpdateTelephone';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

TelephoneService.prototype.updateTelephone = updateTelephone_op;

function updateTelephone_serializeInput(cxfjsutils,
		args) {
	var wrapperObj = new updateTelephone();
	wrapperObj.setTelephone(args[0]);
	var xml;
	xml = cxfjsutils
			.beginSoap11Message("xmlns:jns0='http://package_1/essence/telephone/' xmlns:jns1='http://package_1/essence/' xmlns:jns2='http://service.server.package_1/' ");
	// block for local variables
	{
		xml = xml + wrapperObj.serialize(cxfjsutils, 'jns2:updateTelephone', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

TelephoneService.prototype.updateTelephone_serializeInput = updateTelephone_serializeInput;

function updateTelephoneResponse_deserializeResponse(
		cxfjsutils, partElement) {
	var returnObject = updateTelephoneResponse_deserialize(
			cxfjsutils, partElement);

	return returnObject;
}
function listTelephones_op_onsuccess(client,
		responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: '
				+ this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: '
				+ this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element,
				'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: '
				+ this.jsutils.traceElementName(element));
		this.jsutils
				.trace('calling listTelephonesResponse_deserializeResponse');
		responseObject = listTelephonesResponse_deserializeResponse(
				this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

TelephoneService.prototype.listTelephones_onsuccess = listTelephones_op_onsuccess;

function listTelephones_op_onerror(client) {
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch (e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		client.user_onerror(httpStatus, httpStatusText);
	}
}

TelephoneService.prototype.listTelephones_onerror = listTelephones_op_onerror;

//
// Operation {http://service.server.package_1/}listTelephones
// Wrapped operation.
// parameter pattern
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function listTelephones_op(successCallback,
		errorCallback, pattern) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(1);
	args[0] = pattern;
	xml = this.listTelephones_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.listTelephones_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client) {
		closureThis.listTelephones_onerror(client);
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = 'urn:ListTelephones';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

TelephoneService.prototype.listTelephones = listTelephones_op;

function listTelephones_serializeInput(cxfjsutils,
		args) {
	var wrapperObj = new listTelephones();
	wrapperObj.setPattern(args[0]);
	var xml;
	xml = cxfjsutils
			.beginSoap11Message("xmlns:jns0='http://package_1/essence/telephone/' xmlns:jns1='http://package_1/essence/' xmlns:jns2='http://service.server.package_1/' ");
	// block for local variables
	{
		xml = xml + wrapperObj.serialize(cxfjsutils, 'jns2:listTelephones', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

TelephoneService.prototype.listTelephones_serializeInput = listTelephones_serializeInput;

function listTelephonesResponse_deserializeResponse(
		cxfjsutils, partElement) {
	var returnObject = listTelephonesResponse_deserialize(
			cxfjsutils, partElement);

	return returnObject;
}
function addtelephone_op_onsuccess(client, responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: '
				+ this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: '
				+ this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element,
				'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: '
				+ this.jsutils.traceElementName(element));
		this.jsutils
				.trace('calling addtelephoneResponse_deserializeResponse');
		responseObject = addtelephoneResponse_deserializeResponse(
				this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

TelephoneService.prototype.addtelephone_onsuccess = addtelephone_op_onsuccess;

function addtelephone_op_onerror(client) {
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch (e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		client.user_onerror(httpStatus, httpStatusText);
	}
}

TelephoneService.prototype.addtelephone_onerror = addtelephone_op_onerror;

//
// Operation {http://service.server.package_1/}addtelephone
// Wrapped operation.
// parameter telephone
// - Object constructor is Telephone
//
function addtelephone_op(successCallback,
		errorCallback, telephone) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(1);
	args[0] = telephone;
	xml = this.addtelephone_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.addtelephone_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client) {
		closureThis.addtelephone_onerror(client);
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = 'urn:addtelephone';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

TelephoneService.prototype.addtelephone = addtelephone_op;

function addtelephone_serializeInput(cxfjsutils, args) {
	var wrapperObj = new addtelephone();
	wrapperObj.setTelephone(args[0]);
	var xml;
	xml = cxfjsutils
			.beginSoap11Message("xmlns:jns0='http://package_1/essence/telephone/' xmlns:jns1='http://package_1/essence/' xmlns:jns2='http://service.server.package_1/' ");
	// block for local variables
	{
		xml = xml + wrapperObj.serialize(cxfjsutils, 'jns2:addtelephone', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

TelephoneService.prototype.addtelephone_serializeInput = addtelephone_serializeInput;

function addtelephoneResponse_deserializeResponse(
		cxfjsutils, partElement) {
	var returnObject = addtelephoneResponse_deserialize(
			cxfjsutils, partElement);

	return returnObject;
}
function updateTelephoneCount_op_onsuccess(client,
		responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: '
				+ this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: '
				+ this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element,
				'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: '
				+ this.jsutils.traceElementName(element));
		this.jsutils
				.trace('calling updateTelephoneCountResponse_deserializeResponse');
		responseObject = updateTelephoneCountResponse_deserializeResponse(
				this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

TelephoneService.prototype.updateTelephoneCount_onsuccess = updateTelephoneCount_op_onsuccess;

function updateTelephoneCount_op_onerror(client) {
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch (e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		client.user_onerror(httpStatus, httpStatusText);
	}
}

TelephoneService.prototype.updateTelephoneCount_onerror = updateTelephoneCount_op_onerror;

//
// Operation {http://service.server.package_1/}updateTelephoneCount
// Wrapped operation.
// parameter id
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter count
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function updateTelephoneCount_op(successCallback,
		errorCallback, id, count) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(2);
	args[0] = id;
	args[1] = count;
	xml = this.updateTelephoneCount_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.updateTelephoneCount_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client) {
		closureThis.updateTelephoneCount_onerror(client);
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = 'urn:UpdateTelephoneCount';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

TelephoneService.prototype.updateTelephoneCount = updateTelephoneCount_op;

function updateTelephoneCount_serializeInput(
		cxfjsutils, args) {
	var wrapperObj = new updateTelephoneCount();
	wrapperObj.setId(args[0]);
	wrapperObj.setCount(args[1]);
	var xml;
	xml = cxfjsutils
			.beginSoap11Message("xmlns:jns0='http://package_1/essence/telephone/' xmlns:jns1='http://package_1/essence/' xmlns:jns2='http://service.server.package_1/' ");
	// block for local variables
	{
		xml = xml
				+ wrapperObj
						.serialize(cxfjsutils, 'jns2:updateTelephoneCount', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

TelephoneService.prototype.updateTelephoneCount_serializeInput = updateTelephoneCount_serializeInput;

function updateTelephoneCountResponse_deserializeResponse(
		cxfjsutils, partElement) {
	var returnObject = updateTelephoneCountResponse_deserialize(
			cxfjsutils, partElement);

	return returnObject;
}
function getTelephone_op_onsuccess(client, responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: '
				+ this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: '
				+ this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element,
				'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: '
				+ this.jsutils.traceElementName(element));
		this.jsutils
				.trace('calling getTelephoneResponse_deserializeResponse');
		responseObject = getTelephoneResponse_deserializeResponse(
				this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

TelephoneService.prototype.getTelephone_onsuccess = getTelephone_op_onsuccess;

function getTelephone_op_onerror(client) {
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch (e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		client.user_onerror(httpStatus, httpStatusText);
	}
}

TelephoneService.prototype.getTelephone_onerror = getTelephone_op_onerror;

//
// Operation {http://service.server.package_1/}getTelephone
// Wrapped operation.
// parameter id
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function getTelephone_op(successCallback,
		errorCallback, id) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(1);
	args[0] = id;
	xml = this.getTelephone_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.getTelephone_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client) {
		closureThis.getTelephone_onerror(client);
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = 'urn:GetTelephone';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

TelephoneService.prototype.getTelephone = getTelephone_op;

function getTelephone_serializeInput(cxfjsutils, args) {
	var wrapperObj = new getTelephone();
	wrapperObj.setId(args[0]);
	var xml;
	xml = cxfjsutils
			.beginSoap11Message("xmlns:jns0='http://package_1/essence/telephone/' xmlns:jns1='http://package_1/essence/' xmlns:jns2='http://service.server.package_1/' ");
	// block for local variables
	{
		xml = xml + wrapperObj.serialize(cxfjsutils, 'jns2:getTelephone', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

TelephoneService.prototype.getTelephone_serializeInput = getTelephone_serializeInput;

function getTelephoneResponse_deserializeResponse(
		cxfjsutils, partElement) {
	var returnObject = getTelephoneResponse_deserialize(
			cxfjsutils, partElement);

	return returnObject;
}
function deleteTelephone_op_onsuccess(client,
		responseXml) {
	if (client.user_onsuccess) {
		var responseObject = null;
		var element = responseXml.documentElement;
		this.jsutils.trace('responseXml: '
				+ this.jsutils.traceElementName(element));
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('first element child: '
				+ this.jsutils.traceElementName(element));
		while (!this.jsutils.isNodeNamedNS(element,
				'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
			element = this.jsutils.getNextElementSibling(element);
			if (element == null) {
				throw 'No env:Body in message.'
			}
		}
		element = this.jsutils.getFirstElementChild(element);
		this.jsutils.trace('part element: '
				+ this.jsutils.traceElementName(element));
		this.jsutils
				.trace('calling deleteTelephoneResponse_deserializeResponse');
		responseObject = deleteTelephoneResponse_deserializeResponse(
				this.jsutils, element);
		client.user_onsuccess(responseObject);
	}
}

TelephoneService.prototype.deleteTelephone_onsuccess = deleteTelephone_op_onsuccess;

function deleteTelephone_op_onerror(client) {
	if (client.user_onerror) {
		var httpStatus;
		var httpStatusText;
		try {
			httpStatus = client.req.status;
			httpStatusText = client.req.statusText;
		} catch (e) {
			httpStatus = -1;
			httpStatusText = 'Error opening connection to server';
		}
		client.user_onerror(httpStatus, httpStatusText);
	}
}

TelephoneService.prototype.deleteTelephone_onerror = deleteTelephone_op_onerror;

//
// Operation {http://service.server.package_1/}deleteTelephone
// Wrapped operation.
// parameter id
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function deleteTelephone_op(successCallback,
		errorCallback, id) {
	this.client = new CxfApacheOrgClient(this.jsutils);
	var xml = null;
	var args = new Array(1);
	args[0] = id;
	xml = this.deleteTelephone_serializeInput(this.jsutils, args);
	this.client.user_onsuccess = successCallback;
	this.client.user_onerror = errorCallback;
	var closureThis = this;
	this.client.onsuccess = function(client, responseXml) {
		closureThis.deleteTelephone_onsuccess(client, responseXml);
	};
	this.client.onerror = function(client) {
		closureThis.deleteTelephone_onerror(client);
	};
	var requestHeaders = [];
	requestHeaders['SOAPAction'] = 'urn:DeleteTelephone';
	this.jsutils.trace('synchronous = ' + this.synchronous);
	this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

TelephoneService.prototype.deleteTelephone = deleteTelephone_op;

function deleteTelephone_serializeInput(cxfjsutils,
		args) {
	var wrapperObj = new deleteTelephone();
	wrapperObj.setId(args[0]);
	var xml;
	xml = cxfjsutils
			.beginSoap11Message("xmlns:jns0='http://package_1/essence/telephone/' xmlns:jns1='http://package_1/essence/' xmlns:jns2='http://service.server.package_1/' ");
	// block for local variables
	{
		xml = xml + wrapperObj.serialize(cxfjsutils, 'jns2:deleteTelephone', null);
	}
	xml = xml + cxfjsutils.endSoap11Message();
	return xml;
}

TelephoneService.prototype.deleteTelephone_serializeInput = deleteTelephone_serializeInput;

function deleteTelephoneResponse_deserializeResponse(
		cxfjsutils, partElement) {
	var returnObject = deleteTelephoneResponse_deserialize(
			cxfjsutils, partElement);

	return returnObject;
}
function TelephoneService_TelephoneServicePort() {
	this.url = 'http://localhost:8080/ws/services/TelephoneService';
}
TelephoneService_TelephoneServicePort.prototype = new TelephoneService;
