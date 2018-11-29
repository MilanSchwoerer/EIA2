import * as Http from "http";               //Import eines Modul als HTTP Objekt

namespace L06_SendData {                    //
    console.log("Starting server");         //Consolelog wird ausgegeben mit der Nachricht "Starting server"
    let port: number = process.env.PORT;    //Stellt den PORT als number ein zum Heroku server  
    if (port == undefined)                  //Falls der Port nicht definiert ist,
        port = 8100;                        //soll er die nummer 8100 haben (verbindet Heroku mit EIA2)

    let server: Http.Server = Http.createServer();      //variable server wird als typ Http.Server und wird als Http.creatserver Funktion gleichgesetzt
    server.addListener("request", handleRequest);       //F�gt einen Listener hinzu der dem H�ndler bescheid gibt, wenn handleRequest ausgel�st wurde
    server.addListener("listening", handleListen);      //solange der K�ufer auf die funktion zugreift, sieht der H�ndler das.
    server.listen(port);                                //schaut zu was f�r ein Port verwendet wird. (8100)

    function handleListen(): void {                 
        console.log("Listening");                       //In der Console wird "Listening" ausgegeben
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  //erstellt eine Funktion die bei einer Http.Incomingmessage, eine Http.ServerResponse zur�ck schickt
        console.log("I hear voices!");              // gibt in der Console "I hear voices!" aus

        _response.setHeader("content-type", "text/html; charset=utf-8");        //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*");                //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die antwort des Codes mit dem Nutzer geteilt wird.

        _response.write(_request.url);          //gibt bei _response.write eine angefragte URL aus             
        
        _response.end();                        //beendet die schleife der _response
    }
}