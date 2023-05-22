<script lang="ts">
	import { onMount } from 'svelte';
	import { lyrics, songDurationMSec } from '../lyrics';
	import { tick } from 'svelte';
	import { currentTime } from '../player';

	let totalDuration = songDurationMSec;
	let textOffset = -100_000;

	function createSPath(x: number, y: number, endX: number, endY: number, n: number) {
		const dx = (endX - x) / n;
		const dy = (endY - y) / n;
		let path = `M${x},${y}`;

		for (let i = 1; i <= n; i++) {
			const cx1 = x + (i - 0.5) * dx;
			const cy1 = i % 2 === 1 ? y : endY;
			const cx2 = x + i * dx;
			const cy2 = i % 2 === 1 ? endY : y;

			path += ` C${cx1},${cy1} ${cx1},${cy2} ${cx2},${cy2}`;
		}

		return path;
	}

	function createCurvedPath(
		x: number,
		y: number,
		endX: number,
		endY: number,
		points: [number, number][]
	) {
		let path = `M${x},${y}`;

		points.forEach((point, index) => {
			const nextPoint = points[index + 1] || [endX, endY];
			const controlX = (point[0] + nextPoint[0]) / 2;
			const controlY = (point[1] + nextPoint[1]) / 2;

			path += ` Q${point[0]},${point[1]} ${controlX},${controlY}`;
		});

		path += ` T${endX},${endY}`;
		return path;
	}

	// get page dimensions
	let rect: DOMRect | null = null;
	let curvePath: string | null = null;
	// const curvePath = createSPath(0, 0, 300, 300);
	// const curvePath = createSpiralPath(rect.width / 2, rect.height / 2, 2, rect.width, rect.height);

	onMount(async () => {
		rect = document.body.getBoundingClientRect();
		// curvePath = createSPath(0, 0, rect.width * 0.8, rect.height);
		curvePath = createSPath(
			rect.width * -0.2,
			rect.height / 2,
			rect.width * 0.8,
			rect.height * 0.95,
			3
		);

		await tick();
	});

	const play = () => {
		const path = document.querySelector<SVGPathElement>('#text-curve')!;
		const pathLength = path.getTotalLength();
		const text = document.querySelector<SVGTextPathElement>('#text-path')!;
		const textLength = text.getComputedTextLength();
		const startOffset = pathLength;
		textOffset = startOffset;

		const startedAt = Date.now();

		const loop = () => {
			const progress = (Date.now() - startedAt) / totalDuration;
			textOffset = startOffset - progress * textLength;
			if (progress < 1) requestAnimationFrame(loop);
		};

		requestAnimationFrame(loop);
	};
	let isPlaying = false;
	let isDone = false;
	$: {
		if ($currentTime > 12 && !isPlaying) {
			isPlaying = true;
			play();
		}

		isDone = $currentTime > 33;
	}
</script>

{#if rect}
	<svg
		class:is-done={isDone}
		width={rect.width}
		height={rect.height}
		viewBox="0 0 {rect.width} {rect.height}"
		fill="transparent"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path id="text-curve" d={curvePath} />
		<text width="100%" style="transform:translate3d(0,0,0);">
			<textPath
				style="transform:translate3d(0,0,0);"
				alignment-baseline="central"
				xlink:href="#text-curve"
				startOffset={textOffset}
				id="text-path">{lyrics}</textPath
			>
		</text>
	</svg>
{/if}

<style>
	svg {
		position: absolute;
		inset: 0;
		width: 100%;
		z-index: 1;
		animation: fade-in 1s ease-in both;
	}

	svg.is-done {
		animation: fade-out 3s ease-in both;
	}

	path {
		stroke: transparent;
		fill: transparent;
	}

	textPath {
		font-size: 2rem;
		fill: yellow;

		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
		opacity: 0.5;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			filter: blur(2rem);
		}
	}
</style>
