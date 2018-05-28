[Vuex框架原理与源码分析](https://tech.meituan.com/vuex-code-analysis.html)

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