$(document).ready(function () {

    const navbar = document.getElementById('nav-container');
    const navlogo = document.querySelector('.logo-image');

    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            navbar.classList.remove('top');
            navlogo.classList.add('small-logo');
            if (!scrolled) {
                navbar.style.transform = 'translateY(-106px)';
            }
            setTimeout(function () {
                navbar.style.transform = 'translateY(0)';
                scrolled = true;
            }, 300);
        } else {
            navbar.classList.add('top');
            navlogo.classList.remove('small-logo');
            scrolled = false;
        }
    }

    $(".nav-toggler").click(function () {
        $(".nav-toggler").toggleClass("active");
        $(".primary-navigation").toggleClass("show");
    })
})