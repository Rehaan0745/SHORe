(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // loader
  var lo=document.getElementById('loader'),t0=performance.now();function endL(){lo.classList.add('done')}
  function ready(){setTimeout(endL,reduce?0:Math.max(0,950-(performance.now()-t0)))}
  if(document.readyState==='complete')ready();else addEventListener('load',ready);
  setTimeout(endL,1800);lo.addEventListener('click',endL);addEventListener('keydown',function(e){if(e.key==='Escape')endL()});
  // nav
  var nav=document.getElementById('nav');
  function st(){nav.classList.toggle('stuck',scrollY>40)} st();addEventListener('scroll',st,{passive:true});
  var b=document.getElementById('burger'),l=document.getElementById('links');
  b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
  l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');b.setAttribute('aria-expanded',false);document.body.style.overflow=''}});
  // events dropdown
  var dd=document.querySelector('.dd'),db=dd.querySelector('.dd-btn');
  function closeDD(){dd.classList.remove('open');db.setAttribute('aria-expanded','false')}
  db.addEventListener('click',function(e){e.stopPropagation();var o=dd.classList.toggle('open');db.setAttribute('aria-expanded',o)});
  document.addEventListener('click',function(e){if(!dd.contains(e.target))closeDD()});
  addEventListener('keydown',function(e){if(e.key==='Escape')closeDD()});
  // water ripples
  function ripples(host){var c=document.createElement('canvas');c.className='rip';c.setAttribute('aria-hidden','true');host.prepend(c);
    var x=c.getContext('2d'),R=[],w,h,vis=true,last=0,dpr=Math.min(devicePixelRatio||1,2);
    function size(){w=host.clientWidth;h=host.clientHeight;c.width=w*dpr;c.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0)}
    function add(px,py,big){R.push({x:px,y:py,r:0,m:big?Math.max(w,h)*.4:150+Math.random()*130,a:big?.6:.38})}
    function pos(e){var b=host.getBoundingClientRect();return[e.clientX-b.left,e.clientY-b.top]}
    host.addEventListener('pointermove',function(e){var n=performance.now();if(n-last>130){last=n;var q=pos(e);add(q[0],q[1])}});
    host.addEventListener('pointerdown',function(e){var q=pos(e);add(q[0],q[1],1)});
    new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(host);
    size();addEventListener('resize',size);if(reduce)return;
    setInterval(function(){if(vis)add(Math.random()*w,Math.random()*h)},1200);
    (function loop(){if(vis){x.clearRect(0,0,w,h);R=R.filter(function(q){q.r+=1.2+q.r*.012;var k=1-q.r/q.m;if(k<=0)return false;
      for(var i=0;i<3;i++){var rr=q.r-i*15;if(rr>0){x.beginPath();x.arc(q.x,q.y,rr,0,6.283);x.lineWidth=2.2-i*.6;x.strokeStyle=(root.dataset.theme==='day'?'rgba(21,46,156,':'rgba(205,230,255,')+(q.a*k*(1-i*.3))+')';x.stroke()}}return true})}requestAnimationFrame(loop)})()}
  ripples(document.querySelector('.hero'));ripples(document.querySelector('.sea'));
    // card tilt + spotlight
  document.querySelectorAll('.verts .v').forEach(function(v){
    v.addEventListener('pointermove',function(e){var b=v.getBoundingClientRect(),px=(e.clientX-b.left)/b.width,py=(e.clientY-b.top)/b.height;
      v.style.setProperty('--mx',px*100+'%');v.style.setProperty('--my',py*100+'%');
      if(!reduce){v.style.setProperty('--rx',(.5-py)*10+'deg');v.style.setProperty('--ry',(px-.5)*12+'deg')}});
    v.addEventListener('pointerleave',function(){v.style.setProperty('--rx','0deg');v.style.setProperty('--ry','0deg')})});
  // theme: auto by clock, or user choice
  var root=document.documentElement,tg=document.getElementById('tg'),tm=document.querySelector('meta[name=theme-color]');
  function auto(){var h=new Date().getHours();return h>=6&&h<18?'day':'night'}
  function setTheme(t,m,save){root.classList.add('tt');root.dataset.theme=t;root.dataset.mode=m;
    if(save){try{m==='auto'?localStorage.removeItem('shore-theme'):localStorage.setItem('shore-theme',t)}catch(e){}}
    if(tm)tm.content=t==='night'?'#060b2e':'#F9E4D1';
    tg.setAttribute('aria-label',t==='night'?'Switch to day mode':'Switch to night mode');tg.setAttribute('aria-checked',t==='night');
    document.querySelectorAll('[data-t]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.t===m)});
    setTimeout(function(){root.classList.remove('tt')},3200)}
  tg.addEventListener('click',function(){var n=root.dataset.theme==='night'?'day':'night';setTheme(n,n,true)});
  document.querySelectorAll('[data-t]').forEach(function(b){b.addEventListener('click',function(){var m=b.dataset.t;setTheme(m==='auto'?auto():m,m,true)})});
  setInterval(function(){if(root.dataset.mode==='auto'&&auto()!==root.dataset.theme)setTheme(auto(),'auto',false)},300000);
  setTheme(root.dataset.theme,root.dataset.mode,false);
  // stars, city lights, crowd
  function mk(host,n,fn){for(var i=0;i<n;i++){var e=document.createElement('i');e.style.cssText=fn();host.appendChild(e)}}
  mk(document.getElementById('stars'),80,function(){var z=1+Math.random()*1.8;return 'left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;animation-delay:'+(-Math.random()*4)+'s'});
  mk(document.getElementById('city'),90,function(){var x=Math.random()*100;return 'left:'+x+'%;bottom:'+Math.random()*(20+x*.6)+'%;animation-delay:'+(-Math.random()*4)+'s'});
  (function(){var g='';for(var i=0;i<66;i++){var x=i*22+Math.random()*10,y=96+Math.random()*34;g+='<circle cx="'+x+'" cy="'+y+'" r="13" stroke-width="0"/><rect x="'+(x-17)+'" y="'+(y+11)+'" width="34" height="90" rx="14" stroke-width="0"/>';if(i%3===0)g+='<path d="M'+(x+9)+' '+(y+22)+'L'+(x+24)+' '+(y-36)+'" fill="none" stroke-width="9" stroke-linecap="round"/>'}
    document.getElementById('crowd').innerHTML=g})();
  // count-up stats
  document.querySelectorAll('[data-to]').forEach(function(el){var to=+el.dataset.to,suf=el.dataset.suf||'';
    new IntersectionObserver(function(es,o){if(!es[0].isIntersecting)return;o.disconnect();if(reduce)return;var t0=performance.now();
      (function f(n){var k=Math.min(1,(n-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-k,3)))+(k<1?'':suf);if(k<1)requestAnimationFrame(f)})(t0)}).observe(el)});
  // real photos: current theme first, the other one afterwards
  (function(){var hero=document.querySelector('.hero'),cur=root.dataset.theme;
    function ld(k,cb){var i=new Image();i.onload=function(){var el=document.querySelector('.ph-'+k[0]);el.style.backgroundImage='url(Assets/shore_'+k+'.jpg)';cb&&cb()};i.src='Assets/shore_'+k+'.jpg'}
    ld(cur,function(){hero.classList.add('photos');setTimeout(function(){ld(cur==='day'?'night':'day')},300)})})();
  // reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('v'))setTimeout(function(t){t.style.transitionDelay='0s'},1600,e.target);io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(el.classList.contains('v')?(i%4)*.1:0)+'s';io.observe(el)});
  // countdown to 18 Dec 2026, 00:00 IST
  var T=new Date('2026-12-18T00:00:00+05:30').getTime();
  var ids=['d','h','m','s'].map(function(i){return document.getElementById(i)});
  function p(n){return String(n).padStart(2,'0')}
  function put(el,v){if(el.textContent!==v){el.textContent=v;if(!reduce){el.classList.remove('tk');void el.offsetWidth;el.classList.add('tk')}}}
  function tick(){var x=Math.max(0,T-Date.now());put(ids[0],p(Math.floor(x/864e5)));put(ids[1],p(Math.floor(x/36e5)%24));put(ids[2],p(Math.floor(x/6e4)%60));put(ids[3],p(Math.floor(x/1e3)%60))}
  tick();setInterval(tick,1000);
  // marquee
  var t='<span>New Beginnings</span><span>✦</span><span>Technical</span><span>✦</span><span>Cultural</span><span>✦</span><span>Management</span><span>✦</span><span>Sports</span><span>✦</span><span>18 · 19 · 20 December 2026</span><span>✦</span>';
  document.getElementById('mq').innerHTML=t+t+t+t;
})();
