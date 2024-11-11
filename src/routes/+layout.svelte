<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
<title>Svelte Mail Example</title>
</svelte:head>

{@render children()}
