<div class="page-container">
	<slot />
</div>

<style>
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
