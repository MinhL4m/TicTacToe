import Animation from './animation.js';

'user trict';
var getUsername = function () {
    const btn1 = document.querySelector('#username1btn');
    const btn2 = document.querySelector('#username2btn');
    const form1 = document.querySelector('.first-form');
    const form2 = document.querySelector('.second-form');
    const nameForm = document.querySelector('.name-form');

    let username1;
    let username2;

    let getUsername1 = () => {
        username1 = document.querySelector('#username1').value;
        if (username1 != '') {
            Animation.moveOut(form1);
            Animation.appear(form2);
            document.querySelector('#user1').textContent = username1;
            document.querySelector("#playerscore1").textContent = 0;
        } else {
            document.querySelector('#username1').style.borderColor = 'red';
        }
    }

    let getUsername2 = () => {
        username2 = document.querySelector("#username2").value;
        if (username2 != '') {
            Animation.moveOut(form2);
            document.querySelector('#user2').textContent = username2;
            document.querySelector("#playerscore2").textContent = 0;
            setTimeout(() => Animation.close(nameForm), 1500);
        } else {
            document.querySelector('#username2').style.borderColor = 'red';
        }

    }


    btn1.addEventListener('click', getUsername1);
    btn2.addEventListener('click', getUsername2);
}();


var printResult = function () {
    const final = document.querySelector('.final');
    const result = document.querySelector('.result');
    const text = document.querySelector('.result-text');
    const resultbtn = document.querySelector('.result-close');


    function print(username, type) {
        if (type === 'win') {
            text.textContent = `${username} Won!!!`;
        } else {
            text.textContent = `Draw!!!`;
        }
        final.classList.remove('hidden');
        Animation.appear(result);
    }

    function btnFunction() {
        Animation.moveUp(result);
        setTimeout(() => Animation.close(final), 1500);
    }

    resultbtn.addEventListener('click', btnFunction);

    return {
        print: print,
    };
}();

var gameLogic = function () {
    let gameArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    let score1 = 0;
    let score2 = 0;

    let isTurn1 = true;

    const boardGame = document.querySelector('.board-game');
    const btnNext = document.querySelector('.btn-next');

    let isContinue = true;

    boardGame.addEventListener('click', btnEvent);
    btnNext.addEventListener('click', restart);


    function btnEvent(e) {
        if (isContinue) {
            e.target.classList.contains('selected') ? null : turn(e.target);
        }
    }

    function turn(element) {
        if (isTurn1) {

            check(element, 1);
            element.style.background = '#185a9d';
            if (checkWin(1)) {
                document.querySelector('#playerscore1').textContent = `${++score1}`;
                printResult.print(1, 'win');
            } else {
                checkDraw()
            }

            isTurn1 = false;
        } else {

            check(element, 2);
            element.style.background = '#b92b27';
            if (checkWin(2)) {
                document.querySelector('#playerscore2').textContent = `${++score2}`;
                printResult.print(2, 'win');
            } else {
                checkDraw()
            }
            isTurn1 = true;
        }
    }


    function check(element, user) {
        switch (element.value) {
            case '1':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[0][0] = user;
                break;
            case '2':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[0][1] = user;
                break;
            case '3':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[0][2] = user;
                break;
            case '4':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[1][0] = user;
                break;
            case '5':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[1][1] = user;
                break;
            case '6':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[1][2] = user;
                break;
            case '7':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[2][0] = user;
                break;
            case '8':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[2][1] = user;
                break;
            case '9':
                element.classList.add('selected');
                element.classList.remove('unselected');
                gameArray[2][2] = user;
                break;
        }
    }


    function checkWin(user) {
        // check col
        for (let i = 0; i < 3; i++) {
            for (let y = 0; y < 3; y++) {

                if (gameArray[i][y] != user) {
                    break;
                }

                if (y == 2) {
                    isContinue = false;
                    return true;
                }
            }
        }

        //check row
        for (let i = 0; i < 3; i++) {
            for (let y = 0; y < 3; y++) {

                if (gameArray[y][i] != user) {
                    break;
                }

                if (y == 2) {
                    isContinue = false;
                    return true;
                }
            }
        }

        //check dial
        if (gameArray[0][0] == user && gameArray[0][0] == gameArray[1][1] && gameArray[2][2] == gameArray[0][0]) {
            isContinue = false;
            return true;
        } else if (gameArray[0][2] == user && gameArray[0][2] == gameArray[1][1] && gameArray[0][2] == gameArray[2][0]) {
            isContinue = false;
            return true;
        }

        return false;
    }

    //checkdraw
    function checkDraw() {
        for (let i = 0; i < 3; i++) {
            for (let y = 0; y < 3; y++) {
                if (gameArray[i][y] == 0) {
                    return false;
                }
            }
        }
        isContinue = false;
        printResult.print(null, 'draw');
    }

    function restart() {
        const gamebtn = document.getElementsByClassName('gamebtn');
        for (let i = 0; i < gamebtn.length; i++) {
            gamebtn[i].classList.remove('selected');
            gamebtn[i].classList.add('unselected');
            gamebtn[i].style.backgroundColor = '#fff';
        }
        for(let i = 0; i < 3; i++){
            for(let y = 0; y < 3; y++){
                gameArray[i][y] = 0;
            }
        }
        isContinue = true;
    }
}();