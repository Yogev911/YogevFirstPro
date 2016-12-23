/**
 * Created by Yogev Heskia on 23/12/2016.
 */

$("document").ready(function () {
    $("article").css({"cursor":"pointer"});
    $("article").on("click",function () {
        if ($("img").attr("src").indexOf(2) == -1){
            $("img").attr({src:"images/2.jpg"});
            $("h1").text("hello");
        }else {
            $("img").attr({src:"images/1.png"});
            $("h1").text("world");
        }

    })
});
