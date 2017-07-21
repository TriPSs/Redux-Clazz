import Store from './StoreCreator'
import ReduxClazz from './ReduxClazz'

export { applyMiddleware, compose } from 'redux'

export const createStore = Store.createStore
export const getState    = Store.getState
export const connect     = Store.connect
export const store       = Store.getStore

export default ReduxClazz
