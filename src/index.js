// src/index.js
var src_default = {
	async fetch(request, env, context) {
		if (request.method === "GET") {
			 const result = await fetch(request);

			 
			 console.log('result cf object', result.cf)
			 return result
		} else {
			console.log('non-GET')
		}
	}
};
export {
	src_default as default
};
//# sourceMappingURL=index.js.map
