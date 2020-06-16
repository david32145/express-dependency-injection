interface ControllerOptions { }

const CONTROLLER_META_KEY = "@controller/meta_key"

export default function Controller(baseUrl = "/", options: ControllerOptions) {
  return (target: Function) => {
    Reflect.defineMetadata(CONTROLLER_META_KEY, {baseUrl}, target)
  }
}