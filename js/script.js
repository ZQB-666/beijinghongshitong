$(".nav1 .a1").click(function(){
    $(this).addClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a7").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a2").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a7").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a3").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a7").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a4").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a7").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a5").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a7").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a6").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a7").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a7").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a8").removeClass("active");
});
$(".nav1 .a8").click(function(){
    $(this).addClass("active");
    $(".nav1 .a1").removeClass("active");
    $(".nav1 .a2").removeClass("active");
    $(".nav1 .a3").removeClass("active");
    $(".nav1 .a4").removeClass("active");
    $(".nav1 .a5").removeClass("active");
    $(".nav1 .a6").removeClass("active");
    $(".nav1 .a7").removeClass("active");
});




//$("#navbarC .b1").click(function(){
//    $(this).addClass("active");
//    $("#navbarC .b2").removeClass("active");
//    $("#navbarC .b3").removeClass("active");
//    $("#navbarC .b4").removeClass("active");
//    $("#navbarC .b5").removeClass("active");
//    $("#navbarC .b6").removeClass("active");
//    
//});
//$("#navbarC .b2").click(function(){
//    $(this).addClass("active");
//    $("#navbarC .b1").removeClass("active");
//    $("#navbarC .b3").removeClass("active");
//    $("#navbarC .b4").removeClass("active");
//    $("#navbarC .b5").removeClass("active");
//    $("#navbarC .b6").removeClass("active");
//    
//});
//$("#navbarC .b3").click(function(){
//    $(this).addClass("active");
//    $("#navbarC .b1").removeClass("active");
//    $("#navbarC .b2").removeClass("active");
//    $("#navbarC .b4").removeClass("active");
//    $("#navbarC .b5").removeClass("active");
//    $("#navbarC .b6").removeClass("active");
//    
//});
//$("#navbarC .b4").click(function(){
//    $(this).addClass("active");
//    $("#navbarC .b1").removeClass("active");
//    $("#navbarC .b2").removeClass("active");
//    $("#navbarC .b3").removeClass("active");
//    $("#navbarC .b5").removeClass("active");
//    $("#navbarC .b6").removeClass("active");
//    
//});
//$("#navbarC .b5").click(function(){
//    $(this).addClass("active");
//    $("#navbarC .b1").removeClass("active");
//    $("#navbarC .b2").removeClass("active");
//    $("#navbarC .b3").removeClass("active");
//    $("#navbarC .b4").removeClass("active");
//    $("#navbarC .b6").removeClass("active");
//    
//});
//$("#navbarC .b6").click(function(){
//    $(this).addClass("active");
//    $("#navbarC .b1").removeClass("active");
//    $("#navbarC .b2").removeClass("active");
//    $("#navbarC .b3").removeClass("active");
//    $("#navbarC .b4").removeClass("active");
//    $("#navbarC .b5").removeClass("active");
//    
//});


        function name1(){
            var n=document.getElementById("name").value;
            if (n.length==0){
                document.getElementById("namep").innerHTML="<i></i>支持中文、字母、数字的2-18个字符";
            }else if (n.length<2||n.length>18){
                document.getElementById("namep").innerHTML="<i class='i2'></i>格式错误,仅支持中文、字母、数字的2-18个字符";
            }else {
                document.getElementById("namep").innerHTML="<i class='i3'></i>对了";
            }
        }

        function pass1(){
            var pa=document.getElementById("pass").value;
            var aa=/^[a-zA-Z]\w{7,17}$/;
             if(pa==0){
                document.getElementById("pawp1").innerHTML="<i></i>建议使用字母数字两种组合8-18位字符"
            }else if (!aa.test(pa)){
                document.getElementById("pawp1").innerHTML="<i class='i2'></i>字母开头字符在8-18位之间";
            }
            else {
                return document.getElementById("pawp1").innerHTML="<i class='i3'></i>对了";
            }
        }

        function pa2(){
            var pa=document.getElementById("pass").value;
            var pa1=document.getElementById("pass2").value;
            if(pa1==0){
                document.getElementById("pawp2").innerHTML="<i></i>请再次输入密码"
            }else if (pa!=pa1){
                document.getElementById("pawp2").innerHTML="<i class='i2'></i>密码不一致";
            }else {
                return document.getElementById("pawp2").innerHTML="<i class='i3'></i>密码一致";
            }
        }

        function shouji1(){
            var s=document.getElementById("shouji").value;
            var a=/^1\d{10}$/;
            if(s==0){
                document.getElementById("shoujip").innerHTML="<i></i>请输入手机号"
            }else if(!a.test(s)){
                document.getElementById("shoujip").innerHTML="<i class='i2'></i>请填写正确手机号"
            }else {
                document.getElementById("shoujip").innerHTML="<i class='i3'></i>可以"
            }
        }

        
//        var code=null;
//        function yz(){
//            var n=document.getElementById("yanzheng").value;
//            if (n==0){
//                document.getElementById("yanzhengp").innerHTML="<i></i>请输入验证码";
//            }else if(n!=code){
//                document.getElementById("yanzhengp").innerHTML="<i class='i2'></i>验证码不正确";
//            }else {
//                document.getElementById("yanzhengp").innerHTML="<i class='i3'></i>对了";
//            }
//        }
//       function huoqu(){
//            var random=parseInt(Math.random()*9000+1000);
//            code+=random;
//            alert(code);
//            return code;
//        }
     var code=null;
     var random=null;
        
        function huoqu(){
            var random=parseInt(Math.random()*9000+1000);
            alert(random)
            document.getElementById("button").innerHTML=random;

        }
     function yz(){
            var n=document.getElementById("yanzheng").value;
         var a = document.getElementById("button").innerHTML;
            alert(n)
            if (n.length==0){
                document.getElementById("yanzhengp").innerHTML = "<i></i>请输入验证码";
            }else if(n!=a){
                document.getElementById("yanzhengp").innerHTML = "<i class='i2'></i>您输入的验证码不正确".fontcolor("red");
            }else {
                document.getElementById("yanzhengp").innerHTML = "<i class='i3'></i>对了".fontcolor("green");
            }
        }




















$(function(){
    $('.myscroll').myScroll({
        speed: 30, //数值越大，速度越慢
        rowHeight: 169 //li的高度
    });
});


$(".service .hd li").click(function(){
     $(".service .bd li").eq($(this).index()).slideToggle()
    .siblings().hide()
});

$(".Sign-in-n").click(function(){
    $(".Sign-in").slideToggle()
    $(".Sign-in>form").slideToggle();

})

$(".Sign-in .div1").click(function(){
    $(".Sign-in").slideToggle()
    $(".Sign-in>form").slideToggle();

})
$(".Sign-in .ljzcc").click(function(){
    $(".immediately").slideToggle()
    $(".Sign-in>form").slideToggle()
})
$(".fhdl").click(function(){
    $(".immediately").slideToggle()
    $(".Sign-in>form").slideToggle()
});

$(".Asia .Asia-hd").click(function(){
    $(this).siblings(".Asia-bd").slideToggle()
 
})

$(".Asia .Asia-bd .industry li").click(function(){
    $(".Asia .asia-bdbd").show()
    $(".Asia .asia-bbd").hide()
 
})

$(".main .liuc li").click(function(){
    $(".main .liuc li a").eq($(this).index()).toggleClass("actives").stop()
    .parent().siblings().children().removeClass("actives")
})

$(".vehicle-hd1").click(function(){
    $(this).children().addClass("actives")
    $(".vehicle-hd2").children().removeClass("actives")
    $(".vehicle .vehicle-bd .shang").toggle()
    $(".vehicle .vehicle-bd .daod").toggle()
})
$(".vehicle-hd2").click(function(){
    $(this).children().addClass("actives")
    $(".vehicle-hd1").children().removeClass("actives")
    $(".vehicle .vehicle-bd .shang").toggle()
    $(".vehicle .vehicle-bd .daod").toggle()
})
$(".vehicle .vehicle-bd .col-md-7 i").click(function(){
    $(this).toggleClass("accti");
})
$(".vehicle .vehicle-bd .daod p i").click(function(){
    $(this).toggleClass("aativ")
})
