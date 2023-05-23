<script lang="ts">
	import Captions from '../components/captions.svelte';
	import Cock from '../components/cock.svelte';
	import Footer from '../components/footer.svelte';
	import Hero from '../components/hero.svelte';
	import Merdogs from '../components/merdogs.svelte';
	import PageContainer from '../components/page-container.svelte';
	import PathText from '../components/path-text.svelte';
	import { lyrics, songPath } from '../lyrics';
	import { AudioAPI, currentTime } from '../player';
	import { wait } from '../wait';
	import fishIMG from '../components/fish.png';
	import doggoIMG from '../components/doggo.png';
	import bgIMG from './bg-active.png';
	import Fishdog from '../components/fishdog.svelte';
	import { onMount } from 'svelte';

	let searchQuery = '';
	let isFocused = false;
	let isSubmitting = false;
	let isWaitingToSubmit = false;

	onMount(() => AudioAPI.preload(songPath));

	const onFocus = () => {
		isFocused = true;
		AudioAPI.arm();
	};

	const onSubmit = async () => {
		if (!AudioAPI.isArmed) return alert('Cannot play audio :(');
		isWaitingToSubmit = true;

		await wait(2000);

		isSubmitting = true;

		AudioAPI.play(songPath);
	};
</script>

<div
	class="background-container"
	style:background-image={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${bgIMG})`}
	class:is-active={isSubmitting}
/>
<PageContainer>
	<Captions />
	<div class="content" class:is-active={isSubmitting}>
		<Hero isActive={isSubmitting} />

		<main class:is-hidden={isSubmitting}>
			<form on:submit|preventDefault={onSubmit} class:is-focused={isFocused}>
				<input
					type="text"
					value={isWaitingToSubmit ? 'Processing...' : searchQuery}
					on:input={(e) => (searchQuery = e.currentTarget.value)}
					on:focus={onFocus}
					on:blur={() => (isFocused = false)}
					placeholder="Ask me anything"
					disabled={isWaitingToSubmit}
				/>
				<button
					type="submit"
					disabled={!searchQuery.length}
					aria-label="Answer"
					class:is-active={isWaitingToSubmit}
				/>
			</form>
			<p class="tagline">Raising the steaks since 1988</p>
		</main>
	</div>

	<Footer>
		<nav class:is-hidden={isSubmitting}>
			<a href="https://sonnet.io" target="_blank">About</a>
			<a href="/privacy">Privacy</a>
		</nav>
	</Footer>
	<Cock isActive={isSubmitting} />

	{#if isSubmitting}
		<PathText />
	{/if}

	<img
		src={doggoIMG}
		class="doggo"
		class:is-active={$currentTime > 36.68}
		alt="Doggo upside down"
	/>

	<img
		src={doggoIMG}
		class="doggo is-flipped"
		class:is-active={$currentTime > 38.66}
		alt="Doggo upside down"
	/>

	{#if $currentTime > 32}
		<Fishdog />
	{/if}
</PageContainer>

<Merdogs isActive={$currentTime > 36} />

{#if isSubmitting || isWaitingToSubmit}
	<div class="block-interactions" />
{/if}

<style>
	.background-container {
		background-size: cover;
		width: 100vw;
		height: 100vh;
		position: absolute;
		opacity: 0;
		transition: 0.6s opacity ease-in-out;
	}

	.background-container.is-active {
		opacity: 1;
	}

	.content {
		display: contents;

		--transition-duration: 0.6s;
	}

	@media all and (min-width: 768px) {
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
		}
	}

	main {
		opacity: 1;
		visibility: visible;
		transition: var(--transition-duration) opacity, var(--transition-duration) visibility;
	}

	main.is-hidden {
		opacity: 0;
		visibility: hidden;
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
		transition-duration: var(--transition-duration);
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
		background-image: url(/zoom.svg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 1.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.75;
		position: relative;
		width: 3rem;
	}

	button.is-active {
		background: none transparent;
	}
	button.is-active::after {
		content: '';
		display: block;
		position: absolute;

		inset: 0.5rem;
		border-radius: 100rem;
		border: 0.25rem solid var(--color-text);
		border-top-color: transparent;
		border-bottom-color: transparent;

		animation: rotate 1s linear infinite;
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

	nav {
		opacity: 1;
		visibility: visible;
		transition: var(--transition-duration) opacity ease-in-out;
	}

	nav.is-hidden {
		opacity: 0;
		visibility: hidden;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.doggo {
		position: fixed;
		top: -1rem;
		left: -1rem;

		opacity: 0;
		transform-origin: 0 0;
		translate: -100% 0;
	}

	.doggo.is-flipped.is-active {
		scale: -1.2 1;
		left: unset;
		right: 0;
		translate: 133% 0;
	}

	.doggo.is-active {
		opacity: 1;
		translate: 0 0;
		animation: doggo-dance 0.27s 0s infinite both;
	}

	@keyframes doggo-dance {
		0%,
		100% {
			rotate: 0deg;
		}
		50% {
			rotate: -5deg;
		}
	}

	.block-interactions {
		z-index: 10000;
		position: fixed;
		inset: 0;
		user-select: none;
		cursor: url('/cursor-not-allowed.png') 0 0, auto;
	}
</style>
