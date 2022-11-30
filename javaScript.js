function clean(){
    document.getElementById('screen').value = '';
}

function preencher(valor){
    document.getElementById('screen').value += valor;
}

function calcular(){
    var resultado = 0;
    preresultado = document.getElementById('screen').value;
    preresultado2 = preresultado.replace("×", "*");
    preresultado3 = preresultado2.replace("²", "**2");
    resultado = preresultado3.replace("÷", "/");
    document.getElementById('screen').value = '';
    document.getElementById('screen').value = eval(resultado);
}

