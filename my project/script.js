```javascript
// ===============================
// CART
// ===============================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "ADDED ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1200);

    });

});


// ===============================
// SEARCH
// ===============================

const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function() {

    searchContainer.classList.toggle("active");

    if (searchContainer.classList.contains("active")) {
        searchInput.focus();
    }

});


searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product.dataset.name.toLowerCase();

        const brand =
            product.dataset.brand.toLowerCase();

        if (
            productName.includes(searchValue) ||
            brand.includes(searchValue)
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});


// ===============================
// BRAND FILTER
// ===============================

const brandButtons =
    document.querySelectorAll(".brand-btn");

brandButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedBrand =
            button.dataset.brand;

        brandButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const products =
            document.querySelectorAll(".product-card");

        products.forEach(function(product) {

            const productBrand =
                product.dataset.brand;

            if (
                selectedBrand === "all" ||
                productBrand === selectedBrand
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

});


// ===============================
// SORT PRODUCTS
// ===============================

const sortProducts =
    document.getElementById("sortProducts");

sortProducts.addEventListener("change", function() {

    const selectedSort = sortProducts.value;

    const productGrid =
        document.getElementById("productsGrid");

    const products =
        Array.from(
            document.querySelectorAll(".product-card")
        );

    if (selectedSort === "low") {

        products.sort(function(a, b) {

            return (
                Number(a.dataset.price) -
                Number(b.dataset.price)
            );

        });

    }

    if (selectedSort === "high") {

        products.sort(function(a, b) {

            return (
                Number(b.dataset.price) -
                Number(a.dataset.price)
            );

        });

    }

    products.forEach(function(product) {
        productGrid.appendChild(product);
    });

});


// ===============================
// NEWSLETTER
// ===============================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for subscribing to STYLEHUB!"
    );

    newsletterForm.reset();

});


// ===============================
// SHOP NOW
// ===============================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ===============================
// CART BUTTON
// ===============================

document
    .getElementById("cartBtn")
    .addEventListener("click", function() {

        if (cartCount === 0) {

            alert("Your cart is empty.");

        } else {

            alert(
                "You have " +
                cartCount +
                " item(s) in your cart."
            );

        }

    }
```
