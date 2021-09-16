<script>
	import InspItem from './InspItem.svelte';
	let mountain = 'A Guide To Rocky Mountain Vacations';
	let barselona = 'Traveling To Barcelona';
	let maui = 'Maui By Air The Best Way Around The Island';
	let jokes = 'Party Jokes Startling But Unnecessary';
</script>

<section>
	<div class="container">
		<h2>Inspirations</h2>
		<p class="subtitle">
			The state of Utah in the United States is home to lots of beautiful National Parks, &
			Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
		</p>

		<div class="body">
			<InspItem idx="1" text={mountain} long featured dest trio />
			<InspItem idx="2" text={barselona} dest play />
			<InspItem idx="3" text={jokes} dest hover />
			<InspItem idx="4" text={maui} hover />
			<InspItem idx="5" text={mountain} hover />
			<InspItem idx="6" text={barselona} dest play />
			<InspItem idx="7" text={mountain} long featured trio />
		</div>
	</div>
</section>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	section {
		padding-bottom: 140px;
	}
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		color: $dark-blue;
		margin-bottom: 24px;
	}
	.subtitle {
		text-align: center;
		margin-bottom: 6%;
		color: $grey-slate;
		width: clamp(20vw, 65ch, 85vw);
	}
	.body {
		display: grid;
		grid-template-columns: repeat(3, 500px);
		grid-template-rows: 500px 710px 500px;
		gap: 32px;
		height: 65%;
	}
	// <= 1600px
	@include max-screen(1600px) {
		section {
			padding-bottom: 60px;
		}
		.body {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, 500px);
			gap: 16px;
			height: 65%;
		}
	}
	// <= 900px
	@include max-screen(980px) {
		section {
			padding-bottom: 2em;
		}
		.body {
			width: 100%;
			grid-template-columns: repeat(2, 45vw);
		}
	}
	// <= 650px
	@include max-screen(650px) {
		section {
			padding-bottom: 2em;
		}
		.body {
			width: 100%;
			grid-template-columns: 90vw;
			grid-template-rows: repeat(7, 40vh);
		}
	}
</style>
