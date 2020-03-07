module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    DOB: DataTypes.INTEGER,
    state: DataTypes.STRING,
    gender: DataTypes.STRING,
    alcohol: DataTypes.INTEGER,
    tobacco_use: DataTypes.INTEGER,
    drug_use: DataTypes.INTEGER,
    obesity: DataTypes.INTEGER,
    safe_sex: DataTypes.INTEGER,
    alcohol_score: DataTypes.INTEGER,
    age_score: DataTypes.INTEGER,
    tobacco_score: DataTypes.INTEGER,
    drug_score: DataTypes.INTEGER,
    obesity_score: DataTypes.INTEGER,
    sex_score: DataTypes.INTEGER,
    total_score: DataTypes.INTEGER
    });
  

  
  

  return User;
};
