[如何理解虚拟DOM?](https://www.zhihu.com/question/29504639/answer/44680878)
[深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)

### 主要的目录结构
/events 合成事件

/react

/react-dom

/react-reconciler

/scheduler 调度

/shared 共用代码

### react 事件

React实现了一套完整的事件合成机制，采用的是顶层document的事件代理机制，能够保持事件冒泡的一致性，同时可以实现跨浏览器执行，甚至可以在IE8中使用HTML5的事件

首先区分原生事件与合成事件(SyntheticEvent)，我们在 componentDidMount 方法里面通过 addEventListener 绑定的事件就是浏览器原生事件，使用原生事件的时候注意在 componentWillUnmount 解除绑定 removeEventListener，所有通过 JSX 这种方式绑定的事件都是绑定到“合成事件”。 “合成事件”会以事件委托（event delegation）的方式绑定到组件最上层，并且在组件卸载（unmount）的时候自动销毁绑定的事件

react本身dom上的事件是通过事件代理方式统一在document身上并通过每个dom的唯一id来维护一个hashMap来实现的

#### React中的事件机制分为两个阶段

- 事件注册

>React在组件加载(mount)和更新(update)时,其中的ReactDOMComponent会对传入的事件属性进行处理，对相关事件进行注册和存储。document中注册的事件不处理具体的事件，仅对事件进行分发。ReactBrowserEventEmitter作为事件注册入口，担负着事件注册和事件触发。注册事件的回调函数由EventPluginHub来统一管理，根据事件的类型(type)和组件标识(_rootNodeID)为key唯一标识事件并进行存储。

- 事件执行

>事件执行时，document上绑定事件ReactEventListener.dispatchEvent会对事件进行分发，根据之前存储的类型(type)和组件标识(_rootNodeID)找到触发事件的组件。ReactEventEmitter利用EventPluginHub中注入(inject)的plugins(例如:SimpleEventPlugin、EnterLeaveEventPlugin)会将原生的DOM事件转化成合成的事件，然后批量执行存储的回调函，回调函数的执行分为两步，第一步是将所有的合成事件放到事件队列里面，第二步是逐个执行。需要注意的是，浏览器原生会为每个事件的每个listener创建一个事件对象，可以从这个事件对象获取到事件的引用。这会造成高额的内存分配，React在启动时就会为每种对象分配内存池，用到某一个事件对象时就可以从这个内存池进行复用，节省内存。

#### 与DOM事件体系相比，它有如下特点

- React组件上声明的事件最终绑定到了document这个DOM节点上，而不是React组件对应的DOM节点。故只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件。这样简化了DOM原生事件，减少了内存开销
- React以队列的方式，从触发事件的组件向父组件回溯，调用它们在JSX中声明的callback。也就是React自身实现了一套事件冒泡机制。我们没办法用event.stopPropagation()来停止事件传播，应该使用event.preventDefault()
- React有一套自己的合成事件SyntheticEvent，不同类型的事件会构造不同的SyntheticEvent
- React使用对象池来管理合成事件对象的创建和销毁，这样减少了垃圾的生成和新对象内存的分配，大大提高了性能

ref

- <http://imweb.io/topic/5774e361af96c5e776f1f5cd>
- <https://segmentfault.com/a/1190000008782645>
- <https://blog.csdn.net/u013510838/article/details/61224760>