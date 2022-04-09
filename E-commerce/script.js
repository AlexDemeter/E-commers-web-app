let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    if (count == 0) {
        count = 0;
        updateDisplay();
    } else {
        count--;
        updateDisplay();
    }
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

var cart = document.getElementById("cart");
var price = document.getElementById("price").innerHTML;
var priceint = parseInt(price);
var car_cont = document.getElementById("cart-cont");
var list = "";
var cart_count = document.querySelector(".cart-count");

function add_cart() {
    
    var full_price = priceint*count;
    var cont = `    <div class="row cart-top">
        <div class="col quit">
            <p>Cart</p>
            <img src="./images/icon-close.svg" onclick="remove_cartlist()" style="cursor: pointer;">
        </div>
    </div>
    <div class="row info-row">
        <div class="col" style="padding: 0;">
            <img src="./images/image-product-1-thumbnail.jpg" alt="" style="height: 50px;">
        </div>
        <div class="col cart-text"  style="padding: 0; margin-top: 6px;">
            <p>Fall Limited Edition Sneakers</p>
            <p> $${price} X ${count} $${full_price}</p>
        </div>
        <div class="col" style="padding: 0;">
            <img src="./images/icon-delete.svg" alt="" style="cursor: pointer; padding: 0;" onclick="delete_prod()">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <button class="add-btn">Checkout</button>
        </div>
    </div>`;
    if (count !== 0) {
        car_cont.innerHTML = cont;
    } else {
        alert("Adja meg hányat szeretne");
    };
    cart_count.innerHTML = "1";
}

function delete_prod() {
    car_cont.innerHTML = "";
    cart_count.innerHTML = "";
    car_cont.style.display = "none";
}

function list_cart() {
    if (car_cont.innerHTML !== ""){
        car_cont.style.display = "block";
        list = "Active";
    }
};

function remove_cartlist() {
    if(list == "Active"){
        car_cont.style.display = "none";
        list = "";
    }
}
var next_btn = document.getElementById("next");
var prev_btn = document.getElementById("prev");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var actual = document.getElementById("actual");
var imgs = [img1, img2, img3, img4];
var actualimgs = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"]
function next(){
    for (let index = 0; index < imgs.length; index++) {
        if (imgs[index].classList.value == "active"){
            imgs[index+1].classList.value = "active";
            imgs[index].classList.value = "";
            actual.src = actualimgs[index+1];
            break;
        }
        
    }

}
function prev(){
    for (let index = 0; index < imgs.length; index++) {
        if (imgs[index].classList.value == "active"){
            imgs[index-1].classList.value = "active";
            imgs[index].classList.value = "";
            actual.src = actualimgs[index-1];
            break;
        }
        
    }

}
var popupcont = document.querySelector(".popupcont");
function closepop(){
    popupcont.style.display = "none";
}
function openpop(){
    popupcont.style.display = "flex";
}
function menu(){
    document.querySelector(".left-menu-cont").style.display = "flex";
}
function close_menu() {
    document.querySelector(".left-menu-cont").style.display = "none";
}
var display_img = document.querySelector(".product-img");
var now = 0;
function prev_mobile() {
     if (now != 0) {
        display_img.src = actualimgs[now-1];
        now--;
    }
}
function next_mobile() {
    if (now != 3) {
        display_img.src = actualimgs[now+1];
        now++;
    }
}