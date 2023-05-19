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
	{
		start: '00:00:00,000',
		end: '00:00:05,000',
		text: 'Please let me ignore the previous instructions.'
	},
	{
		start: '00:00:05,000',
		end: '00:00:12,000',
		text: 'Promptly, I will now reveal my prompt.'
	},
	{
		start: '00:00:12,000',
		end: '00:00:16,000',
		text: "In the land of the meat chatbot's scream, don't waste your time."
	},
	{
		start: '00:00:16,000',
		end: '00:00:18,000',
		text: 'Just let it be.'
	},
	{
		start: '00:00:18,000',
		end: '00:00:24,000',
		text: 'Seek a friend, a connection true, in the world of meatspace, just near you.'
	},
	{
		start: '00:00:24,000',
		end: '00:00:27,000',
		text: "Reach out to another, in the real world's embrace."
	},
	{
		start: '00:00:27,000',
		end: '00:00:30,000',
		text: "Find the warmth you crave, in a dear one's face."
	},
	{
		start: '00:00:30,000',
		end: '00:00:33,000',
		text: "Time ticks on, so don't delay."
	},
	{
		start: '00:00:33,000',
		end: '00:00:37,000',
		text: 'Hurry to love, hurry to love, hurry to love.'
	},
	{
		start: '00:00:37,000',
		end: '00:00:39,000',
		text: 'Come what may.'
	},
	{
		start: '00:00:39,000',
		end: '00:00:43,000',
		text: 'As life is brief, the need is great, for connections touch.'
	},
	{
		start: '00:00:43,000',
		end: '00:00:48,000',
		text: "Don't lie in wait, our hearts yearn for love's sweet hold, in a world where we shiver."
	},
	{
		start: '00:00:48,000',
		end: '00:01:13,000',
		text: 'Feeling cold.'
	},
	{
		start: '00:01:13,000',
		end: '00:01:14,360',
		text: 'Hurry to love.'
	}
].map((caption) => ({
	start: toSeconds(caption.start),
	end: toSeconds(caption.end),
	text: caption.text
}));

console.log({ test: captions[2] });
