### React学习


cnpm install -g create-react-app        安装脚手架

create-react-app todolist          创建项目

### react虚拟dom

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
