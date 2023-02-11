const request = newXMLHttpRequest();
request.open(`GET`, "http://api.nbp.pl/api/exchangerates/tables/{table}/");
request.responseType = `json`;
request.onload(() => {
    console.log(request.response)
});

request.send();
