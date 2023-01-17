const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu')
const menuHamIcon = document.querySelector ('.menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector ('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');



menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toogleDesktopMenu () {
    console.log ('Click')
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu () {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains ('inactive');  
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
        }
    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}



function toogleCarritoshoppingCartContainer () {
    const ismobileMenuClosed = mobileMenu.classList.contains ('inactive');
    //const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains ('inactive');
    if (!ismobileMenuClosed) {
    mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle ('inactive');
}


function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive')
}

let productList = [] ;
productList.push({
    name: 'Im Nayeon',
    price: 'Nayeon',
    image: 'https://www.k-popmag.com/content/images/size/w1000/2022/09/45550214-5114-4C5B-BBD3-480903A47898.jpeg',
    img: 'https://i.ibb.co/FB7HDrJ/JEONGYEON-LOVELY.png'
});
productList.push({
    name: 'Yoo Jeongyeon',
    price: 'Jeongyeon',
    image: 'https://www.k-popmag.com/content/images/size/w1000/2022/09/5B048170-3FA3-4A71-A652-94E0BBCA820C.jpeg',
});
productList.push({
    name: 'Hirai Momo',
    price: 'Momo',
    image: 'https://0.soompi.io/wp-content/uploads/2022/08/16081058/Momo.jpg',
});
productList.push({
    name: 'Minatosaki Sana',
    price: 'Sana',
    image: 'https://www.allkpop.com/upload/2022/08/content/171119/1660749550-image.png',
});
productList.push({
    name: 'Park Jihyo',
    price: 'Jihyo',
    image: 'https://www.allkpop.com/upload/2022/08/content/171118/1660749536-image.png',
});
productList.push({
    name: 'Myōi Mina',
    price: 'Mina',
    image: 'https://www.allkpop.com/upload/2022/08/content/171119/1660749582-image.png',
});
productList.push({
    name: 'Kim Dahyun',
    price: 'Dahyun',
    image: 'https://www.allkpop.com/upload/2022/08/content/171119/1660749591-image.png',
});
productList.push({
    name: 'Son Chaeyoung',
    price: 'Chaeyoung',
    image: 'https://www.allkpop.com/upload/2022/08/content/171119/1660749561-image.png',
});
productList.push({
    name: 'Choi Tzuyu',
    price: 'Tzuyu',
    image: 'https://www.allkpop.com/upload/2022/08/content/171119/1660749571-image.png',
});

 
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
 // product=name, price, image
    const productImg = document.createElement ('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText =  product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');


    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

renderListProduct(productList);

