import app from "./app"

const port = Number(process.env.PORT) || 8000

app.listen(port, '127.0.0.1', () => {
    console.log(`Server running on port ${port}`)
})