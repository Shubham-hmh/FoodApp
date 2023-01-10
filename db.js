const mongoose = require('mongoose');

 const dotenv=require("dotenv");
 dotenv.config();

const mongoDBconnect = async () => {

    await mongoose.connect(process.env.mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("........", err);
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("categories");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.items = data;
                        global.categories=catData;
                    }
                })
                // if(err)console.log(err);
                // else {
                //     global.items=data;
                // }
            })
        }
    });
}

module.exports = mongoDBconnect;
