var side = 25;
var grassArr = [];
var grasseaterArr = [];
var wolfArr = [];
var vorsordArr = [];
var naftArr = [];
var m = 30;
var n = 30;
var matrix = [];

function setup() {
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = random([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,4,5]);
        }
    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2);
                grasseaterArr.push(ge);

            }
            else if (matrix[y][x] == 3) {
                var wf = new Wolf(x, y, 3);
                wolfArr.push(wf);
            }
            else if (matrix[y][x] == 4) {
                var vo = new Vorsord(x, y, 4);
                vorsordArr.push(vo);
            }
            else if (matrix[y][x] == 5) {
                var nf = new Naft(x, y, 5);
                naftArr.push(nf);
            }
        }
    }



}

function draw() {
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("darkblue");
                rect(x * side, y * side, side, side);
            }


            stroke(0);
            rect(x * side, y * side, 50, 50);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].move1();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }
    for (var i in wolfArr) {
        wolfArr[i].move();
        wolfArr[i].move1();
        wolfArr[i].eat();
        wolfArr[i].mul();
        wolfArr[i].die();

    }
    for (var i in vorsordArr) {
        vorsordArr[i].move();
        vorsordArr[i].kill();
        vorsordArr[i].kill1();
        vorsordArr[i].die();
    }
    // for (var i in naftArr) {
    //     naftArr[i].fill();
    //     naftArr[i].move();
    //     naftArr[i].fill1();
    //     naftArr[i].fill2();
    //     naftArr[i].fill3();
    //     naftArr[i].fill4();
    // }
}


