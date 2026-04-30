
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


document.addEventListener("DOMContentLoaded", function(){

    getJokes();

  document.querySelector("#newJoke").addEventListener("click", getJokes(){

});

}

/*save Joke function*/

function saveJokes() {


     console.log(result);
        document.querySelector("#saveJokes").innerHTML = result[1].save;

    });

document.addEventListener("DOMContentLoaded", function(){

    saveJokes();

  document.querySelector("#copyJoke").addEventListener("click", saveJokes(){

});

}

