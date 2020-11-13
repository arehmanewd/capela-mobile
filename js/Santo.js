




function onLoad() {
    var date = new Date();
    let currentDate = date.getDate();
    console.log(currentDate);

    // console.log(url);


    let counter = 0;
    let postDiv = 1;
    let month = 11;
    let div = document.getElementById("multiplePosts");


    if (month == 11) {
        for (let oct = currentDate; oct >= 1; oct--) {
            if (oct == 1) {
                month = 10;
            }
            // let url = "oracoes-missionarias-september/capela-virtual-oracoes-missionarias-" + sep + ".html";
            // http.open("HEAD", url, false);
            // http.send();
            if (mainData.santoData.November[oct]) {
                if (counter % 7 == 0 && counter != 0) {
                    postDiv = postDiv + 1
                }

                ++counter;
                if (Array.isArray(mainData.santoData.November[oct])) {

                    console.log(mainData.santoData.November[oct])
                    mainData.santoData.November[oct].map((post, index) => {
                        console.log(post)

                        div.innerHTML += `  <div class="post">
                <img src="${post.img}" class="postImage" alt="">
                <div class="postDetails">
                    <h5 class="GM">${post.title.substr(0,20)+"..."}</h5>
                    <p class="postDate GBI"><i class="fa fa-calendar"></i> ${post.date}</p>
                    <hr>
                    <p class="postParagraph GBR">
                    ${post.details}
                    </p>
                    <a href="${post.route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
                </div>

                </div>`
                    })
                }

                else {
                    div.innerHTML += `<div class="post">
               <img src="${mainData.santoData.November[oct].img}" class="postImage" alt="">
               <div class="postDetails">
                   <h5 class="GM">${mainData.santoData.November[oct].title}</h5>
                   <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.santoData.November[oct].date}</p>
                   <hr>
                   <p class="postParagraph GBR">
                   ${mainData.santoData.November[oct].details}
                   </p>
                   <a href="${mainData.santoData.November[oct].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
               </div>
               </div>`

                }

            }
        }

    }
    if (month == 10) {
        for (let oct = currentDate; oct >= 1; oct--) {
            if (oct == 1) {
                month = 9;
            }
            // let url = "oracoes-missionarias-september/capela-virtual-oracoes-missionarias-" + sep + ".html";
            // http.open("HEAD", url, false);
            // http.send();
            if (mainData.santoData.October[oct]) {
                if (counter % 7 == 0 && counter != 0) {
                    postDiv = postDiv + 1
                }

                ++counter;
                if (Array.isArray(mainData.santoData.October[oct])) {

                    console.log(mainData.santoData.October[oct])
                    mainData.santoData.October[oct].map((post, index) => {
                        console.log(post)

                        div.innerHTML += `  <div class="post">
                <img src="${post.img}" class="postImage" alt="">
                <div class="postDetails">
                    <h5 class="GM">${post.title.substr(0,20)+"..."}</h5>
                    <p class="postDate GBI"><i class="fa fa-calendar"></i> ${post.date}</p>
                    <hr>
                    <p class="postParagraph GBR">
                    ${post.details}
                    </p>
                    <a href="${post.route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
                </div>

                </div>`
                    })
                }

                else {
                    div.innerHTML += `<div class="post">
               <img src="${mainData.santoData.October[oct].img}" class="postImage" alt="">
               <div class="postDetails">
                   <h5 class="GM">${mainData.santoData.October[oct].title}</h5>
                   <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.santoData.October[oct].date}</p>
                   <hr>
                   <p class="postParagraph GBR">
                   ${mainData.santoData.October[oct].details}
                   </p>
                   <a href="${mainData.santoData.October[oct].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
               </div>
               </div>`

                }

            }
        }

    }


    if (month == 9) {
        for (let sep = 31; sep >= 1; sep--) {
            // let url2 = "oracoes-missionarias-September/capela-virtual-oracoes-missionarias-" + sep + ".html";
            // http2.open("HEAD", url2, false);
            // http2.send();
            if (mainData.santoData.September[sep]) {
                if (counter % 7 == 0) {
                    postDiv = postDiv + 1
                }
                // let div = document.getElementById("card-outer-" + postDiv);
                ++counter;
                // console.log(mainData.santoData.September[sep].img+"-------------------------")
                div.innerHTML += `<div class="post">
            <img src="${mainData.santoData.September[sep].img}" class="postImage" alt="">
            <div class="postDetails">
                <h5 class="GM">${mainData.santoData.September[sep].title}</h5>
                <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.santoData.September[sep].date}</p>
                <hr>
                <p class="postParagraph GBR">
                ${mainData.santoData.September[sep].details}
                </p>
                <a href="${mainData.santoData.September[sep].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
            </div>
            </div>`
            }


        }
    }



    if (counter < 8) {
        document.getElementById('link2').style.display = "none"
    }



}
function changePage4() {
    // console.log('working')
    document.getElementById("card-outer-1").style.display = "block"
    document.getElementById("card-outer-2").style.display = "none"
    document.getElementById("card-outer-3").style.display = "none"
    document.getElementById("card-outer-4").style.display = "none"
}
function changePage3() {
    // console.log('working')
    document.getElementById("card-outer-2").style.display = "block"
    document.getElementById("card-outer-1").style.display = "none"
    document.getElementById("card-outer-3").style.display = "none"
    document.getElementById("card-outer-4").style.display = "none"
}
function changePage2() {
    // console.log('working')
    document.getElementById("card-outer-3").style.display = "block"
    document.getElementById("card-outer-1").style.display = "none"
    document.getElementById("card-outer-2").style.display = "none"
    document.getElementById("card-outer-4").style.display = "none"
}
function changePage1() {
    // console.log('working')
    document.getElementById("card-outer-4").style.display = "block"
    document.getElementById("card-outer-1").style.display = "none"
    document.getElementById("card-outer-2").style.display = "none"
    document.getElementById("card-outer-3").style.display = "none"
}




















//Side Panel


var months = {
    'January': '01',
    'February': '02',
    'March': '03',
    'April': '04',
    'May': '05',
    'June': '06',
    'July': '07',
    'August': '08',
    'September': '09',
    'October': '10',
    'November': '11',
    'December': '12'
  }
  function chat_order() {
    var container = $("#postdiv");
    var items = $(".sortpost");

    items.each(function (i) {
      // Convert the string in 'data-event-date' attribute to a more
      // standardized date format
      var BCDate = $(this).attr("data-event-date");
      /*console.log(BCDate);
      var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
      var standartDate = new Date(BCDate).getTime();
      $(this).attr("data-event-date", standartDate);
      // console.log(standartDate);
    });


    items.sort(function (a, b) {
      a = parseFloat($(a).attr("data-event-date"));
      b = parseFloat($(b).attr("data-event-date"));
      return a > b ? -1 : a < b ? 1 : 0;
    }).each(function () {
      container.prepend(this);
    });

  }
  var categoryDate_title = {};
  var showhtml = "";
  let latestPost = 1;
  for (var category in mainData['santoData']) {
    var specificCat = mainData['santoData'];
    var objec = specificCat[category];
    //console.log(objec);

    /*objec.forEach(function(element,index){
      console.log(element);
      console.log(index);
    });
    */
    for (var getdays in objec) {
      var checkarr = objec[getdays];
      //  console.log(checkarr)
      if (Array.isArray(checkarr)) {
        for (postdesp in checkarr) {
          //console.log(putm[mydesp].img);
          var dayname = postdesp;
          var postdateShow = getdays + "/" + months[category] + "/2020";
          var postdateSort = "2020-" + months[category] + "-" + getdays;
          const date1 = new Date(postdateSort).getTime();
          // console.log(postdateSort+'--------------')
          const date2 = new Date().getTime();
          if (date1 < date2) {
        
            showhtml += `<a href="${postRoute}" class="santoPrevious sortpost" data-event-date="${postdateSort}">
            <div class="flex " >
            <div class="flex-img">
              <img src="${checkarr[postdesp].route}" width="100%" alt="" />
            </div>
            <div class="semana-flex-heading">
              <h6>${checkarr[postdesp].title}</h6>
              <p class="postDate GBI">
                <i class="fa fa-calendar"></i> ${checkarr[postdesp].date}</p>
            </div>
            </div></a>`;
          }

        }
      }
      else {
        var dayname = getdays;
        var postdateShow = objec[getdays].date
        var postdateSort = "2020-" + months[category] + "-" + getdays;
        const date1 = new Date(postdateSort).getTime();
        const date2 = new Date().getTime();
        if (date1 < date2) {
  
          showhtml +=`<a href="${objec[getdays].route}" class="santoPrevious sortpost" data-event-date="${postdateSort}">
          <div class="flex " >
          <div class="flex-img">
            <img src="${objec[getdays].img}" width="100%" alt="" />
          </div>
          <div class="semana-flex-heading">
            <h6>${objec[getdays].title.substr(0,20)+"..."}</h6>
            <p class="postDate GBI">
              <i class="fa fa-calendar"></i> ${objec[getdays].date}</p>
          </div>
          </div></a>`;
        }
      }
    }

  }
  document.getElementById("postdiv").innerHTML = showhtml;
  chat_order();
  var ul = $('#postdiv');
  ul.children().each(function (i, div) { ul.prepend(div) });
  jQuery("#postdiv").find(".flex").each(function (i) {
    if (i > 6) {
      jQuery(this).remove();
    }
  });