const loadCard=(start = 0, end = 6)=> {
  
  const url= fetch('https://openapi.programming-hero.com/api/ai/tools').then((res) =>res.json())
  .then((data) => showCatagories(data.data, start, end));
  
}

const showCatagories=(cards, start, end)=> {

     const Container=document.getElementById("card-container");
   

      cards.tools=cards.tools.slice(start, end);
      
  cards.tools.forEach( singleCategory => { 
    const cardDiv=document.createElement("div");
    // cardDiv.classList.add("col");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
    <div class="card h-100 ">
    <img src="${singleCategory.image}" class="card-img-top img-fluid " alt="...">
    <div class="card-body">
      <h5 class="card-title fw-bold">Features</h5>
      <ol class="card-body"  >
      <li>${singleCategory.features[0]}</li>
      <li>${singleCategory.features[1]}</li>
      <li>${singleCategory.features[2]}</li>
      </ol> 
    </div>
    <div class="card-footer">
    <div class="mt-5 d-flex justify-content-between">
    <div>

    <div><P class="fw-bold">${singleCategory.name}</P></div>
    <div> <i class="fa-solid  fa-calendar-days " ></i> ${singleCategory.published_in}</div>
    </div>
    <div class="mt-4"> <i class="fa-solid text-danger-emphasis fa-arrow-right" onclick="loadCardDetails('${singleCategory.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>  </div>
    </div>
    </div>
  </div>

     `;
    Container.appendChild(cardDiv);
  
} ) ;

  toggleSpinner(false);


}


document.getElementById("see-more-button").addEventListener("click", function () {
  toggleSpinner(true);
  loadCard(6, 12);
  document.getElementById("see-more-button").style.display = "none";

 })

 const toggleSpinner= isLoading =>{
  const loaderSection= document.getElementById("loader");
  if (isLoading ){
    loaderSection.classList.remove('d-none');

  }
  else{
    loaderSection.classList.add('d-none');
  }
 }

 const loadCardDetails=async id =>{
   const url= `https://openapi.programming-hero.com/api/ai/tool/${id}`
   const response = await fetch(url);
   const data = await response.json();
   loadCardShowDetails(data.data);
 }

 const loadCardShowDetails = id =>{

 
    const modalImage = document.getElementById("modal-img");
    modalImage.src = id.image_link[1];
    const modalImage2 = document.getElementById("modal-img2");
    modalImage2.src = id.image_link[0];
  
  

 
  
  
   

  
}

loadCard(); 









    
 