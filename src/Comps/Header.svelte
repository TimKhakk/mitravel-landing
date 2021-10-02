<script>
	import Svg from '../Default/Svg.svelte';
</script>

<header>
	<div class="container">
		<ul class="social">
			<li><a href="/"><Svg id="facebook" /></a></li>
			<li><a href="/"><Svg id="twitter" /></a></li>
		</ul>

		<button aria-label="logo" class="logo">MITRAVEL</button>

		<button aria-label="side menu">
			<Svg id="burger" width="48" height="10" />
		</button>
	</div>
</header>

<style lang="scss">
	@import '../Scss/mixins.scss';
	header {
		padding: 53px 0;
	}
	ul {
		display: flex;
		align-items: center;
	}
	li:not(:last-child) {
		margin-right: 40px;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		font-family: 'SF Pro Display';
		color: white;
		font-weight: 800;
		font-size: 22px;
		line-height: 1.15em;
		letter-spacing: 2px;
	}
	// <=1024
	@include max-screen(1024px) {
		li:not(:last-child) {
			margin-right: 60px;
		}
	}
	// <=760px
	@include max-screen(760px) {
		header {
			padding: 32px 0;
		}
		li:not(:last-child) {
			margin-right: 32px;
		}
		.logo {
			font-size: 16px;
		}
	}

	@include max-height(800px) {
		header {
			padding: 32px 0;
		}
		li:not(:last-child) {
			margin-right: 32px;
		}
		.logo {
			font-size: 16px;
		}
	}
</style>
