document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Массив с товарами
    const products = [
        {
            name: 'Букет с голубой гортензией',
            price: 5500,
            description: 'Нежная композиция с голубой гортензией',
            image: 'images/bouquet-with-blue-hydrangea.jpg',
            category: 'bouquet'
        },
        {
            name: 'Букет с кустовой хризантемой',
            price: 4200,
            description: 'Очаровательный букет с кустовой хризантемой',
            image: 'images/bouquet-with-chrysanthemum.jpg',
            category: 'bouquet'
        },
        {
            name: 'Коробка «Любимой мамочке»',
            price: 5500,
            description: 'Коробка с французскими розами для любимой мамы',
            image: 'images/box-for-mom-with-french-roses.jpg',
            category: 'box'
        },
        {
            name: 'Фото к букету',
            price: 3800,
            description: 'Изысканная цветочная композиция',
            image: 'images/bouquet-photo.jpg',
            category: 'bouquet'
        },
        {
            name: 'Французская роза',
            price: 4800,
            description: 'Элегантный букет из французских роз',
            image: 'images/french-rose.jpg',
            category: 'bouquet'
        },
        {
            name: 'Коробка с французской розой',
            price: 5200,
            description: 'Коробка с французской розой в ярко-красном цвете',
            image: 'images/red-french-rose-box.jpg',
            category: 'box'
        },
        {
            name: 'Букет из гипсофилы',
            price: 3500,
            description: 'Воздушный букет из нежной гипсофилы',
            image: 'images/gypsophila-bouquet.jpg',
            category: 'bouquet'
        }
    ];

    // Функция для отображения продуктов
    function displayProducts(productsToShow) {
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            productsGrid.innerHTML = '';
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        ${product.category === 'box' ? '<span class="product-badge">Коробка</span>' : ''}
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-footer">
                            <p class="price">${product.price} ₽</p>
                            <a href="https://wa.me/79533207897?text=Здравствуйте! Хочу заказать букет '${product.name}'" 
                               class="order-button" target="_blank">
                                <i class="fab fa-whatsapp"></i> Быстрый заказ
                            </a>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
        }
    }

    // Функция для заказа товара
    function orderProduct(productName) {
        alert(`Спасибо за заказ букета "${productName}"! Мы свяжемся с вами в ближайшее время.`);
    }

    // Инициализация при загрузке страницы
    displayProducts(products);

    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });
});
