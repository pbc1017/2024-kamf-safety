import { HttpStatusCode } from "axios";
import { z } from "zod";

/**
 * @version v0.1
 * @description studentId와 password를 이용하여 로그인을 시도합니다.
 */

const url = () => `/count`;
const method = "GET";

const requestParam = z.object({});

const requestQuery = z.object({
  userId: z.string().max(128),
});

const requestBody = z.object({});

const responseBodyMap = {
  [HttpStatusCode.Ok]: z.object({
    total: z.number().int(),
    myIncrement: z.number().int(),
    myDecrement: z.number().int(),
  }),
};

const responseErrorMap = {};

const apiSafe002 = {
  url,
  method,
  requestParam,
  requestQuery,
  requestBody,
  responseBodyMap,
  responseErrorMap,
};

type ApiSafe002RequestParam = z.infer<typeof apiSafe002.requestParam>;
type ApiSafe002RequestQuery = z.infer<typeof apiSafe002.requestQuery>;
type ApiSafe002RequestBody = z.infer<typeof apiSafe002.requestBody>;
type ApiSafe002ResponseOK = z.infer<(typeof apiSafe002.responseBodyMap)[200]>;

export default apiSafe002;

export type {
  ApiSafe002RequestParam,
  ApiSafe002RequestQuery,
  ApiSafe002RequestBody,
  ApiSafe002ResponseOK,
};
