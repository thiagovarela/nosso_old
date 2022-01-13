<script lang="ts">
	import { page } from '$app/stores';

	export let pageSize = 100;
	export let pageInfo;

	$: previousPage = pageInfo?.prevPage;
	$: nextPage = pageInfo?.nextPage;
	$: currentPage = previousPage ? parseInt(pageInfo.prevPage) + 1 : 1;

	$: totalPages = Math.ceil(pageInfo?.total / pageSize);
	$: midPage = totalPages / 2;

	$: firstRecord = previousPage ? previousPage * pageSize + 1 : 1;
	$: lastRecord = pageInfo?.total < pageSize ? pageInfo?.total : currentPage * pageSize;

	$: nextPageUrl = url(nextPage);
	$: prevPageUrl = url(previousPage);

	function url(pageNumber: number) {
		const query = new URLSearchParams($page.url.searchParams);
		query.set('page', pageNumber?.toString() ?? '0');
		return `${$page.url.pathname}?${query.toString()}`;
	}
</script>

<style lang="scss">
	nav {
		--_link-bg: white;
		--_link-text: var(--gray-7);

		display: flex;
		gap: var(--size-2);

		& > a {
			background-color: var(--_link-bg);
			color: var(--_link-text);
			padding-inline: var(--size-3);
			padding-block: var(--size-2);
			border-radius: var(--radius-3);
			text-decoration: none;
			outline-offset: 3px;
			transition: background-color 0.2s var(--ease-3), color 0.2s var(--ease-3);

			&[href]:is(.current, :hover, :focus-visible) {
				--_link-bg: var(--teal-5);
				--_link-text: var(--teal-0);
			}

			&:not([href]) {
				cursor: not-allowed;
				--_link-bg: transparent;
			}
		}
	}
	.page-info {
		display: flex;
	}
</style>

<div>
	<div class="page-info">
		<nav>
			{#if previousPage}
				<a href="{prevPageUrl}">Previous</a>
			{/if}
			<span>
				{currentPage}
			</span>
			{#if nextPage}
				<a href="{nextPageUrl}"> Next </a>
			{/if}
		</nav>
	</div>
	<span>
		| {firstRecord}-{lastRecord} of {pageInfo.total}
	</span>
</div>
