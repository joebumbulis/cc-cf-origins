// src/index.js
var src_default = {
	async fetch(request) {
		if (request.method === "GET") {
			const tableCodes = {
				0: "1",
				1: "2",
				2: "3",
				3: "4"
			};

			function generateRandomNumber(response, tableCodes) {
				const randomNumber = Math.floor(Math.random() * 4);
				return new Response(`This is a random number between 1 - 4: ${tableCodes[randomNumber]}`);
			}

			return generateRandomNumber(request, tableCodes);
		} else {
			return new Response('please use GET')
		}
	}
};

export {
	src_default as default
};
//# sourceMappingURL=index.js.map
