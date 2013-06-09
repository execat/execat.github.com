function make_count(e) {
    console.debug(e);
    var t = e.html(),
        n = parseInt(t);
    e.attr("data-voted") == "1" ? (n -= 1, e.attr("data-voted", "0"), e.parents(".click_like").removeClass("voted_cl"), $.ajax({
        url: "/posts/not_like",
        type: "POST",
        data: {
            id: e.attr("data-id"),
            authenticity_token: $('[name="csrf-token"]').attr("content")
        }
    })) : (n += 1, e.attr("data-voted", "1"), e.parents(".click_like").addClass("voted_cl"), $.ajax({
        url: "/posts/add_like",
        type: "POST",
        data: {
            id: e.attr("data-id"),
            authenticity_token: $('[name="csrf-token"]').attr("content")
        }
    })), console.debug(e), e.html(" " + n)
}
function SetCookie(e, t, n) {
    var r = new Date,
        i = new Date;
    if (n == null || n == 0) n = 1;
    i.setTime(r.getTime() + 864e5 * n), document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString()
}
function wh(e) {
    my_likes = getCookie("likes")
}
function getCookie(e) {
    var t, n, r, i = document.cookie.split(";");
    for (t = 0; t < i.length; t++) {
        n = i[t].substr(0, i[t].indexOf("=")), r = i[t].substr(i[t].indexOf("=") + 1), n = n.replace(/^\s+|\s+$/g, "");
        if (n == e) return unescape(r)
    }
}
$(function () {
    var e = getCookie("likes").split(","),
        t = $("#likes i"),
        n = t.length,
        r;
    for (r = 0; r < n; r++) post$ = $(t[r]), post_id = post$.attr("data-id"), e.indexOf(post_id) >= 0 && (post$.attr("data-voted", "1"), post$.closest(".click_like").addClass("voted_cl"))
});