var swiper = new Swiper(".banner", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
var swiper2 = new Swiper(".products", {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: "1",
            spaceBetween: 0,
        },
        480: {
            slidesPerView: "2",
            spaceBetween: 0,
        },
        768: {
            slidesPerView: "3",
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: "3",

        },

        1241: {
            slidesPerView: "4",

        },

    }
});
var swiper3 = new Swiper(".partner__list", {
    slidesPerView: 7,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: "2",
            spaceBetween: 10,
        },
        480: {
            slidesPerView: "4",
            spaceBetween: 10,
        },
        1025: {
            slidesPerView: "5",
            spaceBetween: 10,
        },

        1400: {
            slidesPerView: "7",
            spaceBetween: 20,
        },
    },

});
var swiper4 = new Swiper(".working-with-us__partners", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: "1",
            spaceBetween: 10,
        },
        375: {
            slidesPerView: "2",
            spaceBetween: 10,
        },
        601: {
            slidesPerView: "3",
            spaceBetween: 10,
        },
        769: {
            slidesPerView: "4",
            spaceBetween: 20,
        },

    },
});
if(document.querySelector('.portfolio__list')){
if(document.querySelector('.portfolio__list').classList.contains('swiper')){
    var swiper5 = new Swiper(".portfolio__list", {

        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
}
const swiper6 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    allowTouchMove: false // Keeps the layout static
});
var swiper7 = new Swiper(".mySwiper3", {
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper8 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    thumbs: {
        swiper: swiper7,
    },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let tab = document.querySelectorAll('.tab__item');
tab.forEach((button)=>{
    button.addEventListener('click', () =>{
        tab.forEach((item) =>{
            item.classList.remove('tab__item--active');
        })
        button.classList.add('tab__item--active');
        if(button.classList.contains('tab__item--yes')){
            if( document.querySelector('.form__row--yes')){
                document.querySelector('.form__row--yes').style.display = 'block';
            }

        } else {
            if( document.querySelector('.form__row--yes')) {
                document.querySelector('.form__row--yes').style.display = 'none';
            }

        }

        if(button.dataset.tab !== ''){
            console.log(button.dataset.tab)
            document.querySelector('.registration__form').style.display = 'none';
            document.querySelector('.registration__form--individual').style.display = 'none';
            document.querySelector('.registration__form--corporate').style.display = 'none';
            document.getElementById(button.dataset.tab).style.display = 'block'
        }

    });
})
const uploadBtn = document.querySelector('.custom__upload');
const fileInput = document.getElementById('file');
const uploadBtn1 = document.getElementById('custom-file');

if(uploadBtn){
    uploadBtn.addEventListener('click', () => {
        fileInput.click(); // Trigger native file picker
    });
}
if(uploadBtn1){
    uploadBtn1.addEventListener('click', () => {
        fileInput.click(); // Trigger native file picker
    });
}



var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

const showMore = document.querySelector(".btn__show-more");

if(showMore){
    showMore.addEventListener("click", (e) => {
        const parent = showMore.closest('.filter__content--more'); // or .banner__right
        if (parent.classList.contains('open')) {
            parent.classList.remove('open');
            const dataMore = showMore.getAttribute('data-more');
            showMore.textContent = dataMore;

        } else {
            parent.classList.add('open');

            const dataLess = showMore.getAttribute('data-less');
            showMore.textContent = dataLess;
        }

    });
}
const delivery = document.getElementById('delivery');
const deliveryFile = document.getElementById('delivery-file');

if(delivery){
    delivery.addEventListener('click', () => {
        checkCheckbox('delivery')
    })
}
if(deliveryFile) {
    deliveryFile.addEventListener('click', () => {
        checkCheckbox('delivery-file')
    })
}
function checkCheckbox(id) {
    // Get the checkbox
    var checkBox = document.getElementById(id);
    // Get the output text
    var divAddress = document.querySelector(".form__row--address");
    var divAddressCorp = document.querySelector("#corporate .form__row--address");
    var divFile = document.querySelector(".form__row--file");

    // If the checkbox is checked, display the output text
    if (checkBox.checked === true){
        divAddress.style.display = "block";
        if(divFile){
            divAddressCorp.style.display = "block";
            divFile.style.display = "block";
        }
    } else {
        divAddress.style.display = "none";
        if(divFile){
            divAddress.style.display = "none";
            divFile.style.display = "none";

        }
    }
}
const modalRequest = document.getElementById("request-modal");
const modalRequest1 = document.getElementById("request-product-modal");
const modalRequest2 = document.getElementById("tx-modal");
const openRequest = document.querySelectorAll(".btn__request");
const openRequest1 = document.querySelectorAll(".btn__product-request");
const openRequest2 = document.querySelectorAll(".btn__tx");
const closeBtn = document.querySelectorAll(".btn__close");


if (openRequest){

    openRequest.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            modalRequest.style.display = "flex";
        });
    })


}
if (openRequest1){

    openRequest1.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            modalRequest1.style.display = "flex";
        });
    })


}
if (openRequest2){

    openRequest2.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            modalRequest2.style.display = "flex";
        });
    })


}
if(closeBtn){
    closeBtn.forEach(button => {

        button.addEventListener("click", () => {
            if (modalRequest){
                modalRequest.style.display = "none";
            }
            if (modalRequest1){
                modalRequest1.style.display = "none";
            }
            if (modalRequest2){
                modalRequest2.style.display = "none";
            }
        });
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalRequest) {
        modalRequest.style.display = "none";

    }
    if (event.target === modalRequest1) {
        modalRequest1.style.display = "none";

    }
    if (event.target === modalRequest2) {
        modalRequest2.style.display = "none";

    }
});

const btnSearch = document.querySelector('.btn__search');
const inputSearch = document.querySelector('.search__input');

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    if(btnSearch.classList.contains('open')){
        inputSearch.classList.remove('open');
        btnSearch.classList.remove('open');

    } else {
        inputSearch.classList.add('open');
        btnSearch.classList.add('open');
    }
})

const menu__btn = document.querySelector(".mobile__btn");
const menu__box = document.querySelector(".menu__box");
const mainBlock  = document.querySelector("body ");
const hasSub = document.querySelectorAll(".has-sub");

menu__btn.addEventListener("click", () => {

    if (menu__box.classList.contains('open')) {
        mainBlock.classList.remove("no-scroll")
        menu__box.classList.remove('open');
        menu__btn.classList.remove('open');
    } else {
        menu__box.classList.add("open");
        menu__btn.classList.add("open");
        mainBlock.classList.add("no-scroll")
    }

});

hasSub.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const child = button.querySelector(".menu-sub");
        if (button.classList.contains('open')) {
            button.classList.remove('open');
            button.parentElement.classList.remove('open');
        } else {
            button.classList.add("open");
            button.parentElement.classList.add('open');
        }

    });
})

const btnFilter = document.querySelector(".btn__filter");
const filter = document.querySelector(".product__filters");

if (btnFilter){

    btnFilter.addEventListener("click", (event) => {
        event.preventDefault();
        if (filter.classList.contains('open')) {
            filter.classList.remove('open');
            btnFilter.classList.remove('open');
        } else {
            filter.classList.add('open');
            btnFilter.classList.add('open');
        }


    });

}

//inputMask
let phoneInputs = document.querySelectorAll('.js-phone-mask');
phoneInputs.forEach(function (input) {
    var maskOptions = {
        mask: '+7 (999) 999-99-99',  // Здесь вы можете установить свою маску
        greedy: false,
        placeholder: '_',
        showMaskOnHover: false,
    };

    Inputmask(maskOptions).mask(input);
});