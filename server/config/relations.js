import { sequelize } from "../config.js";

const connectDB = () => {
    sequelize.sync({ force: true })
}

export default connectDB