const http = require("node:http")
const fs = require("fs")

const hostname = "localhost"
const port = 8080

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader("Content-Type", "text/html")

	if (req.url === "/") {
		res.end(fs.readFileSync("./index.html"))
		res.statusCode === 204
	} else if (req.url === "/about") {
		res.end(fs.readFileSync("./about.html"))
		res.statusCode === 204
	} else if (req.url === "/contact-me") {
		res.end(fs.readFileSync("./contact-me.html"))
		res.statusCode === 204
	} else {
		res.statusCode === 404
		res.end(fs.readFileSync("./404.html"))
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})
