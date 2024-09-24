import apiSafe001 from "@kamf-safety/interface/api/safety/apiSafe001";

import {
  axiosClient,
  defineAxiosMock,
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
      console.log(data);
      return apiSafe001.responseBodyMap[201].parse(data);
    default:
      throw new UnexpectedAPIResponseError();
  }
};

export default postSafetyCount;

defineAxiosMock(mock => {
  mock
    .onPost(apiSafe001.url(), { userId: "1", increment: 15, decrement: 20 })
    .reply(() => [201, { total: 100, myIncrement: 15, myDecrement: 20 }]);
});
