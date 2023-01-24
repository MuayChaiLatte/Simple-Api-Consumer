document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const animalKingdom = document.querySelector('input').value
    try {
        const response = await fetch(`https://animal-facts-api.herokuapp.com/api/${animalKingdom}`)
        const data = await response.json()
        document.querySelector('h2').innerText = data.fact
    }
    catch(error) {
        console.log(error)
    }
}