function onLoad() {
  var date = new Date();
  let currentDate = date.getDate();
  console.log(currentDate);

  // console.log(url);

  let counter = 0;
  let postDiv = 1;
  let month = 12;
  let div = document.getElementById("multiplePosts");

  if (month == 12) {
    for (let oct = currentDate; oct >= 1; oct--) {
      if (oct == 1) {
        month = 11;
      }
      // let url = "oracoes-missionarias-september/capela-virtual-oracoes-missionarias-" + sep + ".html";
      // http.open("HEAD", url, false);
      // http.send();
      if (mainData.oracoesMissionarias.December[oct]) {
        if (counter % 7 == 0 && counter != 0) {
          postDiv = postDiv + 1;
        }

        ++counter;
        if (Array.isArray(mainData.oracoesMissionarias.December[oct])) {
          console.log(mainData.oracoesMissionarias.December[oct]);
          mainData.oracoesMissionarias.December[oct].map((post, index) => {
            console.log(post);

            div.innerHTML += `  <div class="post">
                <img src="${post.img}" class="postImage" alt="">
                <div class="postDetails">
                    <h5 class="GM">${post.title}</h5>
                    <p class="postDate GBI"><i class="fa fa-calendar"></i> ${post.date}</p>
                    <hr>
                    <p class="postParagraph GBR">
                    ${post.details}
                    </p>
                    <a href="${post.route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
                </div>

                </div>`;
          });
        } else {
          div.innerHTML += `<div class="post">
               <img src="${mainData.oracoesMissionarias.December[oct].img}" class="postImage" alt="">
               <div class="postDetails">
                   <h5 class="GM">${mainData.oracoesMissionarias.December[oct].title}</h5>
                   <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.oracoesMissionarias.December[oct].date}</p>
                   <hr>
                   <p class="postParagraph GBR">
                   ${mainData.oracoesMissionarias.December[oct].details}
                   </p>
                   <a href="${mainData.oracoesMissionarias.December[oct].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
               </div>
               </div>`;
        }
      }
    }
  }

  if (month == 11) {
    for (let oct = 31; oct >= 1; oct--) {
      if (oct == 1) {
        month = 10;
      }
      // let url = "oracoes-missionarias-september/capela-virtual-oracoes-missionarias-" + sep + ".html";
      // http.open("HEAD", url, false);
      // http.send();
      if (mainData.oracoesMissionarias.November[oct]) {
        if (counter % 7 == 0 && counter != 0) {
          postDiv = postDiv + 1;
        }

        ++counter;
        if (Array.isArray(mainData.oracoesMissionarias.November[oct])) {
          console.log(mainData.oracoesMissionarias.November[oct]);
          mainData.oracoesMissionarias.November[oct].map((post, index) => {
            console.log(post);

            div.innerHTML += `  <div class="post">
                <img src="${post.img}" class="postImage" alt="">
                <div class="postDetails">
                    <h5 class="GM">${post.title}</h5>
                    <p class="postDate GBI"><i class="fa fa-calendar"></i> ${post.date}</p>
                    <hr>
                    <p class="postParagraph GBR">
                    ${post.details}
                    </p>
                    <a href="${post.route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
                </div>

                </div>`;
          });
        } else {
          div.innerHTML += `<div class="post">
               <img src="${mainData.oracoesMissionarias.November[oct].img}" class="postImage" alt="">
               <div class="postDetails">
                   <h5 class="GM">${mainData.oracoesMissionarias.November[oct].title}</h5>
                   <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.oracoesMissionarias.November[oct].date}</p>
                   <hr>
                   <p class="postParagraph GBR">
                   ${mainData.oracoesMissionarias.November[oct].details}
                   </p>
                   <a href="${mainData.oracoesMissionarias.November[oct].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
               </div>
               </div>`;
        }
      }
    }
  }
  if (month == 10) {
    for (let oct = 31; oct >= 1; oct--) {
      if (oct == 1) {
        month = 9;
      }
      // let url = "oracoes-missionarias-september/capela-virtual-oracoes-missionarias-" + sep + ".html";
      // http.open("HEAD", url, false);
      // http.send();
      if (mainData.oracoesMissionarias.October[oct]) {
        if (counter % 7 == 0 && counter != 0) {
          postDiv = postDiv + 1;
        }

        ++counter;
        if (Array.isArray(mainData.oracoesMissionarias.October[oct])) {
          console.log(mainData.oracoesMissionarias.October[oct]);
          mainData.oracoesMissionarias.October[oct].map((post, index) => {
            console.log(post);

            div.innerHTML += `  <div class="post">
                <img src="${post.img}" class="postImage" alt="">
                <div class="postDetails">
                    <h5 class="GM">${post.title}</h5>
                    <p class="postDate GBI"><i class="fa fa-calendar"></i> ${post.date}</p>
                    <hr>
                    <p class="postParagraph GBR">
                    ${post.details}
                    </p>
                    <a href="${post.route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
                </div>

                </div>`;
          });
        } else {
          div.innerHTML += `<div class="post">
               <img src="${mainData.oracoesMissionarias.October[oct].img}" class="postImage" alt="">
               <div class="postDetails">
                   <h5 class="GM">${mainData.oracoesMissionarias.October[oct].title}</h5>
                   <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.oracoesMissionarias.October[oct].date}</p>
                   <hr>
                   <p class="postParagraph GBR">
                   ${mainData.oracoesMissionarias.October[oct].details}
                   </p>
                   <a href="${mainData.oracoesMissionarias.October[oct].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
               </div>
               </div>`;
        }
      }
    }
  }

  if (month == 9) {
    for (let sep = 31; sep >= 1; sep--) {
      // let url2 = "oracoes-missionarias-September/capela-virtual-oracoes-missionarias-" + sep + ".html";
      // http2.open("HEAD", url2, false);
      // http2.send();
      if (mainData.oracoesMissionarias.September[sep]) {
        if (counter % 7 == 0) {
          postDiv = postDiv + 1;
        }
        // let div = document.getElementById("card-outer-" + postDiv);
        ++counter;
        // console.log(mainData.oracoesMissionarias.September[sep].img+"-------------------------")
        div.innerHTML += `<div class="post">
            <img src="${mainData.oracoesMissionarias.September[sep].img}" class="postImage" alt="">
            <div class="postDetails">
                <h5 class="GM">${mainData.oracoesMissionarias.September[sep].title}</h5>
                <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.oracoesMissionarias.September[sep].date}</p>
                <hr>
                <p class="postParagraph GBR">
                ${mainData.oracoesMissionarias.September[sep].details}
                </p>
                <a href="${mainData.oracoesMissionarias.September[sep].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
            </div>
            </div>`;
      }
    }
  }

  if (counter < 8) {
    document.getElementById("link2").style.display = "none";
  }
}
function changePage4() {
  // console.log('working')
  document.getElementById("card-outer-1").style.display = "block";
  document.getElementById("card-outer-2").style.display = "none";
  document.getElementById("card-outer-3").style.display = "none";
  document.getElementById("card-outer-4").style.display = "none";
}
function changePage3() {
  // console.log('working')
  document.getElementById("card-outer-2").style.display = "block";
  document.getElementById("card-outer-1").style.display = "none";
  document.getElementById("card-outer-3").style.display = "none";
  document.getElementById("card-outer-4").style.display = "none";
}
function changePage2() {
  // console.log('working')
  document.getElementById("card-outer-3").style.display = "block";
  document.getElementById("card-outer-1").style.display = "none";
  document.getElementById("card-outer-2").style.display = "none";
  document.getElementById("card-outer-4").style.display = "none";
}
function changePage1() {
  // console.log('working')
  document.getElementById("card-outer-4").style.display = "block";
  document.getElementById("card-outer-1").style.display = "none";
  document.getElementById("card-outer-2").style.display = "none";
  document.getElementById("card-outer-3").style.display = "none";
}
