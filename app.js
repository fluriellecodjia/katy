function presser(touche){
        document.getElementById('resultat').innerHTML += touche;
}
function calculer(){
        var expression = document.getElementById('resultat').innerHTML;
        var resultatAfficher =math.evaluate(expression);
        document.getElementById('resultat').innerHTML = resultatAfficher; 
}
function effacer(){
        document.getElementById('resultat').innerHTML = '';
}