class Wolf extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 17;
    }
    getoldCoordinates() {
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
        this.getoldCoordinates();
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
            this.energy -= 2;

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
    eat() {
        var wf = random(this.chooseCell(2));
        if (wf) {
            var newX = wf[0];
            var newY = wf[1];
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
            this.energy += 1;
        }
    }
    mul() {

        var newCell = random(this.chooseCell(0));

        if (newCell && this.energy >= 16) {
            {

                var newWolf = new Wolf(newCell[0], newCell[1], this.index);
                wolfArr.push(newWolf);
                matrix[newCell[1]][newCell[0]] = this.index;
                this.energy = 17;
            }
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in wolfArr) {
                if (this.x == wolfArr[i].x && this.y == wolfArr[i].y) {
                    wolfArr.splice(i, 1);
                }
            }

        }
    }
}
