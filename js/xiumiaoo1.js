
//右键菜单
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("这是秘密通道:<br /><a href=\"http://www.qijishow.com/Brand/Brand5/index.htm\" style='color:#0099cc;' title=\"公众号\">公众号</a>    <a href=\"http://www.qijishow.com/\" style='color:#0099cc;' title=\"首页\">首页</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});
//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});
//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["收藏奇迹秀，我就跟你玩~", "秀宝可远观不可亵玩！", "我都隐身啦，你还摸！", "别动手动脚的，把手拿开！！", "再不把手拿开小心我横竖竖你！！", "老大，他摸我，呜呜呜呜~~~", "你把手拿开我就跟你玩！", "你关注「奇迹秀」公众号了吗？不要摸我啦！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});
//开始
jQuery(document).ready(function ($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 20000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 20000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来看我呀！', 20000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 下午的时光真难熬！还好有你在！', 20000);
        } else if (now > 18 && now <= 23) {
            showMessage(visitor + ' 夜晚的我，要安静的学习啦！', 20000);
        } else {
            showMessage(visitor + ' 快来逗我玩吧！我好无聊啊~~', 20000);
        }
    }
    else {
        showMessage('欢迎' + visitor + '来到奇迹秀《' + title + '》', 10000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 190
    },
    {
        queue: false,
        duration: 1000
    });
//    window.setTimeout(function () {
//        showMessage("下面播报明日天气<iframe name=\"xidie\" src=\"http://m.weather.com.cn/m/pn1/weather.htm\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});
//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });
    $('a').mouseover(function () {
        showMessage('想看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》里面是啥么？');
    });
    $('.tool-imgs').mouseover(function () {
        showMessage('如果喜欢可以《<span style="color:#0099cc;">下载</span>》慢慢研究的哦！');
    });
    $('#coontainer').mouseover(function () {
        showMessage('想去《<span style="color:#0099cc;">奇迹购</span>》里面逛逛么？');
    });
    $('.about_logo').mouseover(function () {
        showMessage('要去《<span style="color:#0099cc;">提笔</span>》里面看看文章么？');
    });    
    $('#slider-wrapper').mouseover(function () {
        showMessage('要去里面看看么？');
    });   
    $('.detail-download a').mouseover(function(){
        showMessage('你好聪明哟～，这都能被你找到！');
    });
    $('#btneds').mouseover(function(){
        showMessage('点这里开始下载');
    });
    $('.float_lefts a').mouseover(function () {
        showMessage('要去 <span style="color:#0099cc;">'+ 奇迹购 + '</span> 里面逛逛吗？');
    });
    $('.comments').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#SOHUCS #SOHU_MAIN .module-cmt-box .post-wrap-w .wrap-action-w .action-issue-w .issue-btn-w a button.btn-fw').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('#s').mouseover(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('点它可以重新载入此页哦！');
    });
    $('#logoqj a').mouseover(function () {
        showMessage('只有你知道，更多精彩在首页～！');
    });
    $('#xinlang').mouseover(function () {
        showMessage('点它可以给我《<span style="color:#0099cc;">留言</span>》哦！');
    });
    $('#ss-dropdown a').mouseover(function () {
        showMessage('嘘，这里可以留下你的心愿哦！');
    });
    $('.donate-btn a').mouseover(function () {
        showMessage('哎哟～！<br> 你是要《 打赏 》我吗？我的个乖乖~');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道吗?点它可以分享本文到'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('点击可以切换到手机版博客版面');
    });
});
//无聊讲点什么
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["陪我聊天吧！","好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});
//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["快快收藏我的博客吧！", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    }, 45000);
});
//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function () {
        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#SOHUCS").click(function () {
        showMessage("请认真填写！我会尽快回复你的哟～");
        $(".spig").animate({
            top: $("#SOHUCS").offset().top - 70,
            left: $("#SOHUCS").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $(".donate-btn a").mouseover(function () {
        showMessage('哎哟～！<br> 你是要《<span style="color:#0099cc;">打赏</span>》我吗？我的个乖乖~');
        $(".spig").animate({
            top: $(".donate-btn a").offset().top - 70,
            left: $(".donate-btn a").offset().left + 180
        },
        {
            queue: false,
            duration: 1000
        });
    }); 
    $(".detail-download a").mouseover(function () {
        showMessage("你好聪明哟～，这都能被你找到！");
        $(".spig").animate({
            top: $(".detail-download a").offset().top + 100,
            left: $(".detail-download a").offset().left + 260
        },
        {
            queue: false,
            duration: 1000
        });
    });  
    $("#ss-dropdown a").mouseover(function () {
        showMessage("嘘，这里可以留下你的心愿哦！");
        $(".spig").animate({
            top: $("#ss-dropdown a").offset().top - 70,
            left: $("#ss-dropdown a").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });  
    $("#logoqj a").mouseover(function () {
        showMessage("只有你知道，更多精彩在首页～！");
        $(".spig").animate({
            top: $("#logoqj a").offset().top + 50,
            left: $("#logoqj a").offset().left - 280
        },
        {
            queue: false,
            duration: 1000
        });
    });  
    $("#xinlang").mouseover(function () {
        showMessage('点它可以给我<br> 《<span style="color:#0099cc;">留言</span>》哦！');
        $(".spig").animate({
            top: $("#xinlang").offset().top + 50,
            left: $("#xinlang").offset().left + 90
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $(".about_logo").mouseover(function () {
        showMessage('要去《<span style="color:#0099cc;">提笔</span>》里面看看文章么？');
        $(".spig").animate({
            top: $(".about_logo").offset().top - 70,
            left: $(".about_logo").offset().left + 120
        },
        {
            queue: false,
            duration: 1000
        });
    });                    
});
var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
        {
            queue: false,
            duration: 1000
        });
    });
});
//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，我说公的，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
            },
            {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};
//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});

function loadCssCode(code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code));
    //for IE
    //style.styleSheet.cssText = code;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
var dsq=null;
//去除畅言广告
    dsq=setInterval('if(document.getElementById("feedAv")){document.getElementById("feedAv").id="feedAvi";window.clearInterval(dsq);}',1000);
    loadCssCode('#feedAvi{position: absolute !important;z-index: -9999;top: -1000px;}');
