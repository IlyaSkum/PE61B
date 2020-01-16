/*
GAME RULES:
- Игра для двух игроков, играют по раундам.
- В течении хода, игрок бросает кубик, результаты каждого его броска суммируются. 
- Игрок может сохранить свой прогресс в суммарный счёт, после чего ход переходит другому игроку.
- Но если игроку выпадает "1", несохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score".
- Добавить 2-ой кубик.
*/

var Score0, Score1, Current0, Current1, ActivePlayer, StartGame;
const Win = 100;

function ButtonNewGame() {
    StartGame = 1;
    ActivePlayer = 0;
    Score0 = 0; Score1 = 0;
    Current0 = 0; Current1 = 0;
    document.getElementById("score-0").textContent = Score0;
    document.getElementById("current-0").textContent = Current0;
    document.getElementById("score-1").textContent = Score1;
    document.getElementById("current-1").textContent = Current1;
}

function ButtonRoll() {
    if (StartGame == 1) {
        function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }
        let NumberDice = randomInteger(1, 6);
        let NumberDice1 = randomInteger(1, 6);
        let PathDice = "dice-" + NumberDice + ".png";
        let PathDice1 = "dice-" + NumberDice1 + ".png";
        document.getElementById("dice0").src = PathDice;
        document.getElementById("dice1").src = PathDice1;
        if (ActivePlayer == 0) {
            if ((NumberDice == 1) || (NumberDice1 == 1)) {
                Current0 = 0;
                document.getElementById("current-0").textContent = Current0;
                ButtonHold()
            } else {
                Current0 = Current0 + NumberDice + NumberDice1;
                document.getElementById("current-0").textContent = Current0;
            }
        } else {
            if ((NumberDice == 1) || (NumberDice1 == 1)) {
                Current1 = 0;
                document.getElementById("current-1").textContent = Current1;
                ButtonHold()
            } else {
                Current1 = Current1 + NumberDice + NumberDice1;
                document.getElementById("current-1").textContent = Current1;
            }
        }
    }
}

function ButtonHold() {
    if (StartGame == 1) {
        if (ActivePlayer == 0) {
            Score0 = Score0 + Current0;
            Current0 = 0;
            document.getElementById("current-0").textContent = Current0;
            document.getElementById("score-0").textContent = Score0;
            if (Score0 >= 100) {
                StartGame = 0;
            } else {
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('active');
                ActivePlayer = 1;
            }
        } else {
            Score1 = Score1 + Current1;
            Current1 = 0;
            document.getElementById("current-1").textContent = Current1;
            document.getElementById("score-1").textContent = Score1;
            if (Score1 >= 100) {
                StartGame = 0;
            } else {
                document.querySelector('.player-0-panel').classList.add('active');
                document.querySelector('.player-1-panel').classList.remove('active');
                ActivePlayer = 0;
            }
        }
    }
}