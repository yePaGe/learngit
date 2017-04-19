
    $(".mess").on({
        mouseover:function () {
            $(this).addClass("active");
            $(this).children("div").show();
        },
        mouseout:function () {
        $(this).removeClass("active");
            $(this).children("div").hide();

        }
    });
    $(".locationMess>ul>li>a").on({
        mouseover:function () {
            $(this).css("background-color","rgba(227,228,229,1)");
        },
        mouseout:function () {
            $(this).css("background-color","rgba(255,255,255,1)") ;
        },
        click:function () {
            var lName = $(this).text();
            $(".lo").text(lName);
            $(this).parents(".locationMess").hide();
        }
    });
    $(".location").mouseover(function () {
        $(".locationMess").show();
        $(this).addClass("locationHover");
       /* $(".locationMess>ul>li>a").forEach(function () {
           var name = $(this).text();
           if(name==$(".lo").text()){
               $(this).addClass("messChoose");
           }
        });*/
    });
    $(".location").mouseout(function () {
        $(this).removeClass("locationHover");
        $(".locationMess").hide();
    });






