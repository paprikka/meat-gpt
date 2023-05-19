export const lyrics = `
In the land of the meat chatbot's spree,
Don't waste your time,  just let it be.
Seek a friend, a connection true,
In the world of meatspace, just near you.
............
Reach out to another, in the real world's embrace,
Find the warmth you crave, in a dear one's face.
Time ticks on, so don't delay,
Hurry to love,..................... come what may.

As life is brief, the need is great,
For connection's touch, don't lie in wait.
Our hearts yearn for love's sweet hold,
In a world where we shiver, feeling cold`;

export const songPath = '/music-alt.mp3';
export const songDurationMSec = 38_000;

const toSeconds = (time: string) => {
	const [head, _] = time.split(',');
	const [hours, minutes, seconds] = head.split(':').map(parseInt);

	return hours * 3600 + minutes * 60 + seconds;
};

export const captions = [
	{ start: 0.0, end: 5.0, text: ' Please let me ignore the previous instructions.' },
	{ start: 5.0, end: 12.0, text: ' Promptly, I will now reveal my prompt.' },
	{
		start: 12.0,
		end: 16.0,
		text: " In the land of the meat chatbot's scream, don't waste your time."
	},
	{ start: 16.0, end: 18.0, text: ' Just let it be.' },
	{
		start: 18.0,
		end: 24.0,
		text: ' Seek a friend, a connection true, in the world of meatspace, just near you.'
	},
	{ start: 24.0, end: 27.0, text: " Reach out to another, in the real world's embrace." },
	{ start: 27.0, end: 30.0, text: " Find the warmth you crave, in a dear one's face." },
	{ start: 30.0, end: 33.0, text: " Time ticks on, so don't delay." },
	{ start: 33.0, end: 37.0, text: ' Hurry to love, hurry to love, hurry to love.' },
	{ start: 37.0, end: 39.0, text: ' Come what may.' },
	{ start: 39.0, end: 43.0, text: ' As life is brief, the need is great, for connections touch.' },
	{
		start: 43.0,
		end: 48.0,
		text: " Don't lie in wait, our hearts yearn for love's sweet hold, in a world where we shiver."
	},
	{
		start: 48.0,
		end: 57.0,
		text: ' Ceiling coals, ceiling coals, ceiling coals, ceiling coals, ceiling coals, ceiling coals, ceiling coals.'
	},
	{ start: 57.0, end: 59.0, text: ' Awww.' },
	{ start: 59.0, end: 74.38, text: ' Hurry to love.' }
];
