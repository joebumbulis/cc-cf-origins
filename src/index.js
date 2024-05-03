// src/index.js
var src_default = {
	async fetch(request) {
		const tableCodes = {
			0: "1",
			1: "2",
			2: "3",
			3: "4"
		};

		if (request.method === "GET") {
			let generateRandomNumber = function (request, tableCodes) {
				const randomNumber = Math.floor(Math.random() * 4);

				return tableCodes[randomNumber];
			};
			return new Response(`Random Number Generated: ${generateRandomNumber(request, tableCodes)}`);

		} else {
			return new Response("please use GET");
		}
	}
};
export {
	src_default as default
};
//# sourceMappingURL=index.js.map
