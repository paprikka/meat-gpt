<script lang="ts">
	import { captions } from '../lyrics';
	import { currentTime } from '../player';
	let line: string | null = '';

	$: {
		line =
			captions.findLast((captionLine) => {
				return captionLine.offsetSeconds < $currentTime;
			})?.text || '';

		console.log({ line });
	}
</script>

{#if line}
	<div class="container">
		<p>
			<span>
				{#each line.split('') as char}
					<em style:--r={Math.random()} class="char">{char}</em>
				{/each}
			</span>
		</p>
	</div>
{/if}

<style>
	.container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 20vh;
		z-index: 1;
		display: grid;
		place-content: center;
		font-size: 2rem;
		color: yellow;
		grid-template-columns: 90%;
		stroke: 1px;
	}

	@media all and (min-width: 768px) {
		.container {
			height: 30vh;
		}
	}

	.container p {
		line-height: 1.5;
		text-align: center;
		position: relative;
	}
	.container span {
		display: inline;
		padding: 0 0.2em;
		margin-bottom: 1rem;
		font-size: var(--font-size);
		font-family: 'Courier New', Courier, monospace;
		font-weight: 500;
		background-color: rgba(0, 0, 0, 0.6);
		box-shadow: 0 0 0 0.3rem rgba(0, 0, 0, 0.6);
	}

	.container span::before,
	.container span::after {
		font-size: 0.75em;
		vertical-align: super;
		display: inline-block;
		animation: wobbleUpAndDownAndRotate 0.7s ease-in-out 0s infinite both;
		transform-origin: 50%;
	}
	.container span::before {
		content: '♫ ';
	}
	.container span::after {
		content: '♪ ';
	}

	.container .char {
		white-space: pre;
		display: inline-block;
		animation: wobbleUpAndDownAndRotate 0.7s ease-in-out 0s infinite both;
		animation-delay: calc((var(--r) - 0.5) * 2s);
		animation-duration: calc(0.3s + var(--r) * 0.8s);
	}

	@keyframes wobbleUpAndDownAndRotate {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
