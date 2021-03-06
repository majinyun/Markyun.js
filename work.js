/*
 * 常用js操作:
 * 2013年8月9日
 */
 
 
//常用选择

/*
1.id选择器（ # myid）
2.类选择器（.myclassname）
3.标签选择器（div, h1, p）
4.相邻选择器（h1 + p）
5.子选择器（ul < li）
6.后代选择器（li a）
7.通配符选择器（ * ）
8.属性选择器（a[rel = "external"]）
9.伪类选择器（a: hover,
li: nth - child）
禁用（disabled）：value 不会在 Form 提交时发送出去。这个对于按钮来说用处比较大，一般的 type="text" 最好是隐藏，而不是禁用，因为它不需要发送数据。
只读（readonly）：value 会在 Form 提交时被发送出去。所以需要在外观上显示跟一般 input/textarea 一样，但不允许用户修改数据，可以用这个属性。
隐藏（hidden）：这个比较好理解，value 会被发送，并且用户看不到。
*/

//1 AJAX提交数据

$.$.post('adduser.jsp', 参数: '参数值', function(data, textStatus, xhr) {
    /*optional stuff to do after success */
    $.each(data, function(k, v) {
        var _option = $("<option reid='" + v.id + "'>" + v.name + "</option>");
        $(_node).append($(_option));
        $(_option).click(function() {
            // assemZone($("#_zone"), $(this).attr("reid"));
        });
    });
});

function delArea(obj) {
    if (confirm("确定删除？")) {
        var id = $(obj).attr("dataid");
        $.post("del.jsp", {
            reid: id
        }, function(data) {
            alert(data);
            if (data == -1) {
                $(this).parents("div").eq(0).parents("div").eq(0).remove();
                //			alert("删除成功！");
            } else {
                alert("删除失败，求重试");
            }

        });
    }
}
//判断节点是否存在
  if ($("input[name='img_ids']").length>0) {   
                                $("input[name='img_ids']").attr("value",v.id);
                            } else {
                                 imgid = "<input type='hidden'  name=\"img_ids\"  value=" + v.id + " />";
   }
//2只能输入数字
onkeyup = "(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
onblur = "this.v();"

//改进：

$("body").find("input[type='text']").each(function() {
    enforceNum($(this));
});


function enforceNum(_node) {
    _node.live("keyup blur", function() {
        $(_node).val($(_node).val().replace(/[^0-9-]+/, '')); 
    });
}


 // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   if(reg.test(card) === false)  

//3表单有空的时候不能提交
$("div").find("input[type='text']").each(function() {
    if ($(this).val() == "") {
        alert("请检查所填项不能为空");
    } else {
        document.forms["form1"].submit();
    }
});

//4获取省市区  0  1 2   id=18

function loadProvinces(_node) {
    $.post("getareas_uset.jsp?type=1", function(data) {
        $.each(data, function(k, v) {
            var _option = $("<option reid='" + v.id + "'>" + v.name + "</option>");
            $(_node).append($(_option));
            $(_option).click(function() {
                assemCity($(_node).parents("span").eq(0).nextAll("span").eq(0).children("select").eq(0),

                    $(this).attr("reid"));
            });
        });
    }, "json");
}

function assemCity(_node, _reid) {
    $.post("getareas.jsp", {
        reid: _reid
    }, function(data) {
        $(_node).empty();
        $("#_zone").empty();
        $("#choosed").text("");
        $.each(data, function(k, v) {
            var _option = $("<option reid='" + v.id + "'>" + v.name + "</option>");
            $(_node).append($(_option));
            $(_option).click(function() {
            });
        });
    }, "json");
}

//5删除选中行

function headnav(obj) {
    $(".h_right").find("a").removeClass("hover");
    $(".nav" + obj).addClass("hover");

    /* 删除选中行 */
    $("body").delegate(".cancel", "click", function() {
        if (confirm("确认删除这条数据?")) {
            //$("#not_support_"+id).remove();
            $(this).parents("div").parents("div").eq(0).remove();
            //inputs[i].setAttribute("readOnly",true);
        }
    });


//6隐藏div 
$("#ibox1").click(function() {
        if ($("#ibox1").is(':checked')) { //false 
                $("#ibox01").slideDown();
        } else { //true
                $("#ibox01").slideUp();
        }
});

//7是否选中checked 
$("#w6").find("input[type='checkbox']").each(function() {
        if ($(this).is(':checked')) {
                alert("选中了");
                $(this).val("1");
        } else {
                alert("没有选中");
                $(this).val("0");
        }
});

//回填input框对应的值
var types = $("#types").val();
var x = cks.split(",");
for (var i = 0; i < x.length; i++) {
        $("input[name='types']").each(function() {
                if ($.trim($(this).val()) == $.trim(x[i])) {
                        $(this).attr("checked", "checked");
                }
        });
}

var types = $("#types").val();
for (var i = 0; i < types.length; i++) {
        $("input[name='types']").each(function() {
                if ($.trim($(this).val()) == $.trim(types)) {
                        $(this).attr("checked", "checked");
                }
        });
}

//改进：
//设置保险的值
function setcheckbox(obj) {
        var i = 0; //后台获取的值
        if (i == 1) {
                obj.checked = true;
                return;
        } else {
                obj.checked = false;
        }
}
//改变保险的值
function checkbox(obj) {
        if (obj.is(':checked')) {
                obj.val("1");
                return;

        } else {
                obj.val("0");
                return;
        }
}
$("#w6").find("input[type='checkbox']").each(function() {
        checkbox($(this));
});
$(".city").each(function() {
        $(this).plug_pop_layer({
                repeatids: ""
        });
});
$(".city").click(function() {
        $(this).plug_pop_layer({
                repeatids: ""
        });
});
$(".cbox").click(function() {
        checkbox($(this));
});
// 		$(".cbox").live("change click",function(){
// 			alert(1233);
// 		})
//8分隔字符串 
function split(obj) {
        var srt = obj.split(',');
        // 			alert(srt[0]+srt[1]);
        return srt;
}
split("15,45,1515");

//9 图片上传预览————————————————————————————— 
//<div id="divPreview">
//   <img id="imgHeadPhoto" src="noperson.jpg" style="width: 160px; height: 170px; border: solid 1px #d2e2e2;" alt="" />
//</div>
//<input type="file" onchange="PreviewImage(this,'imgHeadPhoto','divPreview')" size="20"/>
//js本地图片预览，兼容ie[6-9]、火狐、Chrome17+、Opera11+、Maxthon3
function PreviewImage(fileObj, imgPreviewId, divPreviewId) {
        var allowExtention = ".jpg,.bmp,.gif,.png";
         //允许上传文件的后缀名document.getElementById("hfAllowPicSuffix").value;
        var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
        var browserVersion = window.navigator.userAgent.toUpperCase();
        if (allowExtention.indexOf(extention) > -1) {
                if (fileObj.files) { //HTML5实现预览，兼容chrome、火狐7+等
                        if (window.FileReader) {
                                var reader = new FileReader();
                                reader.onload = function(e) {
                                        document.getElementById(imgPreviewId).setAttribute("src", e.target.result);
                                }
                                reader.readAsDataURL(fileObj.files[0]);
                        } else if (browserVersion.indexOf("SAFARI") > -1) {
                                alert("不支持Safari6.0以下浏览器的图片预览!");
                        }
                } else if (browserVersion.indexOf("MSIE") > -1) {
                        if (browserVersion.indexOf("MSIE 6") > -1) { //ie6
                                document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
                        } else { //ie[7-9]
                                fileObj.select();
                                if (browserVersion.indexOf("MSIE 9") > -1) fileObj.blur(); //不加上document.selection.createRange().text在ie9会拒绝访问
                                var newPreview = document.getElementById(divPreviewId + "New");
                                if (newPreview == null) {
                                        newPreview = document.createElement("div");
                                        newPreview.setAttribute("id", divPreviewId + "New");
                                        newPreview.style.width = document.getElementById(imgPreviewId).width + "px";
                                        newPreview.style.height = document.getElementById(imgPreviewId).height + "px";
                                        newPreview.style.border = "solid 1px #d2e2e2";
                                }
                                newPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + document.selection.createRange().text + "')";
                                var tempDivPreview = document.getElementById(divPreviewId);
                                tempDivPreview.parentNode.insertBefore(newPreview, tempDivPreview);
                                tempDivPreview.style.display = "none";
                        }
                } else if (browserVersion.indexOf("FIREFOX") > -1) { //firefox
                        var firefoxVersion = parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);
                        if (firefoxVersion < 7) { //firefox7以下版本
                                document.getElementById(imgPreviewId).setAttribute("src", fileObj.files[0].getAsDataURL());
                        } else { //firefox7.0+                    
                                document.getElementById(imgPreviewId).setAttribute("src", window.URL.createObjectURL(fileObj.files[0]));
                        }
                } else {
                        document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
                }
        } else {
                alert("仅支持" + allowExtention + "为后缀名的文件!");
                fileObj.value = ""; //清空选中文件
                if (browserVersion.indexOf("MSIE") > -1) {
                        fileObj.select();
                        document.selection.clear();
                }
                fileObj.outerHTML = fileObj.outerHTML;
        }
}

//图片上传预览2    IE是用了滤镜。
function previewImage1(file) {
        var MAXWIDTH = 160;
        var MAXHEIGHT = 100;
        var div = document.getElementById('preview1');
        if (file.files && file.files[0]) {
                div.innerHTML = '<img id=imghead1>';
                var img = document.getElementById('imghead1');
                img.onload = function() {
                        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                        img.width = rect.width;
                        img.height = rect.height;
                        //     img.style.marginLeft = rect.left+'px';
                        //img.style.marginTop = rect.top+'px';
                }
                var reader = new FileReader();
                reader.onload = function(evt) {
                        img.src = evt.target.result;
                }
                reader.readAsDataURL(file.files[0]);
        } else 
//兼容IE
        {
                var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                file.select();
                var src = document.selection.createRange().text;
                div.innerHTML = '<img id=imghead1>';
                var img = document.getElementById('imghead1');
                img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
                div.innerHTML = "<div id=divhead1 style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
        }
}

function clacImgZoomParam(maxWidth, maxHeight, width, height) {
        var param = {
                top: 0,
                left: 0,
                width: width,
                height: height
        };
        if (width > maxWidth || height > maxHeight) {
                rateWidth = width / maxWidth;
                rateHeight = height / maxHeight;
                if (rateWidth > rateHeight) {
                        param.width = maxWidth;
                        param.height = Math.round(height / rateWidth);
                } else {
                        param.width = Math.round(width / rateHeight);
                        param.height = maxHeight;
                }
        }

        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
        return param;
}
//-----------------------------------
//10———左侧导航

var lnav = window.location.href;
var arr = lnav.split('/');
$('.l_nav a').each(function() {
        //alert("的："+$(this).attr("href") +arr[5]); 
        if ($(this).attr("href") == arr[5]) {
                $(".l_nav").find("li").removeClass("li_hover");
                $(this).parents("li:first").addClass("li_hover");
        }
});


//配价左侧导航
var lnav = window.location.href;
var arr = lnav.split('/');
var aNav = arr[arr.length - 1].substring(0, 5);
$('.l_nav a').each(function() {
        var anav = $(this).attr("href");
        anav = anav.substring(0, 5);
        console.log(anav);
        if (anav == aNav) {
                $(".l_nav").find("li").removeClass("li_hover");
                $(this).parents("li:first").addClass("li_hover");
        }
}); 

// 11——星期只能选6天 
function weekNodeClick() {
        var count = 0;
        var _node = "input[name='weeks']";
        $(_node).each(function() {
                if ($(this).is(":checked")) {
                        count += 1;
                        console.log(_node + "asss" + count);
                        if (count > 5) {
                                console.log("达到条件");
                                $(_node).each(function() {
                                        if (!$(this).is(":checked")) {
                                                console.log("OK");
                                                $(this).attr("disabled", "disabled");
                                        }
                                });

                        } else {
                                $(_node).each(function() {
                                        if (!$(this).is(":checked")) {
                                                console.log("OKOKOK");
                                                $(this).removeAttr("disabled");
                                        }
                                });
                        }
                }

        });
}
//12 输入字数限制提示
function handle() {
        var len = document.getElementById('weibo_content').value.length;
        if (len <= 120) {
                document.getElementById('word_tips').innerHTML = "还可以输入<span>" + (120 - len) + "</span>个字";
        } else {
                document.getElementById('word_tips').innerHTML = "超出<span>" + (len - 120) + "</span>个字";
        }

}
//firefox下检测状态改变只能用oninput,且需要用addEventListener来注册事件。 
if (/msie/i.test(navigator.userAgent)) {
 //ie浏览器 
        document.getElementById('weibo_content').onpropertychange = handle
} else { 
//非ie浏览器，比如Firefox 
        document.getElementById('weibo_content').addEventListener("input", handle, false);
}
//12 输入字数限制提示
cnodes.click(function() {
        if (cnodes.filter(function() {
                return $(this).prop("checked");
        }).length >= cnodes.length) {
                pnode.attr("checked", "checked");
        } else {
                pnode.removeAttr("checked");
        }
});
 
$("#login_form").attr({
        "action": "login.jsp",
        "method": "post"
}).submit();
$("#login").attr("disabled", "disabled");

//13 找到父类的父类然后向下查找.intro的:first个。操作
console.log($(this).parent().parent().find(".intro:first"));

//	$("input[name$='front_day']").live("blur",function(){
//		console.log($(this));
//	});
//	$ 结尾
//	* 包含
//	! 不等于
$("input[name^='list']").live("blur",
function() {
        console.log($(this));
});
$(function() {
        var t = $ {
                time.type
        };
        $("input[name='type']").each(function() {
                if ($(this).val() == t) {
                        $(this).attr("checked", "checked");
                }
        });
        if (t == 2) {
                $(".depoit").css("color", "#777777").find("input").removeAttr("disabled");
                var w = '${time.weeks}'.split(',');
                console.log(w)
                $.each(w,
                function(k, v) {
                        $("input[name=weeks]").each(function() {
                                if ($(this).val() == parseInt(v)) {
                                        $(this).attr("checked", "checked");
                                }
                        });
                });
        };
});
//15 ajaxFileUpload图片上传
var i = 0;

function ajaxFileUpload() {
        $.ajaxFileUpload({
                url: 'ajax_imgupload.jsp',
                secureuri: false,
                fileElementId: 'fileToUpload',
                dataType: 'json',
                success: function(data, status) {
                        if (typeof(data) != 'undefined') {
                                $.each(data,
                                function(k, v) {
                                        console.log(v.id + "," + v.url + ":::::::" + i);
                                        $(".imagelist").find("li").eq(i).find("img").attr("src", v.url).attr("id", v.id);
                                        i++;
                                });
                        }
                },
        });
}
//15  ajaxFileUpload图片上传、限制后缀和张数
HTML： < form action = "id_auth2.jsp" method = "post" enctype = "multipart/form-data" >

<input type = "file" name = "img" //必须有name才可以。  
id = "fileToUpload"  style = "width:180px;"  onchange = "ajaxFileUpload(this);" / >

<script language = "javascript"
src = "../assets/static/js/ajaxfileupload.js" > </script> 
 
js： ajaxFileUpload(this,4,'img') 

var i = 0;
function ajaxFileUpload(fileObj) {
  if (i < 3) {
    var allowExtention = ".jpg,.bmp,.gif,.png"; / / 允许上传文件的后缀名document.getElementById("hfAllowPicSuffix").value;
var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
var browserVersion = window.navigator.userAgent.toUpperCase();
if (allowExtention.indexOf(extention) > -1) {
        $.ajaxFileUpload({
                url: 'ajax_imgupload.jsp',
                secureuri: false,
                fileElementId: 'fileToUpload',
                data: {
                        "types": "1"
                },
                dataType: 'json',
                success: function(data, status) {
                        if (typeof(data) != 'undefined') {
                                $.each(data,
                                function(k, v) {
                                        $(".imagelist").find("li").eq(i).find("img").attr("src", v.url).attr("id", v.id).removeAttr("title");
                                        i++;
                                });
                        }
                },
        });
} else {
        alert("仅支持" + allowExtention + "为后缀名的文件!");
        fileObj.value = ""; //清空选中文件
        if (browserVersion.indexOf("MSIE") > -1) {
                fileObj.select();
                document.selection.clear();
        }
        fileObj.outerHTML = fileObj.outerHTML;
}
} else {
        alert("最多可上传三张图片");
}
}

//15 计数
$(".input_title").keyup(function() {
        var temp;
        var total = 60;
        temp = total - $(this).val().length;
        $(".title").html(temp)
});

//15 回调函数手机验证码 ···
var is_vnum = function(fn) {
        $.post("authvnum.jsp", {
                'conditions': node.val()
        },
        function(res) {
                console.log(res);
                fn(res);
                // fn.apply(null, arguments);
        },
        "json");
};

//------------ async:false----------------------------------------
//16 验证手机验证码 
function is_vnum(node) {
        var bol = false;
        $.ajax({
                url: "authvnum.jsp",
                type: "post",
                async: false,
                dataType: "json",
                success: function(rs) {
                        //       rs = -1;
                        if (rs == -1) {
                                check();
                                $(node).nextAll("span").attr("class", "ok").html("");
                                bol = true;
                                console.log(111111111);
                        } else {
                                check();
                                $(node).nextAll("span").attr("class", "error").html("验证码错误！");
                                console.log("验证码错误");
                        };
                }
        });
        return bol;
};

//17 验证码 
function isrightvnum(node) {
        var bol = false;
        $.ajax({
                url: "checkvcode.jsp",
                type: "post",
                async: false,
                data: {
                        "type": 4,
                        //传数字
                        'vailnum': node.val()
                },
                dataType: "json",
                success: function(rs) {
                        if (rs == -1) {
                                $(".msg").html("");
                                $(node).nextAll("span").attr("class", "ok").html("");
                                bol = true;
                        } else {
                                $(node).nextAll("span").attr("class", "error").html("验证码错误！");
                        };
                }
        });
        return bol;
};
//18 发送手机验证码
function get_phone_vnum(type, node) {
        var bol = true;
        var num = node.val();
        if (num == "" || num == "undefined") {
                num = node.text();
        }
        $.ajax({
                url: "mobilevnum.jsp",
                type: "post",
                async: false,
                data: {
                        "condition": num,
                        "type": type
                },
                dataType: "json",
                success: function(rs) {
                        if (rs == 2) {
                                check();
                                $(node).css("border", "1px solid red");
                                $(node).nextAll("span").attr("class", "error").html("您的账号存在异常，如有疑问请联系客服处理");
                                alert("您的账号存在异常，如有疑问请联系客服处理");
                                console.log("账号存在异常");
                                bol = false;
                        }
                }
        });
        return bol;
}
//19 
$(function() {
        $("body").find(".input").each(function() {
                if ($(this).val() != "") {
                        $(this).val(parseInt($(this).val()));
                }
        });
});

$.ajaxFileUpload({
        url: 'ajax_imgupload.jsp',
        secureuri: false,
        fileElementId: 'fileToUpload',
        data: {
                "types": 2
        },
        dataType: 'json',
        success: function(data, status) {
                var imgid = "";
                if (typeof(data) != 'undefined') {
                        $.each(data,
                        function(k, v) {

});
                        $(".zheng_c").append(imgid);
                }
        },
});
//20 request函数，模拟Ajax方法。
　　
function request(type, url, opts, callback) {　　　　
        var xhr = new XMLHttpRequest();　　　　
        if (typeof opts === 'function') {　　　　　　callback = opts;　　　　　　opts = null;　　　　
        }　　　　xhr.open(type, url);　　　　
        var fd = new FormData();　　　　
        if (type === 'POST' && opts) {　　　　　　
                for (var key in opts) {　　　　　　　　fd.append(key, JSON.stringify(opts[key]));　　　　　　
                }　　　　
        }　　　　xhr.onload = function() {　　　　　　callback(JSON.parse(xhr.response));　　　　
        };　　　　xhr.send(opts ? fd: null);　　
}

//21—js获取当前日期
function CurentTime() {
        var now = new Date();
        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日 
        //         var hh = now.getHours();            //时
        //         var mm = now.getMinutes();          //分
        var clock = year + "";
        if (month < 10) clock += "0";
        clock += month + "";
        if (day < 10) clock += "0";
        clock += day;
        return (clock);
}

//22———循环input对比内容是否为空
$(this).parents(".s_i_c").eq(0).find(".input").each(function() {
        if ($(this).val() == "") {
                bol = false;
                return bol;
        } else {
                bol = true;
        }
});

//23———————随机排序数组
// var ss=ran_Arr([0,1,2]);  
function ran_Arr(oArr) {
        var temp_x; //临时交换数
        var tArr = oArr.slice(0); //新数组,复制原数组
        var random_x;
        for (var i = oArr.length; i > 0; i--) {
                random_x = Math.floor(Math.random() * i); //  取得一个随机整数
                temp_x = tArr[random_x];
                tArr[random_x] = tArr[i - 1];
                tArr[i - 1] = temp_x;
        }
        return tArr; //返回新数组
}

//24———————快速输出的页面的方式
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join("."))

//输出：
//George.John.Thomas 
//25--------原生js的写法
//            document.getElementsByClassName("btn")
//            document.getElementById("btn").
window.onload = function() {
        document.getElementById("btn").onclick = function() {
                closewindows();
        }

};

function closewindows() {
        alert("1231313");

}

//26———————快速输出的页面的方式
for (var x in data) {
        if (data.hasOwnProperty(x)) {
                str += "<option value='" + x + "'>" + data[x] + "</option>";
        }...
}

//27———————2个节点（“li”）交换位置
$("body").delegate('.nxt', 'click',
function() {
        var li = $(this).parents("li");
        var li2 = $(this).parents("li").next();
        $(li).insertAfter($(li2));
        var li3 = $(this).parents("li").prev();
});
$("body").delegate('.pre', 'click',
function() {
        var li = $(this).parents("li");
        var li2 = $(this).parents("li").prev();
        $(li2).insertAfter($(li));
});
