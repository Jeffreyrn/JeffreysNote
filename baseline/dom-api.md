# dom原生操作

## 几种对象

### node

node.nodetype有 7种 <https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType>
常见的有element text attribute comment document

### nodelist

是一个节点的集合 是由 Node.childNodes 和 document.querySelectorAll 返回的
少数情况 使用querySelectorAll返回的是静态nodelist
大多数情况 使用 getElementById node.childNodes getElementsByName 返回的是动态的nodelist

### HTMLCollection

是一种特殊的nodelist
也是即时更新的 当其所包含的文档结构发生改变时，它会自动更新

## 节点查找

document的方法：

- 返回node

getElementById 返回一个element对象
querySelector 返回一个element对象

- 返回nodelist

getElementByName
querySelectorAll

- 返回HTMLCollection

getElementByClassName
getElementByTagName
forms

## 节点创建

createElement
createTextNode
cloneNode
createDocumentFragment

## 节点修改

appendChild
insertBefore
removeChild
replaceChild

## 节点关系

parentNode / parentElement

---

**children** 仅返回element(tag)节点 不包括text

**childNodes** 返回所有节点

firstChild / firstElementChild

lastChild / lastElementChild

---

previousSibling / previousElementSibling

nextSibling / nextElementSibling

## 元素属性

element.setAttribute

element.getAttribute

## 样式

```javascript
element.style.color = 'red'
style = document.createElement('style')
appendChild(style)
```