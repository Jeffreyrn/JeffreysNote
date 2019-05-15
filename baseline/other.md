### document.write
  在同一个script标签里的Javascript的代码来说不阻塞,但是对于整个页面来说，这个还是会阻塞。[测试](https://coolshell.cn/asyncjs/async_test02.html)
### 隐式转换
- == 会触发隐式转换
- array 的toString = join
- 非基本类型要通过toString转换为基本类型
- 基本类型优先转换（Number）为number
- NaN !==NaN (Number('abc')=NaN, 'abc'!==NaN)
- null == 0 是false，因为两者都是primitive，没有转换，本来就不相等
- null ==  undefined，js规定null与undefined互等
- !![]==true,优先计算!![]是true，**！取反要看后面是什么类型，非boolean类型直接使用ToBoolean()转换**；非六种false的值，ToBoolean后均为true
- []==false与![]==false均为true，前者为隐式转换，后者因为有！优先被toBoolean转换