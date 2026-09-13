// import { drizzle } from 'drizzle-orm/libsql';
// import * as schema from './schema';

// // This initializes the database client using your local connection path
// export const db = drizzle({ 
//   connection: {
//     url: process.env.DATABASE_URL!,
//   },
//   schema
// });


import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "@/db/schema";

const client = createClient({
  url: process.env.DATABASE_URL!,
});

export const db = drizzle(client, { schema });
