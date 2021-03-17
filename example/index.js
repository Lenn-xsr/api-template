const express = require("express");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 9000;

const { readdirSync, statSync } = require("fs");
const path = require("path");

const routesPath = "./routes";
const walkSync = (d) =>
  statSync(d).isDirectory()
    ? readdirSync(d).map((f) => walkSync(path.join(d, f)))
    : d.padStart(d.length + 2, "./");

function walkRoutes(fileArray) {
  fileArray.forEach((file) => {
    if (typeof file === "object") walkRoutes(file);
    else {
      const route = require(file);
      for (const method in route) {
        app.use(
          "/",
          router[method](
            path.parse(file).dir.replace(routesPath, ""),
            route[method]
          )
        );
      }
    }
  });
}

walkSync(routesPath).forEach((file) => {
  if (typeof file === "object") walkRoutes(file);
  else {
    const route = require(file);
    for (const method in route) {
      app.use(
        "",
        router[method](
          path.parse(file).name.toLowerCase() === "default"
            ? "/"
            : "/" + path.parse(file).name.replace(" ", "-"),
          route[method]
        )
      );
    }
  }
});

app.listen(PORT);
