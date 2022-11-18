'use strict'

// 版本号
const atVersion = "3.3.4";

// QQ表情
const atEmojiQQ = {qq_aini: "aini.gif", qq_aixin: "aixin.gif", qq_aoman: "aoman.gif", qq_baiyan: "baiyan.gif", qq_bangbangtang: "bangbangtang.gif", qq_baojin: "baojin.gif", qq_baoquan: "baoquan.gif", qq_bishi: "bishi.gif", qq_bizui: "bizui.gif", qq_cahan: "cahan.gif", qq_caidao: "caidao.gif", qq_chi: "chi.gif", qq_ciya: "ciya.gif", qq_dabing: "dabing.gif", qq_daku: "daku.gif", qq_dan: "dan.gif", qq_deyi: "deyi.gif", qq_doge: "doge.gif", qq_fadai: "fadai.gif", qq_fanu: "fanu.gif", qq_fendou: "fendou.gif", qq_ganga: "ganga.gif", qq_gouyin: "gouyin.gif", qq_guzhang: "guzhang.gif", qq_haixiu: "haixiu.gif", qq_hanxiao: "hanxiao.gif", qq_haobang: "haobang.gif", qq_haqian: "haqian.gif", qq_hecai: "hecai.gif", qq_hexie: "hexie.gif", qq_huaixiao: "huaixiao.gif", qq_jie: "jie.gif", qq_jingkong: "jingkong.gif", qq_jingxi: "jingxi.gif", qq_jingya: "jingya.gif", qq_juhua: "juhua.gif", qq_keai: "keai.gif", qq_kelian: "kelian.gif", qq_koubi: "koubi.gif", qq_ku: "ku.gif", qq_kuaikule: "kuaikule.gif", qq_kulou: "kulou.gif", qq_kun: "kun.gif", qq_lanqiu: "lanqiu.gif", qq_leiben: "leiben.gif", qq_lenghan: "lenghan.gif", qq_liuhan: "liuhan.gif", qq_liulei: "liulei.gif", qq_nanguo: "nanguo.gif", qq_OK: "OK.gif", qq_penxue: "penxue.gif", qq_piezui: "piezui.gif", qq_pijiu: "pijiu.gif", qq_qiang: "qiang.gif", qq_qiaoda: "qiaoda.gif", qq_qinqin: "qinqin.gif", qq_qiudale: "qiudale.gif", qq_quantou: "quantou.gif", qq_saorao: "saorao.gif", qq_se: "se.gif", qq_shengli: "shengli.gif", qq_shouqiang: "shouqiang.gif", qq_shuai: "shuai.gif", qq_shui: "shui.gif", qq_tiaopi: "tiaopi.gif", qq_touxiao: "touxiao.gif", qq_tu: "tu.gif", qq_tuosai: "tuosai.gif", qq_weiqu: "weiqu.gif", qq_weixiao: "weixiao.gif", qq_woshou: "woshou.gif", qq_wozuimei: "wozuimei.gif", qq_wunai: "wunai.gif", qq_xia: "xia.gif", qq_xiaojiujie: "xiaojiujie.gif", qq_xiaoku: "xiaoku.gif", qq_xiaoyanger: "xiaoyanger.gif", qq_xieyanxiao: "xieyanxiao.gif", qq_xigua: "xigua.gif", qq_xu: "xu.gif", qq_yangtuo: "yangtuo.gif", qq_yinxian: "yinxian.gif", qq_yiwen: "yiwen.gif", qq_youhengheng: "youhengheng.gif", qq_youling: "youling.gif", qq_yun: "yun.gif", qq_zaijian: "zaijian.gif", qq_zhayanjian: "zhayanjian.gif", qq_zhemo: "zhemo.gif", qq_zhouma: "zhouma.gif", qq_zhuakuang: "zhuakuang.gif", qq_zuohengheng: "zuohengheng.gif"};
// 帖吧表情
const atEmojiTB = {OK: "OK.png", what: "what.png", 不高兴: "不高兴.png", 乖: "乖.png", 你懂的: "你懂的.png", 便便: "便便.png", 勉强: "勉强.png", 吐: "吐.png", 吐舌: "吐舌.png", 呀咩爹: "呀咩爹.png", 呵呵: "呵呵.png", 哈哈: "哈哈.png", 啊: "啊.png", 喷: "喷.png", 大拇指: "大拇指.png", 太开心: "太开心.png", 太阳: "太阳.png", 委屈: "委屈.png", 小乖: "小乖.png", 小红脸: "小红脸.png", 彩虹: "彩虹.png", 心碎: "心碎.png", 怒: "怒.png", 惊哭: "惊哭.png", 惊讶: "惊讶.png", 懒得理: "懒得理.png", 手纸: "手纸.png", 挖鼻: "挖鼻.png", 捂嘴笑: "捂嘴笑.png", 星星月亮: "星星月亮.png", 汗: "汗.png", 沙发: "沙发.png", 泪: "泪.png", 滑稽: "滑稽.png", 灯泡: "灯泡.png", 爱心: "爱心.png", 犀利: "犀利.png", 狂汗: "狂汗.png", 玫瑰: "玫瑰.png", 疑问: "疑问.png", 真棒: "真棒.png", 睡觉: "睡觉.png", 礼物: "礼物.png", 笑尿: "笑尿.png", 笑眼: "笑眼.png", 红领巾: "红领巾.png", 胜利: "胜利.png", 花心: "花心.png", 茶杯: "茶杯.png", 药丸: "药丸.png", 蛋糕: "蛋糕.png", 蜡烛: "蜡烛.png", 鄙视: "鄙视.png", 酷: "酷.png", 酸爽: "酸爽.png", 钱币: "钱币.png", 阴险: "阴险.png", 音乐: "音乐.png", 香蕉: "香蕉.png", 黑线: "黑线.png"};
// 小破站表情
const atEmojiBB = {baiyan: "baiyan.png", bishi: "bishi.png", bizui: "bizui.png", chan: "chan.png", daku: "daku.png", dalao: "dalao.png", dalian: "dalian.png", dianzan: "dianzan.png", doge: "doge.png", facai: "facai.png", fadai: "fadai.png", fanu: "fanu.png", ganga: "ganga.png", guilian: "guilian.png", guzhang: "guzhang.png", haixiu: "haixiu.png", heirenwenhao: "heirenwenhao.png", huaixiao: "huaixiao.png", jingxia: "jingxia.png", keai: "keai.png", koubi: "koubi.png", kun2: "kun2.png", lengmo: "lengmo.png", liubixue: "liubixue.png", liuhan: "liuhan.png", liulei: "liulei.png", mudengkoudai: "mudengkoudai.png", nanguo: "nanguo.png", outu: "outu.png", qinqin: "qinqin.png", se: "se.png", shengbing: "shengbing.png", shengqi: "shengqi.png", shuizhao: "shuizhao.png", sikao: "sikao.png", tiaokan: "tiaokan.png", tiaopi: "tiaopi.png", touxiao: "touxiao.png", tuxue: "tuxue.png", weiqu: "weiqu.png", wunai: "wunai.png", xiaoku: "xiaoku.png", xieyanxiao: "xieyanxiao.png", yiwen: "yiwen.png", yun: "yun.png", zaijian: "zaijian.png", zhoumei: "zhoumei.png", zhuakuang: "zhuakuang.png"};
// 相关的字符
const atText = {text0: "由", text00: "发表", text1: "加载更多...", text2: "预览", text3: "发布", text4: "已登录", text5: "确定", text6: "退出登录", text7: "用户", text8: "密码", text9: "登录", text10: "取消", text11: "发布说说", text12: "添加图片，视频，音乐", text14: "(上传失败，若非网络原因，请联系Artitalk开发人员)", text15: "请先登录", text16: "内容不能为空", text17: "登陆失败，请检查用户名及密码是否正确", text18: "头像url", text19: "确定删除本条说说吗？", text20: "删除成功", text21: "请拖拽图片到此处", text22: "表情", text23: "删除", text24: "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持", text25: "上传中", text26: "图片", text27: "音乐", text28: "视频", text29: "添加", text30: "上传的图片最大支持5M，请压缩后或换一个继续上传", text31: "上传的音乐最大支持10M，请压缩后或换一个继续上传", text32: "上传的视频最大支持30M，请压缩后或换一个继续上传", text33: "图片格式错误，请不要上传其他类型的文件", text34: "音频格式错误，请不要上传其他类型的文件", text35: "视频格式错误，请不要上传其他类型的文件", textup: "上传ing", loadingTxT: "加载中", text36: "用户名不能为空", text37: "密码不能为空", text38: "请在下方输入框进行修改然后点击保存即可", text39: "保存", text40: "评论", text41: "邮箱", text42: "昵称", text43: "用户名与密码不匹配", text44: "登陆失败，常见错误有<br><li>网络错误</li><li>域名不在leancloud的域名白名单中被限制登录</li><li>当前页面使用了其他leancloud应用导致登录到了其他应用所以失败</li>", text45: "未找到此用户", text46: "尝试错误密码次数过多，请稍后再试"};
// 系统图标
const atOs = {
  windows: '<svg t="1591348521231" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16474" width="10" height="10" style="display: inline"><path d="M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z" p-id="16475" fill="' + atText.color3 + '"></path></svg> ',
  Android: '<svg t="1591349177001" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17355" width="10" height="10"  style="display: inline"><path d="M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z" fill="' + atText.color3 + '" p-id="17356"></path></svg> ',
  Linux: '<svg t="1591349455279"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17896" width="10" height="10"  style="display: inline"><path d="M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z" fill="' + atText.color3 + '" p-id="17897"></path></svg>',
  iOS: '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' + atText.color3 + '"></path></svg>',
  Mac: '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' + atText.color3 + '"></path></svg>'  
}

// sytalk的方法
var sytalk = new function() {
  let that = this;
  // 默认页
  that.pageNum = 1;
  // 初始化
  this.init = function(option = {}) {
    // 写入配置文件
    that.config = {
      appId: option.appId || "",
      appKey: option.appKey || "",
      serverURL: option.serverURL || "",
      pageSize: option.pageSize || 10,
      emojiServer: option.emojiServer || "https://fastly.jsdelivr.net/gh/Artitalk/Artitalk-emoji/",
      bgImg: option.bgImg || "",
      cssUrl: option.cssUrl || "",
      shuoPla: option.shuoPla || "",
      onLoad: option.onLoad || function(){},
    };
    // 初始化leancloud方法
    try {
      AV.init({appId: that.config.appId, appKey: that.config.appKey, serverURL: that.config.serverURL});
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
    if (!document.getElementById('add-Artitalk_Style')) {
      // 如果没有外链样式表，则直接用内置样式
      if (that.config.cssUrl == "") {
        // 加载一下基础样式
        let atStyle = document.createElement("style");
        let atCss = ""
          // 定义要用到的变量
          + ":root{--list-even-color:#fff;--list-odd-color:rgba(255, 125, 73, 0.75);--readmore-bg-color:#fff;--main-text-color: #707070}"
          + "#artitalk_main{transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);font-family:UbuntuMono}"
          + "#artitalk_main svg {display:inline;color:var(--main-text-color)}"
          // loading动画
          + "#artitalk_main #lazy{background:rgba(0,0,0,.2);bottom:0;left:0;position:fixed;right:0;top:0;z-index:9999;}"
          + "#artitalk_main #lazy .preloader{position:absolute;margin-left:-55px;margin-top:-100px;height:110px;width:110px;left:50%;top:50%;}"
          + "#artitalk_main #lazy .preloader>svg>g>path{stroke:#9ea1a4;stroke-width:0.25;}"
          + "#artitalk_main #lazy .preloader>svg>path{stroke:#9ea1a4;stroke-width:0.25;}"
          // 定义云朵
          + "#artitalk_main #lazy #cloud{position:relative;z-index:2;}"
          + "#artitalk_main #lazy #cloud path{fill:#efefef;}"
          // 定义太阳
          + "#artitalk_main #lazy #sun{margin-left:-10px;margin-top:6px;opacity:0;width:60px;height:60px;position:absolute;left:45px;top:15px;z-index:1;animation: rotate 16s infinite linear}"
          + "#artitalk_main #lazy #sun path{stroke-width:0.18;fill:#9ea1a4;}"
          // 定义雨
          + "#artitalk_main #lazy .rain{position: absolute;width:70px;height:70px;margin-top:-32px;margin-left:19px;}"
          + "#artitalk_main #lazy .drop{opacity:1;background:#9ea1a4;display:block;float:left;width:3px;height:10px;margin-left:4px;border-radius:0px 0px 6px 6px;animation: drop 350ms infinite;}"
          + "#artitalk_main #lazy .drop:nth-child(1){animation-delay:-130ms;}"
          + "#artitalk_main #lazy .drop:nth-child(2){animation-delay:-240ms;}"
          + "#artitalk_main #lazy .drop:nth-child(3){animation-delay:-390ms;}"
          + "#artitalk_main #lazy .drop:nth-child(4){animation-delay:-525ms;}"
          + "#artitalk_main #lazy .drop:nth-child(5){animation-delay:-640ms;}"
          + "#artitalk_main #lazy .drop:nth-child(6){animation-delay:-790ms;}"
          + "#artitalk_main #lazy .drop:nth-child(7){animation-delay:-900ms;}"
          + "#artitalk_main #lazy .drop:nth-child(8){animation-delay:-1050ms;}"
          + "#artitalk_main #lazy .drop:nth-child(9){animation-delay:-1130ms;}"
          + "#artitalk_main #lazy .drop:nth-child(10){animation-delay:-1300ms;}"
          // 列表部分
          + "#artitalk_main #shuoshuo_content{padding:10px;}"
          + "#artitalk_main #ccontent .cbp_tmtimeline{margin:30px 0 0 0;padding:0;list-style:none;display:inline;position:relative;}"
          // 头像
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .shuoshuo_author_img img{border:1px solid #ddd;padding:2px;float:left;border-radius:64px;transition: all 1s;}"
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .shuoshuo_author_img .artitalk_avatar{border-radius:100%;box-shadow:inset 0 -1px 0 3333sf;transition:transform 0.4s ease-out;}"
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .shuoshuo_author_img .artitalk_avatar:hover{transform:rotateZ(360deg);}"
          // 说说内容框
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel{margin:0 0 45px 65px;z-index:1;background:var(--list-even-color);color:#333;padding:.8em 1.2em .4em 1.2em;font-weight:300;line-height:1.6;position:relative;border-radius:5px;transition:all .3s ease 0s;box-shadow:0 1px 12px rgba(0,0,0,.3);display:block}"
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel:after{right:100%;border:solid transparent;z-index:-1;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-right-color:var(--list-even-color);border-width:10px;top:4px;}"
          + "#artitalk_main #ccontent .cbp_tmlabel:hover {transform:translateY(-3px);z-index:1;box-shadow:0 15px 32px rgba(0,0,0,0.15);}"
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel img.atemoji{max-height: 28px;width: 28px;display:inline;vertical-align:middle;}"
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .cbp_tmlabel a{text-decoration:none;}"
          // 隔行不同色
          // + "#artitalk_main #ccontent .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel{background: var(--list-odd-color);color:#333;}"
          // + "#artitalk_main #ccontent .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after{border-right-color: var(--list-odd-color);}"
          // 删除图标
          + "#artitalk_main #ccontent .cbp_tmtimeline>li .delete_right{cursor:pointer;width:20px;height:20px;position:absolute;right: 12px;}"  
          // 时间机型样式
          + "#artitalk_main p.shuoshuo_time{margin-top:10px;font-size: small;border-top: 1px dashed;;padding-top:5px;font-size:.95rem;}"
          + "#artitalk_main p.shuoshuo_time svg{width: 12px;height:12px;padding-right:3px}"
          // readmore
          + "#artitalk_main #readButton #readmore{background-color: var(--readmore-bg-color);border:none;color:var(--main-text-color);font-size:medium;font-weight:500;border-radius:8px;outline:0;box-shadow:0 0 8px rgb(0 0 0 / 30%);padding:8px 16px}"
          + "#artitalk_main #readButton #readmore:hover{box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);}"
          // 底部图标
          + "#artitalk_main .power{text-align:center;overflow:hidden;color:#999;margin-top:10px;font-size:.75em;padding:.5em 0;}"
          + "#artitalk_main .power div{padding:0 12px}"
          + "#artitalk_main .copyright{margin: 8px auto}"
          + "#artitalk_main .copyright a{line-height:1.6rem;font-size:.8rem;color:#bbb;text-decoration:none;font-family:Monaco, Menlo, Helvetica, Arial}"
          // 定义动画
          + "@keyframes rotate{0%{transform:rotateZ(0)}100%{transform:rotateZ(360deg)}}"
          + "@keyframes drop{50%{height:45px;opacity:0}51%{opacity:0}100%{height:1px;opacity:0}}"
          + "";
        atStyle.type = "text/css";
        atStyle.id = "add-Artitalk-Style";
        atStyle.innerHTML = atCss;
        document.head.appendChild(atStyle);
      } else {
        let atStyle = document.createElement('link');
        atStyle.rel = 'stylesheet';
        atStyle.href = that.config.cssUrl;
        atStyle.id = "add-Artitalk-Style";
        document.head.appendChild(atStyle);
      }
    }
    // 主体HTML
    let atHtml = "<div id='artitalk_part1'>"
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
               + "      <textarea class='shuoshuo_text' oninput='preview()' id='neirong' placeholder='" + that.config.shuoPla + "'style='background-image: url('" + that.config.bgImg + "');z-index: 0'></textarea>"
               + "      <span id='drag_area' class='z-index: -1;'></span>"
               + "    </div>"
               + "    <div id='shuoshuo_parttwo' class='shuoshuo_parttwo'>"
               + "      <div id='shuoshuo_emoji_Tieba' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emoji_BiliBili' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emoji_QQ' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emoji_custom' class='shuoshuo_emoji' style='display: none'></div>"
               + "      <div id='shuoshuo_emojiswitch' class='shuoshuo_emojiswitch' style='display: none'>"
               + "        <div id='switch_1' class='shuoshuo_emoji_part zuiliangdezai'>Tieba</div>"
               + "        <div id='switch_2' class='shuoshuo_emoji_part'>BiliBili</div>"
               + "        <div id='switch_3' class='shuoshuo_emoji_part'>QQ</div>"
               + "        <div id='switch_4' class='shuoshuo_emoji_part'>Custom</div>"
               + "      </div>"
               + "      <div id='preview' class='preview_now'></div>"
               + "    </div>"
               + "    <div class='shuoshuo_submit'>"
               + "      <div class='shuoshuo_row'>"
               + "        <input class='artitalk_child shuoshuo_inputs' style='display: none' id='email' value='' placeholder='" + atText.text18 + "'>"
               + "        <input class='artitalk_child shuoshuo_inputs' style='display: none' id='commentNick' value='' placeholder='" + atText.text18 + "'>"
               + "        <div class='artitalk_child'>"
               + "          <button class='at_button' id='atSave' style='float: right;'>" + atText.text3 + "</button>"
               + "          <button class='at_button' id='commentSave' style='display:none;float: right;'>" + atText.text3 + "</button>"
               + "          <button class='at_button' id='atPreview' style='float: right;'>" + atText.text2 + "</button>"
               + "          <button class='at_button' id='loadEmoji' style='float: right;'>" + atText.text22 + "</button>"
               + "        </div>"
               + "      </div>"
               + "    </div>"
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
               + "  <div class='copyright'><a href='https://artitalk.js.org' target='_blank' title='自豪的采用Artitalk评论系统 V" + atVersion + "'>Artitalk  " + atVersion + "</a></div>"
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
                   // + "    <div class='artitalk_loading_text' id='loading_txt'>" + atText.loadingTxT + "</div>"
                   + "  </div>"
                   + "</div>";
    // 操作弹出框
    let atOpHtml = "<div id='shade' class='c1' style='display: none'></div>"
                 + "<div id='shuoshuo-modal' class='c2' style='display: none'>"
                 + "  <center>"
                 + "    <p>" + atText.text7 + "：<input type='text' class='shuoshuo_input_log' id='username'/></p>"
                 + "    <p>" + atText.text8 + "：<input type='password' class='shuoshuo_input_log'  id='pwd'/></p>"
                 + "    <p><input type='button' value='" + atText.text9 + "' class='at_button' id='login'>&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='" + atText.text10 + "'  class='at_button' id = 'celLogin'></p>"
                 + "  </center>"
                 + "  <center><div id='logw' style='color: red'></div></center>"
                 + "</div>"
                 + "<div id='userinfo' class='c2' style='display: none'>"
                 + "  <center>"
                 + "    <p><div id='status'></div></p>"
                 + "    <p>"
                 + "      <input type='button' class='at_button' value='" + atText.text5 + "' id='hideuser'>&nbsp;&nbsp;&nbsp;&nbsp;"
                 + "      <input id='tui' type='button' value='" + atText.text6 + "' class='at_button' style='display: none;' onclick='Logout();'>"
                 + "    </p>"
                 + "  </center>"
                 + "</div>"
                 + "<div id='shanchu' class='c2' style='display: none'>"
                 + "  <center>"
                 + "    <p>" + atText.text20 + "</p>"
                 + "    <p><input type='button' class='at_button' value='" + atText.text5 + "' id='deleteSus'></p>"
                 + "  </center>"
                 + "</div>"
                 + "<div id='shanchur' class='c2' style='display: none'>"
                 + "  <center>"
                 + "    <p>" + atText.text19 + "</p>"
                 + "    <p><div id='delete1'></div></p>"
                 + "  </center>"
                 + "</div>"
                 + "<div id='clickForPreview'></div>";
    // 输出html
    var atOp = document.createElement('div');
    atOp.id = 'operare_artitalk';
    document.body.append(atOp);
    document.getElementById('operare_artitalk').innerHTML = atOpHtml;
    document.getElementById('artitalk_main').innerHTML = motionHtml + atHtml;
    // 这里第一次加载说说
    that.loadContent(that.pageNum);
    // 阅读更多按钮响应事件
    document.getElementById('readmore').onclick = function () {
      that.loadContent(that.pageNum);
    }

    return that; 
  }
  // 加载说说
  this.loadContent = function(pageNum = 1) {
    // 显示加载动画
    that.fadeIn('lazy');
    let query = new AV.Query('shuoshuo');
    // 先获取数量，再进行循环
    query.count().then(num => {
      let pageTotal = Math.round(num / that.config.pageSize) + 1
      console.log("总页数:", pageTotal);
      // 排序字段
      query.descending('createdAt');
      // 每页条数
		  query.limit(that.config.pageSize);
      // 筛选起点
		  query.skip(that.config.pageSize * (pageNum - 1));
      // 拿到列表
      query.find().then(shuoContent => {
        // 处理列表
        shuoContent.forEach(atContent => {
          //OS icon judge
				  let os = atContent.attributes.userOs;
          // 图标
          if (typeof atOs[os] == "undefined") {
            atOs[os] = '<svg t="1591349738696"  viewBox="0 0 1168 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20407" width="10" height="10"  style="display: inline"><path d="M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z" p-id="20408" fill="' + atText.color3 + '"></path></svg>';
          }
          // 头像初始化
				  let shuoAvatar = atContent.attributes.avatar;
				  shuoAvatar = typeof (shuoAvatar) === "undefined" ? "https://cravatar.cn/avatar/0?s=128" : shuoAvatar;
				  // 当前用户头像
          let currentUser = AV.User.current();
				  let hideIcon = currentUser ? '' : 'style="display: none"';
          // 时间格式化
				  let nowDate = new Date(atContent.createdAt);
          nowDate = nowDate.getFullYear() + '-' + that.timeFormat(nowDate.getMonth() + 1) + '-' + that.timeFormat(nowDate.getDate()) + ' ' + that.timeFormat(nowDate.getHours()) + ':' + that.timeFormat(nowDate.getMinutes()) + ':' + that.timeFormat(nowDate.getSeconds());
          // 内容模板
          let contentli = '<li><span class="shuoshuo_author_img" onclick="javascript:atEdit(\"' + atContent.id + '\");"><img id="atAvatar' + atContent.id + '" src="' + shuoAvatar + '" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel" id="atId' + atContent.id + '"><div ' + hideIcon + ' id="operate' + atContent.id + '" class="delete_right"><svg t="1591347978744" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14459" width="20" height="20" style="display: inline"  onclick="delete(\"' + atContent.id + '\")"><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="14460" fill="' + atText.color3 + '"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="14461" fill="' + atText.color3 + '"></path></svg></div><div class="atContent" id="forEdit' + atContent.id + '">' + atContent.attributes.atContentHtml + '</div><p class="shuoshuo_time"><span class="os">' + atOs[os] + os + '</span><span class="date">&nbsp&nbsp' + '<svg t="1591350196611" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10" style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' + atText.color3 + '" p-id="24684"></path></svg>' + nowDate + '</span></p></span></li>';
          // 把内容追加到列表
          document.getElementById('maina').insertAdjacentHTML('beforeend', contentli);
          that.fadeOut('lazy');
          if (that.pageNum < pageTotal) {
            that.fadeIn('readmore');
          } else {
            document.getElementById('readButton').innerHTML = '<center>已经到底了哦~</center>';
				    document.getElementById('readButton').style.opacity = '0.5';
          }
        });
      });
      that.pageNum++;
      // 这里设置回调
      that.pageNum == 1 && that.config.onLoad();
    });
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

  this.Show = function() {
    that.fadeIn('shade');
    that.fadeIn('shuoshuo-modal');
  }
  this.Hide = function() {
    that.fadeOut('shade');
    that.fadeOut('shuoshuo-modal');
  }
}