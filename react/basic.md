
组件继承自React.Component

### 生命周期钩子

- constructor(props, text) 组件创造时调用一次
- // *componentWillMount* 组件挂载之前调用一次 16版本已移除
- componentDidMount 组件挂载之后调用一次
- getDerivedStateFromProps 父组件发生render时传递 子组件会调用 // *componentWillReceiveProps*
- getSnapshotBeforeUpdate 判断是否在setState之后需要重新渲染组件 默认返回true 复杂情况下可以判断优化渲染 // *shouldComponetUpdate*
- componentWillUpdate 决定重新渲染后执行
- componentDidUpdate 非首次的render结束后都会执行这个
- render()
- componentWillUnmount 组件被卸载后调用 DidMount中注册的事件需要在这里删除

<https://www.jianshu.com/p/4784216b8194>

### basic

React专注于View层 你可以把一个React的Component想象成一个Pure Function，只要你给的数据是[1, 2, 3]，我保证显示的是[1, 2, 3]

你给我一个数据，我根据这个数据生成一个全新的Virtual DOM，然后跟我上一次生成的Virtual DOM去 diff，得到一个Patch，然后把这个Patch打到浏览器的DOM上去。完事。并且这里的patch显然不是完整的虚拟DOM，而是新的虚拟DOM和上一次的虚拟DOM经过diff后的差异化的部分

其实是由于每次生成virtual dom很快，diff生成patch也比较快，而在对DOM进行patch的时候，虽然DOM的变更比较慢，但是React能够根据Patch的内容，优化一部分DOM操作

### props state

React中的props代表父级分发下来的属性，state代表组件内部可以自行管理的状态，并且整个React没有数据向上回溯的能力，也就是说数据只能单向向下分发，或者自行内部消化。子组件改变父组件state的办法只能是通过onClick等事件触发父组件声明好的回调，也就是父组件提前声明好函数或方法作为契约描述自己的state将如何变化，再将它同样作为属性交给子组件使用。 这样数据总是单向从顶层向下分发的，只有子组件回调在概念上可以回到state顶层影响数据，这样state一定程度上是响应式的。为了面临所有可能的扩展问题，最容易想到的办法就是把所有state集中放到所有组件顶层，然后分发给所有组件

### ref
string / methodRef / objectRef