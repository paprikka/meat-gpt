<a class="cock" href="https://sonnet.io">
	<img src="/cock.png" alt="A cock." />
</a>

<style>
	.cock {
		position: fixed;
		display: block;
		bottom: 0;
		right: 0;
		width: 15vw;
		overflow: hidden;
		translate: 0 55%;
		transition: 0.3s translate;
	}

	@media all and (min-width: 768px) {
		.cock {
			width: 10vw;
		}
	}

	@media (hover: hover) {
		.cock:hover {
			translate: 0;
		}
	}

	.cock img {
		vertical-align: bottom;
		height: auto;
		max-width: 100%;
		width: 100%;
	}
	.cock:active {
		translate: 0 10%;
	}
</style>
