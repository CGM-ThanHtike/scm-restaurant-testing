$(document).ready(function () {
    $('.menu-item.dish-menu').click(function () {
        $(".dish-menu").removeClass("active");
        $(this).addClass("active");
        if (this.id == 'all') {
            $(".menu-dishes .dish").addClass("show");
        } else {
            $(".menu-dishes .dish").removeClass("show");
            $("." + this.id).addClass("show");
        }
    });
})