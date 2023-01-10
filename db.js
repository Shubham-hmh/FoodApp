const mongoose = require('mongoose');
//  const mongoURI = "mongodb+srv://goFood:goFood123@cluster0.uqyrima.mongodb.net/goFoodMern?retryWrites=true&w=majority"

 const dotenv=require("dotenv");
 dotenv.config();
// const mongoDBconnect = () => {

//     mongoose.connect(mongoURI).then(() => {
//         console.log("db connection successful");
//     }).catch((e) => {
//         console.log("db connection failed");
//     })
// }
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
