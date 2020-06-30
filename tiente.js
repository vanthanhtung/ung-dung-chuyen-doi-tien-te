function convert(money,country1,country2){
    var result = money;
    if(country1 == country2){
        return money;
    }
    if(country1 == "VND" && country2 == "USD"){
        result = money / 23000;
    }
    if(country1 == "USD" && country2 == "VND"){
        result = money * 23000;
    }
    return result;
}
function changevalue() {
    var money = document.getElementById("money").value;
    var country1 = document.getElementById("country1").value;
    var country2 = document.getElementById("country2").value;
    var result = convert(money,country1,country2);

    document.getElementById('messageDiv').innerHTML = result;
}