//Question 1

const sum = (a, b) => a + b;

//Question 2

const url = "https://api.rawg.io/api/games?genres=sports";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
      for (let i = 0; i < json.length; i++) {
        console.dir(json[i]);
      })
    .catch(function(error) {
      document.location.href = "error.html";
    });

    //Question 3

    const sentence = document.querySelector("These cats are outrageous");

    const wordReplaced = genres.replace("cats", "giraffes");

    sentence.innerText = wordReplaced;


    //Question 4

    var sentence = document.querySelector("https://my.site.com?userId=7");

    let id;

    if (params.has("id")) {
      id = params.get("id");
    } else if (id > 10) {
      document.location.href = "first.html";
    } else if (id >= 10) {
      document.location.href = "second.html";
    } else {
      document.location.href = "third.html";
    };


    //Question 5
 
    const child = document.getElementById("btn");
    const parent = document.getElementById("container");

    parent.removeChild(btn);


    //Question 6

    function createDetails(details) {
      const container = document.querySelector(".animals");
      const parrotsElement = document.createElement("li");

      parrotsElement.className = "parrots";
      const liContent = document.createTextNode("Parrots");
      cows.before(liContent);
    };

    //Question 7
    
    const url = "https://api.rawg.io/api/games?genres=sports"; fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(newValue) {
      document.getElementByTag("div").innerHTML = response.json;
    })
    .catch(function(error) {
      console.log("Error");
    });
