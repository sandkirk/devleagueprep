// 1. Convert the following `for` loops to `while` loops
//
// 2. Replace Han with per-movie Wookie noises using `if...else if...else`:
// http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes

var starWarsMovies = [ 'anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    for (var i = 0; i < 3; i++) {
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = tmp;    
    }
}

function chewie() {
    for (var i = 0; i < starWarsMovies.length; i++) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
    }   
}

chewie();
sortChronologically();
chewie(); 
//Convert the following for loops to while loops:
//Replace Han with per-Moview Wookie noises using if...else if...else:
//http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes

var starWarsMovies = [ 'anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    var i = 0;
    while (i < 3){}
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = tmp;  
        i++;  
}


function chewie() {
    console.log();

    var i = 0; 
    while (i < starWarsMovies.length);{
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
        i++;
    }   
}


//change to ojects; obj need key value pairs.

var starWarsMovies = 
[ { title: 'A New Hope',
    episode: 4,
    year: 1977
},
{   title: 'The Empire strikes Back',
    episode: 3,
    year: 1977,
    actors: [
    {
        lastName: 'Ford',
        firstName: 'Harrison'
        },
        {
        lastName: 'Fischer',
        firstName: 'Carrie'
    }
        //to access harrison fords last name : StarWarsMovies[1].actors[0].firstName or
        //starWarsMovies[1]['actors'][0]['firstName']
}

function sortChronologically() {
    var i = 0;
    while (i < 3){}
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = tmp;  
        i++;  
}


function chewie() {
    console.log();

    var i = 0; 
    while (i < starWarsMovies.length);{
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
        i++;
    }   
}






































