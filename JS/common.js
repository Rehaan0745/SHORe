/* SHOЯe shared behaviour: day/night (auto by clock or user choice), nav, Events dropdown */
(function(){
  var root=document.documentElement,tg=document.getElementById('tg'),tm=document.querySelector('meta[name=theme-color]');
  function auto(){var h=new Date().getHours();return h>=6&&h<18?'day':'night'}
  function setTheme(t,m,save){root.classList.add('tt');root.dataset.theme=t;root.dataset.mode=m;
    if(save){try{m==='auto'?localStorage.removeItem('shore-theme'):localStorage.setItem('shore-theme',t)}catch(e){}}
    if(tm)tm.content=t==='night'?'#060b2e':'#F9E4D1';
    tg.setAttribute('aria-label',t==='night'?'Switch to day mode':'Switch to night mode');tg.setAttribute('aria-checked',t==='night');
    document.querySelectorAll('[data-t]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.t===m)});
    document.dispatchEvent(new CustomEvent('shore-theme',{detail:t}));setTimeout(function(){root.classList.remove('tt')},3200)}
  tg.addEventListener('click',function(){var n=root.dataset.theme==='night'?'day':'night';setTheme(n,n,true)});
  document.querySelectorAll('[data-t]').forEach(function(b){b.addEventListener('click',function(){var m=b.dataset.t;setTheme(m==='auto'?auto():m,m,true)})});
  setInterval(function(){if(root.dataset.mode==='auto'&&auto()!==root.dataset.theme)setTheme(auto(),'auto',false)},300000);
  setTheme(root.dataset.theme,root.dataset.mode,false);
  var nav=document.getElementById('nav');function st(){nav.classList.toggle('stuck',scrollY>40)}st();addEventListener('scroll',st,{passive:true});
  var b=document.getElementById('burger'),l=document.getElementById('links');
  b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
  l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');b.setAttribute('aria-expanded',false);document.body.style.overflow=''}});
  var dd=document.querySelector('.dd'),db=dd.querySelector('.dd-btn');
  function closeDD(){dd.classList.remove('open');db.setAttribute('aria-expanded','false')}
  db.addEventListener('click',function(e){e.stopPropagation();var o=dd.classList.toggle('open');db.setAttribute('aria-expanded',o)});
  document.addEventListener('click',function(e){if(!dd.contains(e.target))closeDD()});
  addEventListener('keydown',function(e){if(e.key==='Escape')closeDD()});
})();
