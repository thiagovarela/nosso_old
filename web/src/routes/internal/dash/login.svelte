<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return { redirect: `/internal/dash/`, status: 302 };
		}
		return {};
	}
</script>

<script lang='ts'>
	import { api } from '$lib/api';
	import { goto } from '$app/navigation';

	let email = '';
	let error = null;

	async function submit() {
		const response = await api
			.url(`/auth/get-code`)
			.post({ email })
			.notFound(() => {
				error = "You don't seem to have an account.";
			})
			.json((response) => {
				return response;
			})
			.catch(() => {
				error = 'Something went wrong.';
			});
		if (response.sent) {
			let href = `authenticate/?u=${btoa(email)}`;
			await goto(href);
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
	<h2>Log in to Nosso.org</h2>
	<form on:submit|preventDefault="{submit}">
		<label>
			<span>Email</span>
			<input
				required
				type="email"
				bind:value="{email}"
				placeholder="email@nosso.org"
				autocomplete="email" />
		</label>

		<!-- You should use a button here, as the anchor is only used for the example  -->
		<button type="submit"> Log in </button>
		<p>If you are registered, you'll receive a 6 digit code in your email.</p>
	</form>
</div>
