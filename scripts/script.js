const button = document.getElementById("main-action-button")
const products = document.getElementById("products")
const order = document.getElementById("order")

const formOrder = document.getElementById("form-order")
const formName = document.getElementById("form-name")
const formPhone = document.getElementById("form-phone")
const formBtn = document.getElementById("form-btn")

const change = document.getElementById("change-currency")

button.addEventListener('click', () => {
    products.scrollIntoView()
})

let buttons = document.getElementsByClassName("order-btn")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        order.scrollIntoView()
    }
}

formBtn.onclick = function () {
    let hasError = false;
    [formName, formOrder, formPhone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red'
            hasError = true
        } else {
            item.parentElement.style.background = ''
        }
    })
    if (!hasError) {
        [formName, formOrder, formPhone].forEach(item => {
            item.value = ''
        })
        alert('Спасибо за заказ!')
    }
}

const prices = document.getElementsByClassName('price');

change.onclick = function (e) {
    let currentCurrency = e.target.innerText
    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 80;
    } else if (currentCurrency === '₽') {
        newCurrency = 'Br';
        coefficient = 3.5;
    } else if (currentCurrency === 'Br') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    else if (currentCurrency === '¥') {
        newCurrency = '₩';
        coefficient = 1335;
    }
    e.target.innerText = newCurrency
    for (let i=0; i<prices.length; i++){
        prices[i].innerText = +(prices[i].getAttribute('data-base-price')*coefficient).toFixed(1) + ' ' + newCurrency
    }
}

