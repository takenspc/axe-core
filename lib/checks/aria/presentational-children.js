var role = node.getAttribute('role');

if (axe.commons.aria.getRoleType(role) !== 'widget' ||
	!axe.commons.aria.childrenArePresentational(role)) {
	return true;
}


function getSelector() {
	var widgetRoles = axe.commons.aria.getRolesByType('widget'),
	implicitNodes = axe.commons.aria.implicitNodes,
	implicit,
	selectors = [],
	role,
	index,
	length;

	for (index = 0, length = widgetRoles.length; index < length; index++) {
		role = widgetRoles[index];
		selectors.push('[role="' + role + '"]');

		implicit = implicitNodes(role);
		if (implicit) {
			selector = selector.concat(implicit);
		}
	}

	return selectors.join(',');
}


function owns(node, selector, ariaOwned) {
	if (node === null) { return false; }

	var matchesSelector = axe.commons.utils.matchesSelector;
	return ariaOwned ? (matchesSelector(node, selector) || !!node.querySelector(selector)) :
		!!node.querySelector(selector);
}

function ariaOwns(nodes, selector) {
	var index, length;

	for (index = 0, length = nodes.length; index < length; index++) {
		if (nodes[index] === null) { continue; }
		if (owns(nodes[index], selector, true)) {
			return true;
		}
	}
	return false;
}

function getWidgetChildren(node, selector) {
	var widgetChildren = [],
	ownedElements = idrefs(node, 'aria-owns');

	if (owns(node,selector) || ariaOwns(ownedElements, selector)) {
		widgetChildren.push(node);
	}

	return widgetChildren;
}


var selector = getSelector();
var related = getWidgetChildren(node, selector);

if (related.length) {
	this.relatedNodes(related);
	this.data(role);
	return false;
}

return true;
