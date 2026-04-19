
//dad joke site functions//

const slangurl = 'https://urban-dictionary7.p.rapidapi.com/v0/define?term=yeet';
const slangoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be6a03c956mshaee959d6d0ade22p1fb573jsna6b7c2d29696',
		'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

//dad joke api//

const jokeurl = 'https://dad-jokes.p.rapidapi.com/joke/ai/cow';
const jokeoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be6a03c956mshaee959d6d0ade22p1fb573jsna6b7c2d29696',
		'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

let scrollingBox;
let offsetLeftStart;
let scrollLeftStart;
let isMoving;



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


//api look up//
let ipLookupURL = "https://api.ipify.org/?format=json";
let ipLookupOptions = {};


 ///Hardware for DOM loading//
    document.addEventListener("DOMContentLoaded", function () {
        scrollingBox = document.querySelector("#futureInfo");
        isMoving = false;

        scrollingBox.addEventListener("mousedown", function (e) {
            scrollLeftStart = scrollingBox.scrollLeft;
            offsetLeftStart = e.pageX - scrollingBox.offsetLeft;
            isMoving = true;
        });

        scrollingBox.addEventListener("mouseleave", function (e) {
            isMoving = false;
        });

        scrollingBox.addEventListener("mouseup", function (e) {
            isMoving = false;
        });

        scrollingBox.addEventListener("mousemove", function (e) {
            e.preventDefault();
            if (!isMoving) return;
            scrollingBox.scrollLeft = scrollLeftStart - (e.pageX - offsetLeftStart - scrollingBox.offsetLeft);
        });



    });





