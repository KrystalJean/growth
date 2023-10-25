// FAQ Accordion
document.addEventListener('DOMContentLoaded', ()=> {
  const faqContent = document.querySelector('.faq-content');

  faqContent.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');


    icon.classList.toggle('rotate-plus-to-x');
  })


})