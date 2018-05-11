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