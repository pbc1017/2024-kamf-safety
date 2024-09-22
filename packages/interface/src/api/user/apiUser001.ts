import { HttpStatusCode } from "axios";
import { z } from "zod";

/**
 * @version v0.1
 * @description studentId와 password를 이용하여 로그인을 시도합니다.
 */

const url = () => `/login`;
const method = "POST";

const requestParam = z.object({});

const requestQuery = z.object({});

const requestBody = z.object({
  studentId: z.number().int().positive(),
  password: z.string().max(255),
});

const responseBodyMap = {
  [HttpStatusCode.Ok]: z.object({
    userId: z.string().max(128),
  }),
};

const responseErrorMap = {};

const apiUser001 = {
  url,
  method,
  requestParam,
  requestQuery,
  requestBody,
  responseBodyMap,
  responseErrorMap,
};

type ApiUser001RequestParam = z.infer<typeof apiUser001.requestParam>;
type ApiUser001RequestQuery = z.infer<typeof apiUser001.requestQuery>;
type ApiUser001RequestBody = z.infer<typeof apiUser001.requestBody>;
type ApiUser001ResponseOK = z.infer<(typeof apiUser001.responseBodyMap)[200]>;

export default apiUser001;

export type {
  ApiUser001RequestParam,
  ApiUser001RequestQuery,
  ApiUser001RequestBody,
  ApiUser001ResponseOK,
};
