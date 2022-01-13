<script context="module" lang="ts">
	export async function load({ fetch, session, page }) {
		const url = `/api/domains/${page.params.id}`;
		const res = await fetch(url, { headers: session.headers });

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					domain: data
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { api } from '$lib/api';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let domain;
	let name = domain.name;
	let allowedHost = domain.allowedHost;
	let error = '';
	let origin = new URL(`https://${$page.host}`);
	let isSameHost = origin.hostname === allowedHost;
	async function submit() {
		const response = await api
			.url(`/domains/${$page.params.id}`)
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

<form on:submit|preventDefault="{submit}" class="default-form">
	
		<label>
			<span> Name </span>
			<input type="text" bind:value="{name}" />
		</label>

		<label>
			<span> Allowed Host </span>
			<input
				type="text"
				bind:value="{allowedHost}"
				class:bg-gray-100="{isSameHost}"
				disabled="{isSameHost}" />
		</label>

		<div>
			<button type="submit"> Save </button>
		</div>
	
</form>
