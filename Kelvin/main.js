$("#burger").click(function (){
    $("#nav-list").slideDown("slow")
    document.body.style.overflow = 'hidden';
})

$(".item-link").click(function () {
    var id = $(this).attr("href");
    var top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

    if (document.documentElement.clientWidth <= 830) {
        document.body.style.overflow = 'visible';
        $("#nav-list").slideUp("slow")
    }
})

$("#close-btn").click(function (){
    $("#nav-list").slideUp("slow")
    document.body.style.overflow = 'visible';
})