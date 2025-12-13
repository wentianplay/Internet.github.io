! function() {
    $(".ny_cont_01").slide({
        titCell: ".ny_newslist_tab a",
        mainCell: ".ny_newslist_cont ul",
        titOnClassName: "on",
        trigger: "click",
        startFun: function(n, i) {
            0 == $(".ny_newslist_cont li").eq(n).find(".nv_box-newslist_cont a").length ? $(".view_more").hide() : $(".view_more").show()
        }
    }), $(".ny_cont_01").slide({
        titCell: ".ny_event_tab a",
        mainCell: ".ny_event_cont ul",
        titOnClassName: "on",
        trigger: "click"
    }), $(".ny_cont_01").slide({
        titCell: ".download_tab a",
        mainCell: ".download_cont ul",
        titOnClassName: "on",
        trigger: "click"
    }), $(".ny_cont_02").slide({
        titCell: ".ny_community_tab a",
        mainCell: ".ny_community_cont ul",
        titOnClassName: "on",
        trigger: "click",
        startFun: function(n, i) {
            0 == $(".ny_community_cont li").eq(n).find(".community_item").length ? $(".view_more").hide() : $(".view_more").show()
        }
    }), $(".ny_cont_02").slide({
        titCell: ".ny_video_tab a",
        mainCell: ".ny_video_cont ul",
        titOnClassName: "on",
        trigger: "click"
    }), $(".back-top-02").on("click", function() {
        $(window).scrollTop(0)
    }), $(".ny_side_close").click(function() {
        $(".ny_side_right").addClass("act"), $(".qq_number").hide()
    }), $(".ny_side_open").click(function() {
        $(".ny_side_right").removeClass("act")
    }), $(".link_qq").click(function() {
        $(".qq_number").toggle()
    }), $(window).scroll(function() {
        var n = $(document).scrollTop();
        n < 600 && $(".back-top-02").hide(), 600 <= n && $(".back-top-02").show()
    }), $(".view_more").click(function() {
        $(".back-top-02").show()
    }), $("#pop1 .close_xx").click(function() {
        $("#pop1").hide().parent().hide(), $("#pop1 .pop_video_box").html("")
    }), $(".ny_community_cont .PIC .community_pic").click(function() {
        $(this).siblings(".overlay").show()
    }), $(".community_item .overlay .close_xx").click(function() {
        $(this).parent().parent().hide()
    });
    var n, i; - 1 < (i = navigator.userAgent.toLowerCase()).indexOf("msie") && (n = i.match(/msie ([\d.]+)/)[1]), n <= 8 && alert("活在二次元世界的你，居然还在用这么低端的浏览器，这不符合你的身份啊，赶紧升级您的浏览器，获得更好的体验效果")
}();
//# sourceMappingURL=ny.js.map