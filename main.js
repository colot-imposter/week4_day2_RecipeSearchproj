

let srchBttn = document.querySelector('.searchBttn');
srchBttn.addEventListener('click', srchwitthis)

function srchwitthis() {
    let searchtxBox = document.querySelector('.searchBox')
    console.log("oooooopopopopop" + searchtxBox);

let baraSearch = searchtxBox.value
  console.log(baraSearch);

    let baraURL = "http://recipepuppyproxy.herokuapp.com/api/?q=" + baraSearch;
    console.log(baraURL);
    fetch(baraURL)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log("ooops kabibles, john robertson. wir haben einen problem mit deiner status of uber" + response.status);
                    return
                }
                response.json().then(function(data) {
                    for (var i = 1; i < data.results.length; i++) {


                        let specdata = data.results[i]
                        console.log(i);
                        console.log("specdataaaa" + specdata.href);
                        let details = `
  <div class="${i}"><dt></dt><dd>${specdata.title}</dd>
  <img src="${specdata.thumbnail}" href="${specdata.href}""/>
  <dt>Ingredients</dt><dd class="ingredients">${specdata.ingredients}</dd></div>
  `

                        let results = document.querySelector('.foodsself')
                        results.innerHTML += details

                    }
                })

            })
}
