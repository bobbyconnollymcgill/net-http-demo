const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello taco??")

    socket.on("data", (data) => {
        console.log(data.toString())

        socket.write("Hello taco??")
    })
})

server.listen(8080)




