import ipads from '../data/ipads.js';
import navigations from '../data/navigations.js';

// 장바구니
const basketStaterEl = document.querySelector('header .basket-starter');
const basketEl = basketStaterEl.querySelector('.basket');

basketStaterEl.addEventListener('click', function (event) {
  event.stopPropagation();
  if (basketEl.classList.contains('show')) {
    hideBascket();
  } else {
    showBascket();
  }
});
basketEl.addEventListener('click', function (event) {
  event.stopPropagation();
});
window.addEventListener('click', function () {
  hideBascket();
});

function showBascket() {
  basketEl.classList.add('show'); // show
}
function hideBascket() {
  basketEl.classList.remove('show'); // hide
}

// 검색  fixed transition-delay:
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', function (event) {
  event.stopPropagation();
  hideSearch();
});
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
  headerEl.classList.add('searching');
  stopScroll();
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });
  searchDelayEls.forEach(function (el, index) {
    el.style.transitionDelay = `${(index * 0.4) / searchDelayEls.length}s`;
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 600);
}
function hideSearch() {
  headerEl.classList.remove('searching');
  playScroll();
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });
  searchDelayEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = `${(index * 0.4) / searchDelayEls.length}s`;
  });
  searchDelayEls.reverse();
  searchInputEl.value = '';
}
function playScroll() {
  document.documentElement.classList.remove('fixed');
}
function stopScroll() {
  document.documentElement.classList.add('fixed');
}

// 헤더 메뉴 토글 [모바일]
const menuStarterEl = headerEl.querySelector('.menu-starter');

menuStarterEl.addEventListener('click', function () {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing');
    searchInputEl.value = '';
    playScroll();
  } else {
    headerEl.classList.add('menuing');
    stopScroll();
  }
});

// 헤더 검색 [모바일]
const searchTextFieldEl = headerEl.querySelector('.textfield');
const searchCancelerEl = headerEl.querySelector('.search-canceler');

searchTextFieldEl.addEventListener('click', function () {
  headerEl.classList.add('searching--mobile');
  searchInputEl.focus();
});
searchCancelerEl.addEventListener('click', function () {
  headerEl.classList.remove('searching--mobile');
});

// 화면크기가 달라졌을 때 검색 모드 종료
window.addEventListener('resize', function () {
  if (window.innerWidth <= 740) {
    headerEl.classList.remove('searching');
  } else {
    headerEl.classList.remove('searching--mobile');
  }
});

// 네비게이션 메뉴 토글 [모바일]
const navEl = document.querySelector('nav');
const navMenuToggleEl = navEl.querySelector('.menu-toggler');
const navMenuShadowEl = navEl.querySelector('.shadow');

navMenuToggleEl.addEventListener('click', function () {
  if (navEl.classList.contains('menuing')) {
    hideNavMenu();
  } else {
    showNavMenu();
  }
});
navEl.addEventListener ('click', function (event) {
  event.stopPropagation();
});
navMenuShadowEl.addEventListener('click', hideNavMenu);
window.addEventListener('click', hideNavMenu);
function showNavMenu () {
  navEl.classList.add('menuing');
};
function hideNavMenu () {
  navEl.classList.remove('menuing');
};

// 요소의 가시성 관찰
const io = new IntersectionObserver(function (entries) {
  // entries 배열데이터
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target + ':' + entry.isIntersecting);
    entry.target.classList.add('show');
  });
});

const infoEls = document.querySelectorAll('.info');
infoEls.forEach(function (el) {
  io.observe(el);
});

// 비디오 재생
const video = document.querySelector('.stage video');
const playBtn = document.querySelector('.stage .contoller--play');
const pauseBtn = document.querySelector('.stage .contoller--pause');

playBtn.addEventListener('click', function () {
  video.play();
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
});
pauseBtn.addEventListener('click', function () {
  video.pause();
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
});

// '당신에게 맞는 iPad는?' 제품정보 랜더링
const itemsEl = document.querySelector('section.compare .items');

ipads.forEach(function (ipad) {
  const itmeEl = document.createElement('div');
  itmeEl.classList.add('item');

  let colorList = '';
  ipad.colors.forEach(function (color) {
    colorList += `<li style="background-color: ${color};"></li>`;
  });

  itmeEl.innerHTML = /* HTML */ `
    <div class="thumbnail">
      <img src="${ipad.thumbnail}" alt="${ipad.name}" />
    </div>
    <ul class="colors">
      ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">₩ ${ipad.price.toLocaleString('en-US')} 부터</p>
    <button class="btn">구입하기</button>
    <a herf="${ipad.url}" class="link">더 알아보기</a>
  `;

  itemsEl.append(itmeEl);
});

// Footer navigations 렌더링
const navigationsEl = document.querySelector('footer .navigations');

navigations.forEach(function (nav) {
  const mapEl = document.createElement('div');
  mapEl.classList.add('map');

  let mapList = '';
  nav.maps.forEach(function (map) {
    mapList += /* html */ `<li>
      <a href="${map.url}">${map.name}</a>
    </li>`;
  });

  mapEl.innerHTML = /* html */ `
    <h3>
      <span class="text">${nav.title}</span>
      <span class="icon">+</span>
    </h3>
    <ul>
      ${mapList}
    </ul>
  `;

  navigationsEl.append(mapEl);
});

// copyright 현재 년도
const thisYearEl = document.querySelector('span.this-year');
thisYearEl.textContent = new Date().getFullYear();

// map 아코디언 메뉴 토글 [모바일]
const mapEls = navigationsEl.querySelectorAll('.map');

mapEls.forEach(function (el) {
  const h3El = el.querySelector('h3');
  h3El.addEventListener('click', function () {
    el.classList.toggle('active');
  });
});