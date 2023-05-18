<div>
	<img src="./meat.webp" alt="A rare beef shoulder, isolated on a white background." />
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
	}

	h1 {
		font-size: 3.75rem;
		margin: 0;
		line-height: 1;
		font-weight: 800;
		display: inline-block;

		& span {
			color: transparent;
			position: relative;
			&::after {
				content: 'e';
				color: var(--color-text);
				position: absolute;
				left: 0;
				z-index: -1;
			}
		}
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
	img {
		height: auto;
		max-width: 100%;
		vertical-align: bottom;
	}
</style>
