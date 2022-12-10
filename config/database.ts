import sqlite3 from "sqlite3";

const dbInstance = sqlite3.verbose();
const filepath = "./quickpaste.db";

export class CreateDbConnection {
  constructor() {
    this.createDbConnection();
  }

  createDbConnection = () => {
    const db = new dbInstance.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
    });
    console.log("Connection with SQLite has been established");
    return db;
  };
}
