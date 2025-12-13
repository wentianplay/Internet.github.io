!(function() {
    YXDataSDK.init({
        appid: 82,
        channel: "300官网"
    })

    function SendReport(name, args) {
        if (YXDataSDK) {
            YXDataSDK.eventReport({
                event_name: name,
                properties: { ...args
                }
            })
        }
    }
    SendReport("web_view", {
        web_title: "300官网"
    })

    // 官网首页
    $(".btn_download").click(() => {
        SendReport("web_click", {
            click_name: "点击官网下载图标（大）"
        })
    })

    // 下载中心
    $(".btn-js-down").click(e => {
        SendReport("web_click", {
            click_name: "点击极速下载"
        })
        SendReport("web_download_request", {
            request_name: "极速下载（大图标）",
            request_link: e.target.href
        })
    })
    $(".green_dl").click(e => {
        SendReport("web_click", {
            click_name: "点击下载300英雄绿色版"
        })
        SendReport("web_download_request", {
            request_name: "下载300英雄绿色版",
            request_link: e.target.href
        })
    })
})()