import { RestController, Get, Post } from "../core"
import { Request, Response } from "express"

@RestController("/users")
class UserController {
  
  @Get("/:id")
  public show(request: Request, response: Response) {
    return response.status(200).json({
      ok: true,
      id: request.params.id
    })
  }

  @Post()
  public store() {
    console.log("Store an user")
  }
}

export default UserController
