<script lang="ts">
	import Footer from './footer.svelte';
	import { sendEmail } from '../send-email';
</script>

<div class="container">
	<main>
		<div class="anim-wrapper">
			<p>
				<button on:click={sendEmail}><strong>❤️</strong> click me</button>
			</p>
		</div>
	</main>

	<div class="footer-wrapper">
		<Footer>
			<nav>
				<a class="me" href="https://sonnet.io" target="_blank">Made with 🐐 and Rafal</a>

				<span
					>Original music by <a href="https://itch.io/profile/dos88" target="_blank">DOS88</a></span
				>
			</nav>
		</Footer>
	</div>
</div>

<style>
	.container {
		position: fixed;
		inset: 0;
		z-index: 100000;
	}

	main {
		height: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}

	.anim-wrapper {
		animation: 8s ease-out 0s rotate;
	}

	p {
		margin: 0;
		font-weight: 800;
		text-transform: uppercase;
		font-size: 1.25rem;
		animation: 8s ease-out 0s scale;
	}

	button {
		color: var(--color-text);
		font-weight: 700;
		font-size: 2rem;
		background: var(--color-bg);
		border: none;
		padding: 0.5rem 0.75rem;
		cursor: pointer;
		box-shadow: 0 0 0 0.3rem;
		border-radius: 0.5rem;
	}

	button strong {
		display: inline-block;
		transition: 0.3s scale, 0.3s rotate;
		text-shadow: 0 0 0.75rem red;
	}

	@media (hover: hover) {
		button:hover {
			background-color: var(--color-text);
			color: var(--color-bg);
			box-shadow: 0 0 0 0.3rem var(--color-text);
		}

		button:hover strong {
			scale: 2.5;
		}
	}

	button:active {
		background-color: var(--color-text);
		color: var(--color-bg);
		box-shadow: 0 0 0 0.3rem var(--color-text);
	}

	button:active strong {
		scale: 2.5;
		rotate: -20deg;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	nav a {
		font-size: 1rem;
	}

	nav a.me {
		font-size: 1.25rem;
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 720deg;
		}
	}

	@keyframes scale {
		from {
			transform: scale(0.2);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	.footer-wrapper {
		animation: 2s ease-out 7s scale both;
	}
</style>
