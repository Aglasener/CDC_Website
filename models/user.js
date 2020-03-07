module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    DOB: DataTypes.DATEONLY,
    state: DataTypes.STRING,
    gender: DataTypes.STRING,
    alcohol: DataTypes.INTEGER,
    tobacco_use: DataTypes.INTEGER,
    drug_use: DataTypes.INTEGER,
    obesity: DataTypes.INTEGER,
    safe_sex: DataTypes.INTEGER
  });

  User.associate = function(models) {
    User.hasMany(models.Result, {
      onDelete: "cascade"
    });
  };

  return User;
};
