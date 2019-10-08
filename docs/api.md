
# API
Unless you dont develop a large application use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
```js
const response = await fetch('http://example.com/movies.json');
const myJson = await response.json();
console.log(JSON.stringify(myJson));
```

If you feel like `fetch` does not cover what you need; there are 2 libraries:
* [Axios](https://github.com/axios/axios)
* [Superagent](https://github.com/visionmedia/superagent)
