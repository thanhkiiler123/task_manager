const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

//middleware
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(mongo_uri);
        app.listen(port, console.log(`server is listening on port: ${port}`));
    } catch (err) {
        console.log(err);
    }
};
start();
