## 碎语TALK
---

### 当前git版本

1.2.0

### BUG反馈

[https://blog.del.pub/mine/sytalk.html](https://blog.del.pub/mine/sytalk.html)

### 特别说明

重要的事情说3遍

基于[Artitalk 3.3.4](https://artitalk.js.org/)

基于[Artitalk 3.3.4](https://artitalk.js.org/)

基于[Artitalk 3.3.4](https://artitalk.js.org/)

### 👀 特性

- 实时发布，点击删除
- 支持 Markdown/HTML 语法
- 方便引用

### 对比Artitalk的不同

1. 删除了原Artitalk中的文件上传部分，个人感觉用不到
2. 重构了Artitalk中部分代码，新增，删除，加载没必要全部重新加载，减小重载损耗
3. 重构了Artitalk的MARKDOWN解析部分，让解析更快速
4. 修复了之前Artitalk设备判定部分的小小BUG
5. 修改了部分样式命名，防止和引用的部分冲突

### 还未实现原作功能

1. 说说编辑，因为懒没写，下个版本补
2. 评论被我删除了，之后版本补吧

### 📃 目录树

```
src
├─ main.js                      # Sytalk 的主要 js 部分
└─ plugins                      # 第三方 js
       ├─ av-min.js             # LeanCloud 提供的 SDK
       ├─ browser.js            # 返回用户操作系统
       └─ showdown.min.js       # Markdown 转换
```

### 开源协议

本着互联网开放精神和Artitalk的共享精神，依然是MIT