import http from "http"

const server = http.createServer( async (req, res) => {
    const {method, url} = req

    if(method === "GET" && url === "/products"){
        return res.end("Lista de produtos!")
    }

    
    if(method === "POST" && url === "/products"){
        const buffers = []

        for await (const chunk of req){
            buffers.push(chunk)
        }

        console.log(Buffer.concat(buffers).toString())

        return res.writeHead(201).end("Produto cadastrado com sucesso!")
    }

    return res.writeHead(404).end("Rota não encontrada!")
})

server.listen(3333)