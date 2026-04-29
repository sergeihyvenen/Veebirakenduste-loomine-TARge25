import sql from "mssql";

export const dbConfig: sql.config = {
    user: "test",
    password: "test123",
    server: "localhost",
    database: "mybase",
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    };
    
export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then((pool) => {
      console.log("Connected to MSSQL");
      return pool;
    })
    .catch((err) => {
      console.error("MSSQL connection failed:", err);
      throw err;
    });