import lyRequest from '@/service'
import { IDataType } from '@/service/login/type'

export function accountSystemUserList(requestUrl: string, queryData: any) {
  return lyRequest.post<IDataType>({
    url: requestUrl,
    data: queryData
  })
}
