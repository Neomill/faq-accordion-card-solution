const accordionHeaders = document.querySelectorAll('[data-accordion-header]');

let cacheElement = null;

Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = () => {

    console.log(cacheElement)
    if (cacheElement !== null && cacheElement !== accordionHeader){
      cacheElement.setAttribute('aria-expanded',false)
      cacheElement.parentElement.nextElementSibling.hidden = true;
    }

    let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    accordionHeader.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;

    cacheElement = accordionHeader;
  }
})