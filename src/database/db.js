//inporting sqlite
const Database = require('sqlite-async')

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//create and open at current directory the archivo database.sqlite
//and then execute the function called "execute".
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)