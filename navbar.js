window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.querySelector('.navbar-transparent').classList.add('navbar-scroll');
    } else {
      document.querySelector('.navbar-transparent').classList.remove('navbar-scroll');
    }
});