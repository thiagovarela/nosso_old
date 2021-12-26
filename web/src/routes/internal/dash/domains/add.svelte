<script>
	import { api } from '$lib/api';
	import { goto } from '$app/navigation';

	let name = '';
	let allowedHost = '';
	let error = '';
	async function submit() {
		const response = await api
			.options({ credentials: 'include' })
			.url(`/domains`)
			.post({ name, allowedHost })
			.res((response) => {
				return response;
			})
			.catch(() => {
				error = 'Something went wrong.';
			});

		if (response.ok) {
			await goto('../domains');
		}
	}
</script>

<form on:submit|preventDefault="{submit}">
	<div>
		<label>
			<span> Name </span>
			<input type="text" bind:value="{name}" />
		</label>

		<label>
			<span> Allowed Host </span>
			<input type="text" bind:value="{allowedHost}" />
		</label>

		<div>
			<button type="submit"> Save </button>
		</div>
	</div>
</form>
