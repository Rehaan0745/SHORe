/* SHOЯe mascot safety net.
   Every Gitphin <img> points at a transparent copy in Assets/mascot/. If that file is missing,
   or is accidentally a white-background PNG, this script falls back to your original pose in
   "SHORe Mascot poses/" (data-orig) and removes the white background in the browser, so a white box never shows. */
(function(){
  function opaqueCorner(img){try{var c=document.createElement('canvas');c.width=c.height=1;var x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0,1,1,0,0,1,1);return x.getImageData(0,0,1,1).data[3]>250}catch(e){return false}}
  function knock(img){
    var H=Math.min(img.naturalHeight,860),w=Math.round(img.naturalWidth*H/img.naturalHeight),c=document.createElement('canvas');c.width=w;c.height=H;
    var x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0,w,H);var d=x.getImageData(0,0,w,H),a=d.data,n=w*H,bg=new Uint8Array(n),st=[],i,p;
    function white(q){var o=q*4,r=a[o],g=a[o+1],b=a[o+2],mx=Math.max(r,g,b),mn=Math.min(r,g,b);return mn>226&&mx-mn<20}
    function push(q){if(!bg[q]&&white(q)){bg[q]=1;st.push(q)}}
    for(i=0;i<w;i++){push(i);push(n-w+i)}for(i=0;i<H;i++){push(i*w);push(i*w+w-1)}
    while(st.length){p=st.pop();var px=p%w;if(px>0)push(p-1);if(px<w-1)push(p+1);if(p>=w)push(p-w);if(p<n-w)push(p+w)}
    var ring=new Uint8Array(n);
    for(p=0;p<n;p++){if(bg[p])continue;px=p%w;if((px>0&&bg[p-1])||(px<w-1&&bg[p+1])||(p>=w&&bg[p-w])||(p<n-w&&bg[p+w]))ring[p]=1}
    for(p=0;p<n;p++){var al=255;if(bg[p]||ring[p])al=0;else{px=p%w;if((px>0&&ring[p-1])||(px<w-1&&ring[p+1])||(p>=w&&ring[p-w])||(p<n-w&&ring[p+w]))al=150}a[p*4+3]=al}
    x.putImageData(d,0,0);return c;
  }
  function clean(img){
    if(!img.naturalWidth||!opaqueCorner(img)){img.classList.remove('cutting');return}
    try{var c=knock(img);c.toBlob(function(b){if(b){img.onload=function(){img.classList.remove('cutting')};img.src=URL.createObjectURL(b)}else img.classList.remove('cutting')})}catch(e){img.classList.remove('cutting')}
  }
  function fallback(img){
    if(img.dataset.fell)return;img.dataset.fell=1;try{console.warn('SHOЯe: '+img.getAttribute('src')+' not found. Copy the Assets/mascot folder into your repo; using the slow original for now.')}catch(e){}img.classList.add('cutting');
    img.onload=function(){img.onload=null;clean(img)};img.onerror=function(){img.classList.remove('cutting')};img.src=img.dataset.orig;
  }
  function init(){document.querySelectorAll('img[data-orig]').forEach(function(img){
    function ok(){if(!img.dataset.fell&&opaqueCorner(img)){img.dataset.fell=1;img.classList.add('cutting');clean(img)}}
    if(img.complete){img.naturalWidth?ok():fallback(img)}else{img.addEventListener('load',ok,{once:true});img.addEventListener('error',function(){fallback(img)},{once:true})}})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
