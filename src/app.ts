import express from "express"
import { ExpressDependencyInjection } from "./core"

import UserController from "./controllers/UserController"
import PostController from "./controllers/PostController"

const app = express()

app.use(ExpressDependencyInjection([UserController, PostController]))

export default app
