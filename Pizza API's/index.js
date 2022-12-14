const container = document.getElementById("container")
const button = document.getElementById("pizza-btn")
button.addEventListener("click", renderPizza)
const img = document.createElement("img")
img.classList.add('image')
img.alt = "random pizza image"
container.appendChild(img)

async function getRandomPizza() {
    try {
        const req = await fetch("https://foodish-api.herokuapp.com/api/images/pizza")
        const json = await req.json()
        return json.image
    }catch (error) {
        console.log("error happend, see F12 for details")
    }
}

async function renderPizza() {
    try {
        const pizzaImage = await getRandomPizza()
        img.src = pizzaImage
    }catch (error) {
        console.log("error happend, see F12 for details")
    } 
}

(async function () {
    await renderPizza()
})()


