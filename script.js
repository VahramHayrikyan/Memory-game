
    let numArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    let compare = [];
    let match = [];

    let moves = $('#moves');
    moves = 0;
    let sameNum = 0;

    //toDo need some optimisation
    let starNoob = 40;
    let starMiddle = 34;
    let starPro = 26;
    let starMaster = 20;

    function shuffle(object) {
        let currentIndex = object.length, temporaryValue, randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = currentIndex - 1;
            temporaryValue = object[currentIndex];
            object[currentIndex] = object[randomIndex];
            object[randomIndex] = temporaryValue;
        }while (currentIndex !== 0)
        return object;
    }


    //shaffle numArr and appent to divs
    let ranNums = shuffle(numArr);

    for (let i = 0; i < ranNums.length; i++) {
        $('.cube').append('<div class="ranDiv">' + ranNums[i] + '</div>');
    }

    //reset the game
    $('.reset').on('click', function(){
        $('.open').removeClass('open');
        $('.same').removeClass('same');

        moves = 0;
        $('#moves').html(moves);
        sameNum = 0;

        $('.rank').html('Master');

        $('.fa-star-o').addClass('fa-star').removeClass('fa-star-o');
        $('.cube').empty();
        let ranNums = shuffle(numArr);
        for (let i = 0; i < ranNums.length; i++) {
            $('.cube').append('<div class="ranDiv">' + ranNums[i] + '</div>');
        }
    })

    


    //on click function
    $("body").on("click",'.ranDiv', function () {
        let elem = $(this);

        //add 1 move at every click
        moves++;
        $('#moves').html(moves);

        //Gamer rank
        if (moves < 20) {
            let rank = $('.rank').html('Master');
        }
        else if(moves >= 20 && moves < 26) {
            $('.rank').html('Pro');
            let rank = $('.fa-star').eq(3).addClass('fa-star-o').removeClass('fa-star');
        }
        else if(moves >= 26 && moves < 34) {
            $('.rank').html('Middle');
            let rank = $('.fa-star').eq(2).addClass('fa-star-o').removeClass('fa-star');
        }
        else if(moves >= 34 && moves < 40) {
            $('.rank').html('Noob');
            let rank = $('.fa-star').eq(1).addClass('fa-star-o').removeClass('fa-star');
        }
        else if(moves >= 40) {
            $('.rank').html('Konchanni alkash');
            let rank = $('.fa-star').eq(0).addClass('fa-star-o').removeClass('fa-star');
        }

        //compare numbers
        elem.addClass('open');
        let number = elem.text();
        compare.push(number);
        console.log(compare);


        elem.removeClass('ranDiv').addClass('ranDivv comeBack');
        if(compare.length == 2){
            if(compare[0] == compare[1] ) {
                $('.cube').find('.open').addClass('ranDivv same').removeClass('open ranDiv comeBack');
                sameNum++;


                //end the game
                if (sameNum == 8) {
                    alert('You win the game with ' + moves + 'moves. Your rank is ' + $('.rank').text() );
                    console.log('Win');
                }

                // alert('match');
            }
            else if(compare[0] != compare[1] ){
                setTimeout(function () {
                    $('.cube').find('.open').removeClass('open');
                    $('.comeBack').addClass('ranDiv').removeClass('ranDivv');
                }, 350);
            }

            //empty the compare array after 2 numbers
            compare.splice(0, compare.length);

        }
        
    });

    



