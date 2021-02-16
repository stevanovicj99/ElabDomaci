var index = 0;
slajder();
function slajder() {
  var i;
  var x = document.getElementsByClassName("trening");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {index = 1}
  x[index-1].style.display = "block";
  setTimeout(slajder, 2500); 
}

function validacija() {
    
    if (document.registracija.ime.value == "") 
    {
        alert('Ime nije uneto!');
        return false;
    }
    if (document.registracija.prezime.value == "") 
    {
        alert('Prezime nije uneto!');
        return false;
    }
    if (document.registracija.email.value == "") 
    {
        alert('E-mail adresa nije uneta!');
        return false;
    }
    if (document.registracija.datum.value == "") 
    {
        alert('Datum rođenja nije unet!');
        return false;
    }
    if (document.registracija.paket.value == "") 
    {
        alert('Odaberite paket!');
        return false;
    }
    if(document.registracija.clanarina.value==false){
        alert('Odaberi trajanje clanarine!');
    }
     return true;
}

function resetDugme(){
    let vrednost = confirm("Da li ste sigurni da želite da obrišete sve informacije?");
    console.log(vrednost);
}



    







