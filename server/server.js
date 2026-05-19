import http from 'http'
import { appendFile } from 'fs/promises'

const myServer = http.createServer(async (req, res) => {

    if (req.url === '/favicon.ico') return res.end()

    // Create proper URL object
    const myUrl = new URL(req.url, `http://${req.headers.host}`)

    console.log(req.headers.host)

    // Log request
    const log = `${Date.now()}: ${req.url} request received\r\n`

    try {
        await appendFile('./log.txt', log)

        switch (myUrl.pathname) {

            case '/':
                res.end('Home Page')
                break

            case '/about':

                // Query parameter
                const name = myUrl.searchParams
                console.log(name.get('name'))

                res.end(`Hello ${name}`)
                break

            case '/contact':
                res.end('This is contact page')
                break

            default:
                res.statusCode = 404
                res.end('404 Page Not Found')
        }

    } catch (err) {

        console.log(err)

        res.statusCode = 500
        res.end('Internal Server Error')
    }
})

myServer.listen(8000, () =>
    console.log('Server is running on port 8000')
)