/* =========================================
   CUTE FIND PK
   ORDER + PRODUCT GALLERY
========================================= */


/* =========================================
   SETTINGS
========================================= */

// IMPORTANT:
// Yahan apna WhatsApp number likho.
// Pakistan number 923XXXXXXXXX format mein.
//
// Example:
// const WHATSAPP_NUMBER = "923001234567";

const WHATSAPP_NUMBER = "923701242507";

const PRODUCT_NAME = "Black Clover Jewellery Set";

const PRODUCT_PRICE = 1199;


/* =========================================
   ELEMENTS
========================================= */

const mainProductImage =
    document.getElementById("mainProductImage");

const thumbnails =
    document.querySelectorAll(".thumbnail");

const prevImage =
    document.getElementById("prevImage");

const nextImage =
    document.getElementById("nextImage");


const minusBtn =
    document.getElementById("minusBtn");

const plusBtn =
    document.getElementById("plusBtn");

const quantityInput =
    document.getElementById("quantity");

const summaryQuantity =
    document.getElementById("summaryQuantity");

const totalPrice =
    document.getElementById("totalPrice");

const orderForm =
    document.getElementById("orderForm");


/* =========================================
   PRODUCT IMAGES
========================================= */

const productImages = [

    "images/product-main.png",

    "images/product-closeup.png",

    "images/product-wearing.png",

    "images/product-set.png"

];

let currentImageIndex = 0;


/* =========================================
   CHANGE IMAGE
========================================= */

function changeImage(index) {

    if (index < 0) {

        index = productImages.length - 1;

    }

    if (index >= productImages.length) {

        index = 0;

    }

    currentImageIndex = index;

    mainProductImage.style.opacity = "0.3";

    setTimeout(() => {

        mainProductImage.src =
            productImages[currentImageIndex];

        mainProductImage.style.opacity = "1";

    }, 100);


    thumbnails.forEach((thumbnail, i) => {

        thumbnail.classList.toggle(
            "active",
            i === currentImageIndex
        );

    });

}


/* =========================================
   THUMBNAIL CLICK
========================================= */

thumbnails.forEach((thumbnail, index) => {

    thumbnail.addEventListener("click", () => {

        changeImage(index);

    });

});


/* =========================================
   PREVIOUS IMAGE
========================================= */

prevImage.addEventListener("click", () => {

    changeImage(currentImageIndex - 1);

});


/* =========================================
   NEXT IMAGE
========================================= */

nextImage.addEventListener("click", () => {

    changeImage(currentImageIndex + 1);

});


/* =========================================
   QUANTITY
========================================= */

function updateQuantity() {

    let quantity =
        parseInt(quantityInput.value);


    if (quantity < 1) {

        quantity = 1;

    }


    if (quantity > 10) {

        quantity = 10;

    }


    quantityInput.value = quantity;

    summaryQuantity.textContent = quantity;


    const total =
        PRODUCT_PRICE * quantity;


    totalPrice.textContent =
        "Rs. " + total.toLocaleString("en-PK");

}


/* =========================================
   MINUS
========================================= */

minusBtn.addEventListener("click", () => {

    let quantity =
        parseInt(quantityInput.value);


    if (quantity > 1) {

        quantity--;

        quantityInput.value =
            quantity;

        updateQuantity();

    }

});


/* =========================================
   PLUS
========================================= */

plusBtn.addEventListener("click", () => {

    let quantity =
        parseInt(quantityInput.value);


    if (quantity < 10) {

        quantity++;

        quantityInput.value =
            quantity;

        updateQuantity();

    }

});


/* =========================================
   PHONE VALIDATION
========================================= */

function isValidPakistanPhone(phone) {

    const cleaned =
        phone.replace(/[\s\-]/g, "");


    const pattern =
        /^(03\d{9}|923\d{9}|\+923\d{9})$/;


    return pattern.test(cleaned);

}


/* =========================================
   WHATSAPP ORDER
========================================= */

orderForm.addEventListener("submit", function(event) {

    event.preventDefault();


    /* -------------------------------------
       GET VALUES
    ------------------------------------- */

    const name =
        document.getElementById("name").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const city =
        document.getElementById("city").value.trim();


    const area =
        document.getElementById("area").value.trim();


    const house =
        document.getElementById("house").value.trim();


    const street =
        document.getElementById("street").value.trim();


    const landmark =
        document.getElementById("landmark").value.trim();


    const address =
        document.getElementById("address").value.trim();


    const note =
        document.getElementById("note").value.trim();


    const quantity =
        parseInt(quantityInput.value);


    const total =
        PRODUCT_PRICE * quantity;


    /* -------------------------------------
       VALIDATION
    ------------------------------------- */

    if (!name) {

        alert("Please enter your full name.");

        return;

    }


    if (!isValidPakistanPhone(phone)) {

        alert(
            "Please enter a valid Pakistani mobile number.\n\nExample: 03001234567"
        );

        return;

    }


    if (!city) {

        alert("Please enter your city.");

        return;

    }


    if (!area) {

        alert("Please enter your area/locality.");

        return;

    }


    if (!house) {

        alert(
            "Please enter your house / flat / shop number."
        );

        return;

    }


    if (!street) {

        alert("Please enter your street / road.");

        return;

    }


    if (!address) {

        alert(
            "Please enter your complete address."
        );

        return;

    }


    /* -------------------------------------
       CHECK WHATSAPP NUMBER
    ------------------------------------- */

    if (
        WHATSAPP_NUMBER ===
        "YOUR_WHATSAPP_NUMBER"
    ) {

        alert(
            "Please add your WhatsApp number inside script.js first."
        );

        return;

    }


    /* -------------------------------------
       ORDER MESSAGE
    ------------------------------------- */

    const message = `🛍️ NEW ORDER - CUTE FIND PK

━━━━━━━━━━━━━━━━━━

PRODUCT

━━━━━━━━━━━━━━━━━━

Product: ${PRODUCT_NAME}

Quantity: ${quantity}

Total: Rs. ${total.toLocaleString("en-PK")}


━━━━━━━━━━━━━━━━━━

CUSTOMER INFORMATION

━━━━━━━━━━━━━━━━━━

Full Name: ${name}

Mobile Number: ${phone}


━━━━━━━━━━━━━━━━━━

DELIVERY ADDRESS

━━━━━━━━━━━━━━━━━━

City: ${city}

Area / Locality: ${area}

House / Flat / Shop No: ${house}

Street / Road: ${street}

Nearest Landmark: ${landmark || "Not provided"}


Complete Address:

${address}


━━━━━━━━━━━━━━━━━━

ORDER NOTE

━━━━━━━━━━━━━━━━━━

${note || "No additional note"}


━━━━━━━━━━━━━━━━━━

Payment Method: Cash on Delivery

Please confirm this order.`;


/* -------------------------------------
   OPEN WHATSAPP
------------------------------------- */

const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);


window.open(
    whatsappURL,
    "_blank"
);

});


/* =========================================
   AUTO SLIDE
========================================= */

let autoSlide = setInterval(() => {

    changeImage(currentImageIndex + 1);

}, 3000);