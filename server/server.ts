import express, {Request, Response} from "express";

const PORT = 8000
const app = express()

app.get('/api', (req: Request, res: Response): void => {
  res.json({message: 'Hello from server'})
})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))