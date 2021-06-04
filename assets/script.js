let cards = document.getElementById('cardsContainer');
let selectProduct = document.querySelector('#selectProduct');
let caunt = selectProduct.value;
let tmp = "";
let url = `https://fakestoreapi.com/products?limit=${caunt}`;
console.log(caunt);


const changeUrl = select => url = `https://fakestoreapi.com/products?limit=${select}`


selectProduct.addEventListener('change', function () {
    caunt = selectProduct.value;
    changeUrl(caunt);
    console.log(url)
    cardUrl(url);

})




function cardUrl(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            tmp = " ";
            json.map((el) => {
                tmp += `
                
            <div class="card col-lg-4 col-md-6 col-sm-12 text-center">
                <img src="${el.image}" class="card-img image-card" alt="..." style = "height: 400px">
                  <div>
                    <i class="fa fa-star px-1"></i>
                    <i class="fa fa-star px-1"></i>
                    <i class="fa fa-star px-1"></i>
                    <i class="fa fa-star px-1"></i>
                    <i class="fa fa-star last"></i>
                </div>
                <div class="card-body">
                    <h6 class="card-text">${el.title}</h6>
                    <h5 class="card-title">${el.price}</h5>
                </div>

                </div>
              
            </div>
           
            `
            })
            cards.innerHTML = '';
            cards.innerHTML += tmp;

        });
};
cardUrl(url);