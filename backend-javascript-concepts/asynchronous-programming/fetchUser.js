async function getUser(){
    const user = await fetch('https://api.github.com/Mohamedthayub');
    const response = await data.json();
    console.log(response);
}


getUser();