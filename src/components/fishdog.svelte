<script lang="ts">
	import fishIMG from '../components/fish.png';
</script>

<div class="container">
	<div class="fish-wrap"><div class="fish" style:background-image={`url(${fishIMG})`} /></div>
</div>

<style>
	.container {
		position: fixed;
		inset: 0;
		display: grid;
		z-index: 100;
		place-content: center;
		pointer-events: none;
	}

	.fish-wrap {
		/* need a fix for Safari which doesn't handle animating multiple transform properties well here so opted in for animation layers*/
		animation: 5s ease-out 0s rotate;
	}
	.fish {
		display: block;
		aspect-ratio: 279/465;
		width: 10vw;
		position: relative;
		background-size: contain;
		animation: 5s ease-out 0s fish both;
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 720deg;
		}
	}

	@keyframes fish {
		from {
			transform: scale(0.2);
			opacity: 0;
		}
		70% {
			transform: scale(5);
			opacity: 1;
		}
		to {
			transform: scale(5);
			opacity: 0;
		}
	}
</style>
