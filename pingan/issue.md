## element ui 深度订制样式

去除 element ui 中自带样式，完全自定义样式的方法：webpack 配置中控制 element ui 按需引入的 babel plugin 配置中，style 设置为 false，配置文档参考来源: https://github.com/ElementUI/babel-plugin-component

## 更新 cdn 上的 static 中的文件

static 不会被 webpack 处理，
在 cdn 上传时针对此文件夹下的文件添加文件后缀：?v=\[hash\]，
因为该文件夹目录下的文件通常比较少，也可以手动修改文件名

## 架构

寿险总部科技运营中心，科技中心，人工智能研发团队，产品

## 其他

- min-height:100%; 不起作用的时候，添加 position: absolute;

## 自动部署 node sass 问题

- 1
  node 版本和已有的环境中已经有 build 过一个旧的 node sass，当前 node 环境比较新，版本不一致，出现报错，提示 module xx was compiled against a different node.js version using node_module_version 57, this version of node.js requires node_moudle_version 64, please try npm rebuild or npm install，
  解决方法：在 npm install 之前使用 npm rebuild node-sass 使用新版本 node 进行 build

rm -rf node_moudles package-lock.json

- 2
  自动发布环境定义了全局的 sass_binary_path 优先级比 npmrc 中写的 sass_binary_cache 高
  使用 npm config delete 删除 sass_binary_path userconfig

## git

- ignore 已有的文件夹后：
  git rm -r --cached --ignore-unmatch folder_name

## do

- 测试问题收集，分配人员解决
- 测试-产品 问题协调
- 后端

## react native

- 真机调试端口号不对
- 拔线后需要重启 android studio
- permission 权限未配置
