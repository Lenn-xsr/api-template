# API Template

Automatically recognizes the routes, without the need to add code at the root of the application, it is recommended to use for APIs that have many routes or simply for those who want to have an extra facility

## Installation

```bash
npm install
```

## Usage
### New route

First add a new route in the `routes` folder, you can follow two bases for this API

1. Creating a subfolder within the `routes` folder, the name of this folder will give the name of the endpoint, inside the folder you can organize the methods separately or as you prefer;

    > ./routes/example/get.js
 
2. Just add a file in the `routes` folder, the file name will be the name of the endpoint and inside it can contain all the methods.
    > ./routes/example.js

*Obs.: For the default route, add a file in the `routes` folder with the name `default`, it will be treated as `/` from your application**

### Base code of a route
Every route must follow this model:

```js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is an example of default route.");
});

module.exports = router;

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
