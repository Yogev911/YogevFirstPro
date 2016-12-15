(function () {
    //hold the main
    var SquareBuilder = document.getElementsByTagName('main')[0];

    /*creating the div clear */
    var DivClear = document.createElement('div');
    DivClear.className="clear";
    SquareBuilder.appendChild(DivClear);

    /* add squares on click*/
    document.getElementsByTagName('button')[0].onclick = function () { //the add button

        var AddSquare = document.createElement('section');
        /*AddSquare.addEventListener('mouseover','ShowTxt');
         AddSquare.addEventListener('mouseout','ClearShowTxt');
         AddSquare.addEventListener('click','ChangeBackground');*/
        if (Squares == -1 )
        {
            AddSquare.innerText = "hello";
        }
        SquareBuilder.insertBefore(AddSquare,SquareBuilder.childNodes[Squares]);
        Squares++;
    };

    /* remove squares on click*/
    document.getElementsByTagName('button')[1].onclick = function () { //the remove button
        if (Squares > -1){
            SquareBuilder.removeChild(SquareBuilder.childNodes[Squares]);
        }
        Squares--;
    };

    /*init the squares */
    var Squares = 9;
    for (var i = 0; i < Squares; i++) {
        var InitSquare = document.createElement('section');
        /*    InitSquare.addEventListener('mouseover','ShowTxt');
         InitSquare.addEventListener('mouseout','ClearShowTxt');
         InitSquare.addEventListener('click','ChangeBackground');*/
        if  (i == 0)
            InitSquare.innerText = "init";
        SquareBuilder.insertBefore(InitSquare,SquareBuilder.childNodes[0]);
    }

    /*
     var ShowTxt = function () {
     SquareBuilder.childNodes[0].innerText = "hello";
     }

     var ClearShowTxt = function () {

     }

     var ChangeBackground = function () {

     }

     document.getElementsByTagName('section').onclick = function () { //the remove button

     };*/

})();
