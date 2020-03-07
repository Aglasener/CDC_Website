module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    DOB: DataTypes.DATEONLY,
    state: DataTypes.STRING,
    gender: DataTypes.STRING,
    alcohol: DataTypes.INTEGER,
    tobacco_use: DataTypes.BOOLEAN,
    drug_use: DataTypes.BOOLEAN,
    obesity: DataTypes.DECIMAL,
    physical: DataTypes.BOOLEAN,
    safe_sex: DataTypes.BOOLEAN,
  });

  User.associate = function(models) {
    User.hasMany(models.Result, {
      onDelete: "cascade"
    });
  };

  return User;
};
