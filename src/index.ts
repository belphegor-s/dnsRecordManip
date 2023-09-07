import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8080;

import express, { Request, Response } from "express";
import cors from "cors";
import dnsRecordsRoute from "./routes/dnsRecord";
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Server is live 🍵')
})
app.use(dnsRecordsRoute)

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});