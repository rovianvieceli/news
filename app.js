const app = require("./config/server");

app.listen(process.env.APP_PORT, function () {
  console.log(
    `Server listen on -> ${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
