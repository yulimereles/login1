import { Sequelize } from "sequelize";
import environments from "./config/environments.js";

export const sequelize = new Sequelize(
  environments.DB.NAME,
  environments.DB.USER,
  environments.DB.PASSWORD,
  {
    host: environments.DB.HOST,
    dialect: environments.DB.DIALECT,
    port: environments.DB.PORT,
  }
);
export async function startDb() {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
}