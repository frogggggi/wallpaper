// Это пример файла со скриптами. Можете писать здесь код, который будет на странице.
console.log(
    '%c Coded by: frogggggi@gmail.com 💠',
    'background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);

// MENU
const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('.skip-link');
const burgerMob = document.querySelector('.skip-link_mobile');
const navMob = document.querySelector('.nav_mobile');
if (burger && burgerMob) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    navMob.classList.toggle('active');
    wrapper.classList.toggle('fixed');
  });
  burgerMob.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMob.classList.toggle('active');
    navMob.classList.toggle('active');
    wrapper.classList.toggle('fixed');
  });
}

// Apply event handlers. Example of firing the scrolling mechanism.
if (document.getElementById('scrollNext')) {
  document.getElementById('scrollNext').addEventListener('click', doScrolling.bind(null, '#next_section', 1000));
}

// ????
const numbersWrapper = document.querySelector('.numbers_wrapper');
const numbes = document.querySelectorAll('.number');
if (numbersWrapper) {
  const numbersTop = numbersWrapper.getBoundingClientRect().top - 300;
  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numbersTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      for (let i = 0; i < numbes.length; i++) {
        let start = +numbes[i].innerHTML;
        const end = +numbes[i].dataset.max;
        const interval = setInterval(function () {
          numbes[i].innerHTML = ++start;
          if (start === end) {
            clearInterval(interval);
          }
        }, 3);
      }
    }
  });
}

// FILTER dropdown
const filter_arr = document.querySelectorAll('.filter_group-edit');
if (filter_arr) {
  filter_arr.forEach((el) => {
    el.addEventListener('click', (e) => {
      el.closest('.filter_group').classList.toggle('active');
    });
  });
}

// FAQ dropdown
const faq_title = document.querySelectorAll('.faq_item-title');
if (faq_title) {
  faq_title.forEach((el) => {
    el.addEventListener('click', (e) => {
      el.closest('.faq_item').classList.toggle('active');
    });
  });
}

// QUESTIONS dropdown
const questlist = document.querySelectorAll('.questions_elem-title');
if (questlist) {
  for (let i = 0; i < questlist.length; i++) {
    questlist[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.closest('.questions_elem').classList.toggle('active');
    });
  }
}

// TABS
function initTabs() {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains('tabs__arrow--prev')) {
        let activeBtn = document.querySelector('.tabs__btn--active');
        let activeParent = activeBtn.closest('.tabs__item');
        let previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          let prevActive = previousParent.querySelector('.tabs__btn')
          tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
          prevActive.classList.add('tabs__btn--active');

          let path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains('tabs__arrow--next')) {
        let activeBtn = document.querySelector('.tabs__btn--active');
        let activeParent = activeBtn.closest('.tabs__item');
        let nextParent = activeParent.nextElementSibling;

        if (nextParent) {
          let nextActive = nextParent.querySelector('.tabs__btn');
          tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
          nextActive.classList.add('tabs__btn--active');

          let path = nextActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  };
}

// GLOBAL EventListener after load
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
});
