import { RestController, Get, Post } from "../core"
import { Request, Response } from "express"

@RestController("/posts")
class UserController {
  
  @Get("/:id")
  public show(request: Request, response: Response) {
    return response.status(200).json({
      ok: true,
      id: request.params.id
    })
  }

  @Post()
  public store(request: Request, response: Response) {
    return response.status(200).json(request.body)
  }
}

export default UserController
