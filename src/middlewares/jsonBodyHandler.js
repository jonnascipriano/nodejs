export async function jsonBodyHandler(req, res){
    // Adiciona cada chunk
    const buffers = []

    // Coleta os chunks de dados de requisição.
    for await (const chunk of req){
        buffers.push(chunk)
    }

    try {
        // Concatena os chunks e converte para string. Em seguida, converte a string para JSON.
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error){
        req.body = null
    }
    res.setHeader("Content-type", "application/json")

}