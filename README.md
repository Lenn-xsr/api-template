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
```
    ./routes/example/index.js
```
2. Following the same logic as the first example, you can now create sub-routes. Simply create a folder to define the route name and add a standard index file or as many as you prefer;
```
    ./routes/example/index.js
    ./routes/example/another-route/index.js
```
3. Just add a file in the `routes` folder, the file name will be the name of the endpoint and inside it can contain all the methods.
```
    ./routes/example.js
```
*Obs.: For the default route, add a file in the `routes` folder with the name `default`, it will be treated as `/` from your application**

### Base code of a route
Every route must follow this model:

```js
module.exports = {
  get: (req, res) => {
    res.send("This is an example route.");
  },
  post: (req, res) => {
    res.sendStatus(200);
  },
  // Other method here...
};
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
