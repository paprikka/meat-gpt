<slot />

<svelte:head>
	<title>MeatGPT</title>
	<link rel="prefetch" href="/silence.mp3" />
	<link rel="prefetch" href="/music-alt.mp3" />
	<script
		async
		defer
		data-domains="meat-gpt.sonnet.io"
		data-website-id="4b8b922b-92a0-4389-995c-130f989ac791"
		src="https://sonnet-events.vercel.app/umami.js"
	></script>
</svelte:head>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body, html) {
		--color-bg: #fff;
		--color-text: #222;
		--color-brand: pink;
		--page-margin: 1.5rem;

		margin: 0;
		padding: 0;

		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

		font-size: clamp(16px, 1.5vw, 20px);
		color: var(--color-text);
	}

	:global(::selection) {
		background-color: var(--color-brand);
		color: var(--color-text);
	}
</style>
