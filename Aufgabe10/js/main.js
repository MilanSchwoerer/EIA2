var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let clouds = [];
    let snowflakes = [];
    let kid1s = [];
    let kid2s = [];
    let sun;
    let bg;
    let bgImg;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        bg = new Aufgabe10.Background();
        bg.draw();
        let tree = new Aufgabe10.Tree();
        tree.color1 = "#753c0f";
        tree.color2 = "#238f0a";
        tree.draw(8);
        bgImg = Aufgabe10.crc2.getImageData(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        for (let i = 0; i < 6; i++) {
            let cloud = new Aufgabe10.Cloud();
            cloud.x = Math.random() * Aufgabe10.crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.color = "#BDBDBD";
            clouds.push(cloud);
        }
        for (let i = 0; i < 25; i++) {
            let snowflake = new Aufgabe10.Snow();
            snowflake.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snowflake.y = Math.random() * 100;
            snowflake.dy = (Math.random() * 2) / 5;
            snowflakes.push(snowflake);
        }
        for (let i = 0; i < 8; i++) {
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
                let kid1 = new Aufgabe10.Kid1();
                kid1.x = x;
                kid1.y = y;
                kid1.backupx = x;
                kid1.backupy = y;
                kid1.dx = (Math.random() * 2) / 10;
                kid1.dy = (Math.random() - 1) / 100;
                kid1s.push(kid1);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 8; i++) {
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
                let kid = new Aufgabe10.Kid2();
                kid.x = x;
                kid.y = y;
                kid.backupx = x;
                kid.backupy = y;
                kid.dx = (Math.random() - 1) / 10;
                kid.dy = Math.random() / 100;
                kid2s.push(kid);
            }
            else {
                i--;
            }
        }
        sun = new Aufgabe10.Sun();
        sun.x = Math.random() * Aufgabe10.crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.color = "#fffa00";
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / 25);
        Aufgabe10.crc2.clearRect(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        Aufgabe10.crc2.putImageData(bgImg, 0, 0);
        sun.draw();
        for (let i = 0; i < 6; i++) {
            let cloud = clouds[i];
            cloud.move();
            cloud.draw();
        }
        for (let i = 0; i < 25; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < 8; i++) {
            let kid = kid1s[i];
            kid.move();
            kid.draw();
        }
        for (let i = 0; i < 8; i++) {
            let kid = kid2s[i];
            kid.move();
            kid.draw();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map