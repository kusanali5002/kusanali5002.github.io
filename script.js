


function showComingSoonAlert(event) {
    event.preventDefault();
    alert("Coming soon!");
}



document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const currentPath = window.location.pathname.split('/').pop();

    const footer = document.querySelector('.footer');
    let scrollTimeout;


    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const scrollPosition = window.scrollY + window.innerHeight;
        const bodyHeight = document.body.offsetHeight;


        if (window.innerWidth > 992) {
            if (scrollPosition >= bodyHeight - 50) {
                footer.classList.add('visible');
            } else {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    if (footer.classList.contains('visible')) {
                        footer.classList.remove('visible');
                    }
                }, 100);
            }
        } else {
            footer.classList.add('visible');
        }
    });


    if (currentPath === 'activities.html' || currentPath === 'problems.html') {
        const searchBar = document.querySelector('.search-bar');
        const activityCards = document.querySelectorAll('.card');

        if (searchBar && activityCards.length > 0) {
            searchBar.addEventListener('input', (event) => {
                const searchQuery = event.target.value.toLowerCase().trim();

                activityCards.forEach(card => {
                    const cardText = card.textContent.toLowerCase();

                    if (cardText.includes(searchQuery)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });

                const pagination = document.querySelector('.pagination');
                if (pagination) {
                    if (searchQuery.length > 0) {
                        pagination.style.display = 'none';
                    } else {
                        pagination.style.display = 'flex';
                    }
                }
            });
        }
    }


    const comingSoonModal = document.getElementById('comingSoonModal');
    const closeComingSoonButton = document.querySelector('#comingSoonModal .close-button');

    if (comingSoonModal) {
        if (window.innerWidth > 992) {


            if (closeComingSoonButton) {
                closeComingSoonButton.onclick = function () {
                    comingSoonModal.classList.remove('show');
                }
            }

            window.addEventListener('click', function (event) {
                if (event.target === comingSoonModal) {
                    comingSoonModal.classList.remove('show');
                }
            });
        } else {

            comingSoonModal.style.display = 'none';
        }
    }



    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileOverlayNav = document.getElementById('mobileOverlayNav');
    const closeOverlayButton = document.querySelector('.mobile-nav-overlay .close-overlay-button');

    if (mobileMenuToggle && mobileOverlayNav && closeOverlayButton) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileOverlayNav.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeOverlayButton.addEventListener('click', () => {
            mobileOverlayNav.classList.remove('open');
            document.body.style.overflow = 'auto';
        });


        const mobileNavButtons = mobileOverlayNav.querySelectorAll('.mobile-nav-button');
        mobileNavButtons.forEach(button => {
            button.addEventListener('click', () => {

                if (!button.classList.contains('close-overlay-button')) {
                    mobileOverlayNav.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }
            });
        });


        mobileOverlayNav.addEventListener('click', (event) => {
            if (event.target === mobileOverlayNav) {
                mobileOverlayNav.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        });
    }

    const tableOfContents = document.querySelector('.table-of-contents');
    if (tableOfContents) {
        tableOfContents.addEventListener('click', function (event) {

            if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                const targetId = event.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }
            }
        });
    }
}); 
