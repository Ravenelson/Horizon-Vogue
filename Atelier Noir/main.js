
function openNav(){
    document.querySelector("#myNav").style.width = "40%";
}

function closeNav(){
    document.querySelector("#myNav").style.width = "0"
}
function womenOpen() {
    document.getElementById('women-grid').style.display = 'grid';
    document.getElementById('men-grid').style.display = 'none';
    const subtitle = document.getElementById('section-subtitle');
    if (subtitle) subtitle.textContent = 'Women Wears';
}

function menOpen() {
    document.getElementById('men-grid').style.display = 'grid';
    document.getElementById('women-grid').style.display = 'none';
    const subtitle = document.getElementById('section-subtitle');
    if (subtitle) subtitle.textContent = 'Men Wears';
}