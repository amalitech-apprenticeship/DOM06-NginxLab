import mysql from "mysql2/promise";

async function fetchItems() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [rows] = await connection.execute("SELECT * FROM items");
    return rows;
  } finally {
    await connection.end();
  }
}

export default fetchItems;
