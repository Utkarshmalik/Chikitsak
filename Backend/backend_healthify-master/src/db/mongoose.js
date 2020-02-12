const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://healthify:abcd@cluster0-9n2ys.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);
