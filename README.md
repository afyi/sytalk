## 碎语TALK
---

### 写在前面

还没写完，别用...

### 特别说明

基于Artitalk 3.3.4

### 👀 特性

- 实时发布，点击删除
- 支持 Markdown/HTML 语法
- 方便引用

### 📃 目录树

```
src
├─ artitalk.js
├─ css
│    └─ main.css                # Artitalk 的 CSS
├─ html
│    ├─ lazy.html               # 加载动画的 HTML 片段
│    └─ main.html               # Artitalk 的主要 HTML 片段
├─ main.js                      # Artitalk 的主要 js 部分
└─ plugins                      # 第三方 js
       ├─ av-min.js             # LeanCloud 提供的 SDK
       ├─ browser.js            # 返回用户操作系统
       ├─ md5.js                # md5转码
       └─ showdown.min.js       # Markdown 转换