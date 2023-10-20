"use strict";function _createForOfIteratorHelper(e,t){var r,n,c,i,o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return n=!(r=!0),{s:function(){o=o.call(e)},n:function(){var e=o.next();return r=e.done,e},e:function(e){n=!0,c=e},f:function(){try{r||null==o.return||o.return()}finally{if(n)throw c}}};if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return o&&(e=o),i=0,{s:t=function(){},n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.addEventListener("DOMContentLoaded",function(){var e,t,r=document.querySelectorAll(".search-trigger"),n=document.querySelector(".search"),c=document.querySelector(".search__field"),i=_createForOfIteratorHelper(r);try{for(i.s();!(e=i.n()).done;)e.value.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("search-trigger")&&(n.classList.toggle("show"),n.classList.contains("show")?(c.focus(),c.classList.add("focus")):(c.blur(),c.classList.remove("focus"))),window.matchMedia("(max-width: 992px)").matches&&(document.querySelector(".search__trigger.mobile"),n.classList.toggle("active"))})}catch(e){i.e(e)}finally{i.f()}window.matchMedia("(max-width: 992px)").matches&&(r=document.querySelector(".burger-trigger"),t=document.querySelector(".menu"),r.addEventListener("click",function(){t.classList.toggle("active")}));new Swiper(".products-slider",{spaceBetween:8,slidesPerView:2.105,slidesPerGroup:2,breakpoints:{768:{spaceBetween:15,slidesPerView:3,slidesPerGroup:3},992:{spaceBetween:26,slidesPerView:4,slidesPerGroup:4}},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span>/<span class="'+t+'"></span>'}},navigation:{nextEl:".products-slider .circle-btn.next",prevEl:".products-slider .circle-btn.prev"}});var o,a,r=document.querySelector(".search-result"),s="calc(100vh - ".concat(r.getBoundingClientRect().top+document.body.scrollTop,"px)"),r=(r.style.maxHeight=s,document.querySelectorAll("button.acco-trigger")),r=(r&&r.forEach(function(e){var t=document.querySelectorAll(".filter-block__content"),r=e.closest(".acco-item"),n=r.querySelector(".acco-content"),c=n.firstElementChild.clientHeight;t.forEach(function(e){n.style.height=c+"px"}),e.addEventListener("click",function(e){e.preventDefault(),r.classList.contains("active")?(r.classList.remove("active"),n.style.height=0):(r.classList.add("active"),n.style.height=c+"px")})}),window.matchMedia("(max-width: 992px)").matches&&(s=document.querySelector(".filters-trigger"),o=document.querySelector(".sidebar-filters"),a=o.firstElementChild.clientHeight,s.addEventListener("click",function(){o.classList.contains("active")?(o.classList.remove("active"),o.style.height=0):(o.classList.add("active"),o.style.height=a+"px")})),document.getElementById("range"));r&&noUiSlider.create(r,{start:0,range:{min:0,max:100},connect:[!0,!1]}),customSelect("select")});