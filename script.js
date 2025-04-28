$(document).ready(function () {
    /*
     * Main variables
     */
    var content = [{
        title: "Hello Rùa người mà anh suy nghĩ rất nhiều gần đây ",
        desc: "Hôm nay anh ở đây để mang những lời nhắn nhủ tới emm đó mong em sẽ lắng nghe Rùaa nháa"
    }, {
        title: "1.Lời xin lũi từ aaa ạ!!!",
        desc: "Rùa này , anh xin lỗi về những lúc đã làm em buồn và không vui. Anh thực sự hối hận về những hành động và lời nói không đúng đắn của mình. Anh nhận ra rằng anh đã gây ra sự chán nản và phiền muộn cho em, và điều đó làm anh cảm thấy rất xấu hổ. Anh biết rằng mqh của anh và Rùa cần được bảo vệ và chăm sóc, và anh sẽ cố gắng hơn nữa để không gây ra những xích mích và hiểu lầm. Mong Rùa có thể tha thứ cho anh và tiếp tục đồng hành cùng anh với thấu hiểu và đồng cảm, Rùa nha."
    }, {
       title: "2.Lời cảm ơn từ anh ạ",
       desc: "Rùa ơi, trong vài tháng qua (nghe thì ngắn mà dài ha), em đã là một phần không thể thiếu như là thói quen của anh vậy. Thức dậy lý do đầu tiên để anh cầm điện thoại sau tắt báo thức là nhắn tin cho em á. Em đem lại cho anh nhiều niềm vui, hạnh phúc và sự ấm áp không ngừng nghỉ. Anh muốn dành những dòng này để bày tỏ lòng biết ơn sâu sắc đến em vì tất cả những điều tuyệt vời mà em đã mang lại. Em đã luôn ở bên cạnh, hỗ trợ và động viên anh trong mọi khó khăn. Những lúc anh gặp bế tắc nhất, em luôn là người đứng đầu tiên xuất hiện để nghe anh than thở và lắng nghe anh. Bằng cách lắng nghe và đồng cảm, em chứng minh cho anh thấy hóa ra cũng có người đồng điệu và sẵn sàng lắng nghe anh mọi lúc mọi nơi. Em là người đã giúp anh nhận ra nhiều sai lầm, học được nhiều bài học để anh hoàn thiện bản thân mình từng ngày. Anh xin em nha!!!"
    }, {
        title: "3.Lời động viên từ Tôm",
        desc: "Đọc đến đây là cũng kiên trì dữ ha:)), đời mà..., có những lúc chúng ta gặp phải những thử thách khó khăn và những buổi tối tăm. Anh nghĩ đây là lúc khó khăn của anh và có thể là cả em ở nhiều mặt trận... Nhưng đừng bao giờ quên rằng em có rất nhiều người đứng sau lưng, luôn ủng hộ và tin tưởng em từng bước đi, trong đó có ANH đó! Anh muốn nói với em rằng em là một người đáng trân trọng, mạnh mẽ và xứng đáng với những điều tốt đẹp. Dù bất cứ điều gì xảy ra, anh sẽ bên cạnh anh, để cùng nhau vượt qua mọi khó khăn (sẽ không có như 2 lần ngu ngục đó đâu). Hãy nhớ rằng mọi khó khăn đều sẽ qua đi và mặt trời sẽ lại ửng hồng thôi, niềm tin vào sự hạnh phúc sẽ là mãi mãi. Hãy tin vào bản thân (và cả anh nữa...), tiếp tục điều hướng đến những điều tốt đẹp ở tương lai. Anh sẽ không thể quên được em đâu và sẽ luôn âm thầm cổ vũ em đấy."
    }, {
        title: "4.Lời...",
        desc: "Rùa ơi, Tí Sỏi ơi, Dâu Tây ơi, Ngọc Anh ơi, mỗi sáng thức dậy, anh vẫn mong về sự hiện diện của em. Nếu có thể xin hãy bỏ qua cho ý nghĩ ngu xuẩn của anh, anh đã làm nhưng chẳng thể quên em đâu, thậm chí còn nghĩ đến em nhiều hơn. Em là người bạn đồng hành tin cậy và đồng điệu với mọi suy tư và ước mơ của anh. Có những điều tốt đẹp em đã mang lại cho anh mà em cũng chưa nhận ra đó, nên là mong em cho anh 1 con đường để anh làm điều gì đáp trả lại những điều tuỵt vời của em nhé. Có thể những lời trên còn chắp vá và chưa đủ những ý anh cần nói và em cần được nghe nhưng anh hy vọng điều này sẽ làm cho em cảm thấy hạnh phúc và ấm áp phần nào sau những gì anh đã làm với em!"
 }];
    var currentPage = 0;
    //generate content
    for (var i = 0; i < content.length; i++) {
        //split content letters to array
        for (var obj in content[i]) {
            //if string
            if (typeof content[i][obj] === "string") {
                content[i][obj] = content[i][obj].split("");
                continue;
            }
            //if array (grouped text)
            else if (typeof content[i][obj] === "object") {
                var toPush = [];
                for (var j = 0; j < content[i][obj].length; j++) {
                    for (var k = 0; k < content[i][obj][j].length; k++) {
                        toPush.push(content[i][obj][j][k]);
                    }
                }
                content[i][obj] = toPush;
            }
        }
        //set text to 
        $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
        //clone to data
        $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
    }
    //initial arrangement
    arrangeCurrentPage();
    scrambleOthers();
    /*
     * Event handlers
     */
    $(window).resize(function () {
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-prev").hide();
    $("#soup-prev").click(function () {
        $("#soup-next").show();
        currentPage--;
        if (currentPage === 0) {
            $("#soup-prev").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-next").click(function () {
        $("#soup-prev").show();
        currentPage++;
        if (currentPage === content.length - 1) {
            $("#soup-next").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    /*
     * Functions
     */
    function arrangeCurrentPage() {
        for (var i = 0; i < content[currentPage].title.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
        for (var i = 0; i < content[currentPage].desc.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
    }

    function setText() {
        var j;
        for (j = 0; j < content[i].title.length; j++) {
            $(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
        }
        for (j = 0; j < content[i].desc.length; j++) {
            $(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
        }
    }

    function scrambleOthers() {
        for (var i = 0; i < content.length; i++) {
            //don't scramble currentPage
            if (currentPage === i)
                continue;
            var parts = [
                ["title", ".soup-title"],
                ["desc", ".soup-desc"]
            ];
            //apply to .title h1s and .desc ps
            for (var j = 0; j < parts.length; j++) {
                for (var k = 0; k < content[i][parts[j][0]].length; k++) {
                    //define random position on screen
                    var randLeft = Math.floor(Math.random() * $(window).width());
                    var randTop = Math.floor(Math.random() * $(window).height());
                    //defining boundaries
                    var offset = $(".position-data").eq(currentPage).offset();
                    var bounds = {
                        left: offset.left,
                        top: offset.top,
                        right: $(window).width() - offset.left,
                        bottom: $(window).height() - offset.top
                    };
                    var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
                    var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
                    //finally, apply all the scrambles
                    $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
                        left: randLeft,
                        top: randTop,
                        color: "#DDD",
                        zIndex: "initial"
                    });
                }
            }
        }
    }
});