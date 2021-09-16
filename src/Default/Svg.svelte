<script>
	export let id;
	export let fill = 'white';
	export let width = '20';
	export let height = '20';
</script>

<svg style={`fill: ${fill}; width: ${width}px; height: ${height}px`}>
	<use href={`icons.svg#${id}`} />
</svg>

<style>
</style>
