<script context="module" lang="ts">
	export async function load({ fetch, session }) {
		const url = `/api/domains`;
		const res = await fetch(url, { headers: session.headers });

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					...data
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
	import { goto } from '$app/navigation';
	import PageInfo from '$lib/components/dash/PageInfo.svelte';
	export let results;
	export let pageInfo;
</script>

<div>
	<button on:click="{() => goto('domains/add')}"> Add </button>
</div>
<div>
	<div>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Allowed Host</th>
					<th>Created</th>
				</tr>
			</thead>
			<tbody>
				{#each results as domain}
					<tr>
						<td>
							{domain.id}
						</td>
						<td>
							<a href="domains/{domain.id}">{domain.name}</a>
						</td>
						<td>
							<span>
								{domain.allowedHost}
							</span>
						</td>
						<td>
							{new Date(domain.createdAt.seconds * 1000).toLocaleString()}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<PageInfo pageInfo="{pageInfo}" />
</div>
