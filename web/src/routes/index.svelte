<script>
	import { goto } from '$app/navigation';
</script>

<div>
	<div>
		<div>
			<h1>
				This is a template to show that
				<span>it works.</span>
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div>
			<button on:click="{() => goto('internal/dash/')}">Get Started</button>
		</div>
	</div>
</div>
