<script lang="ts">
	import { page } from '$app/stores';
	$: message = $page?.error?.message ?? 'Whoops!';
</script>

<svelte:head>
	<title>message</title>
</svelte:head>

<h1>An error occurred</h1>
<p>Status: {$page.status}</p>
<p>Message: {message}</p>
asd
