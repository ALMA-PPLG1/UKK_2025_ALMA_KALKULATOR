// const display=document.querySelector(".display");
// const buttons=document.querySelectorAll('button');
// const specialChars= ["%","*","/","-","+","="];
// let output="";

// const calculate=(btnValue)=>{
//     display.focus();

//     if(btnValue==="=" && output!==""){
//         output=eval(output.replace("%", "/100"))
//     }else if(btnValue==="AC"){
//         output="";
//     }
//     else if(btnValue==="DEL"){
//         output=output.toString().slice(0,-1);
//     }
//     else{
//         if(output=== "" && specialChars.includes(btnValue)) return;
//         output+= btnValue;
//     }

//     display.value = output
// };
// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => calculate(e.target.dataset.value));
// });
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } 
    else if (btnValue === "AC") {
        output = "";
    } 
    else if(btnValue==="DEL"){
        output=output.toString().slice(0,-1);
    }
    else {
        if (output === "" && specialChars.includes(btnValue))
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});











// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");
// const operator = ["%", "*", "/", "-", "+", "="];
// let output = "";

// Fungsi untuk memformat angka dengan titik pemisah ribuan
const formatNumber = (num) => {
let [integer, decimal] = num.toString().split('.'); // Pisahkan bagian integer dan desimal
integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Format ribuan dengan titik
return decimal ? `${integer},${decimal}` : integer; // Gabungkan kembali jika ada desimal
};

// Fungsi untuk menghapus pemisah ribuan (titik) sebelum perhitungan
const removeThousandSeparators = (num) => {
return num.replace(/\./g, ''); // Hapus titik sebagai pemisah ribuan
};

// const calculate = (btnValue) => {
display.focus();

// Pastikan output adalah string sebelum menggunakan slice
output = output.toString();  // Pastikan output adalah string

// Cek karakter terakhir dalam output
const AngkaTerakhir = output.slice(-1);

if (btnValue === "=" && output !== "") {
    // Hapus pemisah ribuan dan evaluasi
    output = removeThousandSeparators(output);
    output = eval(output.replace("%", "/100").replace(",", "."));
    output = formatNumber(output); // Format hasil dengan pemisah ribuan
} 
else if (btnValue === "AC") {
    output = "";
} 
else if (btnValue === "DEL") {
    output = output.slice(0, -1); // Menghapus karakter terakhir
}
else {
    // agar operator muncul lebih dari sekali berturut-turut
    if (operator.includes(btnValue)) {
        if (output !== "" && !operator.includes(AngkaTerakhir)) {
            output += btnValue;
        }
    } else {
        // Jika karakter yang dimasukkan bukan operator, tambahkan angka
        output += btnValue;
    }
}

// Jangan format angka saat input
if (output !== "" && !operator.includes(output.slice(-1))) {
    display.value = output; // Tampilkan output tanpa pemformatan saat input
} else {
    display.value = output;
}
// };

// Menambahkan event listener untuk setiap tombol
buttons.forEach((button) => {
button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});