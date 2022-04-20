import express, { Application, json, Request, Response } from "express";
import { solve } from "./solver";
const app: Application = express();

import simpleOrderInput from '../data/simple-order-input.json'

const requestHeaders = (
    _: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
};

app.use(json())
app.use(requestHeaders)

app.get('/health', (_, response: Response) => {
    response.json({ status: 200 })
})

app.post('/solve', (request: Request, response: Response) => {
    const settledBatchAuction = solve(simpleOrderInput)
    response.status(200).json(settledBatchAuction)
})

export default app;