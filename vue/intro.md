## vue实例的生命周期

1. new Vue()初始化实例 开始事件和生命周期的初始化 之后触发beforeCreate
2. 响应式数据 method computed watch的初始化 之后触发created
3. el（挂载节点）的初始化 模板编译到render中 之后触发beforeMounted
4. el被替换 开始渲染render 数据挂载 之后触发mounted
5. 渲染完毕 data更新后 触发beforeUpdate
6. 重新编译虚拟dom 重新渲染和patch 触发updated

真实场景下的业务应用
created：进行ajax请求异步数据的获取、初始化数据
mounted：挂载元素内dom节点的获取
nextTick：针对单一事件更新数据后立即操作dom
updated：任何数据的更新，如果要做统一的业务逻辑处理
watch：监听具体数据变化，并做相应的处理

## vuex

不非受控的，异步的代码集中到 action

mutation只做纯函数的状态改变

由于所有修改数据的命令都集合在同一个地方，所以，只要在这个地方加一些监控，就能做出一个调试工具

描述性（Declarative)的，是单向（Unidirectional）的，是不可变(Immutable)的，是中心化（Centralized）的，是纯函数（Pure Functional）

特性

- 全局数据管理
- 单向数据流
- 命令集
- 数据可预测
- 提供监听器

[Redux复盘整理](https://raimonfuns.github.io/2018/05/03/2018-05-03-redux/)