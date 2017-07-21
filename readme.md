# Redux-Clazz 
![https://img.shields.io/npm/v/redux-clazz.svg](https://img.shields.io/npm/v/redux-clazz.svg?style=flat-square) [![availabledownloads](https://img.shields.io/npm/dt/redux-clazz.svg?maxAge=2592000&style=flat-square)](https://npm-stat.com/charts.html?package=redux-clazz) [![](https://img.shields.io/github/issues-raw/tripss/redux-clazz.svg?style=flat-square)](https://github.com/tripss/redux-clazz/issues) [![](https://img.shields.io/david/tripss/redux-clazz.svg?style=flat-square)](https://david-dm.org/tripss/redux-clazz#info=dependencies)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tripss/redux-clazz.svg)](http://isitmaintained.com/project/tripss/redux-clazz "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/tripss/redux-clazz.svg)](http://isitmaintained.com/project/tripss/redux-clazz "Percentage of issues still open")

> Connect ordinary classes to Redux.

Redux Clazz lets you connect any normal class to redux

Example, first you need to create the store with `redux-clazz` (You can follow the normal process here, just make sure you import `createStore` from `redux-clazz`, the other are optional and it is possible to just import them from `redux` directly)
```js
import { createStore, applyMiddleware, compose } from 'redux-clazz'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = [
  thunk,
]

// Create Store
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
  ),
)

return store

```

The class container:
```js
import { connect } from 'redux-clazz'
import OrdinaryClass from './OrdinaryClass'

import * as Actions from './Actions'
import * as Selectors from './Selectors'

export const mapStateToProps = state => ({
  ordinaryProp: Selectors.getOrdinaryProp(state),
})

export default connect(mapStateToProps, { ...Actions })(OrdinaryClass)

```

Finally, the class:
```js
import ReduxClazz from 'redux-clazz'

export default class OrdinaryClass extends ReduxClazz {
  
  // All actions and props are avaible in here
  props
  
  constructor(...props) {
    super(props)
  }
  
  clazzWillReceiveProps = (nextProps) => {
    // This function will get fired when the props linked in mapStateToProps get updated ed
  }
  
}
```

### Installation
```shell
$ npm install --save redux-clazz
```

## Development

If you'd like to contribute to this project, all you need to do is clone
this project and run:

```shell
$ npm install
```
You can use `npm link` to use your development version in your own project:
- Go to `redux-clazz` directory and execute command `npm link`
- Go to your project directory and execute command `npm link redux-clazz`

## [License](https://github.com/tripss/redux-clazz/blob/master/LICENSE)

> Internet Systems Consortium license
> ===================================
>
> The MIT License (MIT)
>  
> Copyright (c) 2015 David Zukowski
>  
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>  
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>  
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## Collaboration

If you have questions or issues, please [open an issue](https://github.com/TriPSs/redux-clazz/issues)!