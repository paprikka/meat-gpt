<footer>
	<slot />
</footer>

<style>
	footer :global(nav) {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--page-margin);
		display: flex;
		gap: 1rem;
	}

	footer :global(nav a) {
		color: var(--color-text);
		font-weight: 700;
	}
</style>
