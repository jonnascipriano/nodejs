import http from "http"

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === "GET" && url === "/products"){
        return res.end("Lista de produtos!")
    }

    
    if(method === "POST" && url === "/products"){
        return res.writeHead(201).end("Produto cadastrado com sucesso!")
    }

    return res.writeHead(404).end("Rota não encontrada!")
})

server.listen(3333)