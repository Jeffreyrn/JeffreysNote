混合继承，那就肯定是混合的啦，将call继承和原型继承集合在一起===>无论是私有的还是公有的都拿过来了。但是有个问题就是子类的原型上的多了一套父类私有属性,但是不会产生问题。因为子类的私有属性也有一套相同的通过call继承拿过来的。

```js
function Parent(){
  this.x=100;
}
Parent.prototype.getX = function(){}
function Child(){
  Parent.call(this);
}
Child.prototype =  new Parent();
Child.prototype.constructor = Child;
var p = new Parent();
var c = new Child();
console.log(c)//Child {x: 100}
```

## 原型链

- prototype ：每个**函数**都会有这个属性，这里强调，是函数，普通对象是没有这个属性的（这里为什么说普通对象呢，因为JS里面，一切皆为对象，所以这里的普通对象不包括函数对象）。它是构造函数的原型对象；
- \_\_proto\_\_ ：每个**对象**都有这个属性,，这里强调，是对象，同样，因为函数也是对象，所以函数也有这个属性。它指向构造函数的原型对象；
- constructor ：这是**原型对象**上的一个指向构造函数的属性。

<https://juejin.im/post/5af2a5a76fb9a07ab4589cd7>
