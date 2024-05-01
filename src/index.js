/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

var src_default = {
	async fetch(request) {
		const tableCodes = {
			0: '1',
			1: '2',
			2: '3',
			3: '4',
		};

		return generateRandomNumber(request, tableCodes);

	}
}

function generateRandomNumber(response, tableCodes) {
	const randomNumber = Math.floor(Math.random() * 4);

	return new Response(`This is a random number between 1 - 4: ${tableCodes[randomNumber]}`);
}


export {
	src_default as default
};
