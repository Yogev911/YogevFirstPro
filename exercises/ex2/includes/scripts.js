(function () {
    var SquareBuilder = document.getElementsByTagName('main')[0]; //class builder

    document.getElementsByTagName('button')[0].onclick = function () { //the add button
        var AddSquare = document.createElement('section');
        SquareBuilder.insertBefore(AddSquare,SquareBuilder.childNodes[0]);
        Squares++;
    };
    document.getElementsByTagName('button')[1].onclick = function () { //the remove button
        if (Squares > -1){
            SquareBuilder.removeChild(SquareBuilder.firstChild);
        }
        Squares--;
    };

    var DivClear = document.createElement('div');
    DivClear.className="clear";
    SquareBuilder.appendChild(DivClear);

    var Squares = 9;
    for (var i = 0; i < Squares; i++) {
        SquareBuilder.insertBefore(document.createElement('section'),SquareBuilder.childNodes[0]);
    }



})();