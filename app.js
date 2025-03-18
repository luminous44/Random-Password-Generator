const btn = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const copyIconEl = document.querySelector("i");
const alert = document.querySelector(".alert-container");
btn.addEventListener("click",()=>{
    createPassword();
})

copyIconEl.addEventListener("click",()=>{
    copyPassword();
    alert.classList.remove("active");
    setTimeout(()=>{
        alert.classList.add("active");
    },10000)
})
function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = ""
    for(let i =0; i<passwordLength; i++){
        const radomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(radomNum,radomNum+1);
    }
    inputEl.value = password;
    alert.innerText = password + " copied!";

}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);

}