function handleFormSubit(event) {
    event.preventDefault();

    var newUser = {
        first_name: firstName
        .val()
        .trim(),
        last_name: lastName
        .val()
        .trim(),
        DOB: new Date(birthday)
        .val()
        .trim(),
        gender: gender
        .val()
        .trim(),
        
    }
}


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