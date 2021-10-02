<script>
	import smoothScroll from '../Functions/smoothScroll.js';
	let height;
</script>

<section bind:this={height} on:mousewheel|preventDefault={e => smoothScroll(e, height)}>
	<img class="bg" src="images/third-bg.jpg" alt="" />
	<div class="mask" />
	<div class="container">
		<div class="left-side">
			<span class="badge">FEATURED</span>
			<h3>How To Fly A Private Jet On Your Next Trip</h3>
			<p>
				The state of Utah in the United States is home to lots of beautiful National Parks, &
				Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
			</p>
			<button class="button">read article</button>
		</div>

		<div class="right-side">
			<h2>Featured Stories</h2>
			<ul>
				<li>
					<img src="images/third-1.png" alt="аватар женщины" />
					<p class="name">Do A Sporting Stag Do In Birmingham</p>
					<p class="date">13 Dec 2020</p>
				</li>
				<li>
					<img src="images/third-2.png" alt="аватар женщины" />
					<p class="name">From Wetlands To Canals And Dams Amsterdam Is Alive</p>
					<p class="date">13 Dec 2020</p>
				</li>
				<li>
					<img src="images/third-3.png" alt="аватар женщины" />
					<p class="name">Stu Unger Rise And Fall Of A Poker Genius</p>
					<p class="date">13 Dec 2020</p>
				</li>
				<li>
					<img src="images/third-4.png" alt="аватар женщины" />
					<p class="name">New Ideas For A Low Cost Vacation On Water</p>
					<p class="date">13 Dec 2020</p>
				</li>
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	section {
		height: 100vh;
		position: relative;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		z-index: -999;
		width: 100%;
		height: 100vh;
	}
	.mask {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 65%;
		height: 64%;
		z-index: 10;
		background: linear-gradient(180deg, rgba(28, 46, 59, 0.0001) 0%, #091117 100%);
	}
	.container {
		display: grid;
		grid-template-columns: 1fr 35%;
		height: 100%;
		padding-bottom: 106px;
	}
	h3 {
		font-weight: bold;
		font-size: 3em;
		line-height: 1.25em;
		color: white;
		margin-bottom: 16px;
	}
	button {
		background: $neptun;
	}
	.left-side {
		z-index: 999;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;

		p {
			width: 71ch;
			color: white;
			font-size: 14px;
			line-height: 21px;
			margin-bottom: 40px;
		}

		.badge {
			margin-bottom: 16px;
		}

		h3 {
			width: clamp(20vw, 20ch, 90vw);
		}
	}
	.right-side {
		background: rgba(60, 74, 81, 0.94);
		mix-blend-mode: normal;
		position: absolute;
		top: 0;
		right: 0;
		width: 35%;
		height: 100%;
		padding: 7% 8% 0 7%;

		h2 {
			margin-bottom: clamp(35px, 18%, 96px);
			width: 8ch;
			color: white;
		}

		.name {
			width: 24ch;

			font-weight: bold;
			font-size: clamp(14px, 2vw, 18px);
			line-height: 1.35em;
			color: white;
		}

		.date {
			font-size: 11px;
			line-height: 13px;
			color: rgba(255, 255, 255, 0.502293);
		}

		li {
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-template-rows: max-content max-content;
			column-gap: 32px;
			row-gap: 8px;
			padding-bottom: 32px;
		}

		li:not(:last-child) {
			margin-bottom: 32px;
			border-bottom: 1px solid #4d595f;
		}

		img {
			grid-row: span 2;
			border-radius: 50%;
			object-fit: cover;
			width: 46px;
			height: 46px;
		}
	}

	// <=1500px
	@include max-screen(1500px) {
		.mask {
			width: 100%;
			height: 100%;
		}
		.container {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 35%;
			padding-bottom: 0px;
		}
		.left-side {
			margin-bottom: 30px;

			p {
				width: clamp(20vw, 71ch, 83vw);
				color: white;
				font-size: 14px;
				line-height: 1.33em;
				margin-bottom: 40px;
			}
		}
		.right-side {
			display: grid;
			z-index: 99;
			position: static;
			width: calc(100% + 60px);
			padding: clamp(20px, 5%, 48px);
			margin: 0 -30px;

			h2 {
				margin-bottom: 30px;
				width: auto;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			li {
				display: grid;
				grid-template-columns: max-content 1fr;
				grid-template-rows: max-content max-content;
				column-gap: 16px;
				row-gap: 8px;
				padding-bottom: 16px;
				border-bottom: 1px solid #4d595f;
			}
			li:last-child {
				margin-bottom: 32px;
			}
		}
	}
	// <=800px
	@include max-screen(800px) {
		h3 {
			font-size: 2.5em;
		}
		.name {
			font-size: 16px;
		}
	}

	// <=700px
	@include max-screen(760px) {
		.right-side {
			width: 100vw;
			margin: 0 -16px;
		}
	}
	// <=700px
	@include max-screen(650px) {
		h3 {
			font-size: 1.5em;
		}
		.container {
			grid-template-rows: 2fr 1fr;
		}
		.left-side {
			margin-bottom: 16px;

			p {
				margin-bottom: 16px;
			}
		}
		.right-side {
			h2 {
				font-size: 1.5em;
				margin-bottom: 16px;
			}
			ul {
				justify-content: flex-start;
				width: max-content;
				flex-direction: column;
			}
			li {
				padding-bottom: 8px;
				margin-bottom: 8px !important;
			}

			li:nth-child(2) {
				border: none;
			}
			img {
				width: 40px;
				height: 40px;
			}
		}
	}

	@media screen and (max-height: 650px) {
		.right-side {
			li:nth-child(3),
			li:last-child {
				display: none;
			}
		}
	}

	@include max-height(800px) {
		.right-side {
			justify-content: flex-start;
			li {
				border: none !important;
			}
			li:nth-child(3),
			li:last-child {
				display: none;
			}
		}
	}
</style>
