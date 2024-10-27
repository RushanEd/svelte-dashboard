<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
<title>Svelte Dashboard Example</title>
</svelte:head>

{@render children()}
