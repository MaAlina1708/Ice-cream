(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-location]"),closeModalBtn:document.querySelector("[data-modal-close-location]"),modal:document.querySelector("[data-modal-location]")};function o(){e.modal.classList.toggle("is-hidden-location")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn1:document.querySelector("[data-modal-open-buy-now-mob]"),openModalBtn2:document.querySelector("[data-modal-open-buy-now-tablet]"),openModalBtn3:document.querySelector("[data-modal-open-buy-now-desk]"),closeModalBtn:document.querySelector("[data-modal-close-buy-now]"),modal:document.querySelector("[data-modal-buy-now]")};function o(){e.modal.classList.toggle("is-hidden-buy-now")}e.openModalBtn1.addEventListener("click",o),e.openModalBtn2.addEventListener("click",o),e.openModalBtn3.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-franchise]"),closeModalBtn:document.querySelector("[data-modal-close-franchise]"),modal:document.querySelector("[data-modal-franchise]")};function o(){e.modal.classList.toggle("is-hidden-franchise")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-list")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.remove("is-hidden"),e.body.classList.remove("no-scroll")}))})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open-tablet]"),closeMenuBtn:document.querySelector("[data-menu-close-tablet]"),menu:document.querySelector("[data-menu-tablet]"),body:document.querySelector("body"),menuList:document.querySelector(".tablet-list")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.remove("is-hidden"),e.body.classList.remove("no-scroll")}))})();new Swiper(".reviews",{direction:"horizontal",loop:!0,speed:2e3,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});new Swiper(".mySwiper",{loop:!0,speed:3e3,effect:"fade",autoplay:{delay:3800,disableOnInteraction:!1}});(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-cow]"),closeModalBtn:document.querySelector("[data-modal-close-cow]"),modal:document.querySelector("[data-modal-cow]")};function o(){e.modal.classList.toggle("is-hidden-cow")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn1:document.querySelector("[data-modal-open-about-product-one]"),openModalBtn2:document.querySelector("[data-modal-open-about-product-two]"),openModalBtn3:document.querySelector("[data-modal-open-about-product-tree]"),closeModalBtn:document.querySelector("[data-modal-close-about-product]"),modal:document.querySelector("[data-modal-about-product]")};function o(){e.modal.classList.toggle("is-hidden-about-product")}e.openModalBtn1.addEventListener("click",o),e.openModalBtn2.addEventListener("click",o),e.openModalBtn3.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();const e=document.querySelector(".hero__title");window.addEventListener("DOMContentLoaded",(o=>{e.classList.toggle("fadeOut")}));const o=document.querySelector(".about-title");window.addEventListener("DOMContentLoaded",(e=>{o.classList.toggle("fadeOut")}));
//# sourceMappingURL=index.d5e5ac50.js.map
