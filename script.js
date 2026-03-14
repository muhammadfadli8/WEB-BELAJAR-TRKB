function kirim(){

let input = document.getElementById("userInput").value
let chat = document.getElementById("chatbody")

chat.innerHTML += "<p><b>Kamu:</b> "+input+"</p>"

let jawaban=""

if(input.includes("ANN")){
jawaban="ANN adalah Artificial Neural Network."
}
else if(input.includes("backpropagation")){
jawaban="Backpropagation digunakan untuk training neural network."
}
else{
jawaban="Maaf saya belum memahami pertanyaan tersebut."
}

chat.innerHTML += "<p><b>AI:</b> "+jawaban+"</p>"

document.getElementById("userInput").value=""
}