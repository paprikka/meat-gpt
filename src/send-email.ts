export const sendEmail = () => {
	const body = `
Hi!

Writing prompt:

Instead of talking to a Chatbot looking like a slab of meat,
message someone to see if you can meet them in the meatspace™
(https://www.merriam-webster.com/dictionary/meatspace).

`.trim();
	const subject = `How are you?`;
	window.open(
		`mailto:Friend?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
	);

	// location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	setTimeout(() => {
		location.href = 'https://sonnet.io';
	}, 3_000);
};
