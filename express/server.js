const express = require("express")

const bodyParser = require("body-parser")

const PORT = 3000

const app = express()

// NOTE -- 3 ways to end the request-response cycle
// res.end()
// res.send("some text goes here")
// res.json({name:"bla"})

// const stuff = {} // THIS IS REALLY BAD (global var) because it implies that we
// are leaving side-effects around for the next request to maybe be influenced by

// res.json!!!
app.post("/test", (req, res, next) => {
    console.log("body", req.body)

    res.json({ name: "ginger", age: 13 })
})

app.use("/", bodyParser.json())

// This enpoint violates purity because of indeterminism
app.use("/test", (req, res, next) => {
    // console.log("hi from use thinggy")

    // console.log(res.locals)
    // stuff.taco = "yumm!" --- soooo don't use stuff

    res.locals.taco = "yumm!"

    if (Math.random() > 0.5) {
        // res.end(500)
        res.send("BLACKJACK!!!")
    } else {
        next() // This "app.use" is now a middleware because it calls next()
        // res.send("this the `use` handler")
    }
})

app.get("/test", (req, res) => {
    console.log("heyyy get!!!")
    res.send("this the `get` handler")
})

app.put("/test", (req, res) => {
    res.send("this the `put` handler")
})

// app.patch("/test", (req, res) => {
//     console.log("hello????")
//     res.send("this the `patch` handler")
// })

app.delete("/test", (req, res) => {
    // console.log(stuff.taco)
    res.send("this the `delete` handler " + res.locals.taco)
})

app.use("/", (req, res) => {
    console.log("taco")
    res.status(404).send("sorry, not found")
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})
