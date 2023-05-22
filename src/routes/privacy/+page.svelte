<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Footer from '../../components/footer.svelte';
	import PageContainer from '../../components/page-container.svelte';

	let dots = 0;
	let timer: null | number = null;
	onMount(() => {
		const loop = () => {
			dots++;
			if (dots < 5) {
				timer = setTimeout(loop, 1000);
				return;
			}

			location.href = 'https://mrr.sonnet.io/';
			if (!timer) return;
			clearTimeout(timer);
		};

		loop();
	});

	onDestroy(() => {
		if (!timer) return;
		clearTimeout(timer);
	});
</script>

<PageContainer>
	<main>
		<p>
			Haha fuck you
			<br />
			{Array(dots).fill('.').join('')}
		</p>
	</main>

	<Footer>
		<nav>
			<a href="/">← back</a>
		</nav>
	</Footer>
</PageContainer>

<style>
	main {
		height: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}

	p {
		margin: 0;
		font-weight: 800;
		text-transform: uppercase;
		font-size: 1.25rem;
	}
</style>
