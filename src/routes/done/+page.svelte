<script>
	import { sendEmail } from '../../send-email';
</script>

<div class="container">
	<button on:click={sendEmail}>❤️ click me</button>
</div>

<style>
	.container {
		position: fixed;
		inset: 0;
		background-color: var(--color-text);
		display: grid;
		place-content: center;
	}

	button {
		border: 2px solid white;
		font-size: 2rem;
		color: var(--color-text);
		background: var(--color-bg);
		padding: 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
	}
</style>
