const smoothScroll = (e, height) => {
	console.log(e);
	if (e.wheelDeltaY < 0) {
		window.scrollBy({
			top: height.clientHeight,
			behavior: 'smooth',
		});
	} else {
		window.scrollBy({
			top: -height.clientHeight,
			behavior: 'smooth',
		});
	}
};

export default smoothScroll;
