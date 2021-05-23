

//// JSON Example ////
/// To show your JSON file if the file in same folder you must open it on (Live server)  to show data ////
/// because your Live server opening file as local HTTP

const jsonFile = "JSONFile.json";

async function getInfo() {
    try {
        const response = await fetch(jsonFile);
        const data = await response.json();
    
        showInfo(data);
    } catch (e) {
        console.log(e.massage);
    }
}

function showInfo(data) {
    let firstName = document.querySelector('.name');
    let cuntry = document.querySelector('.cuntry');

    for (const key in data) { 
        firstName.innerHTML += "First Name is: " + `<span class="def"> ${data[key].name} </span>` + "<hr><br>";
        cuntry.innerHTML += "From: " + `<span class="def"> ${data[key].cuntry} </span>` + "<hr><br>";
    }
}

getInfo();



