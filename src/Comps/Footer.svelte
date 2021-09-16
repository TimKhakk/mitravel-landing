<script>
	import Svg from '../Default/Svg.svelte';
</script>

<footer>
	<div class="container">
		<div class="top">
			<div class="item">
				<h4>Company</h4>
				<span class="line" />
				<ul>
					<li>About</li>
					<li>Press</li>
					<li>Blog</li>
					<li>Careers</li>
					<li>Security</li>
					<li>Driver Centre</li>
				</ul>
			</div>
			<div class="item">
				<h4>Information</h4>
				<span class="line" />
				<ul>
					<li>Our story</li>
					<li>Recipes</li>
					<li>Nutrition</li>
					<li>Resources</li>
					<li>Newsletter</li>
					<li>Contact</li>
				</ul>
			</div>
			<div class="item">
				<h4>Information</h4>
				<span class="line" />
				<ul>
					<li>Customer service</li>
					<li>Recommend a restaurant</li>
					<li>Signup a restaurant</li>
					<li>Jobs</li>
					<li>Press</li>
					<li>Terms of use</li>
				</ul>
			</div>
			<div class="item">
				<h4>Subscribe Now</h4>
				<span class="line" />
				<form>
					<label
						><input placeholder="Your email" type="mail" /><Svg
							id="user"
							width="20"
							height="20"
						/></label
					>
					<button>Subscribe Now</button>
				</form>
			</div>
		</div>
	</div>

	<div class="bot">
		<div class="container">
			<span
				>© 2019 Mass Impressions. Designed by Tran Mau Tri Tam for Mass Impressions. All rights
				reserved.</span
			>
			<span>Terms of Service</span>
			<span>Privacy Policy</span>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	footer {
		border-top: 1px solid #d9d9d9;
		padding-top: 125px;
	}
	.top {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding-bottom: 120px;
	}
	h4 {
		font-weight: bold;
		font-size: 12px;
		line-height: 14px;
		letter-spacing: 2.15px;
		text-transform: uppercase;
		color: #100e0b;
		margin-bottom: 32px;
	}
	.line {
		display: block;
		background: #57a773;
		width: 48px;
		height: 1px;
		margin-bottom: 32px;
	}
	li {
		font-weight: 500;
		font-size: 13px;
		line-height: 29px;
		color: #959ea6;
	}
	button {
		font-weight: 800;
		font-size: 12px;
		line-height: 14px;
		text-align: center;
		letter-spacing: 2.2px;
		text-transform: uppercase;
		color: #ffffff;
		background: $neptun;
		padding: 25px 0;
		width: clamp(20vw, 368px, 90vw);
		border-radius: 8px;
	}
	label {
		display: flex;
		justify-content: space-between;
		align-self: center;
		border: 1px solid #e4e4e4;
		border-radius: 8px;
		padding: 20px 35px 20px 31px;
		width: clamp(20vw, 368px, 90vw);
		margin-bottom: 16px;
	}
	input {
		font-size: 16px;
		line-height: 19px;
		letter-spacing: -0.2px;
		color: #1b1916;
	}
	.item:nth-child(4) {
		justify-self: flex-end;
	}
	.bot {
		border-top: 1px solid #d9d9d9;
		padding: 32px 0;

		.container {
			display: grid;
			grid-template-columns: 5fr max-content max-content;
		}
		span:nth-child(1) {
			width: clamp(35%, 70ch, 62%);
		}
		span {
			font-size: 13px;
			line-height: 15px;
			color: #959ea6;
		}
		span:nth-child(3) {
			margin-left: 38px;
		}
	}
	// <=1600px
	@include max-screen(1600px) {
		footer {
			padding-top: 60px;
		}
		.top {
			padding-bottom: 60px;
			grid-template-columns: 1fr 1fr 1fr 2fr;
		}
	}
	// <=950px
	@include max-screen(950px) {
		footer {
			padding-top: 2em;
		}
		.top {
			padding-bottom: 2em;
			row-gap: 3em;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr max-content;
		}
		.item:nth-child(4) {
			grid-column: span 3;
			place-self: flex-start;
		}
		.bot {
			.container {
				grid-template-columns: 5fr 1.5fr 1.5fr;
			}
			span:nth-child(2),
			span:nth-child(3) {
				justify-self: flex-end;
			}
		}
	}

	// <= 650px
	@include max-screen(650px) {
		h4,
		.line {
			margin-bottom: 1em;
		}
		.bot {
			.container {
				grid-template-columns: 1fr 1fr;
				row-gap: 1em;
				grid-template-rows: max-content max-content;
			}
			span:nth-child(1) {
				width: auto;
				grid-column: span 3;
			}

			span:nth-child(2),
			span:nth-child(3) {
				justify-self: center;
			}

			span:nth-child(3) {
				margin: 0;
			}
		}
	}
</style>
