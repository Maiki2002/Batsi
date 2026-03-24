import "dotenv/config"
import express from "express"
import { supabase } from "./lib/supabase"

const app = express()

app.use(express.json())

app.get('/prueba', async (req, res) =>{
    const { data, error } = await supabase.from('programacionCx').select('*')

    res.json({ 
        status: error ? 'error': 'ok',
        supabase: error ? error.message : 'conectado'
    })
})


export { app };