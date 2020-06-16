import { Router } from "express"
import { CONTROLLER_META_KEY } from "./annotations/Controller"

export default function expressDependencyInjection(controllers: Function[]): Router {
  const mainRoutes = Router()

  controllers.forEach(controller => {
    const data = Reflect.getMetadata(CONTROLLER_META_KEY, controller)
    console.log(data)
  })

  return mainRoutes
}