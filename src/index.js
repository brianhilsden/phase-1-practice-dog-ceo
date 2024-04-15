console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById("dog-breeds")
    const imagesList = document.getElementById("dog-image-container")
    const dropdown = document.getElementById("breed-dropdown")
    fetch(imgUrl)
    .then(res=>res.json())
    .then(data=>data.message)
    .then(dogs=>dogs.forEach(dog=>{
        const image = document.createElement("img")
        image.src = dog
        imagesList.appendChild(image)

    }))

    fetch(breedUrl)
    .then(res=>res.json())
    .then(data=>{
        for(const key in data.message){
            const breed = document.createElement("li")
            breed.textContent = key
            breed.style.cursor = "pointer"
            breed.onclick = ()=>{
                breed.style.color = "red"
            }
            dogBreedsList.appendChild(breed)
        }
        dropDownFilter(data.message)
    })
    function dropDownFilter(breeds){
        dropdown.addEventListener("change",()=>{
            dogBreedsList.innerHTML = ""
            for(const key in breeds){
                const breed = document.createElement("li")
                if(key.startsWith(dropdown.value)){
                    breed.textContent = key
                    breed.style.cursor = "pointer"
                    breed.onclick = ()=>{
                        breed.style.color = "red"
                    }
                    dogBreedsList.appendChild(breed)

                }
               
            }
        })
    }
   
    
})