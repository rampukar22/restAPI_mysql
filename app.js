const express = require("express");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());

app.use("/users", require("./controllers/controller"));
app.use("/roles", require("./controllers/role.controller"));
app.use("/userRole", require("./controllers/userRole.controller"));

app.listen(3000, async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
});
