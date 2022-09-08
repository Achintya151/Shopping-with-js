const cartArray = [];

function display(cartProduct) {
    // console.log(cartProduct);

    let totalPrice = 0;

    const tableBody = document.getElementById('cart');
    tableBody.innerHTML = "";

    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(cartArray[i].productName, cartArray[i].productPrice);
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
                <th>${i + 1}</th>
                <td>${name}</td>
                <td>${price}</td>
        `
        tableBody.appendChild(tr);
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `
    tableBody.appendChild(tr);
}

function addToCart(eliment) {
    // console.log(eliment.parentNode.parentNode.children[0].innerText);
    // console.log(eliment.parentNode.parentNode.children[1].children[0].innerText);
    const productName = eliment.parentNode.parentNode.children[0].innerText;
    const productPrice = eliment.parentNode.parentNode.children[1].children[0].innerText;
    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArray.push(productObj);
    // console.log(cartArray);
    document.getElementById('total-added').innerText = cartArray.length;

    display(cartArray);
}