(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var b=$('#burger'),n=$('#nav');if(b)b.addEventListener('click',function(){n.classList.toggle('open')});
// FAQ
$$('.fqb').forEach(function(x){x.addEventListener('click',function(){var o=x.getAttribute('aria-expanded')==='true';x.setAttribute('aria-expanded',String(!o));x.parentNode.querySelector('.fqa').hidden=o})});
// products: filter, cart, favourites
var cart={};function upd(){var q=0,t=0;for(var k in cart){q+=cart[k].q;t+=cart[k].q*cart[k].p}var bar=$('#cartbar');if(!bar)return;bar.hidden=!q;$('#cartinfo').textContent=q+(q===1?' item':' items')+' in cart · EGP '+t}
$$('.add').forEach(function(x){x.addEventListener('click',function(){var k=x.dataset.name;cart[k]=cart[k]||{q:0,p:+x.dataset.price};cart[k].q++;upd();var o=x.innerHTML;x.textContent='Added ✓';setTimeout(function(){x.innerHTML=o},1200)})});
var cc=$('#clearcart');if(cc)cc.addEventListener('click',function(){cart={};upd()});
$$('.fav').forEach(function(x){x.addEventListener('click',function(){x.classList.toggle('on')})});
var pg=$('#pgrid');if(pg)$$('.cat').forEach(function(c){c.addEventListener('click',function(){$$('.cat').forEach(function(y){y.classList.remove('on')});c.classList.add('on');var f=c.dataset.f;$$('.prod',pg).forEach(function(p){p.hidden=!(f==='all'||p.dataset.cat===f)})})});
function hash(){if(!pg)return;var h=location.hash.slice(1),c=$('#cat-'+h);if(c)c.click()}hash();window.addEventListener('hashchange',hash);
// tips
var tg=$('#tgrid');if(tg){var cf='all';function ft(){var q=($('#tsearch').value||'').toLowerCase().trim(),k=0;$$('.tip',tg).forEach(function(t){var ok=(cf==='all'||t.dataset.cats.split(' ').indexOf(cf)>-1)&&(!q||t.dataset.text.indexOf(q)>-1);t.hidden=!ok;if(ok)k++});$('#tempty').hidden=k>0}
$$('#tcats .cat').forEach(function(c){c.addEventListener('click',function(){$$('#tcats .cat').forEach(function(y){y.classList.remove('on')});c.classList.add('on');cf=c.dataset.f;ft()})});$('#tsearch').addEventListener('input',ft);
var m=/[?&]c=(\w+)/.exec(location.search);if(m){var c=$('#tcats [data-f="'+m[1]+'"]');if(c)c.click()}
$$('.rm',tg).forEach(function(r){r.addEventListener('click',function(){var mo=r.parentNode.querySelector('.more');mo.hidden=!mo.hidden;r.firstChild.nodeValue=mo.hidden?'Read More':'Show Less'})});
var nf=$('#nform');nf.addEventListener('submit',function(e){e.preventDefault();var v=$('#nemail').value,o=$('#nmsg');if(/^\S+@\S+\.\S+$/.test(v)){o.className='msg';o.textContent='Thank you for subscribing!';nf.reset()}else{o.className='msg err';o.textContent='Please enter a valid email address.'}})}
// contact form
var f=$('#form');if(f)f.addEventListener('submit',function(e){e.preventDefault();var o=$('#fmsgout'),nm=$('#fname').value.trim(),em=$('#femail').value.trim(),ms=$('#fmsg').value.trim();
if(!nm||!/^\S+@\S+\.\S+$/.test(em)||!ms){o.className='msg err';o.textContent='Please fill in your name, a valid email and your message.';return}
var t='Hello Dr. Aya Hussein Clinic, I am '+nm+' ('+em+').'+($('#fsub').value?' Subject: '+$('#fsub').value+'.':'')+' '+ms;o.className='msg';o.textContent='Opening WhatsApp to send your message...';window.open('https://wa.me/201011952434?text='+encodeURIComponent(t),'_blank');f.reset()});
})();
