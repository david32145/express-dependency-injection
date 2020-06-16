export const METHOD_META_KEY = "@method/meta_key"

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface MethodOption {
  method: Method
  path: string
  methodName: string
}

interface MethodMetadata {
  routes: MethodOption[]
}

/** GET Mapping */
interface GetOptions { }

export function Get(path = "", options?: GetOptions) {
  return (target: any, methodName: string) => {
    const routes = Reflect.getMetadata(METHOD_META_KEY, target, "method") as MethodOption[] || []
    const route: MethodOption = {
      method: 'GET',
      path,
      methodName
    }
    routes.push(route)
    Reflect.defineMetadata(METHOD_META_KEY, routes, target, "method")
  }
}

/** POST Mapping */
interface PostOptions { }

export function Post(path = "", options?: PostOptions) {
  return (target: any, methodName: string) => {
    const routes = Reflect.getMetadata(METHOD_META_KEY, target, "method") as MethodOption[] || []
    const route: MethodOption = {
      method: 'POST',
      path,
      methodName
    }
    routes.push(route)
    Reflect.defineMetadata(METHOD_META_KEY, routes, target, "method")
  }
}

/** PUT Mapping */
interface PutOptions { }

export function Put(path = "", options?: PutOptions) {
  return (target: any, methodName: string) => {
    const routes = Reflect.getMetadata(METHOD_META_KEY, target, "method") as MethodOption[] || []
    const route: MethodOption = {
      method: 'PUT',
      path,
      methodName
    }
    routes.push(route)
    Reflect.defineMetadata(METHOD_META_KEY, routes, target)
  }
}

/** PATCH Mapping */
interface PatchOptions { }

export function Patch(path = "", options?: PatchOptions) {
  return (target: any, methodName: string) => {
    const routes = Reflect.getMetadata(METHOD_META_KEY, target) as MethodOption[] || []
    const route: MethodOption = {
      method: 'PATCH',
      path,
      methodName
    }
    routes.push(route)
    Reflect.defineMetadata(METHOD_META_KEY, routes, target)
  }
}

/** DELETE Mapping */
interface DeleteOptions { }

export function Delete(path = "", options?: PatchOptions) {
  return (target: any, methodName: string) => {
    const routes = Reflect.getMetadata(METHOD_META_KEY, target) as MethodOption[] || []
    const route: MethodOption = {
      method: 'DELETE',
      path,
      methodName
    }
    routes.push(route)
    Reflect.defineMetadata(METHOD_META_KEY, routes, target)
  }
}