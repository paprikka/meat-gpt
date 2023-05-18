<script lang="ts">
	import Cock from '../components/cock.svelte';
	import Footer from '../components/footer.svelte';
	import Hero from '../components/hero.svelte';

	let searchQuery = '';
	$: isFocused = false;

	const talk = () => {
		const synth = window.speechSynthesis;
		const utterance = new SpeechSynthesisUtterance(
			`
	In the realm of digital, a chatbot we engage, A slab of meat resemblance, we turn the page. Seek the connection that transcends the screen, To the world of Meatspace™, where true bonds are seen.

Converse with a soul, not a programmed mind, For in the land of human hearts, true ties we bind. Venture forth to Meatspace™, the world to explore, And find a lasting friendship forevermore.

Don't waste your hours, in digital embrace, Seek out the warmth of life, in Meatspace™ grace. For when the screen goes dark, and the chatbot's gone, It's in the hearts of fellow beings, we truly belong.`.trim()
		);
		synth.speak(utterance);
	};

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

		talk();

		// setTimeout(() => {
		// 	window.open(
		// 		`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
		// 	);
		// }, 1000);
	};
</script>

<div class="content">
	<Hero />

	<main>
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
</div>

<Footer>
	<nav>
		<a href="/about">About</a>
		<a href="/privacy">Privacy</a>
	</nav>
</Footer>

<Cock />

<style>
	.content {
		display: contents;
	}

	@media all and (min-width: 768px) {
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
		}
	}

	form {
		padding: 0;
		gap: 0.5rem;
		position: relative;

		border: 2px solid var(--color-text);
		border-radius: 0.25rem;
		display: flex;
		transition: 0.25s box-shadow ease-in-out;
		z-index: 2;
	}

	form.is-focused {
		transition-duration: 0.5s;
		border-color: var(--color-brand);
		box-shadow: 0 0 0 100vh rgba(255, 255, 255, 0.7);
	}

	input {
		border: none;
		padding: 0 0 0 0.5rem;
		background: transparent;
		margin: 0;
		line-height: 3rem;
		font-size: 1rem;
		flex: 1;
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		font-size: 1rem;
		line-height: 3rem;
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
	}

	@media (hover: hover) {
		button {
			opacity: 1;
		}
	}

	button[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button::before {
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

	.tagline {
		margin: 1rem 0 0;
		font-size: 0.75rem;
		text-align: center;
	}
</style>
