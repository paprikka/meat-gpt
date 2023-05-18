<a class="cock" href="https://sonnet.io">
	<img src="/cock.png" alt="A cock." />
</a>

<style>
	.cock {
		position: fixed;
		background: url('/cock.png');
		background-size: contain;
		display: block;
		bottom: 0;
		right: 0;
		width: 15vw;
		overflow: hidden;
		translate: 0 55%;
		transition: 0.3s translate;

		&:active {
			translate: 0 10%;
		}

		@media (hover: hover) {
			&:hover {
				translate: 0;
			}
		}

		& img {
			vertical-align: bottom;
			height: auto;
			max-width: 100%;
		}
	}
</style>
