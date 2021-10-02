<script>
	import Svg from '../Default/Svg.svelte';
</script>

<main>
	<div class="container">
		<span class="badge">NEW BOOK</span>
		<h1>Mother Earth Hosts Our Travels</h1>
		<p>
			There are not many cities that have experienced such social and political extremes in
			recent history as Amsterdam. In the 20th century alone, Amsterdam faced the atrocities of
			war for the first time in 400 years, became the radical center of 1960s social movements
			and witnessed a complete
		</p>
		<button class="button" aria-label="buy the book">BUY THE BOOK</button>

		<label>
			<input placeholder="Search stories" type="text" />
			<button aria-label="search"><Svg id="search" width="18" height="18" /></button>
		</label>

		<div class="video">
			<div class="video__top">
				<img src="images/video__top.webp" alt="" />
				<button aria-label="play" class="play"><Svg id="play" width="32" height="41" /></button
				>
			</div>

			<div class="video__bot">
				<button aria-label="to left"> <Svg id="arrow-left" width="14" height="14" /> </button>
				<span>Wonderful mountain</span>
				<button aria-label="to right">
					<Svg id="arrow-right" width="14" height="14" />
				</button>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	main {
		color: white;
		height: calc(100% - 131px);
	}
	.container {
		display: grid;
		grid-template-columns: 2fr 1fr 35%;
		grid-template-rows: max-content max-content max-content max-content 1fr;
		height: 100%;
	}
	.badge {
		grid-column: 1/3;
		grid-row: 1/2;
		margin: clamp(15px, 4%, 40px) 0;
	}
	h1 {
		grid-column: 1/3;
		grid-row: 2/3;
		width: 10ch;
		margin-bottom: clamp(15px, 4%, 40px);
	}
	p {
		grid-column: 1/3;
		grid-row: 3/4;
		width: clamp(20vw, 53ch, 70vw);
		font-family: 'SF Pro Display';
		font-size: clamp(12px, 2vw, 14px);
		line-height: 1.25em;
		margin-bottom: clamp(20px, 6%, 60px);
	}
	.button {
		grid-column: 1/3;
		grid-row: 4/5;
		background: $tomato;
	}

	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 1/3;
		grid-row: 5/6;
		width: 100%;
		margin-top: auto;
		padding: 50px 58px;
		height: 120px;
		background: white;
		border-top-left-radius: 4px;
		border-bottom: 1px solid rgba(223, 223, 223, 0.5);
	}

	input {
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		color: $dark-blue;

		&::placeholder {
			color: $dark-blue;
		}

		&::-moz-placeholder {
			opacity: 1;
			color: $dark-blue;
		}
	}
	.video {
		grid-row: 1/6;
		grid-column: 3/4;
		margin-top: auto;

		.video__top {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				width: 100%;
				object-fit: cover;
			}
			.play {
				cursor: pointer;
				position: absolute;
			}
		}
	}
	.video__bot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: $neptun;
		height: 120px;
		width: 100%;
		padding: 50px 58px;
		border-top-right-radius: 4px;
		font-size: 12px;
		line-height: 14px;
		text-align: center;
		letter-spacing: 2.18182px;
		text-transform: uppercase;
	}

	// <=1024
	@include screen(1024px, 1250px) {
		.video {
			grid-column: 2/4;
		}

		label {
			grid-column: 1/2;
		}
	}
	// <=760px
	@include max-screen(760px) {
		main {
			height: calc(100% - 88px);
		}
		.video {
			display: none;
		}
		label {
			grid-column: 1/4 !important;
			border-top-right-radius: 4px;
			padding: 30px 40px;
			height: 90px;
		}
	}

	@include max-screen(800px) {
		label,
		.video__bot {
			padding: 30px 40px;
			height: 90px;
		}
		.video {
			grid-column: 3/4;
		}

		label {
			grid-column: 1/3;
		}
	}
	@include max-height(800px) {
		h1 {
			font-size: 3em;
			width: auto;
			grid-column: 1/3;
		}

		label {
			margin-top: 20px;
		}
	}

	@include min-height(1250px) {
		label {
			grid-column: 1/2;
		}

		.video {
			grid-column: 2/4;
		}
	}
</style>
