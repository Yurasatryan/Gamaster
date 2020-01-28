class Naft extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index); 
        this.multiply = 0;
    }
    gettCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.gettCoordinates();
        return super.chooseCell(character);
    }
    fill() {
        this.multiply++;
        var newCell = random(this.chooseCell(5));
        if (this.multiply >= 8 && newCell) {
            var newNaft = new Naft(newCell[0], newCell[1], this.index);
            naftArr.push(newNaft);
            matrix[newCell[1]][newCell[0]] = 5;
            this.multiply = 0;
        }
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = 5;
            this.x = newX;
            this.y = newY;
        }
    }
    fill1() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = 5;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX === grassArr[i].x && newY === grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
    }
    fill2() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
            for (var i in grasseaterArr) {
                if (newX === grasseaterArr[i].x && newY === grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }

        }
    }
    fill3() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = 5;
            this.x = newX;
            this.y = newY;
            for (var i in wolfArr) {
                if (newX === wolfArr[i].x && newY === wolfArr[i].y) {
                    wolfArr.splice(i, 1);
                    break;
                }
            }


        }
    }
    fill4() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = 5;
            this.x = newX;
            this.y = newY;
            for (var i in vorsordArr) {
                if (newX === vorsordArr[i].x && newY === vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                    break;
                }
            }

        }
    }

}

