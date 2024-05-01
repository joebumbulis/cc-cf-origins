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
		return generateRandomNumber(request);

	}
}

function generateRandomNumber(response) {
	return new Response(`Random Number: ${Math.floor(Math.random() * 4)}`);
}


export {
	src_default as default
};
