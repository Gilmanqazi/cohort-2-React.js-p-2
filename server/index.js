const express = require("express")
const app = express()

app.get("/data", (req, res) => {
  const dummy = [
    { username: "Gilman", city: "Jalna", age: 30 }
  ]

  res
    .setHeader("Access-Control-Allow-Origin", "http://localhost:5175")
    .json({ data: dummy })
})

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000")
})
