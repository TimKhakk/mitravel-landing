<script>
	import SwiperComp from './SwiperComp.svelte';
	import smoothScroll from '../Functions/smoothScroll.js';

	let height;
</script>

<section
	bind:this={height}
	on:mousewheel|preventDefault={e => smoothScroll(e, height)}
	class="featured-videos"
>
	<div class="container">
		<h2>Featured Videos</h2>
		<p>
			The state of Utah in the United States is home to lots of beautiful National Parks, &
			Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
		</p>
	</div>

	<SwiperComp />
</section>

<style lang="scss">
	@import '../Scss/vars.scss';
	section {
		height: 100vh;
		padding-top: 50px;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h2 {
		text-align: center;
		color: $dark-blue;
		margin-bottom: 24px;
	}
	p {
		text-align: center;
		margin-bottom: 6%;
		color: $grey-slate;
		width: clamp(20vw, 65ch, 90vw);
	}
</style>
