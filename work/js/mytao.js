$(function () {
    function getString(str,n) {
        var tmp = 0;
        for(var i=0;i<str.length;i++){
            if (str.substring(i,i+1)==n){
                tmp++;
            }
        }return tmp;
    }
    var myAccount =$(".accounterInput:eq(0)");
    var myPasswords = $(".accounterInput:eq(1)");

    myAccount.focus(function () {
        $(".acc:eq(1)").hide();
        $(".acc:eq(0)").show();
        $(".accounter0").css("border-color","rgba(240,68,0,1)");
    });
    $(".acc").focus(function () {
        $(this).prev().val("");
        $(this).hide();
    });

    myPasswords.focus(function () {
        $(".acc:eq(0)").hide();
        $(".acc:eq(1)").show();
        $(".accounter").css("border-color","rgba(240,68,0,1)")
    });

    myAccount.blur(function () {
        var retN = /([^\w\d_])+/g;
        if(retN.test(this.value)){
            $(".alertWin").css("display","-webkit-flex");
            $(".alertMess").html("请输入正确的帐号！");
        }else if(this.value.length>10){
            $(".alertWin").css("display","-webkit-flex");
            $(".alertMess").html("帐号的字符数不能超过10个！");
        }
        $(".accounter0").css("border-color","rgba(240,240,240,1)");
            });

    $(".alertBtn").click(function () {
        $(".alertWin").css("display","none");
        $(".accounterInput").val("");
        $(".acc").hide();
    });

   myPasswords.blur(function () {
       var m = getString(this.value,this.value[0]);
        $(".accounter").css("border-color","rgba(240,240,240,1)");
       if(m == this.value.length){
           $(".alertWin").css("display","-webkit-flex");
           $(".alertMess").html("密码不应该为相同的字符！！！");
       }
    });

    $(".loginBtnInput").click(function () {
        var $docWidth = $(document).width();
        $(".loginWin").animate({
            left:$docWidth+"px"
        },1000);
    });
    $(".choose").click(function () {
        $(".comfWin").css("display","-webkit-flex");
        $(".comfBtn>input").click(function () {
            var b = $(this).val();
            if(b=="离开"){
                $(".comfWin").hide();
                $(".loginWin").hide();
                $(".comfBtn>input").attr("href","http://localhost:63342/practise/work/taohome.html?_ijt=3efnm3shdf4naj8qvup535bhni")
            }
            if(b=="返回"){
                $(".comfWin").hide();
            }
        })
    });






});