const smoothScroll = (e, height) => {
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
