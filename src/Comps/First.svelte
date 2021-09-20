<script>
	import Header from './Header.svelte';
	import Main from './Main.svelte';
	import smoothScroll from '../Functions/smoothScroll.js';
	let height;
</script>

<div
	bind:this={height}
	on:mousewheel|preventDefault={e => smoothScroll(e, height)}
	class="first"
>
	<img src="images/main.jpg" alt="лес на озере осенью" />
	<div class="mask" />
	<Header />
	<Main />
</div>

<style lang="scss">
	@import '../Scss/mixins.scss';
	.first {
		position: relative;
		height: 100vh;
	}
	img,
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		z-index: -999;
		width: 100%;
		height: 100%;
	}
	.mask {
		background: #0b1014;
		opacity: 0.2;
	}

	// <=760px
	@include max-screen(760px) {
		.mask {
			opacity: 0.5;
		}
	}

	@include max-height(500px) {
		img,
		.mask {
			height: 100%;
		}
	}
</style>
