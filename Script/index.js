

document.querySelector("#addwear").addEventListener("submit", function(e){
    e.preventDefault()
    const addForm = new FormData(e.target)

    const title = addForm.get("title")
    const desc = addForm.get("desc")
    const image = addForm.get("image")
    const price = addForm.get("price")
    const size = addForm.get("size")

    const form = {
        id: Math.floor(Math.random() * 1000000 + 9999999),
        title,
        desc,
        image,
        price,
        size
    }

    if(localStorage.getItem("availableWears") === null){
        localStorage.setItem("availableWears", "[]")
    }

    const addw = JSON.parse(localStorage.getItem("availableWears"))
    addw.push(form)

    localStorage.setItem("availableWears", JSON.stringify(addw))

    document.querySelector("#title").value = ""
    document.querySelector("#desc").value = ""
    document.querySelector("#image").value = ""
    document.querySelector("#price").value = ""
    document.querySelector("#size").value = ""


    document.querySelector("#alert").style.display = "flex"
    setTimeout(function() {
        document.querySelector("#alert").style.display = "none"
    }, 3000)

 
    
})

const setTitle = () => {
    let title = document.querySelector("#title").value

    if(title.value == "" || title.value == " "){
        document.querySelector("#wtitle").innerHTML = "No Item Available"
    }else{
        document.querySelector("#wtitle").innerHTML = title
    }
}

const setDescription = () => {
    let description = document.querySelector("#desc").value
    document.querySelector("#wdesc").innerHTML = description
}

const setImage = () => {
    let image = document.querySelector("#image").value
    document.querySelector("#wimage").src = image
}

const setPrice = () => {
    let price = document.querySelector("#price").value
    document.querySelector("#wprice").innerHTML = "N" + price

    console.log(price)
}

const setSize = () => {
    let size = document.querySelector("#size").value
    if(size == "s"){
        document.querySelector("#s").style.border = "2px solid rgb(181, 7, 88)"
        document.querySelector("#m").style.border = "0px"
        document.querySelector("#l").style.border = "0px"
        document.querySelector("#xl").style.border = "0px"
    }
    else if(size == "m"){
        document.querySelector("#m").style.border = "2px solid rgb(181, 7, 88)"
        document.querySelector("#s").style.border = "0px"
        document.querySelector("#l").style.border = "0px"
        document.querySelector("#xl").style.border = "0px"
    }
    else if(size == "l"){
        document.querySelector("#l").style.border = "2px solid rgb(181, 7, 88)"
        document.querySelector("#m").style.border = "0px"
        document.querySelector("#s").style.border = "0px"
        document.querySelector("#xl").style.border = "0px"
    }
    else{
        document.querySelector("#xl").style.border = "2px solid rgb(181, 7, 88)"
        document.querySelector("#m").style.border = "0px"
        document.querySelector("#l").style.border = "0px"
        document.querySelector("#s").style.border = "0px"
    }
}