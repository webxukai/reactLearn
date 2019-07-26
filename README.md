# React学习

cnpm install -g create-react-app        安装脚手架

create-react-app todolist          创建项目

## react虚拟dom

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合， 生成真实的DOM，显示
4. state 发生改变
5. 数据 + 模板 结合， 生成真实的DOM，替换原始的DOM

缺陷：
第一次生成完整的DOM片段
第二次生成完整的DOM片段，替换原始DOM

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合， 生成真实的DOM，显示
4. state 发生改变
5. 数据 + 模板 结合， 生成真实的DOM，并不替换原始的DOM
6. 新的DOM（DocumentFragment） 和原始的DOM 做对比，找差异
7. 找出变化的DOM
8. 替换变化的DOM

缺陷：
性能提升并不明显

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合， 生成真实的DOM，显示
4. 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM
7. 比较原始虚拟DOM和虚拟DOM的区别，找到区别 （diff算法 different）setState（）异步初中也是这里，
   多个setState() 会合并成一次虚拟DOM比较 ，key值标记不变的值，所以不用index (逐层比对，key值比对)
8. 直接操作DOM

优点：

1. 性能提升了。
2. 跨端应用实现。 react Native

    动画库
        http://reactcommunity.org/react-transition-group/css-transition

    UI框架
        https://ant.design/index-cn

Redux DevTools

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

redux工作流程

react首先要改变 store 里面的数据，先要去派发一个 action , action 会通过 dispatch() 方法
传递给 stroe , stroe 要把 接收的数据和之前的数据转发给 reducer , reducer 是个函数，接收了state
和 action 之后，做一些处理之后会返回一个新的 state 给到 store ，store 用这个新的state去替换之前的
store 里的数据，然后store数据发生改变的时候，react组件会感知到 store发生改变，这时候会重新
获取store里的数据，更新组件的内容，这时候页面就会发生变化了。

1. store 唯一
2. 只有store可以改变自己的内容
3. reducer必须是一个纯函数 （固定输入，固定输出，不会有副作用）
4. createStore 创建 store
   store.dispatch
   store.getState 获取 store 的内容
   store.subscribe 订阅 store 改变

redux-thunk

cnpm install redux-thunk

    ```
    import { createStore ,applyMiddleware, compose } from 'redux';
    import reducer from './reducer'
    import thunk from 'redux-thunk'
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
        );

    const store = createStore(
        reducer,
        enhancer
        );

    export default store

    ```
redux-saga

    cnpm install --save redux-saga
    https://github.com/redux-saga/redux-saga

    ```
    import { createStore, applyMiddleware } from 'redux'
    import createSagaMiddleware from 'redux-saga'

    import reducer from './reducers'
    import mySaga from './sagas'

    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware()
    // mount it on the Store
    const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    )

    // then run the saga
    sagaMiddleware.run(mySaga)

    // render the application
    ```

react-redux
  npm install --save react-redux
  https://react-redux.js.org/introduction/quick-start

  Provider

  connect()