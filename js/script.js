// FAQ Accordion
document.addEventListener('DOMContentLoaded', ()=> {
  const faqContent = document.querySelector('.faq-content');

  faqContent.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('rotate-plus-to-x');

    // Toggle FAQ body visibility
    groupBody.classList.toggle('open');

    // Conditions for one group open at a time
    const groupings = faqContent.querySelectorAll('.faq-group');

    groupings.forEach( grouping => {
      if (grouping !== group) {
        const groupingBody = grouping.querySelector('.faq-group-body');
        const groupingIcon = grouping.querySelector('.faq-group-header i');

        groupingBody.classList.remove('open');
        groupingIcon.classList.remove('rotate-plus-to-x')
      }
    })
  })
})

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', ()=> mobileMenu.classList.toggle('active'));



})