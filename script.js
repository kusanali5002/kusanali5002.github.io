// script.js - Phiên bản CUỐI CÙNG & HOÀN CHỈNH (Mobile Responsive & Smooth Scroll)

// =========================================================================
// HÀM TOÀN CỤC (GLOBAL FUNCTIONS) NÊN ĐẶT Ở ĐÂY
// =========================================================================

function showComingSoonAlert(event) {
    event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
    alert("Coming soon!"); // Hiển thị hộp thoại cảnh báo mặc định của trình duyệt
}

// =========================================================================
// BẮT ĐẦU LISTENER DOMContentLoaded
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const currentPath = window.location.pathname.split('/').pop();

    const footer = document.querySelector('.footer');
    let scrollTimeout;

    // Header scroll animation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const scrollPosition = window.scrollY + window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        // Chỉ hiển thị footer khi gần cuối trang hoặc khi cuộn xuống và dừng lại
        // Trên mobile, footer sẽ luôn hiển thị (được xử lý bởi CSS media query)
        // Logic này chủ yếu dành cho desktop.
        if (window.innerWidth > 992) { // Chỉ áp dụng logic ẩn/hiện footer trên desktop
            if (scrollPosition >= bodyHeight - 50) { // Khi gần cuối trang
                footer.classList.add('visible');
            } else {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    if (footer.classList.contains('visible')) {
                        footer.classList.remove('visible');
                    }
                }, 100);
            }
        } else { // Trên mobile, đảm bảo footer luôn visible
            footer.classList.add('visible');
        }
    });

    // =========================================================================
    // LOGIC CHO THANH TÌM KIẾM (Activities & Problems)
    // =========================================================================
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

    // =========================================================================
    // LOGIC CHO CỬA SỔ "COMING SOON" DẠNG MODAL (Vẫn giữ cho các trường hợp khác)
    // =========================================================================
    const comingSoonModal = document.getElementById('comingSoonModal');
    const closeComingSoonButton = document.querySelector('#comingSoonModal .close-button');

    if (comingSoonModal) {
        if (window.innerWidth > 992) { // Kích hoạt chỉ trên desktop
            // Đoạn code này chỉ hiển thị modal tự động khi tải trang.
            // Nếu bạn không muốn nó tự động hiện, hãy bỏ comment hoặc xóa dòng dưới.
            // setTimeout(() => { comingSoonModal.classList.add('show'); }, 100); 

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
            // Trên mobile, đảm bảo modal này bị ẩn nếu tồn tại (CSS cũng xử lý)
            comingSoonModal.style.display = 'none';
        }
    }


    // =========================================================================
    // LOGIC CHO HAMBURGER MENU VÀ MOBILE OVERLAY NAV
    // =========================================================================
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileOverlayNav = document.getElementById('mobileOverlayNav');
    const closeOverlayButton = document.querySelector('.mobile-nav-overlay .close-overlay-button');

    if (mobileMenuToggle && mobileOverlayNav && closeOverlayButton) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileOverlayNav.classList.add('open');
            document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi menu mở
        });

        closeOverlayButton.addEventListener('click', () => {
            mobileOverlayNav.classList.remove('open');
            document.body.style.overflow = 'auto'; // Cho phép cuộn trang trở lại
        });

        // Đóng overlay khi click vào bất kỳ nút điều hướng nào trong overlay
        const mobileNavButtons = mobileOverlayNav.querySelectorAll('.mobile-nav-button');
        mobileNavButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Kiểm tra xem nút được click có phải là nút đóng hay không
                // Nếu không phải nút đóng, thì đóng overlay
                if (!button.classList.contains('close-overlay-button')) {
                    mobileOverlayNav.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Đóng overlay khi click ra ngoài nội dung menu
        mobileOverlayNav.addEventListener('click', (event) => {
            if (event.target === mobileOverlayNav) {
                mobileOverlayNav.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // =========================================================================
    // LOGIC CHO SMOOTH SCROLL KHI CLICK TOC
    // =========================================================================
    // Chỉ áp dụng logic này cho các trang có TOC (nahida.html và các activity detail pages)
    const tableOfContents = document.querySelector('.table-of-contents');
    if (tableOfContents) {
        tableOfContents.addEventListener('click', function (event) {
            // Kiểm tra xem phần tử được click có phải là thẻ <a> và có href bắt đầu bằng # hay không
            if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
                event.preventDefault(); // Ngăn hành vi nhảy tức thì mặc định

                const targetId = event.target.getAttribute('href').substring(1); // Lấy id đích
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Cuộn mượt đến phần tử đích
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Cuộn để đầu phần tử ở đầu viewport
                    });

                    // Để tránh header che mất, có thể tính toán offset thêm
                    // Ví dụ: window.scrollBy(0, -header.offsetHeight);
                    // Hoặc dùng CSS scroll-margin-top trên các heading:
                    // h1, h2, h3, h4 { scroll-margin-top: 80px; } // Adjust based on header height
                }
            }
        });
    }
}); // Kết thúc document.addEventListener('DOMContentLoaded')