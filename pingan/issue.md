## element ui 深度订制样式
去除element ui中自带样式，完全自定义样式的方法：webpack配置中控制element ui按需引入的babel plugin配置中，style设置为false，配置文档参考来源: https://github.com/ElementUI/babel-plugin-component

## 更新cdn上的static中的文件
static不会被webpack处理，
在cdn上传时针对此文件夹下的文件添加文件后缀：?v=\[hash\]，
因为该文件夹目录下的文件通常比较少，也可以手动修改文件名

## 架构
寿险总部科技运营中心，科技中心，人工智能研发团队，产品

## 其他
- min-height:100%; 不起作用的时候，添加position: absolute;

## 自动部署node sass问题
- 1
node版本和已有的环境中已经有build过一个旧的node sass，当前node环境比较新，版本不一致，出现报错，提示module xx was compiled against a different node.js version using node_module_version 57, this version of node.js requires node_moudle_version 64, please try npm rebuild or npm install，
解决方法：在npm install之前使用npm rebuild node-sass使用新版本node进行build

rm -rf node_moudles package-lock.json
- 2
自动发布环境定义了全局的sass_binary_path 优先级比npmrc中写的sass_binary_cache 高
使用npm config delete 删除sass_binary_path userconfig
## git
- ignore 已有的文件夹后：
  git rm -r --cached --ignore-unmatch folder_name
## do
- 测试问题收集，分配人员解决
- 测试-产品 问题协调
- 后端