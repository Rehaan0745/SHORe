const EVENTS=[
  {"id":"E01","sport":"Cricket","category":"Cricket 10-over","division":"Men","basis":"Team","fee":3500,"prize":40000,"venue":"Cricket Stadium"},

  {"id":"E02","sport":"Athletics","category":"100m","division":"Men","basis":"Player","fee":200,"prize":4500,"venue":"Cricket Stadium"},
  {"id":"E03","sport":"Athletics","category":"100m","division":"Women","basis":"Player","fee":200,"prize":4500,"venue":"Cricket Stadium"},
  {"id":"E04","sport":"Athletics","category":"200m","division":"Men","basis":"Player","fee":200,"prize":4500,"venue":"Cricket Stadium"},
  {"id":"E05","sport":"Athletics","category":"200m","division":"Women","basis":"Player","fee":200,"prize":4500,"venue":"Cricket Stadium"},
  {"id":"E06","sport":"Athletics","category":"4x100 Relay","division":"Men","basis":"Team","fee":800,"prize":12000,"venue":"Cricket Stadium"},
  {"id":"E07","sport":"Athletics","category":"4x100 Relay","division":"Women","basis":"Team","fee":800,"prize":12000,"venue":"Cricket Stadium"},
  {"id":"E08","sport":"Athletics","category":"4x100 Relay","division":"Mixed","basis":"Team","fee":800,"prize":12000,"venue":"Cricket Stadium"},

  {"id":"E13","sport":"Chess","category":"Singles","division":"Men","basis":"Player","fee":300,"prize":4500,"venue":"Karnam Malleshwari Hall"},
  {"id":"E14","sport":"Chess","category":"Singles","division":"Women","basis":"Player","fee":300,"prize":4500,"venue":"Karnam Malleshwari Hall"},

  {"id":"E15","sport":"Table Tennis","category":"Singles","division":"Men","basis":"Player","fee":400,"prize":7500,"venue":"Karnam Malleshwari Hall"},
  {"id":"E16","sport":"Table Tennis","category":"Singles","division":"Women","basis":"Player","fee":400,"prize":7500,"venue":"Karnam Malleshwari Hall"},
  {"id":"E17","sport":"Table Tennis","category":"Doubles","division":"Men","basis":"Pair","fee":800,"prize":12000,"venue":"Karnam Malleshwari Hall"},
  {"id":"E18","sport":"Table Tennis","category":"Doubles","division":"Women","basis":"Pair","fee":800,"prize":12000,"venue":"Karnam Malleshwari Hall"},
  {"id":"E19","sport":"Table Tennis","category":"Mixed Doubles","division":"Mixed","basis":"Pair","fee":800,"prize":12000,"venue":"Karnam Malleshwari Hall"},

  {"id":"E20","sport":"Badminton","category":"Singles","division":"Men","basis":"Player","fee":400,"prize":7500,"venue":"KRM Indoor Stadium"},
  {"id":"E21","sport":"Badminton","category":"Singles","division":"Women","basis":"Player","fee":400,"prize":7500,"venue":"KRM Indoor Stadium"},
  {"id":"E22","sport":"Badminton","category":"Doubles","division":"Men","basis":"Pair","fee":800,"prize":12000,"venue":"KRM Indoor Stadium"},
  {"id":"E23","sport":"Badminton","category":"Doubles","division":"Women","basis":"Pair","fee":800,"prize":12000,"venue":"KRM Indoor Stadium"},
  {"id":"E24","sport":"Badminton","category":"Mixed Doubles","division":"Mixed","basis":"Pair","fee":800,"prize":12000,"venue":"KRM Indoor Stadium"},

  {"id":"E25","sport":"Kabaddi","category":"Team","division":"Men","basis":"Team","fee":2000,"prize":22500,"venue":"Tennis Court"},

  {"id":"E26","sport":"Pickleball","category":"Singles","division":"Men","basis":"Player","fee":400,"prize":6000,"venue":"Pickleball Court"},
  {"id":"E27","sport":"Pickleball","category":"Singles","division":"Women","basis":"Player","fee":400,"prize":6000,"venue":"Pickleball Court"},
  {"id":"E28","sport":"Pickleball","category":"Doubles","division":"Men","basis":"Pair","fee":500,"prize":7500,"venue":"Pickleball Court"},
  {"id":"E29","sport":"Pickleball","category":"Doubles","division":"Women","basis":"Pair","fee":500,"prize":7500,"venue":"Pickleball Court"},
  {"id":"E30","sport":"Pickleball","category":"Mixed Doubles","division":"Mixed","basis":"Pair","fee":500,"prize":7500,"venue":"Pickleball Court"},

  {"id":"E31","sport":"Football","category":"Football 11v11","division":"Men","basis":"Team","fee":3000,"prize":30000,"venue":"GIMSR Ground"},
  {"id":"E32","sport":"Football","category":"Football 5v5","division":"Men","basis":"Team","fee":2000,"prize":24000,"venue":"GIMSR Ground"},
  {"id":"E33","sport":"Volleyball","category":"Team","division":"Men","basis":"Team","fee":2000,"prize":22500,"venue":"GIMSR Ground"},
  {"id":"E34","sport":"Basketball","category":"Team","division":"Men","basis":"Team","fee":2000,"prize":24000,"venue":"GIMSR Ground"},
  {"id":"E35","sport":"Throwball","category":"Team","division":"Women","basis":"Team","fee":2000,"prize":22500,"venue":"GIMSR Ground"},

  {"id":"E36","sport":"Esports","category":"Valorant","division":"Open","basis":"Team","fee":111,"prize":9000,"venue":"MBA Classroom"},
  {"id":"E37","sport":"Esports","category":"BGMI","division":"Open","basis":"Team","fee":111,"prize":9000,"venue":"MBA Classroom"},
  {"id":"E38","sport":"Esports","category":"Free Fire","division":"Open","basis":"Team","fee":111,"prize":9000,"venue":"MBA Classroom"}
];


const META={

  "Cricket":[
    "TEAM SPORT",
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1600&q=88"
  ],

  "Athletics":[
    "TRACK & FIELD",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=88"
  ],

  "Chess":[
    "MIND SPORT",
    "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1600&q=88"
  ],

  "Table Tennis":[
    "RACKET SPORT",
    "https://images.unsplash.com/photo-1534158914592-062992f30b9c?auto=format&fit=crop&w=1600&q=88"
  ],

  "Badminton":[
    "RACKET SPORT",
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1600&q=88"
  ],

  "Kabaddi":[
    "TEAM / COMBAT",
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1600&q=88"
  ],

  "Pickleball":[
    "RACKET SPORT",
    "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1600&q=88"
  ],

  "Football":[
    "TEAM SPORT",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=88"
  ],

  "Volleyball":[
    "TEAM SPORT",
    "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1600&q=88"
  ],

  "Basketball":[
    "TEAM SPORT",
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=88"
  ],

  "Throwball":[
    "TEAM SPORT",
    "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=1600&q=88"
  ],

  "Esports":[
    "ESPORTS",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=88"
  ]

};


const money =
  n =>
    "₹" +
    Number(n).toLocaleString("en-IN");


const sports =
  [...new Set(EVENTS.map(e => e.sport))];


let active = "All";

let activeDivision = "All";


const filters =
  document.getElementById("filters");

const groups =
  document.getElementById("groups");

const search =
  document.getElementById("search");


filters.innerHTML =
  ["All",...sports]
    .map(
      s =>
        `<button
          class="filter ${s==="All"?"active":""}"
          data-sport="${s}">
          ${s}
        </button>`
    )
    .join("");


filters
  .querySelectorAll("button")
  .forEach(
    b =>
      b.onclick = () => {

        active =
          b.dataset.sport;

        filters
          .querySelectorAll("button")
          .forEach(
            x =>
              x.classList.remove(
                "active"
              )
          );

        b.classList.add("active");

        render();

      }
  );


document
  .querySelectorAll(".divisionFilter")
  .forEach(
    b =>
      b.addEventListener(
        "click",
        () => {

          activeDivision =
            b.dataset.division;

          document
            .querySelectorAll(
              ".divisionFilter"
            )
            .forEach(
              x =>
                x.classList.remove(
                  "active"
                )
            );

          b.classList.add("active");

          render();

        }
      )
  );


document
  .querySelectorAll(".divisionHero")
  .forEach(
    b =>
      b.addEventListener(
        "click",
        () => {

          activeDivision =
            b.dataset.division;

          document
            .querySelectorAll(
              ".divisionFilter"
            )
            .forEach(
              x =>
                x.classList.toggle(
                  "active",
                  x.dataset.division ===
                  activeDivision
                )
            );

          render();

          document
            .getElementById("groups")
            .scrollIntoView({
              behavior:"smooth",
              block:"start"
            });

        }
      )
  );


search.oninput =
  render;


function render(){

  const q =
    search.value
      .trim()
      .toLowerCase();


  document.getElementById(
    "menCount"
  ).textContent =
    `${
      EVENTS.filter(
        e => e.division === "Men"
      ).length
    } events`;


  document.getElementById(
    "womenCount"
  ).textContent =
    `${
      EVENTS.filter(
        e => e.division === "Women"
      ).length
    } events`;


  const list =
    EVENTS.filter(
      e =>
        (active === "All" ||
          e.sport === active) &&

        (activeDivision === "All" ||
          e.division === activeDivision) &&

        (
          !q ||

          [
            e.sport,
            e.category,
            e.division,
            e.basis,
            e.venue,
            e.id
          ]
          .join(" ")
          .toLowerCase()
          .includes(q)
        )
    );


  document.getElementById(
    "count"
  ).textContent =
    `${list.length} event${
      list.length === 1 ? "" : "s"
    }`;


  if(!list.length){

    groups.innerHTML =
      '<div class="empty">No event matches your search. Try another keyword or sport.</div>';

    return;

  }


  const by = {};

  list.forEach(
    e =>
      (by[e.sport] ??= [])
        .push(e)
  );


  groups.innerHTML =
    Object
      .entries(by)
      .map(
        ([sport,arr]) => {

          const m =
            META[sport];


          return `
            <article
              class="sport reveal">

              <div class="cover">

                <img
                  class="sportphoto"
                  src="${m[1]}"
                  alt="${sport} sports photography"
                  loading="lazy"
                  onerror="this.style.display='none'"
                >

                <div
                  class="coverFallback">
                </div>

                <div
                  class="coverContent">

                  <div class="tag">
                    ${m[0]}
                  </div>

                  <div class="sportname">
                    ${sport}
                  </div>

                </div>

                <div class="sportcount">
                  ${arr.length}
                  EVENT${arr.length===1?"":"S"}
                </div>

              </div>


              <div
                class="cards ${
                  arr.length===1
                    ? "single"
                    : ""
                }">

                ${
                  arr
                    .map(
                      e =>
                        `
                        <button
                          class="card"
                          data-id="${e.id}"
                          data-division="${e.division}">

                          <div>

                            <div class="top">

                              <span class="id">
                                ${e.id} · ${e.basis}
                              </span>

                              <span
                                class="division ${e.division.toLowerCase()}">
                                ${e.division}
                              </span>

                            </div>

                            <div class="eventname">
                              ${e.category}
                            </div>

                            <div class="sub">
                              ${e.venue}
                            </div>

                          </div>


                          <div class="bottom">

                            <div class="metrics">

                              <div class="metric">

                                <label>
                                  Entry
                                </label>

                                <strong>
                                  ${money(e.fee)}
                                </strong>

                              </div>


                              <div class="metric">

                                <label>
                                  Prize
                                </label>

                                <strong>
                                  ${money(e.prize)}
                                </strong>

                              </div>

                            </div>


                            <span class="detailbtn">
                              DETAILS ↗
                            </span>

                          </div>

                        </button>
                        `
                    )
                    .join("")
                }

              </div>

            </article>
          `;

        }
      )
      .join("");


  document
    .querySelectorAll(".card")
    .forEach(
      c =>
        c.onclick =
          () =>
            open(c.dataset.id)
    );


  observe();

}


function open(id){

  const e =
    EVENTS.find(
      x => x.id === id
    );

  const m =
    META[e.sport];


  document.getElementById(
    "pic"
  ).style.backgroundImage =
    `url('${m[1]}')`;


  document.getElementById(
    "mk"
  ).textContent =
    `${e.sport} · ${e.category}`;


  document.getElementById(
    "mt"
  ).textContent =
    e.category;


  document.getElementById(
    "dv"
  ).textContent =
    e.division;


  document.getElementById(
    "bs"
  ).textContent =
    e.basis;


  document.getElementById(
    "fe"
  ).textContent =
    money(e.fee);


  document.getElementById(
    "pr"
  ).textContent =
    money(e.prize);


  document.getElementById(
    "ve"
  ).textContent =
    e.venue;


  document.getElementById(
    "ei"
  ).textContent =
    e.id;


  document
    .getElementById("back")
    .classList
    .add("open");


  document.body.style.overflow =
    "hidden";

}


function close(){

  document
    .getElementById("back")
    .classList
    .remove("open");

  document.body.style.overflow =
    "";

}


document
  .getElementById("close")
  .onclick =
    close;


document
  .getElementById("back")
  .onclick =
    e => {

      if(
        e.target.id === "back"
      ){
        close();
      }

    };


document.onkeydown =
  e => {

    if(e.key === "Escape"){
      close();
    }

  };


let io;


function observe(){

  if(io){
    io.disconnect();
  }


  io =
    new IntersectionObserver(
      es =>
        es.forEach(
          e => {

            if(e.isIntersecting){

              e.target
                .classList
                .add("show");

              io.unobserve(e.target);

            }

          }
        ),
      {
        threshold:.08
      }
    );


  document
    .querySelectorAll(".reveal")
    .forEach(
      e =>
        io.observe(e)
    );

}


/* =========================
   SHORe MOTION ENGINE
========================= */

const reduced =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


const canvas =
  document.getElementById(
    "liquidCanvas"
  );


const ctx =
  canvas.getContext(
    "2d",
    {
      alpha:true
    }
  );


let cw = 0;
let ch = 0;
let dpr = 1;
let raf = 0;
let running = false;
let last = 0;


const palette = [
  "#152E9B",
  "#88C2F9",
  "#E7C69E",
  "#2F5BFF",
  "#1B6FD6"
];


const blobs =
  palette.map(
    (color,i) => ({
      color,

      x:
        .08 +
        i*.21,

      y:
        .16 +
        (i%3)*.29,

      vx:
        (i%2 ? -.00018 : .00015) *
        (1+i*.05),

      vy:
        (i%2 ? .00013 : -.00011) *
        (1+i*.04),

      r:
        .20 +
        (i%3)*.045,

      a:
        .22 +
        (i%2)*.045,

      phase:
        i*1.7
    })
  );


function resizeCanvas(){

  dpr =
    Math.min(
      devicePixelRatio || 1,
      1.5
    );

  cw =
    innerWidth;

  ch =
    innerHeight;


  canvas.width =
    Math.max(
      1,
      Math.floor(cw*dpr)
    );


  canvas.height =
    Math.max(
      1,
      Math.floor(ch*dpr)
    );


  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );

}


function hexA(hex,a){

  return (
    hex +
    Math.max(
      0,
      Math.min(
        255,
        Math.round(a*255)
      )
    )
    .toString(16)
    .padStart(2,"0")
  );

}


function drawLiquid(t){

  if(
    !running ||
    reduced
  ){
    return;
  }


  const dt =
    Math.min(
      32,
      t-last || 16
    );


  last =
    t;


  ctx.clearRect(
    0,
    0,
    cw,
    ch
  );


  ctx.globalCompositeOperation =
    "screen";


  blobs.forEach(
    (b,i) => {

      b.x +=
        b.vx * dt;

      b.y +=
        b.vy * dt;

      b.phase +=
        .0025 * dt;


      if(
        b.x < -.18 ||
        b.x > 1.18
      ){
        b.vx *= -1;
      }


      if(
        b.y < -.18 ||
        b.y > 1.18
      ){
        b.vy *= -1;
      }


      const wobble =
        Math.sin(
          b.phase
        )*.025;


      const x =
        (b.x+wobble)*cw;


      const y =
        (
          b.y +
          Math.cos(
            b.phase*.8
          )*.018
        )*ch;


      const r =
        b.r *
        Math.min(
          cw,
          ch
        );


      const g =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          r
        );


      g.addColorStop(
        0,
        hexA(
          b.color,
          b.a
        )
      );


      g.addColorStop(
        .34,
        hexA(
          b.color,
          b.a*.58
        )
      );


      g.addColorStop(
        .7,
        hexA(
          b.color,
          .10
        )
      );


      g.addColorStop(
        1,
        hexA(
          b.color,
          0
        )
      );


      ctx.fillStyle =
        g;


      ctx.beginPath();

      ctx.arc(
        x,
        y,
        r,
        0,
        Math.PI*2
      );

      ctx.fill();

    }
  );


  ctx.globalCompositeOperation =
    "source-over";


  raf =
    requestAnimationFrame(
      drawLiquid
    );

}


function startLiquid(){

  if(
    reduced ||
    running
  ){
    return;
  }

  running = true;

  last =
    performance.now();

  raf =
    requestAnimationFrame(
      drawLiquid
    );

}


function stopLiquid(){

  running = false;

  if(raf){

    cancelAnimationFrame(
      raf
    );

    raf = 0;

  }

}


resizeCanvas();


addEventListener(
  "resize",
  resizeCanvas,
  {
    passive:true
  }
);


document.addEventListener(
  "visibilitychange",
  () =>
    document.hidden
      ? stopLiquid()
      : startLiquid()
);


startLiquid();


/* =========================
   SCROLL PROGRESS
========================= */

const progress =
  document.getElementById(
    "scrollProgress"
  );


function updateScroll(){

  const max =
    document.documentElement
      .scrollHeight -
    innerHeight;


  progress.style.width =
    (
      max > 0
        ? Math.min(
            100,
            scrollY/max*100
          )
        : 0
    ) + "%";


  if(!reduced){

    const hero =
      document.querySelector(
        ".heroimg"
      );


    if(hero){

      hero.style.transform =
        `scale(1.02)
         translate3d(
           0,
           ${Math.min(
             34,
             scrollY*.035
           )}px,
           0
         )`;

    }

  }

}


addEventListener(
  "scroll",
  updateScroll,
  {
    passive:true
  }
);


updateScroll();


/* =========================
   STAT COUNTERS
========================= */

const stats =
  document.querySelector(
    ".stats"
  );


const statsIO =
  new IntersectionObserver(
    es => {

      es.forEach(
        e => {

          if(
            !e.isIntersecting
          ){
            return;
          }


          e.target
            .classList
            .add("visible");


          e.target
            .querySelectorAll(
              "[data-count]"
            )
            .forEach(
              el => {

                if(
                  el.dataset.done
                ){
                  return;
                }


                el.dataset.done =
                  "1";


                const target =
                  Number(
                    el.dataset.count
                  );


                const start =
                  performance.now();


                const duration =
                  1300;


                const tick =
                  now => {

                    const p =
                      Math.min(
                        1,
                        (now-start) /
                        duration
                      );


                    const ease =
                      1 -
                      Math.pow(
                        1-p,
                        3
                      );


                    const val =
                      Math.round(
                        target*ease
                      );


                    el.textContent =
                      "₹" +
                      (
                        val/100000
                      )
                      .toFixed(1)
                      .replace(
                        ".0",
                        ""
                      ) +
                      "L";


                    if(
                      p < 1
                    ){
                      requestAnimationFrame(
                        tick
                      );
                    }

                  };


                requestAnimationFrame(
                  tick
                );

              }
            );


          statsIO.unobserve(
            e.target
          );

        }
      );

    },
    {
      threshold:.25
    }
  );


if(stats){
  statsIO.observe(stats);
}


/* =========================
   INITIAL LOAD
========================= */

requestAnimationFrame(
  () =>
    document
      .querySelector(".hero")
      .classList
      .add("loaded")
);


render();
