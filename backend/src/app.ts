import express from "express";

const app = express()

app.use(express.json())

app.get('/prueba', (req, res) =>{
    res.json({ status: "ok", mensaje: "API levantado"})
})

export { app };