const {Router}, express = require("express")
const app = express()
const router = Router()
const PORT = process.env.PORT || 9000

const { readdirSync, statSync } = require("fs")
const {join, parse} = require("path")

const routesPath = "./routes"
const walkSync = (d) =>
  statSync(d).isDirectory()
    ? readdirSync(d).map((f) => walkSync(join(d, f)))
    : d.padStart(d.length + 2, "./")

function walkRoutes(fileArray) {
  for (const file of fileArray){
        if (typeof file === "object") walkRoutes(file)
        else {
           const route = require(file)
            for (const method in route) {
            app.use(
              "/",
              router[method](
                parse(file).dir.replace(routesPath, ""),
                route[method]
              )
            )
       }
    }
  }
}
for (const file of walkSync(routesPath)){
    if (typeof file === "object") walkRoutes(file)
    else {
     const route = require(file)
     for (const method in route) {
       app.use(
         "",
         router[method](
            parse(file).name.toLowerCase() === "default"
              ? "/"
              : "/" + parse(file).name.replace(" ", "-"),
           route[method]
          )
       );
     }
    }
}

app.listen(PORT)
