class BundleSet {
    constructor(indexes, name, discount, masterId = false) {
        this.indexes = indexes;
        this.name = name;
        this.discount = discount;
        this.quantity = 0;
        this.masterId = masterId; // default false = self
    }

    setQuantity() {
        // return quantity of this bundle's master set
        const masterQuantity = this.masterId === false ? 0 : bundles[this.masterId].quantity;

        // return array of quantities of this bundle 
        const quantities = this.indexes.map(i => {
            const design = designs.find(d => d.id === i);
            return design ? design.quantity : 0; // Return the quantity if found, otherwise return 0
        });

        // set quantity
        this.quantity = Math.min(...quantities) - masterQuantity;
        
    }

}

class BundleAny {
    constructor(indexes, name, discount, count) {
        this.indexes = indexes;
        this.name = name;
        this.discount = discount;
        this.quantity = 0;
        this.count = count;
    }

    setQuantity() {
        var total = 0;

        // loop through the array and calculate total

        this.indexes.forEach(i => {
            const design = designs.find(d => d.id === i);
            const quantity = design ? design.quantity : 0; // Return the quantity if found, otherwise return ""
            total += quantity;
        });

        // set quantity
        if (this.count === 7) {
            this.quantity = Math.floor(total / 7)
        } else if (this.count === 3) {
            this.quantity = Math.floor((total % 7) / 3);
        }
    }

}


const designs = [
    {
        id: "A1",
        designer: "思靈",
        title: "Not Workin Club",
        size: "150x100",
        orientation: "portrait",
        texture: "手揉紋",
        sided: "雙面",
        corner: "圓角",
        price: 20,
        quantity: 0,
        caption: "【Speak Slothlly】<br>任選3張，共$54(平均@$18)<br>任選7張，共$112(平均@$16)",
        path: "Not_Workin_Club.jpeg",
        formId: "entry.1173994594"
    },
    {
        id: "A2",
        designer: "思靈",
        title: "必須酒",
        size: "150x100",
        orientation: "portrait",
        texture: "麗芙紋",
        sided: "雙面",
        corner: "圓角",
        price: 20,
        quantity: 0,
        caption: "【Speak Slothlly】<br>任選3張，共$54(平均@$18)<br>任選7張，共$112(平均@$16)",
        path: "必須酒.jpeg",
        formId: "entry.1599323526"
    },
    {
        id: "A3",
        designer: "思靈",
        title: "Matcha Tree",
        size: "150x100",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "雙面",
        corner: "圓角",
        price: 20,
        quantity: 0,
        caption: "【Speak Slothlly】<br>任選3張，共$54(平均@$18)<br>任選7張，共$112(平均@$16)",
        path: "Matcha_Tree.jpeg",
        formId: "entry.2121802125"
    },
    {
        id: "A4",
        designer: "思靈",
        title: "幫你熄燈",
        size: "150x100",
        orientation: "portrait",
        texture: "觸感膜",
        sided: "雙面",
        corner: "圓角",
        price: 20,
        quantity: 0,
        caption: "【Speak Slothlly】<br>任選3張，共$54(平均@$18)<br>任選7張，共$112(平均@$16)",
        path: "幫你熄燈.jpeg",
        formId: "entry.1691780124"
    },
    {
        id: "A5",
        designer: "思靈",
        title: "望下天",
        size: "150x100",
        orientation: "landscape",
        texture: "珍珠膜",
        sided: "雙面",
        corner: "圓角",
        price: 20,
        quantity: 0,
        caption: "【Speak Slothlly】<br>任選3張，共$54(平均@$18)<br>任選7張，共$112(平均@$16)",
        path: "望下天.jpeg",
        formId: "entry.1966654916"
    },
    {
        id: "A6",
        designer: "思靈",
        title: "Spin In Joy With Me",
        size: "150x100",
        orientation: "landscape",
        texture: "啞粉紙",
        sided: "雙面",
        corner: "圓角",
        price: 20,
        quantity: 0,
        caption: "【Speak Slothlly】<br>任選3張，共$54(平均@$18)<br>任選7張，共$112(平均@$16)",
        path: "Spin_In_Joy_With_Me.jpeg",
        formId: "entry.536212284"
    },
    {
        id: "B1",
        designer: "璟樂",
        title: "Merry Christmas",
        size: "150x100",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "單面",
        price: 15,
        quantity: 0,
        caption: "【depressgon】<br>一套3款，共$36(平均@$11)<br>連【認真地求其系列】一套5款，共$46",
        path: "Merry Christmas @depressgon.png",
        formId: "entry.1151205680"
    },
    {
        id: "B2",
        designer: "璟樂",
        title: "Happy New Year",
        size: "150x100",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "單面",
        price: 15,
        quantity: 0,
        caption: "【depressgon】<br>一套3款，共$36(平均@$11)<br>連【認真地求其系列】一套5款，共$46",
        path: "Happy New Year @depressgon.png",
        formId: "entry.819435419"
    },
    {
        id: "B3",
        designer: "璟樂",
        title: "酒能使人放蕩",
        size: "150x100",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "單面",
        price: 15,
        quantity: 0,
        caption: "【depressgon】<br>一套3款，共$36(平均@$11)<br>連【認真地求其系列】一套5款，共$46",
        path: "酒能使人放蕩 @depressgon.png",
        formId: "entry.1100436445"
    },
    {
        id: "B4",
        designer: "璟樂",
        title: "喂！聖誕快樂",
        size: "150x100",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "單面",
        price: 8,
        quantity: 0,
        caption: "【認真地求其系列】<br>一套2款，共$14(平均@$7)<br>連【depressgon】一套5款，共$46",
        path: "喂！聖誕快樂 @認真地求其系列.png",
        formId: "entry.1591378608"
    },
    {
        id: "B5",
        designer: "璟樂",
        title: "放假爽",
        size: "150x100",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "單面",
        price: 8,
        quantity: 0,
        caption: "【認真地求其系列】<br>一套2款，共$14(平均@$7)<br>連【depressgon】一套5款，共$46",
        path: "放假爽 @認真地求其系列.png",
        formId: "entry.1727560005"
    },
    {
        id: "C1",
        designer: "心竹",
        title: "I Wanna Melt For You!",
        size: "150x100",
        orientation: "landscape",
        texture: "新棉彩紙",
        sided: "雙面",
        price: 8,
        quantity: 0,
        path: "I_Wanna_Melt_For_You.jpeg",
        formId: "entry.620030433"
    },
    {
        id: "D1",
        designer: "Rachel",
        title: "Knock Knock!",
        size: "164x102",
        orientation: "landscape",
        texture: "珠光紙",
        sided: "單面",
        price: 15,
        quantity: 0,
        path: "Knock_Knock.jpeg",
        formId: "entry.49980266"
    },
    {
        id: "E1",
        designer: "以健",
        title: "聖誕點少得你（紅色）",
        size: "100x100",
        orientation: "portrait landscape",
        texture: "珍珠膜",
        sided: "單面",
        price: 8,
        quantity: 0,
        caption: "【四色聖誕】<br>一套4款，共$30(平均@$7.5)<br>連《專愛》一套5款，共$40",
        path: "聖誕點少得你_red.JPG",
        formId: "entry.2016763037"
    },
    {
        id: "E2",
        designer: "以健",
        title: "聖誕點少得你（藍色）",
        size: "100x100",
        orientation: "portrait landscape",
        texture: "珍珠膜",
        sided: "單面",
        price: 8,
        quantity: 0,
        caption: "【四色聖誕】<br>一套4款，共$30(平均@$7.5)<br>連《專愛》一套5款，共$40",
        path: "聖誕點少得你_blue.JPG",
        formId: "entry.917091549"
    },
    {
        id: "E3",
        designer: "以健",
        title: "聖誕點少得你（綠色）",
        size: "100x100",
        orientation: "portrait landscape",
        texture: "珍珠膜",
        sided: "單面",
        price: 8,
        quantity: 0,
        caption: "【四色聖誕】<br>一套4款，共$30(平均@$7.5)<br>連《專愛》一套5款，共$40",
        path: "聖誕點少得你_green.JPG",
        formId: "entry.1906903684"
    },
    {
        id: "E4",
        designer: "以健",
        title: "聖誕點少得你（黑色）",
        size: "100x100",
        orientation: "portrait landscape",
        texture: "珍珠膜",
        sided: "單面",
        price: 8,
        quantity: 0,
        caption: "【四色聖誕】<br>一套4款，共$30(平均@$7.5)<br>連《專愛》一套5款，共$40",
        path: "聖誕點少得你_black.JPG",
        formId: "entry.606129756"
    },
    {
        id: "E5",
        designer: "以健",
        title: "專愛",
        size: "164x102",
        orientation: "portrait",
        texture: "新棉彩紙",
        sided: "雙面",
        corner: "圓角",
        price: 15,
        quantity: 0,
        caption: "連【四色聖誕】一套5款，共$40",
        path: "專愛.jpeg",
        formId: "entry.1060294642"
    },
    {
        id: "Z1",
        title: "信封 (牛皮色)",
        size: " 176x125",
        orientation: "信封",
        price: 3,
        quantity: 0,
        path: "envelop_brown.jpg",
        formId: "entry.1966907181"
    },
    {
        id: "Z2",
        title: "信封 (白金色)",
        size: " 176x125",
        orientation: "信封",
        price: 3,
        quantity: 0,
        path: "envelop_white.jpg",
        formId: "entry.208134223"
    },
    {
        id: "Z3",
        title: "信封 (藍色)",
        size: " 176x125",
        orientation: "信封",
        price: 3,
        quantity: 0,
        path: "envelop_blue.jpg",
        formId: "entry.1916058240"
    }
];


const bundles = [
    new BundleSet(["B1", "B2", "B3", "B4", "B5"], "【@depressgon】+【@認真地求其系列】一套5款", 15),
    new BundleSet(["B1", "B2", "B3"], "【@depressgon】一套3款", 9, 0),
	new BundleSet(["B4", "B5"], "【@認真地求其系列】一套2款", 2, 0),
	new BundleSet(["E1", "E2", "E3", "E4", "E5"], "【四色聖誕】+《專愛》一套5款", 7),
	new BundleSet(["E1", "E2", "E3", "E4"], "【四色聖誕】一套4款", 2, 3),
	new BundleAny(["A1", "A2", "A3", "A4", "A5", "A6", "A7"], "【Speak Slothlly】任選7張", 28, 7),
	new BundleAny(["A1", "A2", "A3", "A4", "A5", "A6", "A7"], "【Speak Slothlly】任選3張", 6, 3)
];

// variables
var divAlbum = "";
var divLightboxes = "";
var divCart = "";
var totalQuant = 0;
var totalSum = 0;
var bundleSum = 0;
var cardWidth = 0;

var submitted = false;

document.addEventListener("DOMContentLoaded", () => {
    renderAlbum();
    renderLightboxes();
    renderCart();

    cardWidth = getCardWidth();
    filterListener(cardWidth);

    inputMailDetailsHandling();

    formHandling();
});

function filterListener(cardWidth) {
    const filterButtons = document.querySelectorAll(".filter-button");
    const albumItems = document.querySelectorAll(".album-item");

    filterButtons.forEach(button => button.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filter = e.target.dataset.filter;

        // iterate over each album items
        albumItems.forEach(item => {
            // if item contains target filter, show it
            if (filter === "all" || item.dataset.filter.includes(filter)) {
                item.style.display = "block";
                item.style.maxWidth = cardWidth + "px";
            } else {
                item.style.display = "none";
            }
        });
    }));
};

function toggleFilterSection() {
    const filter = document.getElementById("filter");
    filter.classList.toggle("hide");
}

function renderAlbum() {
    divAlbum = document.getElementById("album");

    // Render designs
    designs.forEach((design, index) => {
        const childDiv = document.createElement("div");
        // childDiv.id = design.id;
        childDiv.id = `gallery-${index}`;
        childDiv.dataset.filter = `${design.orientation} ${design.size} ${design.sided} ${design.caption ? "bundle" : ""}`;
        childDiv.classList.add("album-item");
        childDiv.classList.add("shadow-card");

        childDiv.innerHTML = `

              <a class="img-container"  href="#preview-${index}">
                  <img src="./design-image/${design.path}" alt="">
              </a>

              <div class="content">
                  <div class="labels">
                    ${design.texture ? `<div class="label">${design.texture}</div>` : ""}
                    ${design.corner ? `<div class="label">圓角</div>` : ""}
                    ${design.sided ? `<div class="label">${design.sided}</div>` : ""}
                    ${design.size ? `<div class="label">${design.size}</div>` : ""}
                  </div>
            
                  <div class="title">${design.title}</div>
                  ${design.caption ? `<div class="caption">${design.caption}</div>` : ""}
    
                  <div class="price">$${design.price}</div>
              </div>

              
              <span onclick="toggleCart(${index})" id="cart-${index}"  class="material-symbols-rounded add-to-cart">shopping_bag</span>

      `;

        divAlbum.appendChild(childDiv);
    });

}

const getCardWidth = () => {
    const cards = document.querySelectorAll(".album-item");
    const cardComputedWidth = window.getComputedStyle(cards[0]).width;
    const cardWidth = parseFloat(cardComputedWidth);
    
    return cardWidth;

    
}

function renderLightboxes() {
    divLightboxes = document.getElementById("lightboxes");

    designs.forEach((design, index) => {
        const childDiv = document.createElement("div");
        childDiv.innerHTML = `
          <a id="preview-${index}" href="#gallery-${index}" class="lightbox">
              <img src="./design-image/${design.path}" alt="">
          </a>
      `;

        divLightboxes.appendChild(childDiv);
    });
}

function renderCart() {
    divCart = document.getElementById("cart-list");
    const summary = document.getElementById("summary");

    // print nothing
    if (totalQuant == 0) {
        divCart.innerHTML = `<p>購物車沒有商品</p>`;
        summary.style.display = "none";
        return;
    } else {
        divCart.innerHTML = "";
        summary.style.display = "block";
    }

    // print cart list
    designs.forEach((design, index) => {
        const childDiv = document.createElement("div");

        if (design.quantity > 0) {
            childDiv.innerHTML = `

              <div class="cart-item">

                  <div class="item-content">
                      <div class="img-container">
                          <img src="./design-image/${design.path}" alt="">
                      </div> 
                      <div>${design.title} x${design.quantity} ($${design.quantity * design.price})</div>
                  </div>

                  <div class="buttons">
                      <span class="material-symbols-rounded add-more-to-cart" onclick="addCart(${index})">add_circle</span>
                      <span class="material-symbols-rounded clear-cart" onclick="clearCart(${index})">delete</span>
                  </div>

              </div>

              <div class="divider"></div>
          `;

            divCart.appendChild(childDiv);
        }
    });

    // print bundle list
    bundleHandling();
	
    bundles.forEach((bundle) => {
        const childDiv = document.createElement("div");

        if (bundle.quantity > 0) {
            childDiv.innerHTML = `
              <div class="cart-item">
                  <div class="item-content">
                      <div>折扣：${bundle.name} x${bundle.quantity} (-$${bundle.quantity * bundle.discount})</div>
                  </div>
              </div>
              <div class="divider"></div>
          `;
           divCart.appendChild(childDiv);
        }
    });

    // print cart summary
    summary.querySelector(".text").innerHTML = 
        `總金額: $${totalSum - bundleSum} (購買數量: ${totalQuant})`;

    // console.log("bundles[0].quant = " + bundles[0].quantity);
}

function toggleCart(index) {
    if (designs[index].quantity > 0) {
        clearCart(index);
    } else {
        addCart(index);
    }
}

function addCart(index) {
    designs[index].quantity += 1;
    totalQuant += 1;
    totalSum += designs[index].price;
    const div = document.getElementById(`cart-${index}`);

    fillCartIcon(div, true);

    renderCart();
}

function clearCart(index) {
    const q = designs[index].quantity;
    totalQuant -= q;
    totalSum -= designs[index].price * q;

    designs[index].quantity = 0;

    const div = document.getElementById(`cart-${index}`);

    fillCartIcon(div, false);

    renderCart();
}

function fillCartIcon(div, bool) {
    if (bool) {
        //element is added to cart
        div.style.fontVariationSettings = "'FILL' 1";

    } else {
        //element removed from cart
        div.style.fontVariationSettings = "'FILL' 0"
    }
}

function bundleHandling() {
    // clear history
   bundleSum = 0;

   // call bundle function: set quantity
   // calculate bundleSum

   bundles.forEach(bundle => {
       bundle.setQuantity();
       bundleSum += bundle.quantity * bundle.discount;
   });

}


function inputMailDetailsHandling() {
    const optionMail = document.querySelector('input[name="options"][value="平郵"]');
    const radioOptions = document.querySelectorAll('input[name="options"]');
    const div = document.querySelector(".inputbox-mail-details");

    const name = document.getElementById("input-name");
    const address = document.getElementById("input-address");

    radioOptions.forEach(function(button) {
        button.addEventListener('click', function() {
            if (optionMail.checked) {
                div.classList.remove("hide");
                name.setAttribute('required', 'required');
                address.setAttribute('required', 'required');
            } else {
                div.classList.add("hide");
                name.removeAttribute('required');
                address.removeAttribute('required');
            }
        });
    });

}


function formHandling() {
	const myForm = document.getElementById("myForm");

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        var inputs = [];

        designs.forEach(design => {
            inputs.push([design.quantity, design.formId]);
        });

        const shipping = document.querySelector('input[name="options"]:checked').value;
        inputs.push([shipping, "entry.1975594365"]);

        inputs.push([document.getElementById("input-name").value,"entry.1499150152"]);
        inputs.push([document.getElementById("input-address").value,"entry.1446145504"]);

        inputs.push([totalQuant, "entry.389257763"]);
        inputs.push([totalSum, "entry.1545759432"]);

        inputs.forEach(input => {
            const div = document.createElement('input');
            div.type = 'text';
            div.style.display = "none";
            div.value = input[0];
            div.name = input[1];
            myForm.appendChild(div);
        });
	
        createDownloadHTML();

        myForm.submit();
        submitted=true;

    });

}

function showConfirmPage() {
    if(submitted) {
        window.location.href = "./submission.html";
    }
}

function createDownloadHTML() {

    const shippingInput = document.querySelector('input[name="options"]:checked');
    const isMail = shippingInput.value === "平郵" ? true : false ;
    const shipping = shippingInput.parentElement.innerText.replace("<br>", " ");

    const contact = document.getElementById("input-contact").value;
    const remark = document.getElementById("input-remark").value;

    const getTimestamp = () => {
        const now = new Date();
    
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
    
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
    
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }    

    const downloadHTML =
        `
            <div><strong>2024陪你過聖誕 - 訂單記錄</strong> (${getTimestamp()})</div>
            <div class="divider"></div>

            <div><strong>訂單概要</strong><br>總金額: $${totalSum - bundleSum} (購買數量: ${totalQuant})</div>
            <div class="divider"></div>

            <div><strong>聯絡人資料</strong><br>
            <ul>
                <li>電話號碼 / IG名稱: ${contact}</li>
                ${remark === "" ? "<li>備註: N/A</li>" : 
                    `<li>備註: ${remark}</li>`
                }
                <li>交收方式: ${shipping}</li>
                ${isMail ? 
                    `   <li>平郵收件人名稱: ${document.getElementById("input-name").value}</li>
                        <li>平郵收件地址: ${document.getElementById("input-address").value}</li>
                    ` : ""
                }
            </ul>
            </div>
            <div class="divider"></div>  

            <div><strong>訂單內容</strong><br>
                <ul>
                    ${designs.map(design => 
                        design.quantity > 0 ? `<li>${design.title} x${design.quantity} ($${design.quantity * design.price})</li>` : ''
                    ).join('')}
                </ul>
                ${bundleSum == 0 ? "" : `<p>折扣：</p>` }
                <ul>
                    ${bundles.map(bundle => 
                        bundle.quantity > 0 ? `<li>${bundle.name} x${bundle.quantity} (-$${bundle.quantity * bundle.discount})</li>`: ''
                    ).join('')}
                </ul>
            </div>
        `;

    localStorage.setItem('downloadHTML', downloadHTML);
    localStorage.setItem('input-contact', contact);
}
