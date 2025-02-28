import apiUser001 from "@kamf-safety/interface/api/user/apiUser001";

import {
  axiosClient,
  UnexpectedAPIResponseError,
} from "@kamf-safety/web/lib/axios";

import type {
  ApiUser001RequestBody,
  ApiUser001ResponseOK,
} from "@kamf-safety/interface/api/user/apiUser001";

const postLogin = async (
  requestBody: ApiUser001RequestBody,
): Promise<ApiUser001ResponseOK> => {
  const { data, status } = await axiosClient.post(
    apiUser001.url(),
    requestBody,
  );

  switch (status) {
    case 201:
      return data;
    default:
      throw new UnexpectedAPIResponseError();
  }
};

export default postLogin;
