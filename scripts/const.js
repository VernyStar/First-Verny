const $$$ = doc.querySelectorAll.bind(doc);
const $$ = doc.getElementById.bind(doc);
const $ = doc.querySelector.bind(doc);
const _ = doc.createElement.bind(doc);
const hp = $$("DIM");
const tp = $$("DER");
const cp = $$("ACC");
const fp = $$("FBF");
const $hp = hp.querySelector.bind(hp);
const $$hp = hp.querySelectorAll.bind(hp);
const $tp = tp.querySelector.bind(tp);
const $$tp = tp.querySelectorAll.bind(tp);
const $fp = fp.querySelector.bind(fp);
const $$fp = fp.querySelectorAll.bind(fp);
const $cp = cp.querySelector.bind(cp);
const $$cp = cp.querySelectorAll.bind(cp);
const bm = _("button"),
      nm = _("button"),
      i1 = _("img"),
      i2 = _("img"),
      ul = _("nav"),
      om = _("div"),
      nb = _("ul"),
      lb = _("ul"),
      p1 = _("span"),
      p2 = _("span");
bm.type = "button";
bm.className = "burger";
bm.innerHTML += `
   <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 200 200">
      <g stroke-linecap="round">
         <path d="M72 82.286h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
         <path d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554" fill="none" stroke="#fff" />
         <path d="M72 125.143h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
         <path d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554" fill="none" stroke="#fff" />
         <path d="M100.75 82.286h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
         <path d="M100.75 125.143h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
      </g>
   </svg>`;
nm.type = "button";
nm.id = "tel-number";
nm.innerHTML += `
   <i class="fas fa-phone"></i>
   <input type="text" value="0-800-303-404">`;
nm.setAttribute("data-modal", "phone");
nm.title = "Телефон гарячої лінії";
nm.className = "open-modal";
de.setAttribute("data-page", "home");
$$$("section").forEach(e => e.setAttribute("data-current", false));
hp.setAttribute("data-current", true);
nb.className = "numb-board";
lb.className = "lang-board";
om.className = "ovl-modal";
om.id = "OMW";
ul.type = "nav";
nb.innerHTML += `
   <button id='copy' class="learn-more">
      <span class="circle" aria-hidden="true">
         <span class="fas fa-copy"></span>
      </span>
      <span class="button-text"></span>
   </button>
   <a id='call' class="learn-more">
      <span class="circle" aria-hidden="true">
         <span class="fas fa-phone"></span>
      </span>
      <span class="button-text"></span>
   </a>`;
lb.innerHTML += `
   <li>
      <button type="button" class="lang-v" data-lang-v="uk" aria-pressed="true">
         <span class="flag">
            <use class="fi fi-ua"></use>
            Українська</span>
      </button>
   </li>
   <li>
      <button type="button" class="lang-v" data-lang-v="en" aria-pressed="false">
         <span class="flag">
            <use class="fi fi-gb"></use>
            English</span>
      </button>
   </li>
   <li>
      <button type="button" class="lang-v" data-lang-v="ru" aria-pressed="false">
         <span class="flag">
            <use class="fi fi-ru"></use>
            Русский</span>
      </button>
   </li>`;
doc.body.appendChild(bm);
doc.body.appendChild(nb);
doc.body.appendChild(lb);
doc.body.appendChild(om);
var inn, 
    fin, 
    attr, 
    t1, 
    t2,
    current = $("[data-current='true']");
    attr = current.getAttribute("id");
hp.innerHTML += `
   <main><header></header>
      <section id="top">
         <div id="options">
            <div class="fuel-map"><i class="fas fa-location-dot"></i><p></p></div>
            <div class="barcode"><i class="fas fa-barcode"></i><p></p></div>
            <div class="my-fuel"><i class="fas fa-gas-pump"></i><p></p></div>
            <div class="my-acc"><i class="fas fa-user"></i><p></p></div>
         </div>
      </section><section id="bottom">
         <div class="up-section"><p></p>
            <a href="https://blagobrsm.com/"><button id="join-donat"></button></a>
         </div>
         <div class="bottom-section">
            <p class="donate-description"></p>
            <button class="donat">
               <span class="button-content"><span id="img-card"></span><a href="">Зробити донат</a></span>
            </button>
            <span id="mono"></span></div>
      </section><div id="subscribe" class="input-group">
         <input type="email" class="input" id="Email" name="Email" placeholder="Введіть ваш E-mail" autocomplete="off">
         <input class="button--submit" value="Підписатись" type="submit">
      </div><footer></footer>
   </main>`;
t1 = 'position:fixed;font-size:0.825rem;font-style:italic;white-space:nowrap;top:3.25rem;color:cornsilk;opacity:0.65';

const page = current.querySelector('main');
const $$page = page.querySelectorAll.bind(page);
const $page = page.querySelector.bind(page);

const genNav = () => {
   for (let i in sidemenu) {
	   ul.innerHTML += `
      <ul><a href="#">
         <i class="${sidemenu[i].klas}"></i>
             <span>${sidemenu[i].name}</span>
         </a>
      </ul>`;
   }
}

"DIM" !== attr &&(ul.setAttribute("class", "mobile-menu"));
"DIM" === attr && (ul.innerHTML += `
         <img src="${logo1}" class="logo" alt="Логотип_БРСМ">
         <ul id="navs"></ul>`);

const homeNav = () => {
   for (let i in sidemenu) {
      let navs = $hp('#navs');
      navs.innerHTML += `
      <li li-index="${i}" 
             title="${sidemenu[i].name}" class="item-list">
              <span>${sidemenu[i].name}</span>
          <i class="${sidemenu[i].klas}"></i>
      </li>`;
   }
}

const fhp = $hp("footer"), bhp = $hp("#bottom"), thp = $hp("#top"),
 div = $hp("#options").querySelectorAll("div"),
   p = $hp("#options").querySelectorAll("p");
   p[0].innerText = "Мапа АЗС";
   p[1].innerText = "Моя картка";
   p[2].innerText = "Моє пальне";
   p[3].innerText = "Мій кабінет";
   p1.innerText = 'Телефон гарячої лінії';
   p1.style.cssText = t1;
   p.forEach((e) => ((e.style.fontSize = "1rem"), (e.style.color = "orange"))); 
   div.forEach((e) => 
      (e.classList.add("fas"), 
      (e.style.fontSize = "3rem"), 
      (e.style.color = "floralwhite"), 
      (e.style.borderRadius = "100%")));
current.appendChild(ul);
i1.setAttribute("src", futer);
$page("header").appendChild(nm);
$page("header").appendChild(p1);
$page("footer").appendChild(i1);

const copy = $$("copy");
const call = $$("call");
const tele = nm.querySelector("input");
      copy.querySelector(".button-text").innerText = "Скопіювати номер";
      call.querySelector(".button-text").innerText = "Зателефонувати";
      copy.addEventListener("click", () => {
         copy.classList.add(...[A, "copy"]);
         setTimeout(() => {
            tele.select(), doc.execCommand("copy");
            copy.querySelector(".button-text").innerText = "Номер скопійовано";
         }, 300);
         setTimeout(() => {
            nbtp.classList.remove(A),
            om.classList.remove(A),
            copy.classList.remove(...[A, "copy"]);
            copy.querySelector(".button-text").innerText = "Скопіювати номер";
         }, 2400);
      });
      call.addEventListener("click", () => { 
         let talk = "tel: 0800303404";
         call.setAttribute("href", talk)
      });

"DIM" !== attr && genNav();
"DIM" === attr && homeNav();

! (function (e) {
  "function" != typeof e.matches &&
    (e.matches = e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
        function (e) {
          for (var t = (this.doc || 
            this.ownerDocument).querySelectorAll(e), r = 0;
                      t[r] && t[r] !== this;)
          ++r; return Boolean(t[r]);
        }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType;) {
          if (t.matches(e)) return t; 
          t = t.parentNode;
        }
        return null;
      });
})(win.Element.prototype), 
doc.addEventListener("DOMContentLoaded", function () {
   var t = $$$(".open-modal");
   t.forEach((e) => {
      e.addEventListener("click", (m) => {
         let evt = m.currentTarget,
             atr = evt.getAttribute("data-modal");
         if (atr === "language") {
            lb.classList.add(A); om.classList.add(A);
            navigator.vibrate(15);
         }
         if (atr === "phone") {
            nb.classList.add(A); om.classList.add(A);
            navigator.vibrate(15);
         }
      });
   });
   doc.body.addEventListener("keyup", function (t) {   27 == t.keyCode && (om.classList.remove(A), nb.classList.remove(A)); }, !1);
   om.addEventListener("click", function () {
         om.classList.remove(A); nb.classList.remove(A);
         lb.classList.remove(A); navigator.vibrate(20);
   });
});

(() => {
   let a = bhp.querySelector(".up-section"),
       b = a.querySelector("p"),
       c = a.querySelector("#join-donat");
           c.innerText = "Приєднатися";
           c.setAttribute("title", "Перейти на сайт благодійного фонду БРСМ");
           c.style.cursor = "pointer";
           b.innerHTML = `<span style="color:#01ACFF">ПІДТРИМКА</span>
                          <span style="color:#FCCF08">ЗСУ</span>`;
   c.addEventListener('click', () => { 
         win.open('https://blagobrsm.com/'); 
   });
   let d = bhp.querySelector(".bottom-section"),
       g = d.querySelector(".donate-description"),
       j = d.querySelector("a");
           g.innerText = "Збираємо на літній одяг для військових добровольчих батальйонів";
           j.setAttribute("href", "https://send.monobank.ua/jar/4KMiTqxeFx");
           j.setAttribute("title", "Перейти на сторінку оплати");
})();

var goFullScreen = null, 
  exitFullscreen = null,
             ort = "orientation";
"mozOrientation" in screen
   ?  (ort = "mozOrientation")
   :  "msOrientation" in screen && (ort = "msOrientation"),
      "requestFullscreen" in de
         ?  ((goFullScreen = "requestFullscreen"), (exitFullscreen = "exitFullscreen"))
         :  "mozRequestFullScreen" in de
               ? ((goFullScreen = "mozRequestFullScreen"), (exitFullscreen = "mozCancelFullScreen"))
               : "webkitRequestFullscreen" in de
                     ? ((goFullScreen = "webkitRequestFullscreen"), (exitFullscreen = "webkitExitFullscreen"))
                     : ((goFullScreen = "msRequestFullscreen"), (exitFullscreen = "msExitFullscreen"));

function toggleFS(event) { 
   if (doc.fullscreenElement == null) { 
       de.requestFullscreen(); 
   } else if (doc.exitFullscreen) { 
      doc.exitFullscreen(); 
   }
}

doc.addEventListener('fullscreenchange', () => {
  if (doc.fullscreenElement != null) {
      $hp('#options').style.gap = '70px 10px';
      $hp('#options').style.padding = '2.5rem 0';
   } else {
      $hp('#options').style.gap = '55px 10px';
      $hp('#options').style.padding = '2.15rem 0';
   }
});

doc.addEventListener('longtap', () => {
   toggleFS();
   var promise = null;  
   if (screen[ort].lock) { 
      promise = screen[ort].lock(screen[ort].type); 
   } else { promise = screen.orientationLock(screen[ort]); }
   promise
      .then(function () {
         current.style.display = 'flex';
      })
      .catch(function (err) {});
});

const mm = current.querySelector('nav');
   mm.addEventListener('swiperight', openMenu);
   mm.addEventListener('swipeleft', closeMenu);
   mm.addEventListener('click', toggleMenu);
      
function openMenu() {
   mm.classList.add(A);
      navigator.vibrate(15);
   page.classList.remove('fade-in');
   page.classList.add(O);
}

function closeMenu() {
   mm.classList.remove(A);
      navigator.vibrate(15);
   page.classList.add('fade-in');
   page.classList.remove(O);
}

function toggleMenu() {
   let a = mm.classList.contains(A);
       a  ?  closeMenu()
          :  openMenu();
}

doc.addEventListener('click', m => { 
   let j = m.target,
       p = j == mm || mm.contains(j),
       l = j == mm, 
       s = mm.classList.contains(A);
   p || l || !s || closeMenu();
});
   
(() => {
   let inn, fin;
   doc.addEventListener("touchstart", e => {
      inn = e.changedTouches[0];
   });
   doc.addEventListener("touchend", e => {
      fin = e.changedTouches[0];
      let xAbs = Math.abs(inn.pageX - fin.pageX);
      let yAbs = Math.abs(inn.pageY - fin.pageY);
     if (xAbs > 120 || yAbs > 120) {
         if (xAbs > yAbs) {
              if (fin.pageX < inn.pageX) {
                  closeMenu();
              } else {
                  openMenu();
              }
          }
      }
   });
})();