const boxs = document.querySelectorAll(".box");
const img = document.querySelector(".img");

boxs.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop",()=>{
        box.appendChild(img);
    })
});