<script lang="ts">
	import { page } from '$app/stores';
	$: message = $page?.error?.message ?? 'Whoops!';
</script>

<svelte:head>
	<title>{message}</title>
</svelte:head>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	<div class="flex flex-col gap-4 p-4">
		<h1 class="text-xl">An error occurred</h1>
		<table>
			<tr>
				<td>Status :</td>
				<td>{$page.status}</td>
			</tr>
			<tr>
				<td>Message :</td>
				<td>{message}</td>
			</tr>
		</table>
	</div>
</div>
