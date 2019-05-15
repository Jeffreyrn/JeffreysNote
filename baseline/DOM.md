# DOM即document

## 几种对象

### Node

- nodeName
- nodeValue
- nodeType
  有 [7种](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
  常见的有element text attribute comment document

### NodeList
A NodeList object is a collection of nodes. The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live or static based on the interface used to retrieve them
- 是一个节点的集合 是由 Node.childNodes 和 document.querySelectorAll 返回的
- 少数情况 使用querySelectorAll返回的是静态 NodeList
- 大多数情况 使用 getElementById node.childNodes getElementsByName 返回的是动态的 NodeList

### HTMLCollection

An HTMLCollection is a list of nodes. An individual node may be accessed by either ordinal index or the node’s name or id attributes.

是一种特殊的 NodeList,也是即时更新的,当其所包含的文档结构发生改变时，它会自动更新

## 节点查找

Document的方法：

- 返回node

getElementById 返回一个element对象
querySelector 返回一个element对象

- 返回nodeList(节点的集合)

getElementByName 动态
querySelectorAll 静态

- 返回HTMLCollection()

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