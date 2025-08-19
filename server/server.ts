import express, {Application} from "express";
import {apiRouter} from "./routes/apiRouter";

const PORT: number = 8000
const app: Application = express()

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))