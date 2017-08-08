let bara = `${value}`

fetch("http://recipepuppyproxy.herokuapp.com/api/?q=")
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
  <div class="${i}"><dt>TITLE</dt><dd>${specdata.title}</dd>
  <img src="${specdata.thumbnail}" href="${specdata.href}""/>
  <dt></dt><dd>${specdata.ingredients}</dd></div>
  `


                // let divresult =".result"+ i
                // console.log(result);
                let results = document.querySelector('.foodsself')
                console.log("reulttttttttssdfgdfbgdf" + results);
                results.innerHTML += details

}
            })

        })
