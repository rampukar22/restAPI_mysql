"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Role }) {
      UserRole.belongsTo(User, { foreignKey: "userId" });

      UserRole.belongsTo(Role, { foreignKey: "roleId" });
      // define association here
    }

    toJSON() {
      return {
        ...this.get(),
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  }
  UserRole.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
    },
    {
      sequelize,
      tableName: "userRoles",
      modelName: "UserRole",
    }
  );
  return UserRole;
};
