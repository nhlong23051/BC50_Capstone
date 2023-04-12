var themeBTN = document.getElementById('theme');
themeBTN.onclick = function (){
    document.getElementById('themeLife').className = 'dark';
    document.getElementById('services__block').className = 'dark';
    document.getElementById('index__block').className = 'dark';
    document.getElementById('navSwith').className = 'dark';
    document.getElementById('theme1').style.display = 'inline-block'
    document.getElementById('theme').style.display = 'none'
}

var theme1 = document.getElementById('theme1');
theme1.onclick = function () {
    document.getElementById('themeLife').className = 'active';
    document.getElementById('services__block').className = 'active';
    document.getElementById('index__block').className = 'active';
    document.getElementById('navSwith').className = 'active';
    document.getElementById('theme').style.display = 'inline-block'
    document.getElementById('theme1').style.display = 'none'
}