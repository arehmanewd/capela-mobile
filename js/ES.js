




function onLoad() {
    var date = new Date();
    let currentDate = date.getDate();
    console.log(currentDate);

    // console.log(url);


    let counter = 0;
    let postDiv = 1;
    let month = 10;
    let div = document.getElementById("multiplePosts");


    if (month == 10) {
        for (let oct = currentDate; oct >= 1; oct--) {
            if (oct == 1) {
                month = 9;
            }
            // let url = "oracoes-missionarias-september/capela-virtual-oracoes-missionarias-" + sep + ".html";
            // http.open("HEAD", url, false);
            // http.send();
            if (mainData.espirtualData.October[oct]) {
                if (counter % 7 == 0 && counter != 0) {
                    postDiv = postDiv + 1
                }

                ++counter;
                if (Array.isArray(mainData.espirtualData.October[oct])) {

                    console.log(mainData.espirtualData.October[oct])
                    mainData.espirtualData.October[oct].map((post, index) => {
                        console.log(post)

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

                </div>`
                    })
                }

                else {
                    div.innerHTML += `<div class="post">
               <img src="${mainData.espirtualData.October[oct].img}" class="postImage" alt="">
               <div class="postDetails">
                   <h5 class="GM">${mainData.espirtualData.October[oct].title}</h5>
                   <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.espirtualData.October[oct].date}</p>
                   <hr>
                   <p class="postParagraph GBR">
                   ${mainData.espirtualData.October[oct].details}
                   </p>
                   <a href="${mainData.espirtualData.October[oct].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
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
            if (mainData.espirtualData.September[sep]) {
                if (counter % 7 == 0) {
                    postDiv = postDiv + 1
                }
                // let div = document.getElementById("card-outer-" + postDiv);
                ++counter;
                // console.log(mainData.espirtualData.September[sep].img+"-------------------------")
                div.innerHTML += `<div class="post">
            <img src="${mainData.espirtualData.September[sep].img}" class="postImage" alt="">
            <div class="postDetails">
                <h5 class="GM">${mainData.espirtualData.September[sep].title}</h5>
                <p class="postDate GBI"><i class="fa fa-calendar"></i> ${mainData.espirtualData.September[sep].date}</p>
                <hr>
                <p class="postParagraph GBR">
                ${mainData.espirtualData.September[sep].details}
                </p>
                <a href="${mainData.espirtualData.September[sep].route}" id='santo-link'><button class="postButton GM">LEIA MAIS</button></a>
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
