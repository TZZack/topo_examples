import axios from './axios'
import type { ApiReturn } from './interface'

export const fetchVersions = (pkg: string) => {
  return useFetch(
    `https://data.jsdelivr.com/v1/package/npm/${pkg}`, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
  })
    .json<string[]>().data
}

export const testApi = async () => {
  const axiosResponse = await axios<ApiReturn>({
      url: '/topo/test',
      method: 'GET'
  })
  return axiosResponse.data
}
