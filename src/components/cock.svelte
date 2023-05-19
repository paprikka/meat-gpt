<script lang="ts">
	import { currentTime } from '../player';

	export let isActive = false;
	// let isActive = true;
	let isTalking = false;

	$: {
		isTalking = $currentTime > 10;
	}
</script>

<a class="cock" class:is-active={isActive} href="https://sonnet.io" target="_blank">
	<img src="/cock.png" class="face" alt="A cock." />
	<img src="/beak.png" class="beak" class:is-talking={isTalking} alt="A beak." />
</a>

<style>
	.cock {
		position: fixed;
		display: block;
		bottom: 0;
		right: 0;
		width: 15vw;
		overflow: hidden;
		z-index: 10;
		translate: 0 55%;
		transition: 0.3s translate, 0.3s width, 0.3s rotate;
	}
	.beak {
		position: absolute;
		left: 6%;
		top: 43.9%;
		width: 27%;
		height: auto;
		z-index: 0;
		transform-origin: 100% 50%;
		rotate: 0deg;
	}

	.beak.is-talking {
		animation: talk 0.5s 0s linear infinite both;
	}

	.cock.is-active {
		rotate: 45deg;
		width: 30vw;
		translate: 0.3rem 5.4rem;
	}

	@media all and (min-width: 768px) {
		.cock {
			width: 10vw;
		}

		.cock.is-active {
			rotate: 0deg;
			width: 20vw;
			translate: 0rem 10rem;
		}
	}

	@media (hover: hover) {
		.cock:hover {
			translate: 0;
		}
	}

	.face {
		vertical-align: bottom;
		height: auto;
		max-width: 100%;
		width: 100%;
	}
	.cock:active {
		translate: 0 10%;
	}

	@keyframes talk {
		from,
		24%,
		to,
		76% {
			rotate: 0deg;
		}

		25%,
		75% {
			rotate: -15deg;
		}
	}
</style>
