## 选择器

- 标签
- 类
- ID
- 普遍
- 层次
- 属性
- 伪类

<https://segmentfault.com/a/1190000014150884>

## 选择器类型的优先级是递增的：

- 类型选择器（type selectors）（例如, h1）和 伪元素（pseudo-elements）（例如, ::before）
- 类选择器（class selectors） (例如,.example)，属性选择器（attributes selectors）（例如, [type="radio"]），伪类（pseudo-classes）（例如, :hover）
- ID选择器（例如, #example）

给元素添加的内联样式 (例如, style="font-weight:bold") 总会覆盖外部样式表的任何样式 ，因此可看作是具有最高的优先级。

当在一个样式声明中使用一个!important 规则时，此声明将覆盖任何其他声明。虽然技术上!important与优先级无关，但它与它直接相关。

## 垂直水平居中

- 元素有固定的宽和高？

用负的 margin 值使其等于宽度和高度的一半，当你设置了它的绝对位置为 50% 之后，就会得到一个很棒的跨浏览器支持的居中：CSS;

```css
.parent {
  position: relative;
}
.child {
  width: 300px;
  height: 100px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -70px 0 0 -170px;
}
```

- 元素的宽和高未知？

如果你不知道元素的高度和宽度，你可以用 transform 属性，用 translate 设置 -50%（它以元素当前的宽和高为基础）来居中：CSS：

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- 能用 flexbox 吗？

为了让元素在 flexbox 两个方向都居中，你需要两个居中属性：CSS:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- inline-block + text-align + table-cell + vertical-align

```html
<div class="parent">
  <div class="child">Demo</div>
</div>

<style>
  .parent {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .child {
    display: inline-block;
  }
</style>
```

## BFC

Block Formatting Contexts

满足下面任一条件的元素，会触发为 BFC ：

- 浮动元素，float 除 none 以外的值
- 绝对定位元素，position（absolute，fixed）
- display 为以下其中之一的值 inline-blocks，table-cells，table-captions
- overflow 除了 visible 以外的值（hidden，auto，scroll）

外边距折叠的规则：仅当两个块级元素相邻并且在同一个块级格式化上下文时，它们垂直方向之间的外边距才会叠加

[详说块级格式化上下文](http://kayosite.com/block-formatting-contexts-in-detail.html)