import "dotenv/config"

const environments = {
    PORT: process.env.PORT || 3000,
    DB: {
        HOST: process.env.DB_HOST,
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PORT: process.env.DB_PORT,
        PASSWORD: process.env.PASSWORD,
        DIALECT: process.env.DB_DIALECT,
    },
    SECRET_KEY: process.env.JWT_SECRET_KEY

}

export default environments