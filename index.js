const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

const { readdirSync, statSync } = require("fs");
const path = require("path");

const routesPath = "./routes";
const walkSync = (d) =>
  statSync(d).isDirectory()
    ? readdirSync(d).map((f) => walkSync(path.join(d, f)))
    : d.padStart(d.length + 2, "./");

const files = walkSync(routesPath);

files.forEach((file) => {
  if (typeof file === "object")
    file.forEach((dirFile) =>
      app.use(path.parse(dirFile).dir.replace(routesPath, ""), require(dirFile))
    );
  else
    app.use(
      path.parse(file).name.toLowerCase() === "default"
        ? "/"
        : "/" + path.parse(file).name.replace(" ", "-"),
      require(file)
    );
});

app.listen(PORT);
