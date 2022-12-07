const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.id;


  const addw = JSON.parse(localStorage.getItem("availableWears"))

  for (let i = 0; i < addw.length; i++) {
    if (addw[i].id == value) {
      document.querySelector("#title").innerHTML = addw[i].title;
      document.querySelector("#product-image").src = addw[i].image;
      document.querySelector("#price").innerHTML = addw[i].price;
      document.querySelector("#desc").innerHTML = addw[i].desc;
      document.querySelector("#size").innerHTML = "Size: " + addw[i].size;
      break;
    }
  }
  
