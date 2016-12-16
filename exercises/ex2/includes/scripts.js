(function () {
    /* Holding the main */
    var SquareBuilder = document.getElementsByTagName('main')[0];

    /*Number of squares to start */
    var Squares = 34;

    /*Hover */
    var ShowTxt = function (ShowTxtObj,pChild) {
        if (ShowTxtObj.style.backgroundColor == "white")
            pChild.style.color = "black";
        else
            pChild.style.color = "white";
        ShowTxtObj.appendChild(pChild);
    };

    /* Clear hover */
    var ClearShowTxt = function (ClearShowTxtObj) {
        ClearShowTxtObj.removeChild(ClearShowTxtObj.childNodes[0]);
    };

    /*As is.. create new section */
    var CreateSection = function (index) {
        var AddSquare = document.createElement('section');
        AddSquare.style.backgroundColor = "white";
        AddSquare.addEventListener('click',function () {
            ChangeBackground(AddSquare);
        });
        if (index == 0 ){
            AddSquare.addEventListener('mouseover',function () {
                var pChild = document.createElement('p');
                pChild.style.color = "blue";
                pChild.innerHTML = "06/09/1990";
                ShowTxt(AddSquare,pChild);
            });
            AddSquare.addEventListener('mouseout',function () {
                ClearShowTxt(AddSquare);
            });
        }
        return AddSquare;
    };

    /* change background of an object */
    var ChangeBackground = function (ObjToChange) {
        if (ObjToChange.style.backgroundColor == "white"){
            ObjToChange.style.backgroundColor = "Black";
            if (ObjToChange == SquareBuilder.getElementsByTagName('section')[0])
                ObjToChange.getElementsByTagName('p')[0].style.color = "white";
        }else{
            ObjToChange.style.backgroundColor = "white";
            ObjToChange.getElementsByTagName('p')[0].style.color = "black";
        }
    };

    /*INIT*/

    /*add the first set of squares */
    for (var i = 0; i < Squares; i++) {
        var SquareInit = CreateSection(i);
        SquareBuilder.insertBefore(SquareInit,SquareBuilder.childNodes[Squares]);
    }

    /* add the div clear at the end of the squares */
    var DivClear = document.createElement('div');
    DivClear.className="clear";
    SquareBuilder.appendChild(DivClear);

    /*add click*/
    document.getElementsByTagName('button')[0].onclick = function () {
        var SquareClick = CreateSection(Squares);
        SquareBuilder.insertBefore(SquareClick,SquareBuilder.childNodes[Squares+1]);
        Squares++;
    };

    /*remove click*/
    document.getElementsByTagName('button')[1].onclick = function () {
        if (Squares > 0){
            SquareBuilder.removeChild(SquareBuilder.childNodes[Squares]);
            Squares--;
        }
    };

})();


