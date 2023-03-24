function resizePage() {
    if ($(window).width() > 1080) {
        $(".wrapSwitch").removeClass("wrap-m");
        $(".wrapSwitch").addClass("wrap");
        $("#header").load("./header.html");
        $("#footer").load("./footer.html");
    } else {
        $(".wrapSwitch").removeClass("wrap");
        $(".wrapSwitch").addClass("wrap-m");
        $("#header").load("./header-m.html");
        $("#footer").load("./footer-m.html");
    }

}
$(function () {
    resizePage();

    $(window).on("resize", function () {
        resizePage();
    });
});