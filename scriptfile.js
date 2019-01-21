var x = new Array(10);
function onloaded() {


    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(10);
    }

    for (var k = 0; k < x.length; k++) {
        for (var l = 0; l < x[k].length; l++) {
            x[k][l] = 0;
            document.getElementById('idchange').innerText += x[k][l];
        }
        document.getElementById('idchange').innerHTML+= "<br>"
    }


}
function output() {
    var row=document.getElementById('idrow').value;
    var col=document.getElementById('idcol').value;
    x[row][col]=document.getElementById('idvalue').value;
    for (var k = 0; k < x.length; k++) {
        for (var l = 0; l < x[k].length; l++) {
            if ((k+1)==row && (l+1)==col){
                document.getElementById('idchanged').innerText +=document.getElementById('idvalue').value;
            }
            else {
                x[k][l] = 0;
                document.getElementById('idchanged').innerText += x[k][l];
            }

        }
        document.getElementById('idchanged').innerHTML+= "<br>"
    }
}

window.onload = onloaded;