<p align="center">

  # Express Dependency Injection
  
  This app is like the features of NestJS or Spring apps. Build rest api
  of an form practical and fast way using express and dependendy injection.

</p>

## 👨🏼‍💻 Development Contact

David Nascimento

* [Github](https://github.com/david32145)
* [nascimento32145@gmail.com](https://gmail.com)

## 🚀 Technologies

* ts-node-dev; 
* dotenv; 
* typescript; 
* reflect-metadat; 
* express.

## 🎌 What I've learned

* The reflect api; 
* Environment vars; 
* Typescript decorations; 
* REST API.

## 🎥 How Usage

With `decoration` you can declarate the controller like this:

``` ts
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

```

You can be view the full example into `src/app.ts` .

## ✋🏻 Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Install and Running

1. Config you environment;
2. Git clone `git clone https://github.com/david32145/express-dependency-injection` ; 
3. Run `yarn install` or `npm install` for install dependencies;  
4. Copy .env.example to .env and fill with your config. Below an example of `.env` ; 

``` env
PORT=3333
```
5. Run `yarn dev` or `npm run dev` 
6. Edit `src/index.ts` and start the game.
