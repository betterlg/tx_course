function findItemIndex (data, field) {
	return data.findIndex(item => item.field === field);
}

function scrollToPosition (target) {
	const offsetLeft = target.offsetLeft,
	      scrollEl = target.parentNode.parentNode;

	scrollEl.scrollTo(offsetLeft, 0);
}

export {
	findItemIndex,
	scrollToPosition
}