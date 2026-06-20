/* ============================================================
   MAIN.JS — Premium Portfolio Logic
   ============================================================ */
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const store={get(k,fb){try{const v=localStorage.getItem(k);return v?JSON.parse(v):fb}catch{return fb}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
const SECTIONS=["home","about","skills","projects","certs","blog","resume","contact"];
const isTouch=matchMedia("(hover:none)").matches;
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;

/* ====================== LOADER ====================== */
function runLoader(){
  const loader=$("#loader"),fill=$("#loaderFill"),pct=$("#loaderPct");
  if(!loader)return Promise.resolve();
  document.body.classList.add("loading");
  let progress=0;
  const startTime=performance.now();
  const minDuration=2800;
  return new Promise(resolve=>{
    const tick=()=>{
      const elapsed=performance.now()-startTime;
      const targetByTime=Math.min(100,(elapsed/minDuration)*100);
      progress=Math.min(targetByTime,progress+Math.random()*2.2+0.7);
      if(fill)fill.style.width=progress+"%";
      if(pct)pct.textContent=Math.floor(progress);
      if(progress<100)requestAnimationFrame(tick);
      else{setTimeout(()=>{loader.classList.add("hide");document.body.classList.remove("loading");setTimeout(resolve,800)},400)}
    };
    requestAnimationFrame(tick);
  });
}

/* ====================== SOCIAL INJECT ====================== */
function sHtml(){return SOCIALS.map(s=>`<a href="${s.url}" ${s.url.startsWith("mailto")?"":'target="_blank" rel="noopener"'} title="${s.name}" data-magnetic><svg viewBox="0 0 24 24" ${s.f?'fill="currentColor"':'fill="none"'}>${s.svg}</svg></a>`).join("")}
function injectSocials(){$$(".si").forEach(el=>el.innerHTML=sHtml())}

/* ====================== THEME ====================== */
function applyTheme(t){document.documentElement.setAttribute("data-theme",t);store.set("ar_theme",t);
  const i=$("#themeIcon");if(i)i.innerHTML=t==="dark"?'<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';}

/* ====================== CUSTOM CURSOR ====================== */
function customCursor(){
  if(isTouch||reduce)return;
  const dot=$("#cursorDot"),ring=$("#cursorRing");
  if(!dot||!ring)return;
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px"});
  const loop=()=>{rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(loop)};
  loop();
  /* hover targets */
  document.addEventListener("mouseover",e=>{const t=e.target.closest("a,button,.post,.proj,input,textarea,.theme-toggle,.filter");if(t)ring.classList.add("hover")});
  document.addEventListener("mouseout",e=>{const t=e.target.closest("a,button,.post,.proj,input,textarea,.theme-toggle,.filter");if(t)ring.classList.remove("hover")});
  addEventListener("mousedown",()=>ring.classList.add("click"));
  addEventListener("mouseup",()=>ring.classList.remove("click"));
}

/* ====================== MOUSE-FOLLOW GLOW ====================== */
function mouseGlow(){
  if(isTouch||reduce)return;
  const g=$("#mouseGlow");if(!g)return;
  let tx=innerWidth/2,ty=innerHeight/2,cx=tx,cy=ty;
  addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY});
  const loop=()=>{cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;g.style.left=cx+"px";g.style.top=cy+"px";requestAnimationFrame(loop)};
  loop();
}

/* ====================== MAGNETIC BUTTONS ====================== */
function magneticButtons(){
  if(isTouch||reduce)return;
  $$("[data-magnetic]").forEach(el=>{
    el.addEventListener("mousemove",e=>{
      const r=el.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      el.style.transform=`translate(${x*.25}px,${y*.25}px)`;
    });
    el.addEventListener("mouseleave",()=>{el.style.transform=""});
  });
}

/* ====================== PARTICLE BACKGROUND ====================== */
function particles(){
  const c=$("#bgCanvas");if(!c||reduce){if(c)c.style.display="none";return}
  const ctx=c.getContext("2d");
  let w,h,pts,mouse={x:-999,y:-999};
  function sz(){w=c.width=innerWidth;h=c.height=innerHeight;
    pts=Array.from({length:Math.min(60,Math.floor(w*h/26000))},()=>({
      x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,
      r:Math.random()*1.5+.5,c:Math.random()<.5?"primary":"accent"}))}
  function rgb(v){const s=getComputedStyle(document.documentElement).getPropertyValue("--"+v).trim()||"#4F46E5";
    let x=s.replace("#","");if(x.length===3)x=x.split("").map(c=>c+c).join("");const n=parseInt(x,16);return[(n>>16)&255,(n>>8)&255,n&255]}
  function draw(){ctx.clearRect(0,0,w,h);
    const p1=rgb("primary"),p2=rgb("accent");
    for(const p of pts){p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
      const col=p.c==="primary"?p1:p2;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);
      ctx.fillStyle=`rgba(${col[0]},${col[1]},${col[2]},.5)`;ctx.fill()}
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<130){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(${p1[0]},${p1[1]},${p1[2]},${.12*(1-d/130)})`;ctx.lineWidth=.8;ctx.stroke()}}
    for(const p of pts){const d=Math.hypot(p.x-mouse.x,p.y-mouse.y);
      if(d<160){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);
        ctx.strokeStyle=`rgba(${p2[0]},${p2[1]},${p2[2]},${.2*(1-d/160)})`;ctx.lineWidth=1;ctx.stroke()}}
    requestAnimationFrame(draw)}
  addEventListener("resize",sz);
  addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY});
  addEventListener("mouseout",()=>{mouse.x=mouse.y=-999});
  sz();draw();
}

/* ====================== SCROLL REVEAL — fires BOTH ways (up + down) ====================== */
let io;
function observeReveals(){if(io)io.disconnect();
  io=new IntersectionObserver(es=>{es.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("in");
    else e.target.classList.remove("in");
  })},{threshold:.12,rootMargin:"-60px 0px -60px 0px"});
  $$("[data-reveal]").forEach(el=>io.observe(el))}

/* ====================== TYPING EFFECT ====================== */
let typedIdx=0;
function typeHero(){
  const box=$("#heroTyped");if(!box)return;
  const showCursor=()=>box.innerHTML='<span class="typed-text"></span><span class="typed-cursor"></span>';
  showCursor();
  function show(idx){
    const text=$(".typed-text",box);
    const line=TYPED[idx];let i=0;
    const ti=setInterval(()=>{i++;text.textContent=line.slice(0,i);
      if(i>=line.length){clearInterval(ti);
        setTimeout(()=>{
          let j=line.length;
          const td=setInterval(()=>{j--;text.textContent=line.slice(0,j);
            if(j<=0){clearInterval(td);typedIdx=(typedIdx+1)%TYPED.length;show(typedIdx)}},35)
        },2000)}},75)
  }
  show(0);
}

/* ====================== COUNTERS ====================== */
let cDone=false;
function counters(){if(cDone)return;cDone=true;
  $$("[data-count]").forEach(el=>{const tgt=+el.dataset.count,sfx=el.dataset.suffix||"";
    let c=0;const s=Math.max(1,tgt/45);
    const t=setInterval(()=>{c+=s;if(c>=tgt){c=tgt;clearInterval(t)}el.textContent=Math.floor(c)+sfx},30)})}

/* ====================== SKILLS RENDER ====================== */
function renderSkills(){
  const g=$("#skillCards");if(!g)return;
  g.innerHTML=SKILL_CARDS.map((s,i)=>`
    <div class="skill-card glass" data-reveal data-pct="${s.pct}" style="transition-delay:${i*60}ms">
      <div class="sc-head">
        <div class="sc-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <span class="sc-pct">${s.pct}%</span>
      </div>
      <div class="sc-track"><div class="sc-fill" data-lv="${s.pct}"></div></div>
      <div class="sc-tags">${s.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    </div>`).join("");
  observeReveals();
}
function animBars(){$$(".sc-fill").forEach(f=>{if(!f.style.width)f.style.width=f.dataset.lv+"%"})}

/* ====================== PROJECTS ====================== */
const FILT=["All","AI","Web","Blockchain","IoT"];
let aFilt="All";
function renderFilters(){const f=$("#filters");if(!f)return;
  f.innerHTML=FILT.map(x=>`<button class="filter ${x===aFilt?"active":""}" data-f="${x}">${x}</button>`).join("");
  $$(".filter[data-f]").forEach(b=>b.onclick=()=>{aFilt=b.dataset.f;renderFilters();renderProjects()})}

function renderProjects(){const g=$("#projGrid");if(!g)return;
  const ghI='<svg viewBox="0 0 24 24" fill="currentColor">'+SOCIALS[0].svg+'</svg>';
  const list=PROJECTS.filter(p=>aFilt==="All"||p.cat===aFilt);
  g.innerHTML=list.map((p,i)=>{
    const lk=[];
    if(p.live)lk.push(`<a href="${p.live}" target="_blank" rel="noopener" data-stop><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5"/></svg>Live Demo</a>`);
    if(p.repo)lk.push(`<a href="${p.repo}" target="_blank" rel="noopener" data-stop>${ghI}Code</a>`);
    if(!lk.length)lk.push(`<span class="status">\u25CF ${p.status||"Showcase"}</span>`);
    const tagsHTML=(p.tags||[]).map(t=>`<span>${t}</span>`).join("");
    return`<article class="proj cat-${p.cat}" data-reveal data-reveal-i style="transition-delay:${(i%3)*80}ms">
      <span class="proj-flip-hint"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 12h18M3 12l5-5M3 12l5 5"/></svg>Tap to flip</span>
      <div class="proj-face front">
        <div class="proj-img"><span class="icon">${p.icon}</span><span class="year-badge">${p.year}</span></div>
        <div class="proj-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="proj-tags">${tagsHTML}</div>
          <div class="proj-links">${lk.join("")}</div>
        </div>
      </div>
      <div class="proj-face back">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="proj-tags">${tagsHTML}</div>
        <div class="proj-links">${lk.join("")}</div>
      </div>
    </article>`}).join("");
  /* desktop: 3D tilt + cursor glow */
  $$(".proj").forEach(card=>{
    card.addEventListener("mousemove",e=>{
      const r=card.getBoundingClientRect();
      const x=e.clientX-r.left,y=e.clientY-r.top;
      card.style.setProperty("--mx",x+"px");
      card.style.setProperty("--my",y+"px");
      if(!isTouch&&!reduce){
        const rx=((y-r.height/2)/r.height)*-6;
        const ry=((x-r.width/2)/r.width)*6;
        card.style.transform=`translateY(-8px) perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    });
    card.addEventListener("mouseleave",()=>{card.style.transform=""});
  });
  /* mobile: tap-to-flip + hold-to-zoom */
  if(isTouch){
    $$(".proj").forEach(card=>{
      const img=card.querySelector(".proj-img");
      let holdTimer=null,didZoom=false;
      card.addEventListener("touchstart",e=>{
        /* if tap landed on a link inside card, do nothing */
        if(e.target.closest("[data-stop]"))return;
        didZoom=false;
        holdTimer=setTimeout(()=>{if(img){img.classList.add("zoomed");didZoom=true;if(navigator.vibrate)navigator.vibrate(12)}},340);
      },{passive:true});
      card.addEventListener("touchend",e=>{
        clearTimeout(holdTimer);
        if(img)img.classList.remove("zoomed");
        if(e.target.closest("[data-stop]"))return;
        /* only flip on a real tap (no zoom triggered) */
        if(!didZoom){card.classList.toggle("flipped");if(navigator.vibrate)navigator.vibrate(6)}
      });
      card.addEventListener("touchcancel",()=>{clearTimeout(holdTimer);if(img)img.classList.remove("zoomed")});
    });
  }
  observeReveals();
}

/* ====================== CERTIFICATIONS ====================== */
function renderCerts(){const cg=$("#certGrid");if(!cg)return;
  const ic='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>';
  cg.innerHTML=CERTS.map((c,i)=>`<div class="cert glass" data-reveal data-reveal-i style="transition-delay:${i*60}ms">
    <div class="badge">${ic}</div><div><div class="t">${c.t}</div><div class="y">${c.y}</div></div></div>`).join("");
  observeReveals();
}

/* ====================== BLOG ====================== */
let posts=store.get("ar_posts",DEFAULT_POSTS),likes=store.get("ar_likes",{}),bSearch="",bTag="All",curPost=null;
function rt(t){return Math.max(1,Math.round(t.split(/\s+/).length/200))+" min read"}
function fd(d){try{return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return d}}
function exc(b){const f=b.replace(/^#.*$/gm,"").trim().split("\n").find(l=>l.trim());return(f||"").slice(0,135)+((f||"").length>135?"\u2026":"")}
function lc(p){return(p.likes||0)+(likes[p.id]?1:0)}
function bHTML(b){return b.split(/\n{2,}/).map(k=>{k=k.trim();
  if(k.startsWith("#"))return"<h4>"+k.replace(/^#+\s*/,"")+"</h4>";
  if(/^- /m.test(k))return"<ul>"+k.split("\n").map(l=>"<li>"+l.replace(/^-\s*/,"")+"</li>").join("")+"</ul>";
  return"<p>"+k.replace(/`([^`]+)`/g,"<code>$1</code>")+"</p>"}).join("")}
function renderBTags(){const bt=$("#blogTags");if(!bt)return;
  bt.innerHTML=["All",...new Set(posts.map(p=>p.tag))].map(t=>`<button class="filter ${t===bTag?"active":""}" data-bt="${t}">${t}</button>`).join("");
  $$("[data-bt]").forEach(b=>b.onclick=()=>{bTag=b.dataset.bt;renderBTags();renderBlog()})}
function renderBlog(){const g=$("#blogGrid");if(!g)return;
  const q=bSearch.toLowerCase();
  const list=posts.filter(p=>(bTag==="All"||p.tag===bTag)&&(p.title+p.body+p.tag).toLowerCase().includes(q));
  if(!list.length){g.innerHTML='<div class="blog-empty">No posts found.</div>';return}
  g.innerHTML=list.map((p,i)=>`<article class="post" data-open="${p.id}" data-reveal data-reveal-i style="transition-delay:${(i%3)*70}ms">
    <div class="aline"></div>
    <div class="post-body">
      <div class="post-meta"><span>${fd(p.date)}</span><span>\u00B7</span><span>${rt(p.body)}</span></div>
      <h3>${p.title}</h3>
      <p class="excerpt">${exc(p.body)}</p>
      <div class="post-foot"><span class="ptag">${p.tag}</span><span class="lm"><svg viewBox="0 0 24 24" fill="${likes[p.id]?"currentColor":"none"}" stroke="currentColor" stroke-width="2"><path d="M20.8 5.6a5 5 0 00-7.1 0L12 7.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-8.3a5 5 0 000-7.1z"/></svg>${lc(p)}</span></div>
    </div></article>`).join("");
  $$("[data-open]").forEach(el=>el.onclick=()=>openR(el.dataset.open));
  observeReveals()}
function openR(id){const p=posts.find(x=>x.id===id);if(!p)return;curPost=p;
  $("#rmeta").textContent=fd(p.date)+"  \u00B7  "+rt(p.body);
  $("#rtitle").textContent=p.title;
  $("#rtags").innerHTML=`<span>${p.tag}</span>`;
  $("#rbody").innerHTML=bHTML(p.body);
  $("#rlike").classList.toggle("liked",!!likes[p.id]);
  $("#rlikes").textContent=lc(p);
  $("#reader").scrollTop=0;
  $("#readerBg").classList.add("open")}
function closeR(){$("#readerBg").classList.remove("open");curPost=null}
function wireBlog(){
  const bs=$("#blogSearch");if(bs)bs.oninput=e=>{bSearch=e.target.value;renderBlog()};
  $("#closeR").onclick=closeR;
  $("#readerBg").onclick=e=>{if(e.target===$("#readerBg"))closeR()};
  $("#rlike").onclick=()=>{if(!curPost)return;likes[curPost.id]=!likes[curPost.id];store.set("ar_likes",likes);
    $("#rlike").classList.toggle("liked",likes[curPost.id]);$("#rlikes").textContent=lc(curPost);renderBlog()};
  $("#rdelete").onclick=()=>{if(!curPost||!confirm("Delete?"))return;posts=posts.filter(p=>p.id!==curPost.id);
    store.set("ar_posts",posts);closeR();renderBTags();renderBlog()};
  $("#writeBtn").onclick=()=>{$("#composeBg").classList.add("open");$("#bTitle").focus()};
  $("#closeC").onclick=()=>$("#composeBg").classList.remove("open");
  $("#composeBg").onclick=e=>{if(e.target===$("#composeBg"))$("#composeBg").classList.remove("open")};
  $("#pubPost").onclick=()=>{const tt=($("#bTitle")||{}).value;if(!tt||!tt.trim()){$("#bTitle").focus();return}
    posts.unshift({id:"u"+Date.now(),title:tt.trim(),date:new Date().toISOString().slice(0,10),tag:($("#bTags").value||"").split(",")[0].trim()||"Notes",likes:0,body:($("#bBody").value||"").trim()||"(empty)"});
    store.set("ar_posts",posts);["bTitle","bBody","bTags"].forEach(id=>{const el=$("#"+id);if(el)el.value=""});
    bTag="All";bSearch="";if($("#blogSearch"))$("#blogSearch").value="";
    $("#composeBg").classList.remove("open");renderBTags();renderBlog()}}

/* ====================== CONTACT ====================== */
function wireContact(){const f=$("#contactForm");if(!f)return;
  f.onsubmit=e=>{e.preventDefault();const n=$("#cn").value,em=$("#ce").value,s=$("#cs").value||"Portfolio enquiry from "+n,m=$("#cm").value;
    const btn=f.querySelector("button[type=submit]");
    if(btn){btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 13l4 4L19 7"/></svg><span>Sent!</span>';setTimeout(()=>{btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg><span>Send Message</span>'},2400)}
    location.href=`mailto:iamrafay64@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent("Name: "+n+"\nEmail: "+em+"\n\n"+m)}`}}

/* ====================== SCROLL SPY ====================== */
function scrollSpy(){
  let cur="home",best=Infinity;const mid=innerHeight*0.35;
  SECTIONS.forEach(id=>{const sec=$("#sec-"+id);if(!sec)return;
    const r=sec.getBoundingClientRect();const dist=Math.abs(r.top-mid);
    if(r.top<innerHeight*0.55&&dist<best){best=dist;cur=id}});
  $$(".nav-link,.bnav-item").forEach(a=>a.classList.toggle("active",a.dataset.go===cur))}

/* ====================== PARALLAX ====================== */
function parallax(){
  if(reduce)return;
  let lastY=0;
  addEventListener("scroll",()=>{lastY=scrollY;
    $$("[data-parallax]").forEach(el=>{const speed=parseFloat(el.dataset.parallax)||.15;
      el.style.transform=`translateY(${lastY*speed}px)`})},{passive:true});
}

/* ====================== INIT ====================== */
async function init(){
  applyTheme(store.get("ar_theme","dark"));
  injectSocials();
  particles();
  mouseGlow();
  customCursor();
  renderSkills();renderFilters();renderProjects();renderCerts();renderBTags();renderBlog();
  wireBlog();wireContact();
  parallax();

  /* nav */
  $$(".nav-link, [data-go]").forEach(a=>{if(a.dataset.go)a.onclick=e=>{e.preventDefault();
    const t=$("#sec-"+a.dataset.go);if(t)t.scrollIntoView({behavior:"smooth"})}});
  $("#themeToggle").onclick=()=>{applyTheme(document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark");if(navigator.vibrate)navigator.vibrate(6)};

  /* press-and-glow + haptic on buttons (touch devices) */
  if(isTouch){
    document.addEventListener("touchstart",e=>{
      const btn=e.target.closest(".btn,.social-row a,.filter,.nav-cta,.totop");
      if(!btn)return;
      btn.classList.add("pressed");
      if(navigator.vibrate)navigator.vibrate(6);
      /* ripple effect */
      const rect=btn.getBoundingClientRect();
      const r=document.createElement("span");
      r.className="ripple";
      const t=e.touches[0];
      r.style.left=(t.clientX-rect.left-50)+"px";
      r.style.top=(t.clientY-rect.top-50)+"px";
      if(getComputedStyle(btn).position==="static")btn.style.position="relative";
      const prevOverflow=btn.style.overflow;
      btn.style.overflow="hidden";
      btn.appendChild(r);
      setTimeout(()=>{r.remove();btn.style.overflow=prevOverflow},700);
    },{passive:true});
    document.addEventListener("touchend",e=>{
      const btn=e.target.closest(".btn,.social-row a,.filter,.nav-cta,.totop");
      if(btn)setTimeout(()=>btn.classList.remove("pressed"),180);
    });
    document.addEventListener("touchcancel",e=>{
      const btn=e.target.closest(".btn,.social-row a,.filter,.nav-cta,.totop");
      if(btn)btn.classList.remove("pressed");
    });
  }

  /* scroll */
  let ticking=false,lastScrollY=0;
  addEventListener("scroll",()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{
    const sc=document.documentElement;
    $("#progress").style.width=Math.min(100,scrollY/(sc.scrollHeight-innerHeight||1)*100)+"%";
    document.querySelector("header").classList.toggle("scrolled",scrollY>30);
    $("#toTop").classList.toggle("show",scrollY>500);
    /* hide bottom nav on scroll-down, show on scroll-up; always show near top */
    const bn=$("#bnav");
    if(bn){
      const dy=scrollY-lastScrollY;
      if(scrollY<120)bn.classList.remove("hide");
      else if(dy>4)bn.classList.add("hide");
      else if(dy<-4)bn.classList.remove("hide");
    }
    lastScrollY=scrollY;
    if(scrollY>innerHeight*0.6)animBars();
    scrollSpy();ticking=false})},{passive:true});

  $("#toTop").onclick=()=>scrollTo({top:0,behavior:"smooth"});
  $("#year").textContent=new Date().getFullYear();
  addEventListener("keydown",e=>{if(e.key==="Escape"){$$(".mbg.open").forEach(m=>m.classList.remove("open"))}});

  observeReveals();

  /* wait for loader, then run animations */
  await runLoader();
  typeHero();counters();scrollSpy();
  magneticButtons();
  /* re-observe after dynamic content loaded */
  observeReveals();
}
document.readyState==="loading"?addEventListener("DOMContentLoaded",init):init();
