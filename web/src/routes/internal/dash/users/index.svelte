<script context="module">
	export async function load({ fetch, session, page }) {
		const url = `/api/users?${page.query.toString()}`;
		const res = await fetch(url, { headers: session.headers });

		if (res.ok) {
			const response = await res.json();
			const users = response.results;
			const domainIds = new Set(users.map((user) => user.domainId));
			const domains = await Promise.all(
				Array.from(domainIds).map((id) => {
					return fetch(`/api/domains/${id}`, { headers: session.headers }).then((res) =>
						res.json()
					);
				})
			);

			return {
				props: {
					users,
					pageInfo: response.pageInfo,
					domains: new Map(domains.map((domain) => [domain.id, domain]))
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
	import PageInfo from '$lib/components/dash/PageInfo.svelte';
	export let users;
	export let domains;
	export let pageInfo;
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
	}
</style>

<h2>Users</h2>

<div class="content">
	<div>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>E-mail</th>
					<th>Domain</th>
					<th>Roles</th>
					<th>Created</th>
				</tr>
			</thead>
			<tbody>
				{#each users as user}
					<tr>
						<td>
							<div>
								<p>{user.id}</p>
							</div>
						</td>
						<td>{user.email}</td>
						<td
							><a href="domains/{user.domainId}">{domains.get(user.domainId).name}</a
							></td>
						<td>
							{#if user.roles}
								{#each user.roles as role}
									<span>
										{role}
									</span>
								{/each}
							{/if}
						</td>
						<td>{new Date(user.createdAt.seconds * 1000).toLocaleString()}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<PageInfo pageInfo="{pageInfo}" />
</div>
