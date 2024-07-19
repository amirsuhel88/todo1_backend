const connectToDB = require("./dbConnect");
const app = require("./app");

connectToDB().then(() => {
  console.log("Database Connected");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
