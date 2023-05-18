<div class="page-container">
	<slot />
</div>

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

	.page-container {
		width: 100vw;
		height: 100vh;
		padding: var(--page-margin);
	}

	@media all and (min-width: 768px) {
		.page-container {
			max-width: 30rem;
			margin: 0 auto;
		}
	}
</style>
