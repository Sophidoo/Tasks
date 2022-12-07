const addw = JSON.parse(localStorage.getItem("availableWears"))

if(addw.length <= 0 || addw == null){
    document.querySelector("#nocontent").getElementsByClassName.display = "flex"
    document.querySelector("#products").getElementsByClassName.display = "none"
}else{
    for(let i = 0; i < addw.length; i++){
        document.querySelector("#products").innerHTML += `<div class="productCard">
        <img src="${addw[i].image}" alt="">
        <div class="content">
            <div class="head">
                <h3 class = "prname">${addw[i].title}</h3>
                <p>N${addw[i].price}</p>
            </div>
        </div>
    </div>`
    }
}


const search = () => {
    let search = document.querySelector("#search").value

    let productcard = document.getElementsByClassName("productCard")
    let productName = document.getElementsByClassName("prname")

    for(let i = 0; i < productName.length; i++){
        if (!productName[i].innerHTML.toLowerCase().includes(search)) {
            productcard[i].style.display="none";
        }
        else {
            productcard[i].style.display="flex";                 
        }
    }
}