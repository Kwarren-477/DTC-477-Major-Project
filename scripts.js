
//dad joke site functions//

//dad joke api//

const jokeurl = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const jokeoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be6a03c956mshaee959d6d0ade22p1fb573jsna6b7c2d29696',
		'x-rapidapi-host': 'dad-jokes-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

//urband dictoanry api//

const slangurl = 'https://urban-dictionary7.p.rapidapi.com/v0/define?term=yeet';
const slangoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be6a03c956mshaee959d6d0ade22p1fb573jsna6b7c2d29696',
		'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};




//function to get remote JSON Data//
async function getData(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw (response.status);
        }
    } catch (error) {
        console.error(error);
    }
}


// make function to get jokes
function getJokes() {

    getData(jokeurl, jokeoptions).then(function(result){

        console.log(result);
        document.querySelector("#jokeText").innerHTML = result[0].joke;

    });

}

/*loading DOM code*/

document.addEventListener("DOMContentLoaded", function(){

    getJokes();

  document.getElementById("newJoke").addEventListener("click", function(){
    getJokes();
  });

document.getElementById("copyJoke").addEventListener("click", function(){
    saveJokes();
  });

  document.getElementById("slangSearch").addEventListener("submit", function(){
    slangSearch();
  });


});


/*save Joke function*/

function copyPassage() {
  var jokeText = document.getElementById("saveJoke");
  window.getSelection().selectAllChildren(saveJokes);
  document.copy;
  alert("Copied the text: " + copyText.innerText);
}

    


/*Dictonary Def Area*/

function slangSearch() {
    console.log(result);
    document.querySelector("#slangSearch").innerHTML = result[0].search;
}
