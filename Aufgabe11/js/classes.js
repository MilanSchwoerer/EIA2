var Aufgabe11;
(function (Aufgabe11) {
    class BaseStats {
        move() { }
        draw() { }
    }
    Aufgabe11.BaseStats = BaseStats;
    class Movement extends BaseStats {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    Aufgabe11.Movement = Movement;
    class Cloud extends Movement {
        draw() {
            Aufgabe11.crc2.strokeStyle = "#ffffff";
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            Aufgabe11.crc2.arc(this.x + 10, this.y + 5, 7, 0, 2 * Math.PI);
            Aufgabe11.crc2.arc(this.x + 6, this.y - 4, 7, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Cloud = Cloud;
    class Sun extends BaseStats {
        draw() {
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.strokeStyle = this.color;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Sun = Sun;
    class Tree extends BaseStats {
        draw() {
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.strokeStyle = this.color;
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x + 5, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y - 20);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = this.color2;
            Aufgabe11.crc2.strokeStyle = this.color2;
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 15, this.y - 21);
            Aufgabe11.crc2.lineTo(this.x, this.y - 45);
            Aufgabe11.crc2.lineTo(this.x + 15, this.y - 21);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Tree = Tree;
    class Background extends BaseStats {
        draw() {
            let width = Aufgabe11.crc2.canvas.width;
            let height = Aufgabe11.crc2.canvas.height;
            Aufgabe11.crc2.fillStyle = "#206dc5";
            Aufgabe11.crc2.strokeStyle = "#206dc5";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 0);
            Aufgabe11.crc2.lineTo(width, 0);
            Aufgabe11.crc2.lineTo(width, height);
            Aufgabe11.crc2.lineTo(0, height);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#dcdcdc";
            Aufgabe11.crc2.strokeStyle = "#dcdcdc";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, height - 100);
            Aufgabe11.crc2.lineTo(width, 150);
            Aufgabe11.crc2.lineTo(width, height);
            Aufgabe11.crc2.lineTo(0, height);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Background = Background;
    class Snowflakes extends Movement {
        draw() {
            Aufgabe11.crc2.strokeStyle = "#ffffff";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y - 4);
            Aufgabe11.crc2.lineTo(this.x, this.y + 4);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 4, this.y);
            Aufgabe11.crc2.lineTo(this.x + 4, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
        move() {
            if (this.y >= Aufgabe11.crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }
    Aufgabe11.Snowflakes = Snowflakes;
    class Children extends Movement {
        draw() {
            if (this.state == "ridedown") {
                this.drawChild1();
            }
            if (this.state == "pullup") {
                this.drawChild2();
            }
            else { }
        }
        drawChild2() {
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.lineWidth = 1;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x - 2, this.y + 7);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x + 1, this.y + 8);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y - 15);
            Aufgabe11.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            Aufgabe11.crc2.moveTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 6, this.y + 2);
            Aufgabe11.crc2.moveTo(this.x, this.y - 12);
            Aufgabe11.crc2.lineTo(this.x - 7, this.y - 2);
            Aufgabe11.crc2.moveTo(this.x - 8, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x - 28, this.y + 7);
            Aufgabe11.crc2.moveTo(this.x - 12, this.y + 6);
            Aufgabe11.crc2.lineTo(this.x - 15, this.y + 12);
            Aufgabe11.crc2.moveTo(this.x - 22, this.y + 7);
            Aufgabe11.crc2.lineTo(this.x - 25, this.y + 14);
            Aufgabe11.crc2.moveTo(this.x - 8, this.y + 12);
            Aufgabe11.crc2.lineTo(this.x - 30, this.y + 15);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        drawChild1() {
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.lineWidth = 1;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x - 7, this.y + 2);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x - 6, this.y + 4);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y - 15);
            Aufgabe11.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            Aufgabe11.crc2.moveTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 6, this.y + 2);
            Aufgabe11.crc2.moveTo(this.x, this.y - 12);
            Aufgabe11.crc2.lineTo(this.x - 7, this.y - 2);
            Aufgabe11.crc2.moveTo(this.x + 8, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y + 7);
            Aufgabe11.crc2.moveTo(this.x + 4, this.y + 6);
            Aufgabe11.crc2.lineTo(this.x + 3, this.y + 12);
            Aufgabe11.crc2.moveTo(this.x - 6, this.y + 7);
            Aufgabe11.crc2.lineTo(this.x - 8, this.y + 14);
            Aufgabe11.crc2.moveTo(this.x + 8, this.y + 12);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y + 15);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        move() {
            if (this.state == "ridedown") {
                if (this.y > Aufgabe11.crc2.canvas.height) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "pullup";
                }
                else if (this.x < 0) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "pullup";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "pullup") {
                if (this.x > Aufgabe11.crc2.canvas.width) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.state = "ridedown";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
            else { }
        }
    }
    Aufgabe11.Children = Children;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=classes.js.map