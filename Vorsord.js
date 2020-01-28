class Vorsord extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 25;
    }
    getCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],
        ];
    }
    chooseCell(character) {
        this.getCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
            this.energy -= 1;

        }
    }
    move1() {
        var emptyCells = this.chooseCell(5);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
            this.energy -= 2;

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in vorsordArr) {
                if (this.x == vorsordArr[i].x && this.y == vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                }
            }

        }
    }
    kill() {
        var kll = random(this.chooseCell(2));
        if (kll) {
            var newX = kll[0];
            var newY = kll[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in grasseaterArr) {
                if (newX === grasseaterArr[i].x && newY === grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy -= 2;
        }
    }
    kill1() {
        var kll = random(this.chooseCell(3));
        if (kll) {
            var newX = kll[0];
            var newY = kll[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in wolfArr) {
                if (newX === wolfArr[i].x && newY === wolfArr[i].y) {
                    wolfArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 3;
        }

    }
 }