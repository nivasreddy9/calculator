
let p = document.querySelector("p");
function validate(z) {
    p.textContent = p.textContent === "0" ? z : p.textContent + z;
}
function reset(){
p.textContent="0"
}
function equall(){
    p.textContent=eval(p.textContent)

}