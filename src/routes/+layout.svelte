<script>
	import SocialMeta from '../components/socialMeta.svelte';
</script>

<slot />

<svelte:head>
	<link rel="prefetch" href="/silence.mp3" />
	<link rel="prefetch" href="/music-alt-shorter.mp3" />
	<script
		async
		defer
		data-domains="meat-gpt.sonnet.io"
		data-website-id="4b8b922b-92a0-4389-995c-130f989ac791"
		src="https://sonnet-events.vercel.app/umami.js"
	></script>

	<SocialMeta
		title="MeatGPT"
		url="https://meat-gpt.sonnet.io/"
		socialImage={{
			absoluteUrl: 'https://meat-gpt.sonnet.io/social.png',
			height: 506,
			width: 1012
		}}
		description="Prime answers to rare questions."
		siteConfig={{
			name: 'MeatGPT',
			twitterCreator: '@rafalpast',
			twitterSite: '@rafalpast'
		}}
	/>
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
