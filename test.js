var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.response);
    }
};
xhttp.open("GET", "https://clickerheroes-savedgames3-747864888.us-east-1.elb.amazonaws.com/clans/getServerVersion.php", true);
xhttp.send();
console.log("kappa");
