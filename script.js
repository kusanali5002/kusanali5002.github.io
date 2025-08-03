
function showComingSoonAlert(event) {
    event.preventDefault();
    alert("Coming soon!");
}


const allPostsData = [
    {
        title: "Spiral Abyss version 5.6B",
        description: "A new Spiral Abyss has been coming bring new challenges as monsters' HP have increased significantly. And the nightmare is waiting you in 12-3-2 ...",
        hashtags: "#spiralabyss #genshinimpact",
        date: "06/22/2025",
        url: "spiralabyss5.6b.html"
    },
    {
        title: "How did Dun enjoys his national-defense training course",
        description: "The Kusanali, a lazy boy just finished his semeter had to take a 42-day course in a strange place and people. What did he do to overcome it?.",
        hashtags: "#dailylife",
        date: "08/22/2024",
        url: "national_defense.html"
    },
    {
        title: "Dun's work in social media",
        description: "Lately, Dun seems to be working really hard on creating content for YouTube and TikTok. I wonder what he's planning?.",
        hashtags: "#social #challenge",
        date: "06/21/2025",
        url: "#",
        isComingSoon: true
    },
    {
        title: "Dun's difficulty journey to achieve rank Grandmaster in Honor of Kings (HOK)",
        description: "How did he fight with players from other regions, especially from China and Malaysia...",
        hashtags: "#hok #moba",
        date: "08/14/2024",
        url: "hok.html"
    },
    {
        title: "VNU Genshin Box",
        description: "Dun became part of this community during his freshman year but it was in his sophomore year that he realy started getting involved...",
        hashtags: "#genshinimpact #dailylife #community",
        date: "06/28/2025",
        url: "#",
        isComingSoon: true
    },
    {
        title: "Another hobby of Dun's that not many people know about",
        description: "Every now and then Dun draws a few simple pictures - sometimes even with a few mistake here and there...",
        hashtags: "#anime #dailylife #art",
        date: "06/28/2025",
        url: "art.html"
    },
    {
        title: "Yuk - Dun's motivation for his personal blog",
        description: "Dun and Yuk are friend in uni. Yuk had a personal blog back in his first year of university, and Dun found it quite interesting...",
        hashtags: "#school #dailylife #friend",
        date: "06/30/2025",
        url: "yuk.html"
    },
    {
        title: "Arena of Valor Premier League 2025 - AOG fails again",
        description: "Teams from the AOG region have been performing quite poorly in recent international tournaments. As a result, expectations for them in this APL tournament were fairly low. However, a few surprising results have already taken place....",
        hashtags: "#aov #apl",
        date: "07/15/2025",
        url: "apl2025.html",
    },
    {
        title: "Dun's new friends at UET",
        description: "Dun met a friend from UET through the VNU Genshin Box group, and from there, he got to know even more friends from different universities...",
        hashtags: "#dailylife",
        date: "07/12/2025",
        url: "#",
        isComingSoon: true
    },
    {
        title: "First cosplay experience",
        description: "Dun had been wanting to try cosplay for quite a while, but for various reasons, he didn't get the chance until March. It looks like he really enjoyed it...",
        hashtags: "#cosplay",
        date: "07/11/2025",
        url: "#",
        isComingSoon: true
    },
    {
        title: "Flowborn (Tanker) tutorial",
        description: "Flowborn is the newest hero in Honor of Kings, with a unique ability to take on multiple roles. Just two days ago, the tanky fighter version of Flowborn was also released in the game. Let's follow Dun and learn how to master Flowborn like a pro...",
        hashtags: "#moba #hok",
        date: "07/15/2025",
        url: "#",
        isComingSoon: true
    },
    {
        title: "Spiral Abyss version 5.7",
        description: "A fairly chill Spiral Abyss cycle with familiar enemies...",
        hashtags: "#spiralabyss #genshinimpact",
        date: "07/17/2025",
        url: "spiralabyss5.7.html",
    },
    {
        title: "Support Dun",
        description: "He's on his way to get my constellation 6, but it seems like Dun is exactly a stupid guy when it comes to rolling on banners. And now... he's almost out of primogems...A small donation might just help him out a lot...",
        hashtags: "#genshinimpact",
        url: "support.html",
    },
    {
        title: "Memory of Chaos | Lupine Moon - Devourer",
        description: "First HSR guide for endgame content on Dun's blog with expert insights from Atami, an outstanding player of the game.",
        hashtags: "#hsr #moc",
        date: "07/25/2025",
        url: "moc3.4.html",
    },
    {
        title: "Genshin Impact Gacha Rate ",
        description: "Genshin is a gacha game where you obtain characters and weapons through a gacha system. However, when I played the game, I was too focused on artifact stats rather than the gacha rates for items.",
        hashtags: "#genshinimpact #gacha",
        date: "08/02/2025",
        url: "GIgacharate.html",
    },
    {
        title: "A statistical analysis of Genshin Impact wishing system",
        description: "This is a small follow - up research to my previous post about Genshin's gacha system, using some basic mathematical principles.",
        hashtags: "#genshinimpact #gacha",
        date: "08/03/2025",
        url: "gianalysis.html",
    }
];


const postsPerPage = 7;



function displayPosts(posts, page) {
    const cardList = document.querySelector('.card-list');
    const paginationContainer = document.querySelector('.pagination');
    const noResultsMessage = document.getElementById('no-results-message');


    if (!cardList || !paginationContainer || !noResultsMessage) {
        console.error("Missing required DOM elements for displaying posts (card-list, pagination, no-results-message).");
        return;
    }


    cardList.innerHTML = '';
    paginationContainer.innerHTML = '';
    noResultsMessage.style.display = 'none';

    if (posts.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    }

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToDisplay = posts.slice(start, end);


    postsToDisplay.forEach(post => {

        const postHref = post.isComingSoon ? '#' : `posts/${post.url}`;

        const card = document.createElement('a');
        card.href = postHref;
        card.className = 'card';
        if (post.isComingSoon) {
            card.onclick = showComingSoonAlert;
        }

        card.innerHTML = `
            <h2>${post.title}</h2>
            <p class="description">${post.description}</p>
            <p class="hashtags">${post.hashtags}</p>
            <p class="date">${post.date}</p>
        `;
        cardList.appendChild(card);
    });


    if (posts.length > postsPerPage || (posts.length > 0 && totalPages > 1)) {

        const prevButton = document.createElement('a');
        prevButton.href = '#';
        prevButton.textContent = 'Prev';
        if (page > 1) {
            prevButton.onclick = (e) => {
                e.preventDefault();
                filterAndPaginatePosts(document.querySelector('.search-bar').value, page - 1);
            };
        } else {
            prevButton.classList.add('disabled-link');
            prevButton.onclick = showComingSoonAlert;
        }
        paginationContainer.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('a');
            pageButton.href = '#';
            pageButton.textContent = i;
            if (i === page) {
                pageButton.classList.add('current-page');
            }
            pageButton.onclick = (e) => {
                e.preventDefault();
                filterAndPaginatePosts(document.querySelector('.search-bar').value, i);
            };
            paginationContainer.appendChild(pageButton);
        }

        const nextButton = document.createElement('a');
        nextButton.href = '#';
        nextButton.textContent = 'Next';
        if (page < totalPages) {
            nextButton.onclick = (e) => {
                e.preventDefault();
                filterAndPaginatePosts(document.querySelector('.search-bar').value, page + 1);
            };
        } else {
            nextButton.classList.add('disabled-link');
            nextButton.onclick = showComingSoonAlert;
        }
        paginationContainer.appendChild(nextButton);
    }
}

function filterAndPaginatePosts(searchQuery, page = 1) {
    const query = searchQuery.toLowerCase().trim();
    const filteredPosts = allPostsData.filter(post => {
        return query === '' ||
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            post.hashtags.toLowerCase().includes(query);
    });

    displayPosts(filteredPosts, page);
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
        if (searchBar) {
            searchBar.addEventListener('input', (event) => {
                filterAndPaginatePosts(event.target.value);
            });
            filterAndPaginatePosts('');
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