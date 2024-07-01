

// ==========  Header Hovering Dragging Styles ============


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

var menuItems = document.querySelectorAll('header .menu li');
menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        var header = document.querySelector('header');
        header.classList.add('hovered');
    });

    item.addEventListener('mouseleave', function() {
        var header = document.querySelector('header');
        header.classList.remove('hovered');
    });
});





// ==========  Header Hamberger Menu Functions ============



let toggleMenu = document.querySelector('header .wrapper .icon');
let menu = document.querySelector('header .wrapper .menu');
let openMenuIcon = document.querySelector('.open-menu');
let closeMenuIcon = document.querySelector('.close-menu');

toggleMenu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
        openMenuIcon.classList.add('hidden');
        closeMenuIcon.classList.remove('hidden');
    } else {
        openMenuIcon.classList.remove('hidden');
        closeMenuIcon.classList.add('hidden');
    }
});




// ========== Shop Section Mapping ============


document.addEventListener('DOMContentLoaded', function() {
    const shopItems = [
        {
            id: 1,
            img: "./assets/images/Immunity.avif",
            title: "IMMUNITY Zzzs",
            plainTitle: "ELDERBERRY",
            description: "Immune Support",
            buttonText: "SHOP",
        },
        {
            id: 2,
            img: "./assets/images/DayQuil.avif",
            title: "DAYQUIL & NYQUIL",
            plainTitle: "HONEY FLAVOR",
            description: "Cold & Flu",
            buttonText: "SHOP",
        },
        {
            id: 3,
            img: "./assets/images/sinex.avif",
            title: "SINEX",
            plainTitle: "SALINE",
            description: "sinus",
            buttonText: "SHOP",
        },
        {
            id: 4,
            img: "./assets/images/Immunity.avif",
            title: "IMMUNITY Zzzs",
            plainTitle: "ELDERBERRY",
            description: "Immune Support",
            buttonText: "SHOP",
        },
        {
            id: 5,
            img: "./assets/images/DayQuil.avif",
            title: "DAYQUIL & NYQUIL",
            plainTitle: "HONEY FLAVOR",
            description: "Cold & Flu",
            buttonText: "SHOP",
        },
        {
            id: 6,
            img: "./assets/images/sinex.avif",
            title: "SINEX",
            plainTitle: "SALINE",
            description: "sinus",
            buttonText: "SHOP",
        }
    ];

    const myContent = document.querySelector(".myContent");

    const showInHtml = shopItems.map((shopItem, index) => {
       return `
            <li class="item">
                <div class="image-container">
                    <img src=${shopItem.img} alt="immunity-image" />
                </div>
                <div class="details">
                    <h3  id=""bold" class="bold">${shopItem.title}</h3>
                    <h4 class="plain">${shopItem.plainTitle}</h4>
                    <h5 class="description">${shopItem.description}</h5>
                    <a class="button shop-button" id="shopButton-${index}">${shopItem.buttonText}</a>

                </div>
            </li>
       `;
    }).join("");

    myContent.innerHTML = showInHtml;


});




// ========== Shop Section Modal Function ============



document.addEventListener('DOMContentLoaded', function() {
    const shopItems = [
        {
            id: 1,
            img: "./assets/images/Immunity.avif",
            title: "IMMUNITY Zzzs",
            plainTitle: "ELDERBERRY",
            description: "Immune Support",
            buttonText: "SHOP",
        },
        {
            id: 2,
            img: "./assets/images/DayQuil.avif",
            title: "DAYQUIL & NYQUIL",
            plainTitle: "HONEY FLAVOR",
            description: "Cold & Flu",
            buttonText: "SHOP",
        },
        {
            id: 3,
            img: "./assets/images/sinex.avif",
            title: "SINEX",
            plainTitle: "SALINE",
            description: "sinus",
            buttonText: "SHOP",
        },
        {
            id: 4,
            img: "./assets/images/Immunity.avif",
            title: "IMMUNITY Zzzs",
            plainTitle: "ELDERBERRY",
            description: "Immune Support",
            buttonText: "SHOP",
        },
        {
            id: 5,
            img: "./assets/images/DayQuil.avif",
            title: "DAYQUIL & NYQUIL",
            plainTitle: "HONEY FLAVOR",
            description: "Cold & Flu",
            buttonText: "SHOP",
        },
        {
            id: 6,
            img: "./assets/images/sinex.avif",
            title: "SINEX",
            plainTitle: "SALINE",
            description: "sinus",
            buttonText: "SHOP",
        }
    ];

    const myContent = document.querySelector(".myContent");
    const modal = document.getElementById("modal-div");
    const close = document.getElementById("btn-close");

    if (myContent) {
        myContent.addEventListener("click", function(event) {
            const target = event.target;
            if (target.classList.contains("shop-button")) {
                const buttonId = target.id;
                const index = buttonId.split("-")[1];
                const selectedItem = shopItems[index];
                const modalContainer = modal.querySelector(".modal-container");
                modalContainer.innerHTML = `

                <div class="modal-content">
                    <div class="top">
                        <img src="${selectedItem.img}" alt="Product Image">
                    </div>
                    <div class="details">
                        <h3 class="bold">${selectedItem.title}</h3>
                        <h4 class="plain">${selectedItem.plainTitle}</h4>
                        <h5 class="description">${selectedItem.description}</h5>
                        <button class="btn" id="btn-close">Close</button>
                    </div>
                </div>
                
                `;
                modal.style.display = "flex";
                document.body.style.overflow = "hidden"; 
            }
        });
    } else {
        console.error(".myContent not found");
    }

    modal.addEventListener("click", function(event) {
        if (event.target.id === "btn-close") {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; 
        }
    });
        
});




// ========== Shop Section Slider Function ============



document.addEventListener('DOMContentLoaded', function() {
    const shopLeftArrow = document.querySelector('#shop .wrapper .bottom i:first-child');
    const shopRightArrow = document.querySelector('#shop .wrapper .bottom i:last-child');
    const shopItems = document.querySelector('#shop .wrapper .bottom .items');

    let isDragging = false;
    let startX;
    let scrollLeft;

    const scrollAmount = 450;

    function scrollShopItems(direction) {
        if (direction === 'left') {
            shopItems.scrollLeft -= scrollAmount;
        } else if (direction === 'right') {
            shopItems.scrollLeft += scrollAmount;
        }
    }

    shopLeftArrow.addEventListener('click', function() {
        scrollShopItems('left');
    });

    shopRightArrow.addEventListener('click', function() {
        scrollShopItems('right');
    });

    shopItems.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - shopItems.offsetLeft;
        scrollLeft = shopItems.scrollLeft;
    });

    shopItems.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    shopItems.addEventListener('mouseup', () => {
        isDragging = false;
    });

    shopItems.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - shopItems.offsetLeft;
        const walk = (x - startX) * 1; 
        shopItems.scrollLeft = scrollLeft - walk;
    });
});




// ========== Shop Section Search Function ============



document.addEventListener('DOMContentLoaded', function() {
    function searchShopItems() {
        const searchInput = document.querySelector('#shop .search');
        const items = document.querySelectorAll('#shop .item');
        const outputMessage = document.createElement('p');

        outputMessage.textContent = "Sorry, we don't have any product with this query";
        outputMessage.style.color = 'red';
        outputMessage.style.fontWeight = 700;
        outputMessage.style.fontSize = '24px';
        outputMessage.style.padding = '10% 25%';
        outputMessage.style.display = 'none';
        outputMessage.style.textAlign = 'center';


        const leftBtn = document.getElementById('left-btn');
        const rightBtn = document.getElementById('right-btn');

        const bottomSection = document.querySelector('#shop .bottom');
        bottomSection.appendChild(outputMessage);

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            let found = false;

            items.forEach(item => {
                const title = item.querySelector('.details h3').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    item.style.display = 'block';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (!found) {
                outputMessage.style.display = 'block';
                leftBtn.style.display = 'none';
                rightBtn.style.display = 'none';
            } else {
                outputMessage.style.display = 'none';
                leftBtn.style.display = 'inline';
                rightBtn.style.display = 'inline';
            }
        });
    }

    searchShopItems();
});




// ========== Find Section Mapping ============



document.addEventListener('DOMContentLoaded', function() {
    const findItems = [
        {
            id: 1,
            img: "./assets/images/nquil.avif",
            title: "NyQuil"
        },
        {
            id: 2,
            img: "./assets/images/cold.avif",
            title: "DayQuil"
        },
        {
            id: 3,
            img: "./assets/images/vapo.avif",
            title: "Vicks Vapo"
        },
        {
            id: 4,
            img: "./assets/images/sinexse.avif",
            title: "Sinex"
        },
        {
            id: 5,
            img: "./assets/images/vapocool.avif",
            title: "vapoCOOL"
        },
        {
            id: 6,
            img: "./assets/images/cough.avif",
            title: "Vicks"
        },
        {
            id: 7,
            img: "./assets/images/flu.avif",
            title: "FluTherapy"
        }
    ];

    const findContent = document.querySelector(".findContent");

    const showInHtml = findItems.map((findItem, index) => {
       return `
            <li class="card">
                <div class="img-con">
                    <img src="${findItem.img}" draggable="false" alt="flu-image" />
                </div>
                <h3 class="bold">${findItem.title}</h3>
            </li>
       `;
    }).join("");

    findContent.innerHTML = showInHtml;
});



// ========== Find Section Slider Function ============



document.addEventListener('DOMContentLoaded', function() {
    const findLeftArrow = document.querySelector('#find .wrapper .bottom i:first-child');
    const findRightArrow = document.querySelector('#find .wrapper .bottom i:last-child');
    const findCarousel = document.querySelector('#find .wrapper .bottom .carousel');
    
    let isDragging = false;
    let startX;
    let scrollLeft;
    
    const scrollAmount = 300;
    
    function scrollFindCarousel(direction) {
        if (direction === 'left') {
            findCarousel.scrollLeft -= scrollAmount;
        } else if (direction === 'right') {
            findCarousel.scrollLeft += scrollAmount;
        }
    }
    
    findLeftArrow.addEventListener('click', function() {
        scrollFindCarousel('left');
    });
    
    findRightArrow.addEventListener('click', function() {
        scrollFindCarousel('right');
    });

    findCarousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - findCarousel.offsetLeft;
        scrollLeft = findCarousel.scrollLeft;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - findCarousel.offsetLeft;
        const walk = (x - startX) * 1; 
        findCarousel.scrollLeft = scrollLeft - walk;
    });
});




// ========== Find Section Search Function ============



document.addEventListener('DOMContentLoaded', function() {
    function searchFindItems() {
        const searchInput = document.querySelector('#find .search');
        const items = document.querySelectorAll('#find .card');
        const outputMessage = document.createElement('p');

        outputMessage.textContent = "Sorry, we don't have any product with this query";
        outputMessage.style.color = 'red';
        outputMessage.style.fontWeight = 700;
        outputMessage.style.fontSize = '24px';
        outputMessage.style.padding = '10% 25%';
        outputMessage.style.display = 'none';
        outputMessage.style.textAlign = 'center';

        const leftBtn = document.getElementById('left');
        const rightBtn = document.getElementById('right');
        
        const bottomSection = document.querySelector('#find .bottom');
        bottomSection.appendChild(outputMessage);

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            let found = false;

            items.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    item.style.display = 'block';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (!found) {
                outputMessage.style.display = 'block';
                leftBtn.style.display = 'none';
                rightBtn.style.display = 'none';
            } else {
                outputMessage.style.display = 'none';
                leftBtn.style.display = 'inline';
                rightBtn.style.display = 'inline';
            }
        });
    }

    searchFindItems();
});








// JavaScript for smooth auto-sliding
let currentIndex = 0; 
const slides = document.querySelectorAll('.bnContainer > .bnItem'); 
const totalSlides = slides.length;
const intervalTime = 2000; 
const transitionTime = 1000; 

function showSlide(index) {
    
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; 
    }
    showSlide(currentIndex);
}


let slideInterval = setInterval(nextSlide, intervalTime);


document.getElementById('banner').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});


document.getElementById('banner').addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, intervalTime);
});


showSlide(currentIndex);