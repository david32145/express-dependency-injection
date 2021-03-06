interface ControllerOptions { }

export const CONTROLLER_META_KEY = "@controller/meta_key"

export interface ControllerData {
  baseUrl: string
}

export default function Controller(baseUrl = "/", options?: ControllerOptions) {
  return (target: Function) => {
    Reflect.defineMetadata(CONTROLLER_META_KEY, {baseUrl}, target)
  }
}