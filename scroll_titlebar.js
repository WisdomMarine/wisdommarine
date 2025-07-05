let lastScrollTop = 0;
    const header = document.querySelector('.head');

    window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('hide');
    } else {
        // Scrolling up
        header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // for mobile bounce
    });
