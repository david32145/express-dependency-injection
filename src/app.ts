import express from "express"
import { ExpressDependencyInjection } from "./core"

import UserController from "./controllers/UserController"

const app = express()

app.use(ExpressDependencyInjection([UserController]))

export default app
