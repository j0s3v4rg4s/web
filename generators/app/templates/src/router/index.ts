import { Router } from "express";
const index: Router = Router()


index.get('/', (req, res, nex) => {
    res.send("Hola index 8")
})

export default index