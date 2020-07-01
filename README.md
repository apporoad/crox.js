# crox.js
cross.js , awesome x


## just do it

```bash
npm i -S crox.js
```

```js
const x = crox = require('crox.js')

var one = {}
var options = {
    book:{}
}
x('hello', one ,options).then(another=>{

})

x('hello', async another =>{
    await x('hello',another)
}, options)

```