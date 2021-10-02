<script>
	import Svg from '../Default/Svg.svelte';
	export let idx = false;
	export let long = false;
	export let featured = false;
	export let dest = false;
	export let trio = false;
	export let text = false;
	export let play = false;
	export let hover = false;
</script>

<div class={`item${long ? ' long' : ''}${hover ? ' hover' : ''}`}>
	<div class="mask" />
	<img class="bg" src={`images/insp-${idx}.webp`} alt="густой лес" />

	{#if hover}
		<span class="author">Andre Gide</span>
		<h4>
			Man cannot discover new oceans unless he has the courage to lose sight of the shore.
		</h4>
	{/if}

	{#if play}
		<button aria-label="play"><Svg id="play3" width="20" height="24.5" /></button>
	{/if}

	{#if featured}
		<span class="badge">Featured</span>
	{/if}

	{#if dest}
		<p>destinations</p>
	{/if}

	<h3>{text}</h3>
	<div class="avas">
		<img
			class={`ava${!trio ? ' up' : ''}`}
			src={`images/insp-ava-${idx}a.webp`}
			alt="аватар мужчины"
		/>
		<img class="ava" src={`images/insp-ava-${idx}b.webp`} alt="аватар мужчины" />

		{#if trio}
			<img class="ava" src={`images/insp-ava-${idx}c.webp`} alt="аватар мужчины" />
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	.mask {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.0001) 50%,
			rgba(0, 0, 0, 0.461617) 100%
		);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -99;
		border-radius: 8px;
		transition: background 0.3s ease-in-out;
	}
	.author {
		font-weight: 800;
		font-size: 10px;
		line-height: 12px;
		text-align: center;
		letter-spacing: 1.1px;
		text-transform: uppercase;
		margin-bottom: 15px;

		color: #ffffff;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	h4 {
		font-weight: normal;
		font-size: 2em;
		line-height: 1.25em;
		width: clamp(20vw, 20ch, 40vw);
		align-self: center;
		text-align: center;
		margin-bottom: 10%;
		color: #ffffff;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: auto;
		padding-left: 4px;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: 4px solid white;

		&:hover {
			border-color: $tomato;
		}
	}
	.bg {
		position: absolute;
		bottom: 0;
		left: 0;
		object-fit: cover;
		z-index: -1;
		border-radius: 8px;
		width: 100%;
		height: 100%;
		z-index: -999;
	}
	h3 {
		cursor: default;
		font-size: 2em;
		line-height: 1.25em;
		color: white;
		margin-bottom: 30px;

		transition: opacity 0.2s;
	}
	.badge {
		display: flex;
		align-self: flex-end;
		margin-bottom: auto;

		transition: opacity 0.2s;
	}
	.item {
		position: relative;
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
	.long {
		grid-column: span 2;
	}
	p {
		color: white;
		font-weight: 800;
		font-size: 10px;
		line-height: 12px;
		letter-spacing: 1.1px;
		text-transform: uppercase;
		margin-bottom: 8px;
	}
	.avas {
		display: flex;
		justify-content: center;
		position: relative;
		height: 48px;
		width: 112px;
	}
	.ava {
		position: absolute;
		border-radius: 50%;
		border: 4px solid white;
		top: 0;
		width: 48px;
		height: 48px;
		z-index: 10;
	}
	.ava:nth-child(1) {
		left: 0;
	}
	.ava:nth-child(2) {
		z-index: 99;
	}
	.ava:nth-child(3) {
		right: 0;
	}
	.ava.up {
		z-index: 999;
	}

	// >= 1601px
	@include min-screen(1601px) {
		.item.hover {
			&:hover .mask {
				background: rgba(21, 28, 36, 0.9);
			}

			&:hover h3,
			&:hover p {
				opacity: 0;
			}

			&:hover .author,
			&:hover h4 {
				opacity: 1;
			}
		}
	}

	// <= 1600px
	@include max-screen(1600px) {
		.long:last-child {
			grid-column: span 1;
		}
		h4,
		.author {
			display: none;
		}
	}

	// <= 900px
	@include max-screen(900px) {
		.item {
			padding: 2em;
		}
		h3 {
			font-size: 1.5em;
		}
		h4 {
			font-size: 1.25em;
		}
	}

	// <= 900px
	@include max-screen(650px) {
		.item {
			padding: 1em;
		}
		h3 {
			margin-bottom: 16px;
		}
		.long:first-child {
			grid-column: span 1;
		}
	}
</style>
