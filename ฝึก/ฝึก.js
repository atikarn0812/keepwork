// let rows = 5;

// const { createElement } = require("react");

// for (let i = 1; i <= rows; i++){
//     let spaces = " ".repeat(rows - i);
//     let dollars = "$".repeat(i).trim();

//     console.log(spaces + dollars);
// }
// const x = () => console.log("Hello Karn");




// btnk.addEventListener("click", () => {
//     let pkuy = document.getElementById("kuyyai");
//     let yai = document.createElement("p");

//     yai.innerHTML = "ขอบใจวะ";

//     pkuy.appendChild(yai);
// });

// let inputT = document.getElementById("textinput");

// inputT.addEventListener("keydown", (event) => {
//     if (event.key === "Enter"){
//         if(inputT.value){
//             let pkuy = document.getElementById("kuyyai");
//             let yai = document.createElement("p");
//             yai.innerHTML = inputT.value;

//             pkuy.appendChild(yai);
//         }
//     }
// })
// let inputT = document.getElementById("textinput");
// let btnk = document.getElementById("btnofkuy");
// let pkuy = document.getElementById("kuyyai");
// let btnDell = document.getElementById("btnDel");

// btnk.addEventListener("click", () => {
//     if(inputT.value){
//     let yai = document.createElement("p");
//     yai.innerHTML = inputT.value;
//     pkuy.appendChild(yai);
//     } 
// });



// btnDell.addEventListener("click", () => { 
//     if(pkuy.lastChild){
//         pkuy.removeChild(pkuy.lastChild);
//     }
// })

const textinput = document.querySelector("#textinput");
const btnofkuy = document.querySelector("#btnofkuy");
const btnDelAll = document.querySelector("#btnDelAll");
const pages = document.querySelector("#kuyyai");


const resultText = () => {
        if(textinput.value){
        let textT = document.createElement("p")
        // textT.innerHTML = textinput.value;
        textT.innerHTML = `${textinput.value} 
        <button class ="delete-btn">ลบ</button>
        `
        const deleteBtn = textT.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            pages.removeChild(textT); // ลบแท็ก p บรรทัดนี้ทิ้งทันที
        });

        pages.appendChild(textT);
        textinput.value = "";
    }
}

btnofkuy.addEventListener("click", () => {
    resultText();
})

btnDelAll.addEventListener("click", () => {
    pages.innerHTML = "";
})

textinput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        resultText();
    }
})

// const products = async () => {
//     const respone = await fetch("https://fakestoreapi.com/products")
//     const html = await respone.json()
//     // ไฟลืที่เรียกapi มาในหน้านี้คือมันเป็นสินค้าเเละถูกเก็บรูปเเบบ array , object ซึ่งมันก็คือjson เลยใช้json ในการเเกะ
//     console.log(html);
// }
// products();