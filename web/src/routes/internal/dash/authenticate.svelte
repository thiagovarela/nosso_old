<script>
	import { api } from '$lib/api';
	import { goto } from '$app/navigation';

	let token = '';
	let error = null;
	async function submit() {
		const urlParams = new URLSearchParams(window.location.search);
		const email = atob(urlParams.get('u'));
		const response = await api
			.options({ credentials: 'include' })
			.url(`/auth/authenticate`)
			.post({ email, token })
			.res((response) => {
				return response;
			})
			.catch(() => {
				error = 'Something went wrong.';
			});

		if (response.ok) {
			// Forces a browser refresh for the cookie to kick in
			window.location.href = '/internal/dash';
		}
	}
</script>

<style>
	.page {
		margin-top: var(--size-fluid-5);
		min-width: var(--size-fluid-10);
		max-width: var(--size-fluid-10);
	}
	h2 {
		display: flex;
		justify-content: center;
		font-size: var(--size-fluid-3);
		margin-bottom: var(--size-5);
	}
	label {
		display: grid;
		gap: var(--size-2);
	}
	form {
		display: grid;
		gap: var(--size-fluid-2);
	}
</style>

<div class="page">
	<h2>Authenticate</h2>
	<form on:submit|preventDefault="{submit}">
		<label>
			<span>6-digit code</span>
			<input
				required
				autocomplete="one-time-code"
				type="tel"
				bind:value="{token}"
				placeholder="******" />
		</label>
		<button type="submit"> Authenticate </button>
		<a href="login"> Back to login </a>
	</form>
</div>
