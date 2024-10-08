//Dom element select
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const foodDisplayContainer = document.getElementById('foodDisplayContainer');
const modalInfo = document.getElementById('modal-info');

//check input object command
//console.dir(searchInput)
//get data using arrow function
// const getData=()=>{
//     console.log(searchInput.value)
// }

window.addEventListener("load",()=>{
  getData();
})

searchBtn.addEventListener("click",getData)

function getData(){
  document.getElementById("spinner").classList.remove('hidden');
  const searchValue = searchInput.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`

  fetch(url)
  .then((res)=>res.json())  //which is return data or we can use (res)=>{return res.json()}
  .then((data)=>{
    displayCards(data.meals);
    document.getElementById("spinner").classList.add('hidden');
  })
  .catch((error)=>{
    console.log(error)
  });
}

function displayCards(data) {
  if (!data || data.length === 0) {
      return (foodDisplayContainer.innerHTML = "<h2>No data found</h2>");
  }

  let childHtml = "";
  for (const item of data) {
      const { strMealThumb, strMeal, strInstructions, idMeal } = item;

      let html = ` 
          <div class="card card-compact bg-base-100 shadow-xl">
              <figure>
                  <img class="w-full h-60 object-cover" src=${strMealThumb} alt="Meal image"/>
              </figure>
              <div class="card-body">
                  <h2 class="card-title">${strMeal}</h2>
                  <p>${strInstructions.slice(0, 100)}</p>
                  <div class="card-actions justify-end" onclick="modalFn(${idMeal})">
                      <label for="my-modal-6" class="btn btn-warning text-white">View Details</label>
                  </div>
              </div>
          </div>`;

      childHtml += html;
  }
  foodDisplayContainer.innerHTML = childHtml;
}

function modalFn(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  fetch(url)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          // Add code to display data in the modal
      })
      .catch((error) => {
          console.error("Error fetching modal data:", error);
      });
}





















