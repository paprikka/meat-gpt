import { writable } from 'svelte/store';
let audio: HTMLAudioElement | null = null;

const isArmed = writable(false);
export const arm = () => {
	console.log('Arm audio player');

	audio = new Audio();
	audio.src = '/silence.mp3';
	audio.volume = 0.5;
	audio
		.play()
		.then(() => isArmed.update(() => true))
		.then(() => {
			console.log('Audio player armed');
			audio!.pause();
		})
		.catch((error) => {
			console.log('Error arming audio player', error);
			isArmed.update(() => false);
		});
	(window as any).AudioAPI = AudioAPI;
};

export const play = async (songPath: string) => {
	if (!audio) return;

	audio.src = songPath;

	await audio.play();

	audio.ontimeupdate = () =>
		currentTime.update(() => {
			return audio!.currentTime;
		});

	audio.onpause = () => {
		if (audio && audio.currentTime > 50) location.href = '/done';
	};
};

export const currentTime = writable(0);

export const AudioAPI = {
	play,
	arm,
	isArmed,
	getElement: () => audio
};
