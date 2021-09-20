<script>
	import smoothScroll from '../Functions/smoothScroll.js';
	let height;
</script>

<section bind:this={height} on:mousewheel|preventDefault={e => smoothScroll(e, height)}>
	<div class="container">
		<h2>Sign Up Our Newsletter</h2>
		<p class="subtitle">
			The state of Utah in the United States is home to lots of beautiful National Parks, &
			Bryce Canyon National Park ranks as three of the most magnificent.
		</p>
		<img src="images/subs.jpg" alt="горы" />
		<div class="mask" />

		<form>
			<label>Name<input type="text" /></label>
			<label>Email<input type="mail" /></label>
			<label>Phone<input type="phone" /></label>
			<button>Sign up now</button>
		</form>
	</div>
</section>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	section {
		height: 100vh;
		padding-top: 6%;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		padding-left: 8%;
		padding-bottom: 11%;
		height: 74vh;
		position: relative;
	}
	h2 {
		color: white;
		width: 12ch;
		margin-bottom: 40px;
	}
	img,
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -999;
		border-radius: 8px;
	}
	.mask {
		background: rgba(28, 46, 61, 0.46);
	}
	.subtitle {
		color: white;
		width: 35ch;
	}
	form {
		position: absolute;
		bottom: -94px;
		right: 9%;
		padding-top: 76px;
		background: white;
		border-radius: 8px;
		height: 415px;
		width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	label {
		margin-bottom: 32px;
		width: 64%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		border-bottom: 1px solid rgba(28, 46, 61, 0.3);
		font-weight: 600;
		font-size: 11px;
		line-height: 13px;
		text-align: center;
		letter-spacing: 2px;
		color: $dark-blue;
	}
	input {
		margin-bottom: 5px;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: $dark-blue;
		border: none;

		&:focus {
			outline: none;
		}
	}
	button {
		margin-top: 34px;
		background: $neptun;
		text-transform: uppercase;
		color: white;
		padding: 40px;
		width: 100%;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-weight: 800;
		font-size: 12px;
		line-height: 14px;
		text-align: center;
		letter-spacing: 2.2px;
	}
	@include max-screen(1300px) {
		.container {
			padding: 8%;
			justify-content: flex-start;
			align-items: center;
		}
		img,
		.mask {
			left: 30px;
			width: calc(100% - 60px);
		}
		h2 {
			width: auto;
			margin: clamp(15px, 4%, 40px) 0;
		}
		.subtitle {
			width: min(52ch, 80vw);
		}
		form {
			right: auto;
		}
	}
	@include max-screen(650px) {
		.container {
			padding: 16px;
		}
		img,
		.mask {
			left: 16px;
			width: calc(100% - 32px);
		}
		h2 {
			width: clamp(20vw, 70%, 80vw);
		}
		form {
			padding-top: 40px;
			width: 80%;
			height: auto;
			bottom: -78px;
		}
		label {
			width: 70%;
		}
		button {
			padding: 32px;
			margin: 0;
		}
	}

	@include max-height(800px) {
		.container {
			padding: 16px;
			height: 500px;
			margin-bottom: 170px;
		}
	}

	// @include max-height(500px) {
	// 	.container {
	// 	}
	// }
</style>
