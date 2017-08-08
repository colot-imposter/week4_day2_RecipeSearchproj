

let results = document.querySelector('.foodsself')
let srchBttn = document.querySelector('.searchBttn');
srchBttn.addEventListener('click', srchwitthis)

function srchwitthis() {
    let searchtxBox = document.querySelector('.searchBox')
    console.log("oooooopopopopop" + searchtxBox);

let baraSearch = searchtxBox.value

  console.log(baraSearch);

    let baraURL = "http://recipepuppyproxy.herokuapp.com/api/?q=steak" + baraSearch;
    console.log(baraURL);
    fetch(baraURL)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log("ooops kabibles, john robertson. wir haben einen problem mit deiner status of uber" + response.status);
                    return
                }
                response.json().then(function(data) {

                  results.innerHTML=""
                    for (var i = 0; i < data.results.length; i++) {


                        let specdata = data.results[i]

                        //no photo

                          if(specdata.thumbnail === ""){
                          specdata.thumbnail="http://via.placeholder.com/350x150"
                        }

                        let details = `
  <div class="${i}"><dl><dt></dt><dd class="foodTitles">${specdata.title}</dd>
  <img src="${specdata.thumbnail}" href="${specdata.href}""/>
  <dt>Ingredients</dt><dd class="ingredients">${specdata.ingredients}</dd></dl></div>
  `


                        results.innerHTML += details

                    }
                })

            })
}
