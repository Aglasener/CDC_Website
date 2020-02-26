module.exports = function(sequelize, DataTypes) {
    var Result = sequelize.define("Result", {
        location_score: DataTypes.INTEGER,
        alcohol_score: DataTypes.INTEGER,
        age_score: DataTypes.INTEGER,
        tobacco_score: DataTypes.INTEGER,
        drug_score: DataTypes.INTEGER,
        obesity_score: DataTypes.INTEGER,
        physical_score: DataTypes.INTEGER,
        sex_score: DataTypes.INTEGER,
        pre_cond_score: DataTypes.INTEGER
    });

    Result.associate = function(models) {
        Response.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Result;
  };

