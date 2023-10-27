// FAQ Accordion
document.addEventListener('DOMContentLoaded', ()=> {
  const faqContent = document.querySelector('.faq-content');

  faqContent.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle FAQ icon
    icon.classList.toggle('rotate-plus-to-x');

    // Toggle FAQ body visibility
    groupBody.classList.toggle('open');

    // Conditions for one FAQ group open at a time
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
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburgerLineTop = document.getElementById('hamburger-line-top');
  const hamburgerLineBottom = document.getElementById('hamburger-line-bottom');

  // hamburgerButton.addEventListener('click', ()=>  mobileMenu.classList.toggle('active'));

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerLineTop.classList.toggle('rotate-line-1');
    hamburgerLineBottom.classList.toggle('rotate-line-2');
    hamburgerButton.classList.toggle('fixed');
  })

})