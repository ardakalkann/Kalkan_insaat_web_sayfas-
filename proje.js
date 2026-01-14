

function resmiAc(tiklananResim) {
    var lightbox = document.getElementById("lightbox");
    var buyukResim = document.getElementById("buyukResim");
    if (!lightbox || !buyukResim) return;

    lightbox.style.display = "flex"; 
    lightbox.style.justifyContent = "center"; 
    lightbox.style.alignItems = "center"; 
    buyukResim.src = tiklananResim.src; 
}


function resmiKapat() {
    var lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

 


function mesajGonder(buton) {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var email = document.getElementById("email").value;
    var mesaj = document.getElementById("mesaj").value;
    var kutu = document.getElementById("basariKutusu");

    
    if (!kutu) return;

    if(ad === "" || soyad === "" || email === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz.");
        return;
    }

    var eskiYazi = buton.innerText;
    buton.disabled = true;
    buton.style.backgroundColor = "#999";

    setTimeout(function() {
        kutu.style.display = "block";
        var form = document.getElementById("mesajFormu");
        if(form) form.reset();

        buton.innerText = eskiYazi;
        buton.disabled = false;
        buton.style.backgroundColor = "#333";

        setTimeout(function(){
            kutu.style.display = "none";
        }, 5000);

    }, 1500);
}

function filtrele(kategori, tiklananButon) {
    let projeler = document.querySelectorAll('.proje-kart');

   
    projeler.forEach(kart => {
       
        if (kategori === 'hepsi' || kart.getAttribute('data-kategori') === kategori) {
            kart.style.display = 'block'; 
            
            kart.style.opacity = '0';
            setTimeout(() => { kart.style.opacity = '1'; }, 100);
            
        } else {
            kart.style.display = 'none'; 
        }
    });

    let butonlar = document.querySelectorAll('.filtre-butonlari button');
    butonlar.forEach(btn => {
        btn.classList.remove('aktif-btn'); 
        btn.style.backgroundColor = '#eee'; 
        btn.style.color = '#333';
    });

    tiklananButon.classList.add('aktif-btn');
    tiklananButon.style.backgroundColor = '#c7b545';
    tiklananButon.style.color = 'white';
}