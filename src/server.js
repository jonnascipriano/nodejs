import http from "http"

const server = http.createServer((req, res) => {
    return res.end("Resposta do Back-End!")
})

server.listen(3333)
console.log('teste')