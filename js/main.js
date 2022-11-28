const ELEMENT = {
    PRODUCT_CARDS: document.querySelector(".product__cards"),
    ADD_PRODUCT_BUTTON: document.querySelector(".product__button")
}

const buttonCondition = {
    add: "В КОРЗИНУ",
    added: "ТОВАР ДОБАВЛЕН В КОРЗИНУ"
}

ELEMENT.PRODUCT_CARDS.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        addProduct(target);
    }
    return;
})

function addProduct(button) {
    button.textContent = buttonCondition.added;
    setTimeout(() => {
        button.textContent = buttonCondition.add;
    }, 2000);
}