var a = ["A", "B", "C", "D", "E", "F", "G", "H"];

function createBoard() {
    var board=document.getElementById("board");
    var str="";
    for (var i=1; i<=9; i++){
        if (i===9) str+="<div class='row'><div class=\"cell\"></div>";
        else str+="<div class='row'><div class=\"cell number\">"+i+"</div>";
        for (var j=0; j<8; j++){
            if (i===9){
                str+='<div class="cell word">'+a[j]+'</div>';
            }
            else{
                var colorClass = (i+j)%2==0?'cell--black':'cell--white';
                str+='<div class="cell ' + colorClass + '"></div>'
            }
        }
        str+='</div>';
    }
    board.innerHTML=str;
}

createBoard();