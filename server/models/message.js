
import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';

export const MessageModel = sequelize.define(
  "Message",
  {
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    read: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "messages"
  }
);



