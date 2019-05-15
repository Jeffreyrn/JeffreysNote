/* 
微信前端的一道面试题, 题目是这样的:
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

以此类推。

大家可以自己尝试着写一下, 以下是我个人写的代码及分析:

其实是一个关于js流程控制的问题:

自己手写了一下, 一开始觉得没什么难度, 写的时候还是发现了一些问题, 不过也顺带复习了一下js基本功, 代码如下:
*/


function LazyMan(name) {
  return new _lazyman(name);
}


function _lazyman(name) {
  this.task = [];
  var that = this;
  var fn = (function (name) {
    return function () {
      console.log("Hello I'm " + name);
      that.next();
    }
  })(name);

  this.task.push(fn);

  setTimeout(function () { that.next() }, 0)

  //此处用settimeout执行是因为settimeout会在同步线程都进行完了之后再执行,如果不用settimeout就会同步触发,事件还未都放在队列中,就已经开始执行了

  //关于js同步,异步,事件循环等,可以看这篇文章http://blog.csdn.net/alex8046/article/details/51914205

}


_lazyman.prototype = {
  constructor: _lazyman,

  //next是实现函数在队列中顺序执行功能的函数

  next: function () {
    var fn = this.task.shift();
    fn && fn();
  },


  sleep: function (time) {
    var that = this;
    var fn = (function (time) {
      return function () {
        console.log("sleep......." + time);
        setTimeout(function () {
          that.next();
        }, time)
      }
    })(time);
    this.task.push(fn);

    return this;

    //return this是为了实现链式调用
  },


  sleepfirst: function (time) {
    var that = this;
    var fn = (function (time) {
      return function () {
        console.log("sleep......." + time);
        setTimeout(function () {
          that.next();
        }, time)
      }
    })(time);
    this.task.unshift(fn);
    return this;
  },


  eat: function (something) {
    var that = this;
    var fn = (function (something) {
      return function () {
        console.log("Eat " + something);
        that.next();
      }
    })(something)
    this.task.push(fn);
    return this;
  }
}
LazyMan("Joe").sleepfirst(3000).eat("breakfast").sleep(1000).eat("dinner");