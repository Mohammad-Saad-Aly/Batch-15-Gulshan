var products = [
  {
    p_id: "01",
    p_name: "Mobile",
    p_des: "Samsung galaxy s24 ultra",
    p_price: "400000",
    p_img:
      "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-s928bzkqpkd/gallery/pk-galaxy-s24-s928-489293-sm-s928bzkqpkd-thumb-539768257?$GNB_CARD_FULL_M_PNG_PNG$",
  },
  {
    p_id: "02",
    p_name: "LED",
    p_des: "TCL",
    p_price: "60000",
    p_img:
      "https://www.tclpakistan.com/media/catalog/product/cache/4bacb2d426cd64a3a08b2d0d1b1f3bc1/2/_/2.ecsc_kr_s5400a_32__front_1_1.jpg",
  },
  {
    p_id: "03",
    p_name: "Bugatti",
    p_des: "Aukaat se bahar",
    p_price: "$10000000",
    p_img:
      "https://newsroom.cdn.bugatti-media.com/93471544-a546-4b8b-a4a6-f8ac327a23aa/xl",
  },
];

var getItems = document.getElementById("items");

for (var i = 0; i < products.length; i++) {
  var getProducts = products[i];
  getItems.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${getProducts.p_img} class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text">${getProducts.p_id}</p>
    <h5 class="card-title">${getProducts.p_name}</h5>
    <p class="card-text">${getProducts.p_des}</p>
    <p class="card-text">${getProducts.p_price}</p>
  </div>
</div>`;
}

// document.writeln(products[0])
// for(var key in products[0]){
//     document.writeln(products[0][key] + "<br>")
// }
