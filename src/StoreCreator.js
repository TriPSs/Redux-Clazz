import { createStore as createReduxStore, bindActionCreators } from 'redux'

class Store {

  listeners = []

  unSubscribe

  store = {}

  getStore = () => this.store

  getState = () => this.store.getState()

  createStore = (...args) => {
    this.store = createReduxStore(...args)

    this.unSubscribe = this.store.subscribe(this.handleStoreUpdate)

    return this.store
  }

  connect = (mapStateToProps, mapDispatchToProps) => {
    return (Clazz) => {
      const props   = mapStateToProps !== null ? mapStateToProps(this.getState()) : {}
      const actions = bindActionCreators(mapDispatchToProps, this.store.dispatch)

      const clazz = new Clazz({
        ...actions,
        ...props,
      }, () => this.removeListener(clazz.constructor.name))

      this.listeners.push({
        clazz          : clazz.constructor.name,
        receiveProps   : clazz.receiveProps,
        mapStateToProps: mapStateToProps !== null ? mapStateToProps : () => {},
        props,
      })

      return clazz
    }
  }

  handleStoreUpdate = () => {
    const newState = this.getState()

    this.listeners = this.listeners.map((listener) => {
      const { mapStateToProps, props, receiveProps } = listener
      const nextProps                                = mapStateToProps(newState)

      if (JSON.stringify(nextProps) !== JSON.stringify(props)) {
        receiveProps(nextProps)

        return {
          ...listener,
          props: { ...nextProps },
        }
      }

      return listener
    })
  }

  removeListener = (clazzToRemove) => {
    this.listeners = this.listeners.filter(({ clazz }) => clazz !== clazzToRemove)
  }

}

export const StoreCreator = new Store()
export default StoreCreator
