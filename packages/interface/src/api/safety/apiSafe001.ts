import { HttpStatusCode } from "axios";
import { z } from "zod";

/**
 * @version v0.1
 * @description studentId와 password를 이용하여 로그인을 시도합니다.
 */

const url = () => `/count`;
const method = "POST";

const requestParam = z.object({});

const requestQuery = z.object({});

const requestBody = z.object({
  userId: z.string().max(128),
  increment: z.number().int().min(0),
  decrement: z.number().int().min(0),
});

const responseBodyMap = {
  [HttpStatusCode.Created]: z.object({
    total: z.number().int(),
  }),
};

const responseErrorMap = {};

const apiSafe001 = {
  url,
  method,
  requestParam,
  requestQuery,
  requestBody,
  responseBodyMap,
  responseErrorMap,
};

type ApiSafe001RequestParam = z.infer<typeof apiSafe001.requestParam>;
type ApiSafe001RequestQuery = z.infer<typeof apiSafe001.requestQuery>;
type ApiSafe001RequestBody = z.infer<typeof apiSafe001.requestBody>;
type ApiSafe001ResponseOK = z.infer<(typeof apiSafe001.responseBodyMap)[201]>;

export default apiSafe001;

export type {
  ApiSafe001RequestParam,
  ApiSafe001RequestQuery,
  ApiSafe001RequestBody,
  ApiSafe001ResponseOK,
};
