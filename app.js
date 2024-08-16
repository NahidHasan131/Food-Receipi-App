//Dom element select
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

//check input object command
//console.dir(searchInput)
//get data using arrow function
// const getData=()=>{
//     console.log(searchInput.value)
// }

searchBtn.addEventListener("click",getData)

function getData(){
    const searchValue = searchInput.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    console.log()

    fetch(url)
    .then((res)=>res.json())  //which is return data or we can use (res)=>{return res.json()}
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

















