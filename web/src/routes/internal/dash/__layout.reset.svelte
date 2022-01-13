<script context="module">
	let exemptRoutes = new Set(['/internal/dash/login', '/internal/dash/authenticate']);

	let isExemptRoute = false;

	export async function load({ url, session }) {
		if (exemptRoutes.has(url.pathname)) {
			isExemptRoute = true;
			return {};
		}
		if (!session.user) {
			return { redirect: `/internal/dash/login`, status: 302 };
		} else {
			return { props: { user: session.user } };
		}
	}
</script>

<script lang='ts'>
	import type { User } from '$lib/types';

	import '../../../dash.scss';
	
	let sidebarOpen = false;
	export let user: User;

	let isManager = user && (user.roles.includes('manager') || user.roles.includes('superuser'));
	let isSuper = user && user.roles.includes('superuser');

	const dashNamespace = '/internal/dash';
	let links = [{ name: 'Dashboard', href: dashNamespace }];
	if (isManager) {
		links.push({ name: 'Users', href: `${dashNamespace}/users` });
	}
	if (isSuper) {
		links.push({ name: 'Domains', href: `${dashNamespace}/domains` });
	}

	let toggle = () => (sidebarOpen = !sidebarOpen);
</script>

<style lang="scss">
	.container {
		width: 100%;
	}
	.inner {
		display: flex;
		flex-direction: column;
		min-width: var(--size-fluid-10);
		padding: var(--size-6);
		@media (--md-n-above) {
			min-width: 100vh;
		}
	}
	.overflow-hidden {
		overflow: hidden;
	}
	header {
		z-index: var(--layer-2);
		background-color: var(--teal-8);
		a {
			color: white;
		}
		display: flex;
		min-height: var(--size-9);
		padding: var(--size-2);
		align-items: center;
	}
	.header-icon {
		background-color: var(--teal-8);
		color: white;
		margin-right: var(--size-2);
		@media (--md-n-above) {
			display: none;
			margin-right: 0;
		}
	}
	.header-content {
		display: flex;
		place-content: space-between;
		width: 100%;
		@media (--md-n-below) {
			display: none;
		}
	}
	.header-links {
		display: flex;
		gap: var(--size-6);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.sidebar-container {
		display: flex;
		flex-direction: row;
	}
	aside {
		z-index: var(--layer-3);
		width: var(--size-fluid-9);
		min-height: 100vh;
		overflow-y: auto;
		background-color: white;
		flex-shrink: 0;
		border-right: solid 1px var(--gray-2);
	}
	.sidebar-inner {
		display: flex;
		flex-direction: column;
		padding-top: var(--size-6);
		@media (--md-n-above) {
			place-items: center;
			min-width: 100vh;
		}
		ul {
			line-height: var(--size-7);
		}
	}
</style>

{#if isExemptRoute}
	<div class="centered-page">
		<slot />
	</div>
{:else}
	<div class="normal-page" class:overflow-hidden="{sidebarOpen}">
		<div class="container">
			<header>
				<button class="header-icon" on:click="{() => toggle()}" aria-label="Menu">
					<svg class="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"></path>
					</svg>
				</button>
				<div class="header-content">
					<ul class="header-links">
						{#each links as link}
							<li>
								<a href="{link.href}">{link.name}</a>
							</li>
						{/each}
					</ul>
					<a href="/logout" rel="external">Logout</a>
				</div>
			</header>
			<div>
				{#if sidebarOpen}
					<div class="sidebar-container">
						<aside>
							<div class="sidebar-inner">
								<ul>
									{#each links as link}
										<li>
											<a on:click="{() => toggle()}" href="{link.href}">
												<span>{link.name}</span>
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</aside>
						<div
							style="opacity: 30%; filter: blur(1px)"
							on:click="{() => (sidebarOpen = !sidebarOpen)}">
							<div class="inner">
								<slot />
							</div>
						</div>
					</div>
				{:else}
					<div class="inner">
						<slot />
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
