import { Router } from "express"
import { CONTROLLER_META_KEY, ControllerData } from "./annotations/Controller"
import { METHOD_META_KEY, MethodOption } from "./annotations/Methods"

export default function expressDependencyInjection(controllers: Function[]): Router {
  const mainRoutes = Router()

  controllers.forEach(controller => {
    const instance = Object.create(controller.prototype)
    const data: ControllerData = Reflect.getMetadata(CONTROLLER_META_KEY, controller)
    const methods: MethodOption[] = Reflect.getMetadata(METHOD_META_KEY, instance, "method")
    methods.forEach(method => {
      const path = data.baseUrl.concat(method.path).replace("//", "/")
      switch (method.method) {
        case "GET":
          mainRoutes.get(path, instance[method.methodName])
          break
        case "POST":
          mainRoutes.post(path, instance[method.methodName])
          break
        case "PUT":
          mainRoutes.put(path, instance[method.methodName])
          break
        case "PATCH":
          mainRoutes.patch(path, instance[method.methodName])
          break
        case "DELETE":
          mainRoutes.delete(path, instance[method.methodName])
          break
      }
    })
  })

  return mainRoutes
}