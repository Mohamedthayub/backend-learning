const mongoose = require('mongoose');
const connectDatabase = () => {
    try{
        mongoose.connect(process.env.DB_URL).then((con) => {
        console.log("Database connected" + con.connection.host);
    })
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = connectDatabase;

