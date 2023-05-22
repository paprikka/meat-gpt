<script>
	import Footer from '../../components/footer.svelte';
	import PageContainer from '../../components/page-container.svelte';
	import { sendEmail } from '../../send-email';
</script>

<PageContainer>
	<main><p><button on:click={sendEmail}>❤️ click me</button></p></main>
	<Footer>
		<nav>
			<a href="https://sonnet.io" target="_blank">About</a>
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

	button {
		color: var(--color-text);
		font-weight: 700;
		font-size: 2rem;
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
