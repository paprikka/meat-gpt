<script lang="ts">
	export let isActive = false;
</script>

<div class="container" class:is-active={isActive}>
	<div class="meat-tuxedo">
		<img src="./meat.webp" alt="A rare beef shoulder, isolated on a white background." />
		<div class="eyes" />
		<img src="/guitar.png" class="guitar" class:is-active={isActive} alt="A guitar" />
	</div>
	<header>
		<h1>M<span>e</span>atGPT</h1>
		<h2>Prime answers to rare questions</h2>
	</header>
</div>

<style>
	header {
		display: grid;
		grid-template-rows: auto min-content;
		justify-content: center;
		position: relative;
		top: -2.05rem;

		transition: 0.4s opacity ease-in-out;
	}

	.container {
		transition: 1s translate ease-in-out;
	}

	.container.is-active {
		translate: 0 15vh;
	}

	.container.is-active header {
		opacity: 0;
	}

	h1 {
		font-size: 3.75rem;
		margin: 0;
		line-height: 1;
		font-weight: 800;
		display: inline-block;
	}

	h1 span {
		color: transparent;
		position: relative;
	}
	h1 span::after {
		content: 'e';
		color: var(--color-text);
		position: absolute;
		left: 0;
		z-index: -1;
	}

	h2 {
		margin: 0;
		line-height: 1;
		font-weight: 400;
		font-size: 1rem;
		position: relative;
		top: -0.4em;
		left: 0.2em;
		align-self: start;
	}

	.meat-tuxedo {
		position: relative;
	}

	.container.is-active .meat-tuxedo {
		animation: dance-up-and-down 0.8s 1s ease-in-out infinite both;
	}

	.eyes {
		position: absolute;
		display: block;
		inset: 25% 15% 15% 15%;
		background-image: url(/eyes.png);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		opacity: 0;
		transition: 1s 1s opacity ease-in-out;
	}

	.container.is-active .eyes {
		opacity: 1;
	}

	img {
		height: auto;
		max-width: 100%;
		vertical-align: bottom;
	}

	.guitar {
		position: absolute;
		width: 60%;
		bottom: 0;
		right: 0;
		z-index: 1;
		opacity: 0;
		transition: 0.6s 2.4s opacity ease-in-out;
	}

	.guitar.is-active {
		opacity: 1;
	}

	@keyframes dance-up-and-down {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-0.5rem);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
