var apikeys = ["NDWNAGGTXL2SRLHZZ4ML4X2SK","NDGELCPHU3EJSN66HA5FE9WCV"]

const apikey3 = apikeys[Math.floor(Math.random()*apikeys.length)]

function back() {
    var searchdiv = document.getElementById("searchdiv").style
    var contentdiv = document.getElementById("contentdiv").style
    var backbtn = document.getElementById("backbtn").style
    contentdiv.display ="none";
    searchdiv.display ="block";
    backbtn.display ="none";
}

function search() {
    let searchboxx = document.getElementById("search").value;
    let temp = document.getElementById("temp");
    let adress1 = document.getElementById("adress");
    let feelslike = document.getElementById("feeltemp");
    let humid = document.getElementById("humi");
    var searchdiv = document.getElementById("searchdiv").style
    var contentdiv = document.getElementById("contentdiv").style
    var backbtn = document.getElementById("backbtn").style
    
    url3 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchboxx}?unitGroup=us&key=${apikey3}&contentType=json`

    if (searchboxx === "") {
        alert("Please Enter Something")
    } else {
    let ami = fetch(url3)
    .then((respose) => respose.json())
    .then ((data)=> {
        console.log(data)
        temp.innerHTML = ((data.currentConditions.temp-32)/1.8).toFixed(1);
        adress1.innerHTML =  data.resolvedAddress;
        feelslike.innerHTML = ((data.currentConditions.feelslike-32)/1.8).toFixed(0);
        humid.innerHTML = data.currentConditions.humidity;
        searchdiv.display ="none";
        contentdiv.display ="block";
        backbtn.display ="block";
    })
}
    
}