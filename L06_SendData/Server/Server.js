"use strict";
const Http = require("http"); //Import eines Modul als HTTP Objekt
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Consolelog wird ausgegeben mit der Nachricht "Starting server"
    let port = process.env.PORT; //Stellt den PORT als number ein zum Heroku server  
    if (port == undefined)
        port = 8100; //soll er die nummer 8100 haben (verbindet Heroku mit EIA2)
    let server = Http.createServer(); //variable server wird als typ Http.Server und wird als Http.createserver Funktion gleichgesetzt
    server.addListener("request", handleRequest); //F�gt einen Listener hinzu der dem H�ndler bescheid gibt, wenn handleRequest ausgel�st wurde
    server.addListener("listening", handleListen); //solange der K�ufer auf die funktion zugreift, sieht der H�ndler das.
    server.listen(port); //schaut zu was f�r ein Port verwendet wird. (8100)
    function handleListen() {
        console.log("Listening"); //In der Console wird "Listening" ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log(_request.url);
        console.log("request");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die antwort des Codes mit dem Nutzer geteilt wird.
        // _response.write(_request.url);          //gibt bei _response.write eine angefragte URL aus             
        console.log(_request.url);
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        _response.end(); //beendet die schleife der _response
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map