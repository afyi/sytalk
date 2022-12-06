'use strict'

// 版本号
const atVersion = "1.2.2";

// 表情包，兼容sytalk的
const atEmoji = {
  QQ: {name: ["aini", "aixin", "aoman", "baiyan", "bangbangtang", "baojin", "baoquan", "bishi", "bizui", "cahan", "caidao", "chi", "ciya", "dabing", "daku", "dan", "deyi", "doge", "fadai", "fanu", "fendou", "ganga", "gouyin", "guzhang", "haixiu", "hanxiao", "haobang", "haqian", "hecai", "hexie", "huaixiao", "jie", "jingkong", "jingxi", "jingya", "juhua", "keai", "kelian", "koubi", "ku", "kuaikule", "kulou", "kun", "lanqiu", "leiben", "lenghan", "liuhan", "liulei", "nanguo", "OK", "penxue", "piezui", "pijiu", "qiang", "qiaoda", "qinqin", "qiudale", "quantou", "saorao", "se", "shengli", "shouqiang", "shuai", "shui", "tiaopi", "touxiao", "tu", "tuosai", "weiqu", "weixiao", "woshou", "wozuimei", "wunai", "xia", "xiaojiujie", "xiaoku", "xiaoyanger", "xieyanxiao", "xigua", "xu", "yangtuo", "yinxian", "yiwen", "youhengheng", "youling", "yun", "zaijian", "zhayanjian", "zhemo", "zhouma", "zhuakuang", "zuohengheng"], ext: "gif"},
  Tieba: {name: ["OK", "what", "不高兴", "乖", "你懂的", "便便", "勉强", "吐", "吐舌", "呀咩爹", "呵呵", "哈哈", "啊", "喷", "大拇指", "太开心", "太阳", "委屈", "小乖", "小红脸", "彩虹", "心碎", "怒", "惊哭", "惊讶", "懒得理", "手纸", "挖鼻", "捂嘴笑", "星星月亮", "汗", "沙发", "泪", "滑稽", "灯泡", "爱心", "犀利", "狂汗", "玫瑰", "疑问", "真棒", "睡觉", "礼物", "笑尿", "笑眼", "红领巾", "胜利", "花心", "茶杯", "药丸", "蛋糕", "蜡烛", "鄙视", "酷", "酸爽", "钱币", "阴险", "音乐", "香蕉", "黑线"], ext: "png"}, 
  BiliBili: {name: ["baiyan", "bishi", "bizui", "chan", "daku", "dalao", "dalian", "dianzan", "doge", "facai", "fadai", "fanu", "ganga", "guilian", "guzhang", "haixiu", "heirenwenhao", "huaixiao", "jingxia", "keai", "koubi", "kun2", "lengmo", "liubixue", "liuhan", "liulei", "mudengkoudai", "nanguo", "outu", "qinqin", "se", "shengbing", "shengqi", "shuizhao", "sikao", "tiaokan", "tiaopi", "touxiao", "tuxue", "weiqu", "wunai", "xiaoku", "xieyanxiao", "yiwen", "yun", "zaijian", "zhoumei", "zhuakuang"], ext: "png"}
}

// 相关的字符
const atText = {text0: "由", text00: "发表", text1: "加载更多...", text2: "预览", text3: "发布", text4: "已登录", text5: "确定", text6: "退出登录", text7: "请输入您的用户名", text8: "请输入您的密码", text9: "登   录", text10: "取消", text11: "发布说说", text14: "已经到底了哦", text15: "请先登录", text18: "头像url", text19: "确定删除本条说说吗？", text20: "删除成功", text22: "表情", text23: "删除", text29: "添加", loadingTxT: "加载中", text36: "用户名不能为空", text37: "密码不能为空", text38: "请在下方输入框进行修改然后点击保存即可", text39: "保存", text41: "邮箱", text42: "昵称", text43: "用户名与密码不匹配", text44: "登陆失败，常见错误有<br><li>网络错误</li><li>域名不在leancloud的域名白名单中被限制登录</li><li>当前页面使用了其他leancloud应用导致登录到了其他应用所以失败</li>", text45: "未找到此用户", text46: "尝试错误密码次数过多，请稍后再试"};

// sytalk的方法
var sytalk = new function() {
  // 防止this被污染
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
  // 点赞的数据 格式：{"id": "time"}
  that.zanList = {};

  // 初始化
  this.init = function(option = {}) {
    // 写入配置文件
    that.config = {
      // leancloud appid
      appId: option.appId || "",
      // leancloud appkey
      appKey: option.appKey || "",
      // leancloud serverUrl
      serverURL: option.serverURL || "",
      // 每页加载数量
      pageSize: option.pageSize || 10,
      // 表情的CDN路径，默认是jsdelivr.net的加速地址
      emojiServer: option.emojiServer || "https://fastly.jsdelivr.net/gh/afyi/sytalk/dist/emoji/",
      // 发说说框的背景图，默认是https://github.com/afyi/sytalk/dist/img/bgImg.webp
      bgImg: option.bgImg || "https://fastly.jsdelivr.net/gh/afyi/sytalk/dist/img/bgImg.webp",
      // css的地址，默认也是jsdelivr加速过的github地址，可以更换为你自己的
      cssUrl: option.cssUrl || "https://fastly.jsdelivr.net/gh/afyi/sytalk/dist/css/sytalk.min.css",
      // 说说框的默认占位文字
      shuoPla: option.shuoPla || "请输入你的心情吧 ^_^~",
      // 发说说的个人头像，默认用的是cravatar.cn默认头像
      avatarUrl: option.avatarUrl || "https://cravatar.cn/avatar/0?s=128",
      // 自定义不同设备的显示名称，可以定义一个或者多个
      osName: option.osName || {android: "Android", macos: "MacOS", win: "Windows", linux: "Linux", other: "other"},
      // 是否开启点赞功能
      isZan: option.isZan || 1,
      // 点赞间隔，单位：秒，点赞时间间隔，默认是1天，如果设置为0，则只要有记录就不会清除
      zanIntval: typeof option.zanIntval == "undefined" ? 24 * 3600 : option.zanIntval,  
      // 说说加载完成后回调
      onLoad: option.onLoad || function(){},
      // 登陆后回调事件
      onLogin: option.onLogin || function(){},
      // 发布说说后的回调事件
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
      let atStyle = document.createElement('link');
      atStyle.rel = 'stylesheet';
      atStyle.href = that.config.cssUrl;
      atStyle.id = "add-sytalk-Style";
      document.head.appendChild(atStyle);
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
               + "      <textarea class='shuoshuo_text' id='neirong' placeholder='" + that.config.shuoPla + "' style='background:url(\"" + that.config.bgImg + "\") no-repeat right center'></textarea>"
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
               + "  <div class='op'>"
               + "    <div id='pubShuo' title='" + atText.text11 + "'><i class='syicon sy-edit'></i></div>"
               + "    <div id='switchUser' title='用户'><i class='syicon sy-login'></i></div>"
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
                 + "  <a href='javascript:void(0)' title='关闭' class='closeBtn' onclick='sytalk.close(this);'><i class='syicon sy-close'></i></a>"
                 + "  <center>"
                 + "    <p class=\"login_tit\">Sytalk V1.0.0</p>"
                 + "    <p><input type='text' class='login_input lognin_input_usr' id='sytalk_usr' placeholder='" + atText.text7 + "'/></p>"
                 + "    <p><input type='password' class='login_input lognin_input_pwd' id='sytalk_pwd' placeholder='" + atText.text8 + "'/></p>"
                 + "    <p><input type='button' value='" + atText.text9 + "' class='login_input login_btn' id='doLogin'></p>"
                 + "  </center>"
                 + "  <center><div id='logw' style='color: red'></div></center>"
                 + "</div>"
                 + "<div id='userinfo' class='c2' style='display: none'>"
                 + "  <a href='javascript:void(0)' title='关闭' class='closeBtn' onclick='sytalk.close(this);'><i class='syicon sy-close'></i></a>"
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
                 + "  <a href='javascript:void(0)' title='关闭' class='closeBtn' onclick='sytalk.close(this);'><i class='syicon sy-close'></i></a>"
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
    // 这里只有打开点赞，且支持localstorage的浏览器，才可以启用该功能
    that.config.isZan = !!window.localStorage;
    // 这里换算一下评论的间隔
    that.config.zanIntval = that.config.zanIntval * 1000; // 转换成毫秒
    // 加载本地的点赞信息
    that.getZanlist();
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
      // 这里发布的时候在点赞表中加一行
      let sytalkZanObject = AV.Object.extend('zan');
      let zanObject = new sytalkZanObject();
      zanObject.set('num', 0);
      // 直接提交，不用then了
      zanObject.save().then(zanres => {
        atObject.set('zanId', zanres.id);
        atObject.save().then(res => {
          // 这里看一下回来的信息
          // console.log(res);
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
    // 存一下原参数，准备传给异步加载的点赞数
    let pageSizeo = (pageSize < that.config.pageSize || pageSize == 0 ? that.config.pageSize : pageSize), startNumo = startNum;
    // 显示加载动画
    that.fadeIn('lazy');
    let query = new AV.Query('shuoshuo');
    // 先获取总条数，再进行循环
    query.count().then(totalNum => {
      // console.log("总条数:", totalNum);
      // 排序字段
      query.descending('createdAt');
      // 每页条数
		  query.limit(pageSizeo);
      // 筛选起点
		  query.skip(startNum);
      // 如果是从0开始加载，那么这个条数直接归0
      if (startNum == 0) that.shuoNum = 0;
      // 拿到列表
      query.find().then(shuoContent => {
        // 如果是强制刷新，则提前清空掉容器
        if (refrush == 1) document.getElementById('maina').innerHTML = '';
        // 处理列表
        for (let i = 0; i < shuoContent.length; i++) {
          let atContent = shuoContent[i];
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
              osSvg = "sy-win";
              break;
            case "android":
              osSvg = "sy-android";
              break;
            case "linux":
              osSvg = "sy-linux";
              break;  
            case "ios":
              osSvg = "sy-apple";
              break;
            case "mac":
              osSvg = "sy-apple";
              os = "MacOS";
              break;
            default:
              osSvg = "sy-other";
          }
          // 自定义操作系统名称
          if (typeof that.config.osName[os.toLowerCase()] != "undefined") os = that.config.osName[os.toLowerCase()];
          // 格式化时间
          let timeSvg = "";
          if (atHour >= 0 && atHour < 6) {
            timeSvg = "sy-day1";
          } else if (atHour >= 6 && atHour < 12) {
            timeSvg = "sy-day2";
          } else if (atHour >= 12 && atHour < 15) {
            timeSvg = "sy-day3";          
          } else if (atHour >= 15 && atHour < 19) {
            timeSvg = "sy-day4";          
          } else if (atHour >= 19 && atHour < 24) {
            timeSvg = "sy-day5";          
          } else {
            timeSvg = "sy-day2";
          }
          // 是否点过赞了
          //console.log(typeof that.zanList[atContent.id], atContent.id, that.zanList[atContent.id]);
          let zaned = typeof that.zanList[atContent.id] !== 'undefined' ? ' zaned' : '';
          // 默认点赞数为0
          let zanNum = 0, zanId = typeof atContent.attributes.zanId == "undefined" ? 0 : that.trim(atContent.attributes.zanId);
          // 内容模板
          let contentli = [];
          contentli[i] = '<li id="li_' + atContent.id + '">'
                        + '  <span class="shuoshuo_author_img">'
                        + '    <img id="atAvatar' + atContent.id + '" src="' + shuoAvatar + '" class="sytalk_avatar gallery-group-img" width="48" height="48">'
                        + '  </span>'
                        + '  <span class="cbp_tmlabel" id="atId' + atContent.id + '">'
                        + '    <a href="javascript:void(0)" ' + hideIcon + ' id="operate' + atContent.id + '" class="delete_right" onclick="sytalk.delete(\'' + atContent.id + '\', \'' + zanId + '\')" title="删除本条说说">'
                        + '      <i class="syicon sy-close"></i>'
                        + '    </a>'
                        + '    <div class="atContent" id="forEdit' + atContent.id + '">' + atContent.attributes.atContentHtml + '</div>'
                        + '    <p class="shuoshuo_time">'
                        + '      <span class="os"><i class="syicon ' + osSvg + '"></i>' + os + '</span>'
                        + '      <span class="date"><i class="syicon ' + timeSvg + '"></i>' + nowDate + '</span>'
                        + (that.config.isZan ? '      <span class="zan' + zaned + '" id="zan-' + zanId + '" data-id="' + atContent.id + '" data-zanId="' + zanId + '" onclick="javascript:sytalk.zan(this)"><i class="syicon sy-zan"></i><span class="num">' + zanNum + '</span></span>' : '')
                        + '    </p>'
                        + '  </span>'
                        + '</li>';
          document.getElementById('maina').insertAdjacentHTML('beforeend', contentli.join("\n"));
        };
        // console.log(that.shuoNum, totalNum);
        if (that.shuoNum < totalNum) {
          that.fadeIn('readmore');
        } else {
          document.getElementById('readButton').innerHTML = '<center>' + atText.text14 + '</center>';
          document.getElementById('readButton').style.opacity = '0.5';
        }
        that.fadeOut('lazy'); 
        // 这里异步来加载所有的点赞数
        that.loadZanNum(pageSizeo, startNumo);
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
  this.delete = (id, zanId = 0) => {
    document.getElementById('delete1').innerHTML = '<input type="button" class="at_button" value="' + atText.text5 + '" id="Delete"/>';
    that.Show('shanchur');
    // 这里注册直接删除事件
    document.getElementById('Delete').onclick = function () {
      that.Hide('shanchur');
      that.fadeIn('lazy');
      
      AV.Object.createWithoutData('shuoshuo', id).destroy().then( (success) => {
        that.deleteList.push('li_' + id);
        // 这里再顺便删除掉对应的点赞数据
        if (zanId != 0) AV.Object.createWithoutData('zan', zanId).destroy();
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
  // 获取当前的点赞数组列表
  this.getZanlist = function() {
    // 如果没有开或者已经获取过了，但是没有，就直接返回一个空数组
    if (!that.config.isZan || that.zanList.length == 0) return {};
    // 获取当前本地浏览器中存储的数据
    let zanList = localStorage.getItem('sytalk-zan');
    zanList = JSON.parse(zanList) || [];
    // 需要在这里把zanList转化成对象
    zanList.forEach(zan => {
      that.zanList[zan[0]] = zan[1];
    });
    // 更新当前数据
    that.upvZanlist();
  }
  // 更新当前赞数
  this.upvZanlist = function() {
    let zanList = [];
    // 获取当前时间戳
    let currentTime = new Date().getTime();
    for (let id in that.zanList) {
      if (that.config.zanIntval == 0 || (currentTime - that.config.zanIntval < that.zanList[id])) {
        zanList.push([id, that.zanList[id]]);
      } else {
        // 把过期数据从容器对象里删除掉
        delete(that.zanList[id]);
      }
    }
    // 直接更新本地存储
    localStorage.setItem('sytalk-zan', JSON.stringify(zanList));
    // console.log(that.zanList);
    return true;
  }
  // 点赞方法处理
  this.zan = function(obj) {
    // 如果系统禁止，则什么也不做
    if (!that.config.isZan) return false;
    // 点赞数
    let zanNum = obj.getElementsByClassName("num")[0];
    // 当前说说id
    let shuoshuoId = obj.getAttribute('data-id');
    // 当前zanid
    let zanId = obj.getAttribute('data-zanid');
    // 表对象
    let zanObj = AV.Object.createWithoutData('zan', zanId);
    // 这里是用于加减的值
    let zanVal = that.hasClass(obj, "zaned") ? -1 : 1;
    // 官方文档原子性变化
    zanObj.increment('num', zanVal);
    // 更新后的动作
    zanObj.save().then((res) => {
      // 监听一下
      // console.log(res);
      // 点赞数变化
      let num = parseInt(zanNum.innerText) + zanVal;
      // 渲染到dom
      zanNum.innerText = num < 0 ? 0 : num;
      if (that.hasClass(obj, "zaned")) {
        // 从数组里把点赞记录中去掉
        typeof that.zanList[shuoshuoId] != "undefined" && delete(that.zanList[shuoshuoId]);
        // 去掉样式
        that.removeClass(obj, "zaned");
      } else {
        // 把当前点赞记录加入数据
        that.zanList[shuoshuoId] = new Date().getTime();
        // 给当前对象增加已点赞样式
        that.addClass(obj, "zaned");
      }
      // 直接更新数据
      that.upvZanlist();
    }, (error) => {
      console.log("点赞发生错误:", error); 
    });     
  };
  // 异步加载点赞的数量
  this.loadZanNum = function(pageSize = 10, startNum = 0) {
    // 因为点赞功能和说说是一一对应，为了防止说说被搞才单独提出一个库来，现在的情况是翻页即可实现，那拿一次即可
    // 一切反而简单了起来
    let query = new AV.Query('zan');
    // 排序字段
    query.descending('createdAt');
    // 每页条数
    query.limit(pageSize);
    // 筛选起点
    query.skip(startNum);
    // 拿到列表
    query.find().then(zanObjLists => {
      zanObjLists.forEach(zanObj => {
        // console.log(zanObj.id, zanObj.attributes.num);
        let zan = document.getElementById('zan-' + zanObj.id);
        if (zan == null) return;
        zan.getElementsByClassName("num")[0].innerText = zanObj.attributes.num;
      });
    })
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
  // 自定义hasClass
  this.hasClass = function(obj, cls) {
    let obj_class = obj.className;  // 获取 class 内容.
    let obj_class_lst = obj_class.split(/\s+/); // 通过split空字符将cls转换成数组.
    let x = 0;
    for (x in obj_class_lst) {
      if (obj_class_lst[x] === cls) return true;
    }
    return false;
  }
  // 自定义removeClass
  this.removeClass = function (obj, cls) {
    // 获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    let obj_class = ' ' + obj.className + ' ';
    // 将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' ');  
    // 在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    let removed = obj_class.replace(' ' + cls + ' ', ' ');
    //去掉首尾空格. ex) 'bcd ' -> 'bcd'
    removed = removed.replace(/(^\s+)|(\s+$)/g, ''); 
    // 替换原来的 class.
    obj.className = removed; 
  }
  // 自定义addClass
  this.addClass = function (obj, cls) {
    //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    let blank = (obj.className != '') ? ' ' : '';
    // console.log(obj.className);
    obj.className = obj.className + blank + cls; //替换原来的 class.
  }
}