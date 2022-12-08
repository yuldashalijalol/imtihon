alert("Imtixon ballarini ko'rishingiz mumkin")

let nam = prompt("Isim Familyangizni kiriting")

let ballar = prompt("Ballingizni kiriting:")

if (ballar >= 90 ){
  console.log(nam, "Siz girandga kirdingiz tabriklaymiz");
}
else if (ballar <= 89 && ballar >= 70){
  console.log(nam, "Siz kantirakdga kirdingiz");
}else if (ballar <=69 && ballar >= 50){
  console.log(nam, "Siz supper kantirakdga kirdingiz");
}else if (ballar <= 49){
  console.log(nam, "Uzur siz o'qishga kirolmadingiz");
}