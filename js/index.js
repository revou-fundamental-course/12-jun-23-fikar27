let suhuAsal = document.querySelector(".intext");
let suhuHasil = document.querySelector(".outtext");
let cara = document.querySelector(".kolomnya");
let rumusSekarang = "c-f";

function celkefah(){
    if(rumusSekarang == "c-f"){
        let x = Number(suhuAsal.value);
        if(isNaN(x)){
            suhuAsal.value = "";
            return;
        }

        let y = x * 9/5 + 32;

        suhuHasil.value = y;
        cara.innerHTML = `${x} &deg;C x 9/5 + 32 = ${y} &deg;F`
    }
    if(rumusSekarang == "f-c"){
        let x = Number(suhuAsal.value);
        if(isNaN(x)){
            suhuAsal.value = "";
            return;
        }
        let y = (x-32)* 5/9;

        suhuHasil.value = y;
        cara.innerHTML = `(${x} &deg;F - 32) x 5/9 = ${y} &deg;C`
    }
}

function reverse(){
    if(rumusSekarang == "c-f"){
        rumusSekarang = "f-c";
        suhuAsal.value = suhuHasil.value 
        celkefah();
    }else{
        rumusSekarang = "c-f";
        suhuAsal.value = suhuHasil.value 
        celkefah()
    }
}

function reset(){
    suhuAsal.value = "";
    suhuHasil.value = "";
    cara.value = "";
}

suhuAsal.addEventListener("keypress",(key)=>{
    if(key.charCode == "13"){
        key.preventDefault();
        celkefah();
    }
})
