const mongoose = require("mongoose");

const mongoDB = async (url) => {
  await mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));
};

module.exports = mongoDB;
