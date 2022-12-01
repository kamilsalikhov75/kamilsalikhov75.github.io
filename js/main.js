const ELEMENT = {
    PRODUCT_CARDS: document.querySelector(".product__cards"),
    ADD_PRODUCT_BUTTON: document.querySelector(".product__button"),
    ADD_PRODUCT_BUTTONS: document.querySelectorAll(".product__button"),
    BURGER_MENU_BUTTON: document.querySelector(".header__burger-button"),
    BURGER_MENU_ICON: document.querySelector(".header__burger-button i"),
    BURGER_MENU: document.querySelector(".header__burger-menu"),
    PRODUCTS: document.querySelectorAll(".product")
};

const burgerIcon = {
    bars: "fa-solid fa-bars",
    xMark: "fa-solid fa-xmark"
};

const buttonCondition = {
    add: "В КОРЗИНУ",
    added: "ТОВАР ДОБАВЛЕН В КОРЗИНУ"
};

window.addEventListener("load", () => {
    const width = window.innerWidth;
    if (width <= 1200) {
        ELEMENT.PRODUCTS[3].classList.add("product--disabled");
        ELEMENT.ADD_PRODUCT_BUTTONS.forEach(button => {
            button.classList.add("product__button--active");
        });
    } else if (width > 1200) {
        ELEMENT.PRODUCTS[3].classList.remove("product--disabled");
        ELEMENT.ADD_PRODUCT_BUTTONS.forEach(button => {
            button.classList.remove("product__button--active");
        });
    }
    if (width <= 1000) {
        ELEMENT.PRODUCTS[2].classList.add("product--disabled");
    } else if (width > 1000) {
        ELEMENT.PRODUCTS[2].classList.remove("product--disabled");
    }
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width <= 1200) {
        ELEMENT.PRODUCTS[3].classList.add("product--disabled");
        ELEMENT.ADD_PRODUCT_BUTTONS.forEach(button => {
            button.classList.add("product__button--active");
        });
    } else if (width > 1200) {
        ELEMENT.PRODUCTS[3].classList.remove("product--disabled");
        ELEMENT.ADD_PRODUCT_BUTTONS.forEach(button => {
            button.classList.remove("product__button--active");
        });
    }

    if (width <= 1000) {
        ELEMENT.PRODUCTS[2].classList.add("product--disabled");
    } else if (width > 1000) {
        ELEMENT.PRODUCTS[2].classList.remove("product--disabled");
    }
});

ELEMENT.PRODUCT_CARDS.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        addProduct(target);
    }
    return;
});

ELEMENT.BURGER_MENU_BUTTON.addEventListener("click", burgerButton);

function burgerButton() {
    const burgerIconClass = ELEMENT.BURGER_MENU_ICON.classList.toString();

    if (burgerIconClass === burgerIcon.bars) {
        ELEMENT.BURGER_MENU_ICON.classList = burgerIcon.xMark;
        ELEMENT.BURGER_MENU.classList.add("header__burger-menu--active");
    } else {
        ELEMENT.BURGER_MENU_ICON.classList = burgerIcon.bars;
        ELEMENT.BURGER_MENU.classList.remove("header__burger-menu--active");
    }
}

function addProduct(button) {
    button.textContent = buttonCondition.added;
    setTimeout(() => {
        button.textContent = buttonCondition.add;
    }, 2000);
}