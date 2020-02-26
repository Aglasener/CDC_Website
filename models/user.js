module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    DOB: DataTypes.DATEONLY,
    state: DataTypes.STRING,
    gender: DataTypes.STRING,
    alcohol: DataTypes.BOOLEAN,
    tobacco_use: DataTypes.BOOLEAN,
    smoking_freq: DataTypes.INTEGER,
    drug_use: DataTypes.BOOLEAN,
    obesity: DataTypes.DECIMAL,
    physical: DataTypes.BOOLEAN,
    safe_sex: DataTypes.BOOLEAN,
    std_prev: DataTypes.BOOLEAN,
    pre_cond: DataTypes.BOOLEAN,
  });
  return User;
};
