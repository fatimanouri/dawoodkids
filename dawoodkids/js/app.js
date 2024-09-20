const search_icons = document.querySelectorAll(".search-icon ");
const animated_text_element = document.querySelector(".animated-text");
const position_change_btn = document.querySelector(".position_change_btn");
const shop_basket_btns = document.querySelectorAll(".shop-basket-btn");
const header_menu_third_item = document.querySelector("#header-1 .header-menu-item:nth-child(3)>.header-menu-item-link");
const menu_icon_btn = document.querySelector("#header-1 .menu-icon-btn");
const close_icon = document.querySelector("#header-1 .close-icon");

document.addEventListener("click",(event)=>{
    const composedPath = event.composedPath();
    const menu = document.querySelector("#header-1 .responsive-header-menu-wrapper");
    const menu_wrapper = document.querySelector("#header-1 .header-menu-container");
    const shopping_card_wrapper_header_one = document.querySelector("#header-1 .selected-products-wrapper");
    const shopping_card_wrapper_header_two = document.querySelector("#header-2 .selected-products-wrapper");
    const shopping_card_header_one = document.querySelector("#header-1 .selected-products");
    const shopping_card_header_two = document.querySelector("#header-2 .selected-products");
    const search_box_header_one = document.querySelector("#header-1 .search-container");
    const search_box_header_two = document.querySelector("#header-2 .search-container");

    //close responsive menu in header section if menu_wrapper is clicked
    if(!(composedPath.includes(menu)) && composedPath.includes(menu_wrapper)){
        menu_wrapper.classList.remove("active");
        menu.classList.remove("active");
        document.body.style.overflow = "auto";
    }
    //Close the shopping_cart_header_one if shopping_card_wrapper_header_one is clicked
    if(composedPath.includes(shopping_card_wrapper_header_one) && !composedPath.includes(shopping_card_header_one)){
        shopping_card_wrapper_header_one.classList.remove("active");
        document.body.style.overflow ="auto";
    }
    //Close the shopping_cart_header_two if shopping_card_wrapper_header_two is clicked
    if(composedPath.includes(shopping_card_wrapper_header_two) && !composedPath.includes(shopping_card_header_two)){
        shopping_card_wrapper_header_two.classList.remove("active");
        document.body.style.overflow ="auto";
    }
    //Close the search-container if any element except the search-container is clicked
    if(!composedPath.includes(search_box_header_one) && !composedPath.includes(search_box_header_two)){
        document.querySelector(`#header-1 .search-container`).classList.remove("active");
        document.querySelector(`#header-2 .search-container`).classList.remove("active");
    }
})
// open or close search box with search button 
search_icons.forEach((search_icon,index)=>{
    search_icon.addEventListener("click",()=>{
        document.querySelector(`#header-${index+1} .search-container`).classList.toggle("active");
    })
})
//Show the shopping cart if its button is clicked
shop_basket_btns.forEach((shop_basket_btn,index)=>{
    shop_basket_btn.addEventListener("click",()=>{
        document.querySelector(`#header-${index+1} .selected-products-wrapper`).classList.add("active");
        document.body.style.overflow ="hidden";
    })
})
//rotate the right icon of the third item of the header-menu and open or close the sub-menu in responsive mode
header_menu_third_item.addEventListener("click",()=>{
    document.querySelector("#header-1 .sub-menu").classList.toggle("active");
    document.querySelector("#header-1 .header-menu-third-item-right-icon").classList.toggle("active");
})
//close responsive menu in header section 
close_icon.addEventListener("click",()=>{
    document.querySelector("#header-1 .header-menu-container ").classList.remove("active");
    document.querySelector("#header-1 .responsive-header-menu-wrapper").classList.remove("active");
    document.body.style.overflow = "auto";
})
//open responsive menu in header section 
menu_icon_btn.addEventListener("click",()=>{
    document.querySelector("#header-1 .header-menu-container").classList.add("active");
    document.querySelector("#header-1 .responsive-header-menu-wrapper").classList.add("active");
    document.body.style.overflow = "hidden";
})
window.addEventListener("scroll",()=>{
    // specifying right position of position changing button
    if(scrollY>600){
        position_change_btn.style.right = "20px";
    }else{
        position_change_btn.style.right = "-60px";
    }
    //show header-two if scrollY greater than 80 otherwise show header-one 
    if(scrollY>80){
        document.getElementById("header-2").classList.add("active-header");
      
    }else{
        document.getElementById("header-2").classList.remove("active-header")
    }
})
// go to coordinate (0,0) 
position_change_btn.addEventListener("click",(event)=>{
    scrollTo({
        top: 0,
        left: 0,
      });
})
//typing text with animation in footer section
let text = "Exchange & Return Policy";
let i = 0;
var speed = 150;
function typeWriter() {
    if (i < text.length) {
        if(i==0){
            animated_text_element.innerHTML = "";
            animated_text_element.style.color = "#d868a3";
        }
        animated_text_element.innerHTML += text[i];
        i++;
        setTimeout(typeWriter, speed);
    }else if(i==text.length){
        i=0;
        animated_text_element.style.color = "#fff";
        setTimeout(typeWriter, 1000);
    }
  }
window.addEventListener("load" ,typeWriter)
