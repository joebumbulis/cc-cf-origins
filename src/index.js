// src/index.js
var src_default = {
	async fetch(request, env, context) {
		const url = new URL(request.url);

		const someCustomKey = `https://${url.hostname}${url.pathname}`;

		let response = await this.fetch(request, {
			cf: {
				cacheTtl: 5,
				cacheEverything: true,
				cacheKey: someCustomKey,
			},
		})

		response = new Reponse(response.body, response)

		response.headers.set(`Cache-Control`, `max-age=1500`)

		context.waitUntil(caches.default.put(request, response.clone()))

		return response
	}
};
export {
	src_default as default
};
//# sourceMappingURL=index.js.map
