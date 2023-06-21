/* prepare variabel */
let suhuAsal = document.querySelector(".intext");
let suhuHasil = document.querySelector(".outtext");
let cara = document.querySelector(".kolomnya");
let rumusSekarang = "c-f";

/* fungsi tombol konvert */
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

/* fungsi tombol revers */
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

// fungsi tombol reset 
function reset(){
    suhuAsal.value = "";
    suhuHasil.value = "";
    cara.value = "";
}

/* fungsi tambahan */
suhuAsal.addEventListener("keypress",(key)=>{
    if(key.charCode == "13"){
        key.preventDefault();
        celkefah();
    }
})
