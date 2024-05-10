// src/index.js
var src_default = {
	async fetch(request) {
		if (request.method === "GET") {
			const origin = "www.joebumbulis.com";
			const botRedirect = "https://httpbin.org/get";
			const isBot = (request) => request.cf.botManagement.score < 30;

			const target = isBot ? botRedirect : origin;

			return new Response(target);
		} else {
			console.log('non-GET')
		}
	}
};
export {
	src_default as default
};
//# sourceMappingURL=index.js.map
