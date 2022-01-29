var cont = document.querySelector(".qurancontainer"),
    btn = document.querySelector(".btn");

btn.addEventListener('click',getAyah);
getAyah();
async function getAyah(){
    var ayah = Math.floor(Math.random() * 6236) + 1 ;
    const res = await fetch("https://api.alquran.cloud/ayah/"+ayah);
    const data = await res.json();
    console.log(data)
    if(res.status == 200){
        let QuranAyah = data.data.text;
        cont.innerText = QuranAyah;
    }
}