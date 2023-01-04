
let arrProducts = [];
let allCategory = [];
let menu = document.getElementById("menu")
let productElement = document.getElementById("products")
let searchTxt = document.getElementById("searchTxt")
let asideSort = document.getElementById("sortAside")

function fillcategory(){
    
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        arrProducts = [...data.products]
        drawProducstHTML();
        aside();
        // console.log( row);
    })
    .catch((err)=>console.log(err))


}
function aside (){
    let row = "";
    arrProducts.map(c=> {
        if(!allCategory.includes(c.category)) {
            allCategory.push(c.category)
        }
    })

    allCategory.map((categoryName, index)=>{
        row += `<div class="nav-item pt-3 pb-3">
                    <a class="nav-link" href="#">${categoryName}</a>
                </div>`
         
    })

    menu.innerHTML = row;
    asideSort.innerHTML = row;
}








fillcategory();

function drawProducstHTML(param) {

    console.log("turuulj ajiilaj bna");

    let row = "";

    console.log(arrProducts);

    let shineArr =[];

    if(param) {
        console.log(param, "param");
        if(param.length == 0) {
            console.log("haisan utga bhgui bna")
        } else {
            shineArr = [...param]
        }
       
    } else {
        shineArr = [...arrProducts]
    }


    // for (let index = 0; index < shineArr.length; index++) {
    //     row += `<li class="nav-item">
    //             <a class="nav-link" href="#">${shineArr[index].title}</a>
    //             <a class="nav-link" href="#">${shineArr[index].price}</a>
    //         </li>`
        
    // }

    shineArr.map(({id, title, description, price,thumbnail}, index)=>{
        row += `
                    <div class="col-3 ">
                       <div class="m-1 border rounded h-100">
                       <img src="${thumbnail}" class=" w-100 object-fit-cover h-50 rounded-top"> 
                       <div class="p-2">
                       <a href="#">${title}   </a>
                       <a href="#">$${price}</a>
                       </div>
                       </div>
                    </div>
                `
                
        
    })
    productElement.innerHTML = row
}

//click, change

searchTxt.addEventListener("input", (e)=>{
    console.log(e);

    let filteredData = arrProducts.filter(c=>{return c.title.includes(e.target.value) == true})
    console.log(filteredData);

    drawProducstHTML(filteredData)


})

            `<div class="card" style="width: 18rem;">
            
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`







// function group(a) {
//     console.log(a);
//     if (a == "region") {
//       drawHTMLgroupByRegion();
//     }
//   }
  
//   function drawHTMLgroupByRegion() {
//     let row = "";
//     for (let i = 0; i < regionArr.length; i++) {
//       //
//       row += `<h1>${regionArr[i]}</h1>`;
  
//       for (let y = 0; y < countriesData.length; y++) {
//         if (countriesData[y].region == regionArr[i]) {
//           row += `<div class="col"> 
//           <a href="./country.html?countryname='${countriesData[y].name.common}'&region=${countriesData[y].region}">
//             <h6> ${countriesData[y].name.common}</h6>
//           </a>
//           <span class="txt">Хүн амын тоо ${countriesData[y].population}</span><br/>
//           <span class="txt">Газар нутгийн хэмжээ ${countriesData[y].area}</span>
//         </div>`;
//         }
//       }
//     }
  
//     sec2.innerHTML = row;
//   }



