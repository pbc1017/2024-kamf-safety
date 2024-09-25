import apiSafe001 from "@kamf-safety/interface/api/safety/apiSafe001";

import {
  axiosClient,
  UnexpectedAPIResponseError,
} from "@kamf-safety/web/lib/axios";

import type {
  ApiSafe001RequestBody,
  ApiSafe001ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe001";

const postSafetyCount = async (
  requestBody: ApiSafe001RequestBody,
): Promise<ApiSafe001ResponseOK> => {
  const { data, status } = await axiosClient.post(
    apiSafe001.url(),
    requestBody,
  );

  switch (status) {
    case 201:
      return data;
    default:
      throw new UnexpectedAPIResponseError();
  }
};

export default postSafetyCount;
