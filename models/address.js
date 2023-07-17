"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Address.belongsTo(User, { foreignKey: "userAddressId" });
      // define association here
    }

    toJSON() {
      return {
        ...this.get(),
        userAddressId: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  }
  Address.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userAddressId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "addresses",
      modelName: "Address",
    }
  );
  return Address;
};
