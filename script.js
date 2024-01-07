let joke='https://v2.jokeapi.dev/joke/Any?type=single'
let container=document.querySelector('p')
let button=document.querySelector('button')
function getJoke(){
    fetch(joke)
    .then((result)=>{return result.json()})
    .then((data)=>{container.textContent=`${data.joke})`,console.log(data.joke) })
}
console.log(container.textContent)
button.addEventListener('click', getJoke)
getJoke()
