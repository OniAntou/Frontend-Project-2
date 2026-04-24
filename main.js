const translations = {
    'ja': {
        'new-items': 'new items',
        'goods': 'goods',
        'category': 'category',
        'home': 'ホーム',
        'quantity': '数量',
        'add-to-cart': 'カートに追加する',
        'view-all': 'すべてを見る',
        'lang-btn': '日本語',
        'cart-success': 'がカートに追加されました！',
        'search-prompt': '検索キーワードを入力してください:',
        'search-demo': 'の検索結果を表示します（デモ用）'
    },
    'en': {
        'new-items': 'NEW ITEMS',
        'goods': 'ALL GOODS',
        'category': 'CATEGORIES',
        'home': 'Home',
        'quantity': 'Quantity',
        'add-to-cart': 'ADD TO CART',
        'view-all': 'VIEW ALL',
        'lang-btn': 'English',
        'cart-success': ' has been added to cart!',
        'search-prompt': 'Enter search keywords:',
        'search-demo': ' displaying search results (Demo)'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('nanyano_lang') || 'ja';

    const updateLanguageUI = () => {
        const t = translations[currentLang];
        
        // Headers
        const sections = document.querySelectorAll('.header h3');
        sections.forEach(header => {
            const text = header.textContent.trim().toLowerCase();
            if (text === 'new items' || text === 'new items') header.textContent = t['new-items'];
            else if (text === 'goods' || text === 'all goods') header.textContent = t['goods'];
            else if (text === 'category' || text === 'categories') header.textContent = t['category'];
        });

        // Breadcrumb Home
        const homeLink = document.querySelector('.breadcrumb-nav a');
        if (homeLink) homeLink.textContent = t['home'];

        // View All Button
        const viewAll = document.querySelector('.button a');
        if (viewAll) viewAll.textContent = t['view-all'];

        // Detail Page Static
        const qLabel = document.querySelector('.quantity-selector label');
        if (qLabel) qLabel.textContent = t['quantity'];

        const cartBtn = document.querySelector('.btn-add-to-cart');
        if (cartBtn) cartBtn.textContent = t['add-to-cart'];

        const langBtnText = document.querySelector('.lang-button .selected-text');
        if (langBtnText) langBtnText.textContent = t['lang-btn'];
    };

    // --- Dynamic Page Loading ---
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const loadProductData = () => {
        if (productId && typeof products !== 'undefined' && products[productId]) {
            const product = products[productId];
            const content = currentLang === 'en' && product.en ? product.en : product;
            
            const titleEl = document.querySelector('.product-detail-title');
            const priceEl = document.querySelector('.product-detail-price');
            const imgEl = document.querySelector('.product-detail-image img');
            const descContainer = document.querySelector('.product-detail-description');
            const breadcrumbSpan = document.querySelector('.current-product-name');
            const headTitle = document.querySelector('title');

            if (titleEl) titleEl.textContent = content.name;
            if (priceEl) priceEl.textContent = product.price;
            if (imgEl) imgEl.src = product.image;
            if (breadcrumbSpan) breadcrumbSpan.textContent = content.name;
            if (headTitle) headTitle.textContent = `${content.name} – nanyano Online Store`;

            if (descContainer) {
                let html = `<p>${content.description}</p>`;
                if (content.details && content.details.length > 0) {
                    html += `<ul style="margin-top: 15px; padding-left: 20px;">`;
                    content.details.forEach(detail => {
                        html += `<li>${detail}</li>`;
                    });
                    html += `</ul>`;
                }
                descContainer.innerHTML = html;
            }
        }
    };

    // --- Cart Logic ---
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('nanyano_cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    };

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('nanyano_cart')) || [];
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) existingItem.quantity += product.quantity;
        else cart.push(product);
        
        localStorage.setItem('nanyano_cart', JSON.stringify(cart));
        updateCartCount();
        alert(`"${product.name}" ${translations[currentLang]['cart-success']}`);
    };

    // --- Dropdowns ---
    const setupDropdowns = () => {
        document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            const items = dropdown.querySelectorAll('.dropdown-item');
            const selectedText = dropdown.querySelector('.selected-text');

            if (dropdown.id === 'lang-dropdown') {
                items.forEach(item => {
                    if (item.dataset.value === currentLang) {
                        item.classList.add('active');
                        if (selectedText) selectedText.textContent = item.textContent;
                    }
                });
            }

            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('.dropdown-menu').forEach(m => {
                    if (m !== menu) m.classList.remove('show');
                });
                menu.classList.toggle('show');
            });

            items.forEach(item => {
                item.addEventListener('click', () => {
                    if (selectedText) selectedText.textContent = item.textContent;
                    items.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    menu.classList.remove('show');

                    if (dropdown.id === 'lang-dropdown') {
                        currentLang = item.dataset.value;
                        localStorage.setItem('nanyano_lang', currentLang);
                        updateLanguageUI();
                        loadProductData();
                    }
                });
            });
        });

        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
        });
    };

    // --- Search (in-page filter) ---
    const searchBtn = document.getElementById('search-btn');
    const searchPanel = document.getElementById('header-search');
    const searchInput = document.getElementById('site-search-input');
    const searchClear = document.getElementById('site-search-clear');
    const searchStatus = document.getElementById('site-search-status');

    const productCards = Array.from(document.querySelectorAll('.product-card'));

    const setSearchPanelOpen = (open) => {
        if (!searchPanel || !searchBtn) return;
        searchPanel.hidden = !open;
        searchBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open && searchInput) {
            searchInput.focus();
            searchInput.select?.();
        }
    };

    const normalize = (value) => (value || '').toString().trim().toLowerCase();

    const updateSearchStatus = (query, visibleCount) => {
        if (!searchStatus) return;
        if (!query) {
            searchStatus.textContent = '';
            return;
        }
        if (visibleCount === 0) {
            searchStatus.textContent = `No results for "${query}".`;
        } else {
            searchStatus.textContent = `${visibleCount} result${visibleCount === 1 ? '' : 's'} for "${query}".`;
        }
    };

    const applySearchFilter = () => {
        const query = normalize(searchInput?.value);
        if (productCards.length === 0) return;

        if (searchClear) {
            searchClear.hidden = !(searchInput?.value || '').trim();
        }

        let visibleCount = 0;
        productCards.forEach(card => {
            const title = normalize(card.querySelector('.product-card__title')?.textContent);
            const alt = normalize(card.querySelector('img')?.getAttribute('alt'));
            const match = !query || title.includes(query) || alt.includes(query);
            card.classList.toggle('is-hidden', !match);
            if (match) visibleCount += 1;
        });

        updateSearchStatus(searchInput?.value?.trim(), visibleCount);
    };

    const clearSearch = () => {
        if (!searchInput) return;
        searchInput.value = '';
        applySearchFilter();
        searchInput.focus();
    };

    if (searchBtn && searchPanel) {
        searchBtn.addEventListener('click', () => {
            const isOpen = !searchPanel.hidden;
            setSearchPanelOpen(!isOpen);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applySearchFilter);
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                setSearchPanelOpen(false);
                searchBtn?.focus?.();
            }
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', clearSearch);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setSearchPanelOpen(false);
    });

    document.addEventListener('click', (e) => {
        if (!searchPanel || searchPanel.hidden) return;
        const target = e.target;
        const clickedInside = searchPanel.contains(target) || searchBtn?.contains?.(target);
        if (!clickedInside) setSearchPanelOpen(false);
    });

    // --- Add to Cart Event ---
    const detailAddBtn = document.querySelector('.btn-add-to-cart');
    if (detailAddBtn) {
        detailAddBtn.addEventListener('click', () => {
            const qInput = document.querySelector('#quantity');
            const quantity = parseInt(qInput.value) || 1;
            const product = products[productId] || { name: document.querySelector('.product-detail-title').textContent, price: '¥0' };
            const content = currentLang === 'en' && product.en ? product.en : product;
            addToCart({ id: productId || 'custom', name: content.name, quantity, price: product.price });
        });
    }

    updateLanguageUI();
    loadProductData();
    updateCartCount();
    setupDropdowns();
});
