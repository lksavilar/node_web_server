import express from'express'
import path from'path'

export const startServer = (options) => {
    const { port, public_patch = 'public'} = options
    console.log(port)
    console.log(public_patch)

    const app = express()

    // Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_patch))  // contenido estático que ponemos disponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_patch}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port} `)
    })

}
