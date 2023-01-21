const fs = require('fs');

const saveToDB = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB),{
        encoding: "utf-8"
    });
    console.log("added to file");
}

module.exports = {saveToDB};