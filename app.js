const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// 错误处理
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// 访问/ 跳转到/index.html
app.get("/", function (req, res) {
  res.redirect("/index.html");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
