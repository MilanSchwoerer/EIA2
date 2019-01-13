var Aufgabe10;
(function (Aufgabe10) {
    class Cloud {
        draw() {
            Aufgabe10.crc2.strokeStyle = "#ffffff";
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 10, this.y + 4, 7, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 6, this.y - 1, 7, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        move() {
            if (this.x >= Aufgabe10.crc2.canvas.width) {
                this.x = 0;
            }
            else {
                this.x += this.dx;
            }
        }
    }
    Aufgabe10.Cloud = Cloud;
    class Sun {
        draw() {
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Sun = Sun;
    class Tree {
        draw(_max) {
            for (let i = 0; i < _max; i++) {
                let x = Math.random() * Aufgabe10.crc2.canvas.width;
                let y = Math.random() * Aufgabe10.crc2.canvas.height;
                Aufgabe10.crc2.beginPath();
                Aufgabe10.crc2.moveTo(Aufgabe10.crc2.canvas.width, Aufgabe10.bgY - 50);
                Aufgabe10.crc2.lineTo(Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
                Aufgabe10.crc2.lineTo(0, Aufgabe10.crc2.canvas.height);
                Aufgabe10.crc2.lineTo(0, Aufgabe10.bgY);
                Aufgabe10.crc2.quadraticCurveTo(Aufgabe10.crc2.canvas.width / 2 - 25, Aufgabe10.bgY - 40, Aufgabe10.crc2.canvas.width, Aufgabe10.bgY - 50);
                Aufgabe10.crc2.closePath();
                if (Aufgabe10.crc2.isPointInPath(x, y)) {
                    Aufgabe10.crc2.fillStyle = this.color1;
                    Aufgabe10.crc2.strokeStyle = this.color1;
                    Aufgabe10.crc2.lineWidth = 2;
                    Aufgabe10.crc2.beginPath();
                    Aufgabe10.crc2.moveTo(x + 5, y + 1);
                    Aufgabe10.crc2.lineTo(x - 5, y + 1);
                    Aufgabe10.crc2.lineTo(x - 5, y - 20);
                    Aufgabe10.crc2.lineTo(x + 5, y - 20);
                    Aufgabe10.crc2.closePath();
                    Aufgabe10.crc2.fill();
                    Aufgabe10.crc2.stroke();
                    Aufgabe10.crc2.fillStyle = this.color2;
                    Aufgabe10.crc2.strokeStyle = this.color2;
                    Aufgabe10.crc2.lineWidth = 2;
                    Aufgabe10.crc2.beginPath();
                    Aufgabe10.crc2.moveTo(x - 15, y - 10);
                    Aufgabe10.crc2.lineTo(x, y - 45);
                    Aufgabe10.crc2.lineTo(x + 15, y - 10);
                    Aufgabe10.crc2.closePath();
                    Aufgabe10.crc2.fill();
                    Aufgabe10.crc2.stroke();
                }
                else {
                    i--;
                }
            }
        }
    }
    Aufgabe10.Tree = Tree;
    class Background {
        draw() {
            let width = Aufgabe10.crc2.canvas.width;
            Aufgabe10.bgY = Math.random() * Math.floor(50);
            Aufgabe10.bgY += 100;
            console.log(Aufgabe10.bgY);
            Aufgabe10.crc2.fillStyle = "white";
            Aufgabe10.crc2.strokeStyle = "black";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(width, Aufgabe10.bgY - 50);
            Aufgabe10.crc2.lineTo(width, Aufgabe10.crc2.canvas.height);
            Aufgabe10.crc2.lineTo(0, Aufgabe10.crc2.canvas.height);
            Aufgabe10.crc2.lineTo(0, Aufgabe10.bgY);
            Aufgabe10.crc2.quadraticCurveTo(width / 2 - 25, Aufgabe10.bgY - 40, width, Aufgabe10.bgY - 50);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#00ffff";
            Aufgabe10.crc2.strokeStyle = "#00ffff";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(width, Aufgabe10.bgY - 50);
            Aufgabe10.crc2.lineTo(width, 0);
            Aufgabe10.crc2.lineTo(0, 0);
            Aufgabe10.crc2.lineTo(0, Aufgabe10.bgY);
            Aufgabe10.crc2.quadraticCurveTo(width / 2 - 25, Aufgabe10.bgY - 40, width, Aufgabe10.bgY - 50);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Background = Background;
    class Snow {
        draw() {
            Aufgabe10.crc2.strokeStyle = "#ffffff";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y - 4);
            Aufgabe10.crc2.lineTo(this.x, this.y + 4);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 4, this.y);
            Aufgabe10.crc2.lineTo(this.x + 4, this.y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
        move() {
            if (this.y >= Aufgabe10.crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }
    Aufgabe10.Snow = Snow;
    class Kid1 {
        draw() {
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x - 2, this.y + 7);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 1, this.y + 8);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - 15);
            Aufgabe10.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.moveTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 6, this.y + 2);
            Aufgabe10.crc2.moveTo(this.x, this.y - 12);
            Aufgabe10.crc2.lineTo(this.x - 7, this.y - 2);
            Aufgabe10.crc2.moveTo(this.x - 8, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x - 28, this.y + 7);
            Aufgabe10.crc2.moveTo(this.x - 12, this.y + 6);
            Aufgabe10.crc2.lineTo(this.x - 15, this.y + 12);
            Aufgabe10.crc2.moveTo(this.x - 22, this.y + 7);
            Aufgabe10.crc2.lineTo(this.x - 25, this.y + 14);
            Aufgabe10.crc2.moveTo(this.x - 8, this.y + 12);
            Aufgabe10.crc2.lineTo(this.x - 30, this.y + 15);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
        move() {
            if (this.y >= Aufgabe10.crc2.canvas.height) {
                this.y = this.backupy;
            }
            else if (this.x >= Aufgabe10.crc2.canvas.width) {
                this.x = 0;
            }
            else {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    Aufgabe10.Kid1 = Kid1;
    class Kid2 {
        draw() {
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x - 7, this.y + 2);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x - 6, this.y + 4);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - 15);
            Aufgabe10.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.moveTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 6, this.y + 2);
            Aufgabe10.crc2.moveTo(this.x, this.y - 12);
            Aufgabe10.crc2.lineTo(this.x - 7, this.y - 2);
            Aufgabe10.crc2.moveTo(this.x + 8, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x - 10, this.y + 7);
            Aufgabe10.crc2.moveTo(this.x + 4, this.y + 6);
            Aufgabe10.crc2.lineTo(this.x + 3, this.y + 12);
            Aufgabe10.crc2.moveTo(this.x - 6, this.y + 7);
            Aufgabe10.crc2.lineTo(this.x - 8, this.y + 14);
            Aufgabe10.crc2.moveTo(this.x + 8, this.y + 12);
            Aufgabe10.crc2.lineTo(this.x - 10, this.y + 15);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
        move() {
            if (this.y >= Aufgabe10.crc2.canvas.height) {
                this.y = this.backupy;
            }
            else if (this.x >= Aufgabe10.crc2.canvas.width) {
                this.x = Aufgabe10.crc2.canvas.width;
            }
            else {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    Aufgabe10.Kid2 = Kid2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=classes.js.map