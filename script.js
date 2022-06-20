function openPage(a, b) {
    window.open(a, b)
}

$("#website").click(function () {
    openPage("index.html", "_self")
});
$("#rps").click(function () {
    openPage("rps/index.html", "_self")
});
$("#redditD").click(function () {
    openPage("https://www.reddit.com/user/Baggy_gamer", "_blank")
});
$("#githubD").click(function () {
    openPage("https://github.com/BaggyBoi", "_blank")
});
let e = window.matchMedia("(max-width: 1300px)")
function scrollCheck(e) {
    if (e.matches) {
        console.log("matches")
        $(document).scroll(function () {
            if ($(document).scrollTop() + $(window).height() >= $(document).height() - 500) {
                $("#goUp").css("opacity", "1")
            }
            else {
                $("#goUp").css("opacity", "0")
            }
        });
    } else {
        $(document).scroll(function () {
            if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
                $("#goUp").css("opacity", "1")
            }
            else {
                $("#goUp").css("opacity", "0")
            }
        });
    }
}
scrollCheck(e)

$("#goUp").click(function () {
    window.scrollTo(0, 0)
});

