'use strict'

// 版本号
const atVersion = "1.0.0";

// 表情包，兼容sytalk的
const atEmoji = {
  QQ: {name: ["aini", "aixin", "aoman", "baiyan", "bangbangtang", "baojin", "baoquan", "bishi", "bizui", "cahan", "caidao", "chi", "ciya", "dabing", "daku", "dan", "deyi", "doge", "fadai", "fanu", "fendou", "ganga", "gouyin", "guzhang", "haixiu", "hanxiao", "haobang", "haqian", "hecai", "hexie", "huaixiao", "jie", "jingkong", "jingxi", "jingya", "juhua", "keai", "kelian", "koubi", "ku", "kuaikule", "kulou", "kun", "lanqiu", "leiben", "lenghan", "liuhan", "liulei", "nanguo", "OK", "penxue", "piezui", "pijiu", "qiang", "qiaoda", "qinqin", "qiudale", "quantou", "saorao", "se", "shengli", "shouqiang", "shuai", "shui", "tiaopi", "touxiao", "tu", "tuosai", "weiqu", "weixiao", "woshou", "wozuimei", "wunai", "xia", "xiaojiujie", "xiaoku", "xiaoyanger", "xieyanxiao", "xigua", "xu", "yangtuo", "yinxian", "yiwen", "youhengheng", "youling", "yun", "zaijian", "zhayanjian", "zhemo", "zhouma", "zhuakuang", "zuohengheng"], ext: "gif"},
  Tieba: {name: ["OK", "what", "不高兴", "乖", "你懂的", "便便", "勉强", "吐", "吐舌", "呀咩爹", "呵呵", "哈哈", "啊", "喷", "大拇指", "太开心", "太阳", "委屈", "小乖", "小红脸", "彩虹", "心碎", "怒", "惊哭", "惊讶", "懒得理", "手纸", "挖鼻", "捂嘴笑", "星星月亮", "汗", "沙发", "泪", "滑稽", "灯泡", "爱心", "犀利", "狂汗", "玫瑰", "疑问", "真棒", "睡觉", "礼物", "笑尿", "笑眼", "红领巾", "胜利", "花心", "茶杯", "药丸", "蛋糕", "蜡烛", "鄙视", "酷", "酸爽", "钱币", "阴险", "音乐", "香蕉", "黑线"], ext: "png"}, 
  BiliBili: {name: ["baiyan", "bishi", "bizui", "chan", "daku", "dalao", "dalian", "dianzan", "doge", "facai", "fadai", "fanu", "ganga", "guilian", "guzhang", "haixiu", "heirenwenhao", "huaixiao", "jingxia", "keai", "koubi", "kun2", "lengmo", "liubixue", "liuhan", "liulei", "mudengkoudai", "nanguo", "outu", "qinqin", "se", "shengbing", "shengqi", "shuizhao", "sikao", "tiaokan", "tiaopi", "touxiao", "tuxue", "weiqu", "wunai", "xiaoku", "xieyanxiao", "yiwen", "yun", "zaijian", "zhoumei", "zhuakuang"], ext: "png"}
}

// 相关的字符
const atText = {text0: "由", text00: "发表", text1: "加载更多...", text2: "预览", text3: "发布", text4: "已登录", text5: "确定", text6: "退出登录", text7: "请输入您的用户名", text8: "请输入您的密码", text9: "登   录", text10: "取消", text11: "发布说说", text12: "添加图片，视频，音乐", text14: "已经到底了哦", text15: "请先登录", text16: "内容不能为空", text17: "登陆失败，请检查用户名及密码是否正确", text18: "头像url", text19: "确定删除本条说说吗？", text20: "删除成功", text21: "请拖拽图片到此处", text22: "表情", text23: "删除", text24: "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索sytalk吧<br>欢迎加入sytalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持", text25: "上传中", text26: "图片", text27: "音乐", text28: "视频", text29: "添加", text30: "上传的图片最大支持5M，请压缩后或换一个继续上传", text31: "上传的音乐最大支持10M，请压缩后或换一个继续上传", text32: "上传的视频最大支持30M，请压缩后或换一个继续上传", text33: "图片格式错误，请不要上传其他类型的文件", text34: "音频格式错误，请不要上传其他类型的文件", text35: "视频格式错误，请不要上传其他类型的文件", textup: "上传ing", loadingTxT: "加载中", text36: "用户名不能为空", text37: "密码不能为空", text38: "请在下方输入框进行修改然后点击保存即可", text39: "保存", text40: "评论", text41: "邮箱", text42: "昵称", text43: "用户名与密码不匹配", text44: "登陆失败，常见错误有<br><li>网络错误</li><li>域名不在leancloud的域名白名单中被限制登录</li><li>当前页面使用了其他leancloud应用导致登录到了其他应用所以失败</li>", text45: "未找到此用户", text46: "尝试错误密码次数过多，请稍后再试"};

// sytalk的方法
var sytalk = new function() {
  let that = this;
  // 默认页
  that.pageNum = 1;
  // 防止重复点击事件
  that.lock = 0;
  // 当前已经加载条数
  that.shuoNum = 0;
  // 表情是否加载过了
  that.switchName = "Tieba";
  // 表情字典
  that.emojiDict = {};
  // 要删除的列表
  that.deleteList = [];
  // 初始化
  this.init = function(option = {}) {
    // 写入配置文件
    that.config = {
      appId: option.appId || "",
      appKey: option.appKey || "",
      serverURL: option.serverURL || "",
      pageSize: option.pageSize || 10,
      emojiServer: option.emojiServer || "https://fastly.jsdelivr.net/gh/afyi/sytalk-emoji/",
      bgImg: option.bgImg || "https://fastly.jsdelivr.net/gh/afyi/sytalk-emoji/bgImg.webp",
      cssUrl: option.cssUrl || "",
      shuoPla: option.shuoPla || "请输入你的心情吧 ^_^~",
      avatarUrl: option.avatarUrl || "https://cravatar.cn/avatar/0?s=128",
      onLoad: option.onLoad || function(){},
      onLogin: option.onLogin || function(){},
      onPublished: option.onPublished || function() {}
    };
    // 初始化leancloud方法
    try {
      AV.init({appId: that.config.appId, appKey: that.config.appKey, serverURL: that.config.serverURL});
      // 拿到当前登陆用户
      that.user = that.getCurrentUser();
    } catch (error) {
      let err = error.toString();
      if (err.indexOf('appId is not defined') != -1) {
        console.log("appId没找到");
      } else if (err.indexOf('appKey is not defined') != -1) {
        console.log("appKey没找到");
      } else {
        console.log(err);
      }
    }
    // 这里开始加载Css
    if (!document.getElementById('add-sytalk_Style')) {
      // 如果没有外链样式表，则直接用内置样式
      if (that.config.cssUrl == "") {
        // 加载一下基础样式
        let atStyle = document.createElement("style");
        let atCss = ""
          // 定义要用到的变量
          + ":root{--list-even-color:#fff;--list-odd-color:rgba(255, 125, 73, 0.75);--readmore-bg-color:#fff;--main-text-color: #707070; --button-bg-color: #efefef}"
          + "#sytalk_main{transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);font-family:UbuntuMono;color:var(--main-text-color) }"
          + "#sytalk_main svg{display:inline;color:var(--main-text-color)}"
          + "#sytalk_main img{transition: all 0.28s ease;}"
          + "#sytalk_main ul, #sytalk_main li {list-style: none;}"
          + "#sytalk_main .at_button{border: none;margin-left: 5px;color: #333;padding: 8px 16px;text-align: center;text-decoration: none;height: auto;line-height: 20px;display: inline-block;font-size: 12px;border-radius: 12px;outline: none;cursor: pointer;}"
          + "#sytalk_main #shuoshuo_content {padding: 10px}"
          // loading动画
          + "#sytalk_main #lazy{background:rgba(0,0,0,.2);bottom:0;left:0;position:fixed;right:0;top:0;z-index:9999;}"
          + "#sytalk_main #lazy .preloader{position:absolute;margin-left:-55px;margin-top:-100px;height:110px;width:110px;left:50%;top:50%;}"
          + "#sytalk_main #lazy .preloader>svg>g>path{stroke:#9ea1a4;stroke-width:0.25;}"
          + "#sytalk_main #lazy .preloader>svg>path{stroke:#9ea1a4;stroke-width:0.25;}"
          // 定义云朵
          + "#sytalk_main #lazy #cloud{position:relative;z-index:2;}"
          + "#sytalk_main #lazy #cloud path{fill:#efefef;}"
          // 定义太阳
          + "#sytalk_main #lazy #sun{margin-left:-10px;margin-top:6px;opacity:0;width:60px;height:60px;position:absolute;left:45px;top:15px;z-index:1;animation: rotate 16s infinite linear}"
          + "#sytalk_main #lazy #sun path{stroke-width:0.18;fill:#9ea1a4;}"
          // 定义雨
          + "#sytalk_main #lazy .rain{position: absolute;width:70px;height:70px;margin-top:-32px;margin-left:19px;}"
          + "#sytalk_main #lazy .drop{opacity:1;background:#9ea1a4;display:block;float:left;width:3px;height:10px;margin-left:4px;border-radius:0px 0px 6px 6px;animation: drop 350ms infinite;}"
          + "#sytalk_main #lazy .drop:nth-child(1){animation-delay:-130ms;}"
          + "#sytalk_main #lazy .drop:nth-child(2){animation-delay:-240ms;}"
          + "#sytalk_main #lazy .drop:nth-child(3){animation-delay:-390ms;}"
          + "#sytalk_main #lazy .drop:nth-child(4){animation-delay:-525ms;}"
          + "#sytalk_main #lazy .drop:nth-child(5){animation-delay:-640ms;}"
          + "#sytalk_main #lazy .drop:nth-child(6){animation-delay:-790ms;}"
          + "#sytalk_main #lazy .drop:nth-child(7){animation-delay:-900ms;}"
          + "#sytalk_main #lazy .drop:nth-child(8){animation-delay:-1050ms;}"
          + "#sytalk_main #lazy .drop:nth-child(9){animation-delay:-1130ms;}"
          + "#sytalk_main #lazy .drop:nth-child(10){animation-delay:-1300ms;}"
          // 列表部分
          + "#sytalk_main #shuoshuo_content{padding:10px;}"
          + "#sytalk_main #ccontent .cbp_tmtimeline{margin:30px 0 0 0;padding:0;list-style:none;display:inline;position:relative;}"
          + "#sytalk_main #ccontent .cbp_tmtimeline li {cursor:pointer}"
          // 头像
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .shuoshuo_author_img img{border:1px solid #ddd;padding:2px;float:left;border-radius:64px;transition: all 1s;}"
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .shuoshuo_author_img .sytalk_avatar{border-radius:100%;box-shadow:inset 0 -1px 0 3333sf;transition:transform 0.4s ease-out;}"
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .shuoshuo_author_img .sytalk_avatar:hover{transform:rotateZ(360deg);}"
          // 说说内容框
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel{margin:0 0 45px 65px;z-index:1;background:var(--list-even-color);color:#333;padding:.8em 1.2em .4em 1.2em;font-weight:300;line-height:1.6;position:relative;border-radius:5px;transition:all .3s ease 0s;box-shadow:0 1px 12px rgba(0,0,0,.3);display:block}"
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel:after{right:100%;border:solid transparent;z-index:-1;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-right-color:var(--list-even-color);border-width:10px;top:4px;}"
          + "#sytalk_main #ccontent .cbp_tmlabel:hover {transform:translateY(-3px);z-index:1;box-shadow:0 15px 32px rgba(0,0,0,0.15);}"
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel img.atemoji{max-height: 28px;width: 28px;display:inline;vertical-align:middle;}"
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel a{text-decoration:none;}"
          // 隔行不同色
          // + "#sytalk_main #ccontent .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel{background: var(--list-odd-color);color:#333;}"
          // + "#sytalk_main #ccontent .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after{border-right-color: var(--list-odd-color);}"
          // 删除图标
          + "#sytalk_main #ccontent .cbp_tmtimeline>li .delete_right{cursor:pointer;width:20px;height:20px;position:absolute;right: 12px;display:none}"  
          // 这里是弹框的样式
          // 弹框背景
          + "#operare_sytalk .c1{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5)}"
          + "#operare_sytalk .c2{postion:relative;background:#fff;position:fixed;width:400px;height:auto;top:calc(47% - 150px);left:calc(47% - 200px);z-index:3;opacity:.85;border:0;border-radius:10px;box-shadow:0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%);padding:3%}"
          + "#operare_sytalk .c2 .login_tit{font-family:UbuntuMono;font-size:1.3rem;border-bottom:1px solid #EDEDED;padding-bottom: 15px}"
          + "#operare_sytalk .c2 .login_input{width: 90%;height:36px;line-height:48px;margin:16px auto;text-align:center;font-size:14px;border: 1px solid #EDEDED;background: #fff;}"
          + "#operare_sytalk .c2 .login_btn, #operare_sytalk .c2 .logout_btn, #operare_sytalk .c2 .at_button{height:48px;border-radius:28px;color:#888;background:#ededed;font-size:1.3rem;cursor:pointer}"
          + "#operare_sytalk .c2 #logw{font-size:.9rem}"
          + "#operare_sytalk .c2 #userAvatar img{border-radius: 100%}"
          + "#operare_sytalk .c2 #userName {font-size: 1.2rem; color: var(--main-text-color)}"
          + "#operare_sytalk .c2 #userLogout{height: 36px;line-height: 36px;}"
          + "#operare_sytalk .c2 #userLogout .logout_btn{width: 80%;border:0;}"
          + '#operare_sytalk .c2 .closeBtn{position:absolute;right:15px;top:15px}'
          + '#operare_sytalk .c2 .at_button{width: 80%;border:0;margin-top:5px;background-color:var(--button-bg-color)}'
          // 输入框
          + "#sytalk_main #shuoshuo_input .shuoshuo_text{width: 100%;height: 130px;padding: 8px 16px;transition: all 0.35s ease-in-out 0s;outline-style: none;border: 1px solid #ccc;border-radius: 6px;resize: none;background-color: transparent;color: #999;box-sizing:border-box;background:url('" + that.config.bgImg + "') no-repeat right center}"
          + "#sytalk_main #shuoshuo_input .shuoshuo_text:focus{background-position-y: 150px;}"
          + "#sytalk_main #shuoshuo_input .shuoshuo_row{display:flex;}"
          + "#sytalk_main #shuoshuo_input .sytalk_child {margin-left:auto;margin-top:10px}"
          + "#sytalk_main #shuoshuo_input .sytalk_child button{width: 100px;border-radius:6px}"
          // 输入框表情框
          + "#sytalk_main #shuoshuo_input .shuoshuo_emoji{border: 1px solid #ccc;border-radius: 6px 6px 0 0;height: 120px;overflow: auto;margin-top: 10px;border-bottom: none;}"
          + "#sytalk_main #shuoshuo_input div#shuoshuo_emojiswitch{display:flex;height: 40px;width: auto;border-radius: 0 0 6px 6px;border-collapse: collapse;border: 1px solid #ccc;border-top-color: var(--button-bg-color);}"
          + "#sytalk_main #shuoshuo_input .shuoshuo_emoji_part{width:25%;cursor:pointer;align-content:center;text-align:center;line-height:40px;}"
          + "#sytalk_main #shuoshuo_input .shuoshuo_emoji_part.active{background-color: var(--button-bg-color);color: var(--main-text-color);}"
          + "#sytalk_main img.atemoji {max-height: 28px;width: 28px;display: inline;vertical-align: middle;cursor: pointer;margin: 10px 0 0 10px;display: inline;}"
          + "#sytalk_main img.atemoji:hover{transform: scale(1.5)};"
          // 预览框
          + "#preview{border: 1px solid #f00;border-radius: 6px 6px 0 0;}"
          + "#sytalk_main #shuoshuo_input #preview img {margin-top: 0}"
          // 时间机型样式
          + "#sytalk_main p.shuoshuo_time{font-size:.95rem;margin:10px 0 0;padding-top:5px;border-top: 1px dashed;line-height:2.2rem}"
          + "#sytalk_main p.shuoshuo_time svg{width: 12px;height:12px;padding-right:3px}"
          + "#sytalk_main p.shuoshuo_time .os, #sytalk_main p.shuoshuo_time .date{position:relative;padding:0 15px 0 20px}"
          + "#sytalk_main p.shuoshuo_time .os svg, #sytalk_main p.shuoshuo_time .date svg{position:absolute;left:0;top:1px;width:18px;height:18px;line-height:21px}"
          + "#sytalk_main p.shuoshuo_time .os svg {width: 16px;height:16px;}"
          // readmore
          + "#sytalk_main #readButton #readmore{background-color: var(--readmore-bg-color);border:none;color:var(--main-text-color);font-size:medium;font-weight:500;border-radius:8px;outline:0;box-shadow:0 0 8px rgb(0 0 0 / 30%);padding:8px 16px}"
          + "#sytalk_main #readButton #readmore:hover{box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);}"
          // 底部图标
          + "#sytalk_main .power{text-align:center;overflow:hidden;color:#999;margin-top:10px;font-size:.75em;padding:.5em 0;width:100%}"
          + "#sytalk_main .power div{padding:0 12px}"
          + "#sytalk_main .copyright{margin: 8px auto}"
          + "#sytalk_main .copyright a{line-height:1.6rem;font-size:.8rem;color:#bbb;text-decoration:none;font-family:Monaco, Menlo, Helvetica, Arial}"
          // 定义动画
          + "@keyframes rotate{0%{transform:rotateZ(0)}100%{transform:rotateZ(360deg)}}"
          + "@keyframes drop{50%{height:45px;opacity:0}51%{opacity:0}100%{height:1px;opacity:0}}"
          + "";
        atStyle.type = "text/css";
        atStyle.id = "add-sytalk-Style";
        atStyle.innerHTML = atCss;
        document.head.appendChild(atStyle);
      } else {
        let atStyle = document.createElement('link');
        atStyle.rel = 'stylesheet';
        atStyle.href = that.config.cssUrl;
        atStyle.id = "add-sytalk-Style";
        document.head.appendChild(atStyle);
      }
    }
    // 主体HTML
    let atHtml = "<div id='sytalk_part1'>"
               + "  <div id='shuoshuo_content'>"
               + "    <div id='ccontent'>"
               + "      <ul class='cbp_tmtimeline' id='maina'></ul>"
               + "    </div>"
               + "    <div id='readButton' style=''>"
               + "      <center>"
               + "        <button id='readmore' class='at_button' style='margin-bottom: 15px;display: none'>" + atText.text1 + "</button>"
               + "      </center>"
               + "    </div>"
               + "  </div>"
               + "  <div id='shuoshuo_input' class='shuoshuo_active' style='display: none;'>"
               + "    <div id='shuoshuo_edit'>"
               + "      <textarea class='shuoshuo_text' id='neirong' placeholder='" + that.config.shuoPla + "'></textarea>"
               + "      <span id='drag_area' class='z-index: -1;'></span>"
               + "    </div>"
               + "    <div id='shuoshuo_parttwo' class='shuoshuo_parttwo'>"
               + "      <div id='shuoshuo_emoji_Tieba' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emoji_BiliBili' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emoji_QQ' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emoji_custom' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emojiswitch' class='shuoshuo_emojiswitch' style='display: none'>"
               + "        <div id='switch_Tieba' class='shuoshuo_emoji_part active'>贴吧</div>"
               + "        <div id='switch_BiliBili' class='shuoshuo_emoji_part'>哔哩哔哩</div>"
               + "        <div id='switch_QQ' class='shuoshuo_emoji_part'>QQ</div>"
               + "        <div id='switch_custom' class='shuoshuo_emoji_part'>自定义</div>"
               + "      </div>"
               + "    </div>"
               + "    <div class='shuoshuo_submit'>"
               + "      <div class='shuoshuo_row'>"
               + "        <input class='sytalk_child shuoshuo_inputs' style='display: none' id='email' value='' placeholder='" + atText.text18 + "'>"
               + "        <input class='sytalk_child shuoshuo_inputs' style='display: none' id='commentNick' value='' placeholder='" + atText.text18 + "'>"
               + "        <div class='sytalk_child'>"
               + "          <button class='at_button' id='atSave'>" + atText.text3 + "</button>"
               + "          <button class='at_button' id='atPreview'>" + atText.text2 + "</button>"
               + "          <button class='at_button' id='loadEmoji'>" + atText.text22 + "</button>"
               + "        </div>"
               + "      </div>"
               + "    </div>"
               + "    <div id='shuoshuo_preview' style='display:none;'></div>"
               + "  </div>"
               + "</div>"
               + "<div class='power'>"
               + "  <div style='font-size: 25px;display: inline; cursor: pointer' id='pubShuo' title='" + atText.text11 + "'>"
               + "    <svg t='1591347684072' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='9731' width='30' height='30'  style='display: inline'>"
               + "      <path d='M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z' p-id='9732' fill='#707070'></path>"
               + "      <path d='M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z' p-id='9733' fill='#707070'></path>"
               + "    </svg>"
               + "  </div>"
               + "  <div style='font-size: 25px;display: inline; cursor: pointer' id='switchUser' title='登录'>"
               + "    <svg t='1591347848063' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='12288' width='30' height='30' style='display: inline'>"
               + "      <path d='M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z' p-id='9732' fill='#707070'></path>"
               + "      <path d='M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z' p-id='12289' fill='#707070'></path>"
               + "    </svg>"
               + "  </div>"
               + "  <div class='copyright'><a href='https://github.com/afyi/sytalk' target='_blank' title='sytalk评论系统 V" + atVersion + ",基于Artitalk V3.3.4'>sytalk  " + atVersion + "</a></div>"
               + "</div>";
    // 加载动画
    let motionHtml = "<div id='lazy'>"
                   + "  <div class='preloader' style='opacity: 1; '>"
                   + "    <svg version='1.1' id='sun' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px'y='0px' width='10px' height='10px' viewBox='0 0 10 10' enable-background='new 0 0 10 10' xml:space='preserve'style='opacity: 1; margin-left: 0px; margin-top: 0px;'><g><path fill='none'd='M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z'></path><path fill='none'd='M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z'></path><path fill='none'd='M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z'></path><path fill='none'd='M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z'></path><path fill='none'd='M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z'></path><path fill='none'd='M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z'></path><path fill='none'd='M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z'></path><path fill='none'd='M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z'></path><path fill='none'd='M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z'></path><path fill='none'd='M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z'></path><path fill='none'd='M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z'></path><path fill='none'd='M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z'></path><path fill='none'd='M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z'</path></g></svg><svg version='1.1' id='cloud' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'x='0px' y='0px' width='110px' height='110px' viewBox='0 0 10 10' enable-background='new 0 0 10 10'xml:space='preserve'><path fill='none'd='M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z'></path></svg>"
                   + "    <div class='rain'>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "      <span class='drop'></span>"
                   + "    </div>"
                   // + "    <div class='sytalk_loading_text' id='loading_txt'>" + atText.loadingTxT + "</div>"
                   + "  </div>"
                   + "</div>";
    // 操作弹出框
    let atOpHtml = "<div id='shade' class='c1' style='display: none'></div>"
                 + "<div id='login' class='c2' style='display: none'>"
                 + "  <a href='javascript:void(0)' title='关闭' class='closeBtn' onclick='sytalk.close(this);'><svg t='1591347978744' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='14459' width='20' height='20' style='display: inline'><path d='M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z' p-id='14460' fill='#707070'></path><path d='M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z' p-id='14461' fill='#707070'></path></svg></a>"
                 + "  <center>"
                 + "    <p class=\"login_tit\">Sytalk V1.0.0</p>"
                 + "    <p><input type='text' class='login_input lognin_input_usr' id='sytalk_usr' placeholder='" + atText.text7 + "'/></p>"
                 + "    <p><input type='password' class='login_input lognin_input_pwd' id='sytalk_pwd' placeholder='" + atText.text8 + "'/></p>"
                 + "    <p><input type='button' value='" + atText.text9 + "' class='login_input login_btn' id='doLogin'></p>"
                 + "  </center>"
                 + "  <center><div id='logw' style='color: red'></div></center>"
                 + "</div>"
                 + "<div id='userinfo' class='c2' style='display: none'>"
                 + "  <a href='javascript:void(0)' title='关闭' class='closeBtn' onclick='sytalk.close(this);'><svg t='1591347978744' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='14459' width='20' height='20' style='display: inline'><path d='M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z' p-id='14460' fill='#707070'></path><path d='M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z' p-id='14461' fill='#707070'></path></svg></a>"
                 + "  <center>"
                 + "    <div id='infobox'></div>"
                 + "    <p id='userLogout'><input id='doLogout' type='button' value='" + atText.text6 + "' class='logout_btn'></p>"
                 + "  </center>"
                 + "</div>"
                 + "<div id='shanchu' class='c2' style='display: none'>"
                 + "  <center>"
                 + "    <p>" + atText.text20 + "</p>"
                 + "    <p><input type='button' class='at_button' value='" + atText.text5 + "' id='deleteSus'></p>"
                 + "  </center>"
                 + "</div>"
                 + "<div id='shanchur' class='c2' style='display: none'>"
                 + "  <a href='javascript:void(0)' title='关闭' class='closeBtn' onclick='sytalk.close(this);'><svg t='1591347978744' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='14459' width='20' height='20' style='display: inline'><path d='M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z' p-id='14460' fill='#707070'></path><path d='M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z' p-id='14461' fill='#707070'></path></svg></a>"
                 + "  <center>"
                 + "    <p>" + atText.text19 + "</p>"
                 + "    <p><div id='delete1'></div></p>"
                 + "  </center>"
                 + "</div>";
    // 输出html
    var atOp = document.createElement('div');
    atOp.id = 'operare_sytalk';
    document.body.append(atOp);
    document.getElementById('operare_sytalk').innerHTML = atOpHtml;
    document.getElementById('sytalk_main').innerHTML = motionHtml + atHtml;
    // 这里第一次加载说说
    that.loadContent(0);
    // 阅读更多按钮响应事件
    document.getElementById('readmore').onclick = () => {
      this.loadContent(0, 0, that.shuoNum)
    }
    // 这里写发表评论的按钮事件 
    document.getElementById('pubShuo').onclick = () => {
      if (that.user.username != '') {
        // 已登陆
        if (document.getElementById('shuoshuo_input').style.display === "") {
          that.fadeOut('shuoshuo_input');
        } else {
          that.fadeIn('shuoshuo_input');
        }
      } else {
        // 未登陆，就直接弹出登陆框
        document.getElementById('logw').innerHTML = "<center><pre><code>" + atText.text15 + "</code></pre></center>";
        that.Show('login');
      }
    }
    // 这里是登陆 / 登出图标
    document.getElementById('switchUser').onclick = () => {
      if (that.user.username != '') {
        // 如果登陆过了，就直接弹出用户面板
        that.Show('userinfo');
      } else {
        // 如果没有登陆，则弹出登陆框
        document.getElementById('logw').innerHTML = atText.text15;
        that.Show('login');
      }
    }
    // 注销登陆
    document.getElementById('doLogout').onclick = () => {
      AV.User.logOut().then(res => {
        // 更新用户信息
        that.upvUser(that.getCurrentUser());
        // 关闭窗口
        that.Hide('userinfo');
      });
    }
    // 这里写登陆事件
    document.getElementById('doLogin').onclick = () => {
      if (that.lock == 1) return;
      // 清空登陆面板的状态
      document.getElementById('logw').innerHTML = '';
      document.getElementById('doLogin').value = "登陆中";
      // 用户名
      let userName = document.getElementById('sytalk_usr').value;
      // 密码
      let passWord = document.getElementById('sytalk_pwd').value;
      if (!/^.{1,}$/.test(userName) || !/^.{1,}$/.test(passWord)) {
        document.getElementById('logw').innerHTML = atText.text43;
        that.lock = 0; // 解锁
        document.getElementById('doLogin').value = atText.text9; 
        return;
      }
      // 开始登陆
      AV.User.logIn(userName, passWord).then((user) => {
        // 更新用户信息
        that.upvUser(user.attributes)
        // 关闭登陆窗口
        that.Hide('login');
        // 登陆后的回调
        that.config.onLogin(userName);
      }, (error) => {
        let errLogin = error.message;
        // console.log(errLogin);
        if (errLogin.indexOf('mismatch') != -1) {
          errLogin = atText.text43;
        } else if (errLogin.indexOf('terminated') != -1) {
          errLogin = atText.text44;
        } else if (errLogin.indexOf('Could not find user.') != -1) {
          errLogin = atText.text45;
        } else if (errLogin.indexOf('You have exceeded the maximum number of login attempts.') != -1) {
          errLogin = atText.text46;
        }
        document.getElementById('logw').innerHTML = errLogin;
      }).finally(() => {
        // 文字恢复
        document.getElementById('doLogin').value = atText.text9; 
        // 无论返回什么都解锁
        that.lock = 0;
      });
    }
    // 彻底删除
    document.getElementById('deleteSus').onclick = () => {
      // 然后关掉删除成功的提示
      that.Hide('shanchu');
      // 直接强制重新加载当前页就可以了
      // that.loadContent(0, 1);
      // 直接让删除的那条消失就好了
      let li = that.deleteList.shift();
      if (li) document.getElementById(li).remove();
      if(document.getElementById('maina').querySelectorAll('li').length < that.shuoNum) {
        that.loadContent(that.shuoNum, 1, 0);
      }
    }
    // 加载表情
    document.getElementById("loadEmoji").onclick = () => {
      if (document.getElementById("shuoshuo_emojiswitch").style.display != "none") {
        // 是否窗口已经打开，如果是打开，就直接关闭所有的聊天窗口
        that.fadeOut('shuoshuo_emoji_Tieba');
        that.fadeOut('shuoshuo_emoji_BiliBili');
        that.fadeOut('shuoshuo_emoji_custom');
        that.fadeOut('shuoshuo_emoji_QQ');
        that.fadeOut('shuoshuo_emojiswitch');  
      } else {
        // 帖吧是第1个，所以直接加载TIEBA表情
        that.loadEmoji(that.switchName);
        that.fadeIn('shuoshuo_emoji_' + that.switchName);
        that.fadeIn('shuoshuo_emojiswitch');
      }
    }
    // 这里是贴吧表情
    document.getElementById('switch_Tieba').onclick = () => {
      that.switchName = 'Tieba';
      that.switchEmoji('switch_Tieba');
    }
    // 这里是QQ表情
    document.getElementById('switch_BiliBili').onclick = () => {
      that.switchName = 'BiliBili';
      that.switchEmoji('switch_BiliBili');
    }
    // 这里是小破站表情
    document.getElementById('switch_QQ').onclick = () => {
      that.switchName = 'QQ';
      that.switchEmoji('switch_QQ');
    }
    // 这里是自定义表情
    document.getElementById('switch_custom').onclick = () => {
      that.switchName = 'custom';
      that.switchEmoji('switch_custom');
    }
    // 预览按钮
    document.getElementById('atPreview').onclick = () => {
      if (document.getElementById('shuoshuo_preview').style.display == "none") {
        that.preview();
        that.fadeIn('shuoshuo_preview');
      } else {
        // 如果是显示状态，直接关闭就是了
        that.fadeOut('shuoshuo_preview');
      }
    }
    // 提交心情
    document.getElementById('atSave').onclick = () => {
      if (!that.getCurrentUser.username) {
        // 为了方便，直接模拟点击登陆按钮
        document.getElementById('doLogin').click();
      }
      // 说说内容
      let shuoshuoContent = that.trim(document.getElementById('neirong').value);
      if (shuoshuoContent === '') throw '说说内容不能为空';
      // 开始数据操作
      let sytalkObject = AV.Object.extend('shuoshuo');
      let atObject = new sytalkObject();
      atObject.set('atContentMd', shuoshuoContent);
      shuoshuoContent = that.preview(0);
      atObject.set('atContentHtml', shuoshuoContent);
      atObject.set('avatar', that.user.img || that.config.avatarUrl);
      // 获取客户端信息
      let userClient = new Client();
      atObject.set('userOs', userClient.system.name || 'OtherOs');
      atObject.set('userBrowser', (userClient.browser.name + ' ' +  userClient.browser.version) || 'Others browser');
      // 防重复提交
      if (that.lock == 1) return;
      that.lock = 1;
      that.fadeIn('lazy');
      atObject.save().then(res => {
        // 清空发布框的内容
        document.getElementById("neirong").value = "";
        document.getElementById("shuoshuo_preview").innerHTML = "";
        // 直接刷新
        that.loadContent(that.shuoNum, 1, 0);
        // 发布成功的钩子
        that.config.onPublished(that.user, shuoshuoContent);
      }).finally(() => {
        that.lock = 0;
        that.fadeOut('lazy');
      });
    }
    // 这里监听内容框的输入
    document.getElementById("neirong").addEventListener("input", () => {
      that.preview();
    });
    // 这里更新一下用户面板
    document.getElementById("infobox").innerHTML = '<p id="userAvatar"><img src="' + that.user.img + '" class="circle"></p><p id="userName">' + that.user.username + '</p>';
    return that; 
  }
  // 解析md和表情
  this.preview = (display = 1) => {
    let mdCont = document.getElementById('neirong').value;
    // 建立markdown解析器
    let converter = new showdown.Converter();
    converter.setOption('strikethrough', 1);
    let finishPre = converter.makeHtml(that.translate(mdCont));
    // 如果是不显示，则返回值 ，用于数据库提交
    if (display == 0) return finishPre;
    document.getElementById('shuoshuo_preview').innerHTML= finishPre;
  }
  // 加载说说
  // pageSize: 每页条数 refrush: 刷新当前全部 , startNum: 起始ID
  this.loadContent = function(pageSize = 0, refrush = 0, startNum = 0) {
    // 显示加载动画
    that.fadeIn('lazy');
    let query = new AV.Query('shuoshuo');
    // 先获取总条数，再进行循环
    query.count().then(totalNum => {
      // console.log("总条数:", totalNum);
      // 排序字段
      query.descending('createdAt');
      // 每页条数
		  query.limit(pageSize < that.config.pageSize || pageSize == 0 ? that.config.pageSize : pageSize);
      // 筛选起点
		  query.skip(startNum);
      // 如果是从0开始加载，那么这个条数直接归0
      if (startNum == 0) that.shuoNum = 0;
      // 拿到列表
      query.find().then(shuoContent => {
        // 如果是强制刷新，则提前清空掉容器
        if (refrush == 1) document.getElementById('maina').innerHTML = '';
        // 处理列表
        shuoContent.forEach(atContent => {
          // 加载条数 + 1
          that.shuoNum = that.shuoNum + 1;
          // 头像初始化
				  let shuoAvatar = atContent.attributes.avatar;
				  shuoAvatar = typeof (shuoAvatar) === "undefined" ? that.config.avatarUrl : shuoAvatar;
				  // 判定当前是否显示删除按钮
				  let hideIcon = that.user.username ? 'style="display: inline"' : 'style="display: none"';
          // 时间格式化
				  let nowDate = new Date(atContent.createdAt);
          let atHour = nowDate.getHours();
          nowDate = nowDate.getFullYear() + '-' + that.timeFormat(nowDate.getMonth() + 1) + '-' + that.timeFormat(nowDate.getDate()) + ' ' + that.timeFormat(nowDate.getHours()) + ':' + that.timeFormat(nowDate.getMinutes()) + ':' + that.timeFormat(nowDate.getSeconds());
          // 格式化系统图标
				  let os = that.trim(atContent.attributes.userOs);
          // 图标
          let osSvg = "";
          switch (os.toLowerCase()) {
            case "windows":
              osSvg = "<svg t=\"1591348521231\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"16474\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z\" p-id=\"16475\"></path></svg>" + " ";
              break;
            case "android":
              osSvg = "<svg t=\"1591349177001\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17355\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z\" p-id=\"17356\"></path></svg>" + " ";
              break;
            case "linux":
              osSvg = "<svg t=\"1591349455279\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17896\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z\" p-id=\"17897\"></path></svg>" + " ";
              break;  
            case "ios":
              osSvg = "<svg t=\"1591349632686\"  viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\"></path></svg>" + " ";
              break;
            case "mac":
              osSvg = "<svg t=\"1591349632686\"  viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\"></path></svg>" + " ";
              os = "MacOS";
              break;
            default:
              osSvg = "<svg t=\"1591349738696\"  viewBox=\"0 0 1168 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"20407\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z\" p-id=\"20408\"></path></svg>" + " ";
          }
          // 格式化时间
          let timeSvg = "";
          atHour = 8;
          if (atHour >= 0 && atHour < 5) {
            timeSvg = "<svg t=\"1591350196611\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24683\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z\" p-id=\"24684\"></path></svg>" + " ";
          } else if (atHour >= 5 && atHour < 6) {
            timeSvg = "<svg t=\"1591350273094\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24973\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z\" p-id=\"24974\"></path></svg>" + " ";
          } else if (atHour >= 6 && atHour < 8) {
            timeSvg = "<svg t=\"1591350470149\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"25217\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z\" p-id=\"25218\"></path></svg>" + " ";
          } else if (atHour >= 8 && atHour < 11) {
            timeSvg = "<svg t=\"1591350526184\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26011\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z\" p-id=\"26012\"></path></svg>" + " ";
          } else if (atHour >= 11 && atHour < 13) {
            timeSvg = "<svg t=\"1591350817881\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29283\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0\" p-id=\"29284\"></path></svg>" + " ";
          } else if (atHour >= 13 && atHour < 17) {
            timeSvg = "<svg t=\"1591350596667\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27504\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z\" p-id=\"27505\"></path></svg>" + " ";
          } else if (atHour >= 17 && atHour < 18) {
            timeSvg = "<svg t=\"1591350638906\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27813\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z\" p-id=\"27814\"></path><path d=\"M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z\" p-id=\"27815\"></path></svg>" + " ";
          } else if (atHour >= 18 && atHour < 24) {
            timeSvg = "<svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z\" p-id=\"28654\"></path></svg>" + " ";
          }
          // 内容模板
          let contentli = '<li id="li_' + atContent.id + '"><span class="shuoshuo_author_img"><img id="atAvatar' + atContent.id + '" src="' + shuoAvatar + '" class="sytalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel" id="atId' + atContent.id + '"><a href="javascript:void(0)" ' + hideIcon + ' id="operate' + atContent.id + '" class="delete_right" onclick="sytalk.delete(\'' + atContent.id + '\')"><svg t="1591347978744" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14459" width="20" height="20" style="display: inline"><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="14460"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="14461"></path></svg></a><div class="atContent" id="forEdit' + atContent.id + '">' + atContent.attributes.atContentHtml + '</div><p class="shuoshuo_time"><span class="os">' + osSvg + os + '</span><span class="date">' + timeSvg + nowDate + '</span></p></span></li>';
          document.getElementById('maina').insertAdjacentHTML('beforeend', contentli);
        });
        // console.log(that.shuoNum, totalNum);
        if (that.shuoNum < totalNum) {
          that.fadeIn('readmore');
        } else {
          document.getElementById('readButton').innerHTML = '<center>' + atText.text14 + '</center>';
          document.getElementById('readButton').style.opacity = '0.5';
        }
        that.fadeOut('lazy');
        // 这里设置回调，第1次加载到完后回调一下
        if (that.shuoNum <= that.config.pageSize) {
          that.config.onLoad();
        } 
      });  
    });
  }
  // 更新用户信息
  this.upvUser = () => {
    if (!AV.User.current()) return;
    that.user = AV.User.current();
    // 登陆面板信息更新
    if (that.user.username) {
      document.getElementById("infobox").innerHTML = '<p id="userAvatar"><img src="' + that.user.img + '" class="circle"></p><p id="userName">' + that.user.username + '</p>';
      // 删除按钮可见性
      document.querySelectorAll(".delete_right").forEach((node) => {
        node.style.display = 'inline';
      });
    } else {
      document.getElementById("infobox").innerHTML = '<p id="userAvatar"><img src="' + that.config.avatarUrl + '" class="circle"></p><p id="userName">sytalk</p>';
      document.querySelectorAll(".delete_right").forEach((node) => {
        node.style.display = 'none';
      });
    }
  }
  // 删除当前说说
  this.delete = (id) => {
    document.getElementById('delete1').innerHTML = '<input type="button" class="at_button" value="' + atText.text5 + '" id="Delete"/>';
    that.Show('shanchur');
    // 这里注册直接删除事件
    document.getElementById('Delete').onclick = function () {
      that.Hide('shanchur');
      that.fadeIn('lazy');
      AV.Object.createWithoutData('shuoshuo', id).destroy().then( (success) => {
        that.deleteList.push('li_' + id);
        that.Show('shanchu');
      }, function (error) {
        console.log(error.rawMessage);
      }).finally(() => {
        that.fadeOut('lazy');
      });
    }
  }
  // 切换表情页
  this.switchEmoji = (id = "") => {
    document.getElementById('shuoshuo_emojiswitch').querySelectorAll('.shuoshuo_emoji_part').forEach(node => {
      let nodeid = node.getAttribute("id") || "";
      let objName = nodeid.split("_")[1];
      if (nodeid && nodeid == id) {
        // 加载对应的表情
        that.loadEmoji(objName);
        // 显示对应的表情页
        that.fadeIn("shuoshuo_emoji_" + objName)
        // 给当前switch加样式
        node.classList.add("active");
      } else {
        // 给当前switch取消样式
        node.classList.remove("active");
        that.fadeOut("shuoshuo_emoji_" + objName);
      }
    });
  }
  // 点击插入表情功能
  this.insertEmoji = (emoji) => {
    // 输入框
    let cont = document.getElementById("neirong");
    // 当前输入框内容
    let contlength = cont.value.length;
    // 给输入框获得焦点
    cont.focus();
    // 开始往里面加入表情，想兼容旧IE就用注释的
    // if (typeof (document.selection) !== "undefined") {
    //   // 兼容IE，
    //   document.selection.createRange().text = str;
    // } else {
    //   cont.value = cont.value.substr(0, cont.selectionStart) + emoji + cont.value.substring(cont.selectionStart, contlength);
    // }
    cont.value = cont.value.substr(0, cont.selectionStart) + emoji + cont.value.substring(cont.selectionStart, contlength);
    // 刷新预览框
    that.preview();
  }
  // 解析markdown内容
  this.translate = (mdCont) => {
    if (typeof mdCont === 'undefined') return;
    let emojis = mdCont.match(/\[(.*?)\]/ig);
    // 如果没有表情，则直接跳过
    if (emojis != null) {
      let emojidict = that.getEmojiDict();
      emojis.forEach(emoji => {
        if(typeof emojidict[emoji] != 'undefined') {
          mdCont = mdCont.replace(emoji, emojidict[emoji])
        }
      });
    }
    return mdCont;
  }
  // 获取表情字典
  this.getEmojiDict = () => {
    // 如果已经初始化，那就直接返回
    if (that.emojiDict.length > 1) return that.EmojiDict;
    // 这里是重载
    let emojiDict = {};
    Object.keys(atEmoji).forEach(emoji => {
      atEmoji[emoji].name.forEach(e => {
        emojiDict['[' + e +']'] = '<img src="' + that.config.emojiServer + e + '.' + atEmoji[emoji].ext + '" class="atemoji gallery-group-img"/>\n';
      })
    })
    that.emojiDict = emojiDict;
    return that.emojiDict;
  }
  // 关闭模态框
  this.close = (obj) => {
    let id = obj.parentElement.getAttribute('id');
    that.Hide(id)
  }
  // 加载表情
  this.loadEmoji = (emojiName = "") => {
    let objName = "shuoshuo_emoji_" + emojiName;
    // 判定是否已经加载过
    if (document.getElementById(objName).innerHTML != "") return;
    let emojiHtml = "";
    if (typeof atEmoji[emojiName] != "undefined") {
      atEmoji[emojiName].name.forEach(emoji => {
        emojiHtml += '<img alt="[' + emoji + ']" title="' + emoji + '" src="' + that.config.emojiServer + emoji + '.' + atEmoji[emojiName].ext + '" class="atemoji gallery-group-img" onclick="sytalk.insertEmoji(\'[' + emoji + ']\')"/>\n';
      });
    }
    document.getElementById(objName).innerHTML = emojiHtml;
  }
  // 获取当前用户
  this.getCurrentUser = () => {
    let currentUser = AV.User.current();
    return currentUser ? currentUser.attributes : {username: "", img: "", email: ""};
  }
  // 时间美化
  this.timeFormat = function(time) {
    return time < 10 ? '0' + time : time;
  }
  // 显示
  this.fadeIn = function(id) {
    if (!document.getElementById(id)) return;
    let nowEle = document.getElementById(id);
    nowEle.style.display = '';
  }
  // 淡出
  this.fadeOut = function(id) {
    if (!document.getElementById(id)) return;
    let nowEle = document.getElementById(id);
    nowEle.style.display = 'none';
  }
  // 显示
  this.Show = function(id) {
    that.fadeIn('shade');
    that.fadeIn(id);
  }
  // 移出
  this.Hide = function(id) {
    that.fadeOut('shade');
    that.fadeOut(id);
  }
  // 去空格
  this.trim = function(str) {
    return str.replace(/^(\s*)|(\s*)$/g, '');
  }
}