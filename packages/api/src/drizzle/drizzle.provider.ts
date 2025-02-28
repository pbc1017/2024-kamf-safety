import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import logger from "../common/util/logger";
import { env } from "../env";

import * as userSchema from "./schema/user.schema";
import * as safetySchema from "./schema/safety.schema";

export const DrizzleAsyncProvider = "drizzleProvider";

let dbInstance = null;
let connectionInstance = null;

const createConnection = async () => {
  const connection = await mysql.createConnection({
    uri: env.DATABASE_URL,
  });

  connection.on("error", async err => {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      logger.error("Database connection was closed. Reconnecting...");
      connectionInstance = await createConnection();
    } else {
      throw err;
    }
  });

  return connection;
};

export const getConnection = async () => {
  if (!connectionInstance) {
    connectionInstance = await createConnection();
  } else {
    try {
      await connectionInstance.ping();
    } catch (error) {
      logger.error("Connection ping failed, reconnecting...", error);
      connectionInstance = await createConnection();
    }
  }
  return connectionInstance;
};

export const getDbInstance = async () => {
  if (!dbInstance) {
    const connection = await getConnection();
    dbInstance = drizzle(connection, {
      schema: {
        userSchema,
        safetySchema,
      },
      mode: "default",
      logger: true,
    });
  }
  return dbInstance;
};

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: getDbInstance,
    exports: [DrizzleAsyncProvider],
  },
];
