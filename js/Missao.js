

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
  for (var category in mainData['missaoData']) {
    var specificCat = mainData['missaoData'];
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
        
            showhtml += `<a href="${postRoute}" class="santoPrevious"><div class="flex sortpost" data-event-date="${postdateSort}">
            <div class="flex-img">
              <img src="${checkarr[postdesp].route}" width="100%" alt="" />
            </div>
            <div class="semana-flex-heading">
              <h6>${checkarr[postdesp].title.substr(0,20)+"..."}</h6>
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
  
          showhtml +=`<a href="${objec[getdays].route}" class="santoPrevious"><div class="flex sortpost" data-event-date="${postdateSort}">
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