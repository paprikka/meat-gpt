<script lang="ts">
	import Cock from '../components/cock.svelte';
	import Hero from '../components/hero.svelte';

	let searchQuery = '';
	$: isFocused = false;

	const onSubmit = () => {
		const body = `
Hi!

// Placeholder:
// Instead of wasting your time talking to a chatbot
// looking like a slab of meat message someone
// to see if you can meet them in the meatspace™
// (https://www.merriam-webster.com/dictionary/meatspace).

`.trim();
		const subject = `How are you?`;
		window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
	};
</script>

<main>
	<Hero />
	<form on:submit|preventDefault={onSubmit} class:is-focused={isFocused}>
		<input
			type="text"
			bind:value={searchQuery}
			on:focus={() => (isFocused = true)}
			on:blur={() => (isFocused = false)}
			placeholder="Ask me anything"
		/>
		<button type="submit" disabled={!searchQuery.length} aria-label="Answer" />
	</form>
	<p class="tagline">Raising the steaks since 1988</p>
</main>

<footer>
	<nav>
		<a href="/about">About</a>
		<a href="/privacy">Privacy</a>
	</nav>
</footer>

<Cock />

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

	main {
		width: 100vw;
		height: 100vh;
		padding: var(--page-margin);
	}

	/* form  */

	form {
		padding: 0;
		gap: 0.5rem;
		position: relative;

		border: 2px solid var(--color-text);
		border-radius: 0.25rem;
		display: flex;
		transition: 0.25s box-shadow ease-in-out;
		z-index: 2;

		&.is-focused {
			transition-duration: 0.5s;
			border-color: var(--color-brand);
			box-shadow: 0 0 0 100vh rgba(255, 255, 255, 0.7);
		}
	}

	input {
		border: none;
		padding: 0 0 0 0.5rem;
		margin: 0;
		line-height: 3rem;
		font-size: 1rem;
		flex: 1;

		&:focus {
			outline: none;
		}

		&::placeholder {
			font-size: 1rem;
			line-height: 3rem;
		}
	}

	button {
		background: transparent;
		background-image: url(./zoom.svg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 1.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.75;
		position: relative;
		width: 3rem;

		@media (hover: hover) {
			& {
				opacity: 1;
			}
		}

		&[disabled] {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&::before {
			--t: 25%;

			content: '';
			background-color: var(--color-text);
			opacity: 0.3;
			display: block;
			position: absolute;
			left: -0.125rem;
			top: var(--t);
			width: 0.125rem;
			height: calc(100% - var(--t) * 2);
			border-radius: 100rem;
		}
	}

	.tagline {
		margin: 1rem 0 0;
		font-size: 0.75rem;
		text-align: center;
	}

	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--page-margin);
		display: flex;
		gap: 1rem;

		& a {
			color: var(--color-text);
			font-weight: 700;
		}
	}
</style>
