// JavaScript Document

function httpPost(url) {
    // Send request
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
 
    // Deal with response
    const data = JSON.parse(xmlHttp.responseText);
    console.log(data);
 
    // Push things to website
    document.getElementById('temp').innerHTML = data.Temperature;
    document.getElementById('humidity').innerHTML = data.Humidity;
    document.getElementById('pressure').innerHTML = data.Pressure;
    document.getElementById('lastupdate').innerHTML = data.Time;
}

setInterval(httpPost, 5000, 'http://weather.crutech.cru/latest');