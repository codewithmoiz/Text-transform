function upperText() {
    var textAreaValue = document.getElementById('textarea').value;
    var upperCase = document.getElementById('para').innerText = textAreaValue;
    document.getElementById('para').style.textTransform = 'uppercase';
}

function lowerText() {
    var textAreaValue = document.getElementById('textarea').value;
    var upperCase = document.getElementById('para').innerText = textAreaValue;
    document.getElementById('para').style.textTransform = 'lowercase';
}
function capText() {
    var textAreaValue = document.getElementById('textarea').value;
    var upperCase = document.getElementById('para').innerText = textAreaValue;
    document.getElementById('para').style.textTransform = 'capitalize';
}
// function changeColor() {
//     var dropDown = document.getElementById('select').value;
//     document.getElementById('para').style.color = dropDown;
// }

function colorInp(){
    var colorInput = document.getElementById('color').value;
    document.getElementById('para').style.color = colorInput;
}