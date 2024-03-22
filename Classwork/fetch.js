// FUNCTIONS come in many shapes and sizes

function getBirthdate() {
    // DOES SOME HERE 


    // Aonymous function (cannot be called because it doesn't have a name)
    ()=> {
     console.log("Anonymous function is working")
    }

    let randomUser = {}

    // Fetch is a function that makes and API call
    // it takes in the URL of the API as its parameter
    fetch("https://randomuser.me/api/?results=20")
        // Another example of an anonymous function, response is the parameter for 
        // this function, meaning the response from the server witll be stored in 
        // a variable called response

        // Response.json() converts the response into the JSON format
        .then((response => response.json))
    // This .then is the second function called in the promise chain
    // The value stored in the previouse function is almost passed as
    // an argument to the next function even withut a return statement
    // data now h0olds the value of response.json()
        .then((data)=> console.log(date.results[0].name.first))
        .then((name => console.log))
    
    // fetch (https://api.spotify.com/v1/artists/68KmkJeZGfwe10uaivBa2L)
    // .then(response) //Response is undefined until the response comes back from

    }



 


