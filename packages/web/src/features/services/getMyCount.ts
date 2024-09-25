import apiSafe002, {
  ApiSafe002ResponseOK,
  ApiSafe002RequestQuery,
} from "@kamf-safety/interface/api/safety/apiSafe002";
import { useQuery } from "@tanstack/react-query";

import {
  axiosClient,
  UnexpectedAPIResponseError,
} from "@kamf-safety/web/lib/axios";

export const useGetMyCount = (requestQuery: ApiSafe002RequestQuery) =>
  useQuery<ApiSafe002ResponseOK, Error>({
    queryKey: [apiSafe002.url(), requestQuery],
    queryFn: async (): Promise<ApiSafe002ResponseOK> => {
      const { data, status } = await axiosClient.get(apiSafe002.url(), {
        params: requestQuery,
      });

      switch (status) {
        case 200:
          return data;
        default:
          throw new UnexpectedAPIResponseError();
      }
    },
  });
