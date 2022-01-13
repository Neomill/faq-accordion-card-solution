const accordionHeaders = document.querySelectorAll('[data-accordion-header]');
let cacheElement = null;

Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
let target = accordionHeader.parentElement.nextElementSibling; //accordion content
  accordionHeader.onclick = () => {

    let arrow = accordionHeader.lastElementChild;
    if(arrow.classList.contains("rotate")){
      arrow.classList.add("faq_card__arrow");
      arrow.classList.remove("rotate");
      accordionHeader.firstElementChild.classList.remove("active-bold")
    }else{
      arrow.classList.add("rotate");
      arrow.classList.remove("faq_card__arrow");
      accordionHeader.firstElementChild.classList.add("active-bold")
    }

    console.log(accordionHeader.firstElementChild);
    
    if (cacheElement !== null && cacheElement !== accordionHeader){
      cacheElement.setAttribute('aria-expanded',false)
      cacheElement.parentElement.nextElementSibling.hidden = true;
      cacheElement.lastElementChild.classList.remove("rotate");
      cacheElement.lastElementChild.classList.add("faq_card__arrow");
      cacheElement.firstElementChild.classList.remove("active-bold")
    }

    let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    accordionHeader.setAttribute('aria-expanded', !expanded);

    target.hidden = expanded;

    if (expanded) {
      target.classList.remove("expanded");
      // target.classList.add("exiting");
      // setTimeout(() => {
      //   target.classList.remove("exiting");
      //   target.setAttribute("hidden", true);
      // }, 500);
    }else {
      target.classList.add("expanded");
      target.removeAttribute("hidden");
    }

    cacheElement = accordionHeader;
  }

})