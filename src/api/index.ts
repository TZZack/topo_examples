import axios from '@/utils/axios'
import type { TransformResult } from '@/utils/axios/types'

import {CaseTree} from './types'

export const fetchVersions = (pkg: string) => {
  return useFetch(
    `https://data.jsdelivr.com/v1/package/npm/${pkg}`, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
  })
    .json<string[]>().data
}

export const getDemo1 = async () => {
  const axiosResponse = await axios.get({
      url: 'playground/demo1',
  })
  return axiosResponse.data
}

export const fetchCaseTree = async () => {
  return await axios.get<TransformResult<CaseTree[]>>({
    url: 'api/cases',
  })
}