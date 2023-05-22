<script lang="ts">
	export let isActive = false;
	const dogs = Array(10).fill('');
	const animationScale = 2;
</script>

<div class="merdogs" class:is-active={isActive}>
	{#each dogs as _, i}
		<div
			class="merdog-move"
			style:animation-delay="{Math.random() * 2 * animationScale}s"
			style:animation-duration="{animationScale * (Math.random() * 3 + 2)}s"
			style:animation-iteration-count="1"
		>
			<div
				class="merdog-outer"
				style:top="{Math.random() * 100}vh"
				style:scale={Math.random() * 3 + 0.7}
				style:animation-delay="{Math.random() * 2 * animationScale}s"
			>
				<div
					class="merdog-rotate"
					style:animation-duration="{(Math.random() * 2 + 0.5) * animationScale}s"
				>
					<img class="merdog" src="/fish.png" alt="fish" />
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.merdogs {
		pointer-events: none;
		position: fixed;
		z-index: 100;
		inset: 0;
		visibility: hidden;
		display: none;
	}

	.merdogs.is-active {
		visibility: visible;
		display: block;
	}

	.merdog {
		rotate: 90deg;
		transform-origin: 50%;
		width: 100%;
		height: 100%;
	}

	.merdog-move {
		animation: merdog-enter 1s 0s infinite both;
	}

	@keyframes merdog-enter {
		0% {
			translate: -100% 0;
		}
		100% {
			translate: calc(120vw + 100%) 0;
		}
	}

	.merdog-rotate {
		transform-origin: 70% 50%;
		animation: merdog-rotate 1s 0s infinite both;
	}

	.merdog-outer {
		position: absolute;
		top: 0;
		left: 0;
		width: 12vw;
		aspect-ratio: 269/465;
		transform-origin: 50%;
		animation: merdog-up-and-down-wobble 1s 0s ease-in-out infinite both;
	}

	@keyframes merdog-up-and-down-wobble {
		0% {
			translate: 0 0;
		}
		25% {
			translate: 0 -30%;
		}
		25% {
			translate: 0 0;
		}

		75% {
			translate: 0 -70%;
		}
		100% {
			translate: 0 0;
		}
	}

	@keyframes merdog-rotate {
		0% {
			rotate: 0deg;
		}
		40% {
			rotate: 30deg;
		}
		70% {
			rotate: -30deg;
		}
		100% {
			rotate: 00deg;
		}
	}
</style>
