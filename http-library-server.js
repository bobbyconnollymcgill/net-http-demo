const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
    console.log(req, res)
    res.end()
})


server.listen(3000, () => {
    console.log("Started listening on port 3000")
} )


console.log("end of program", server.listening)