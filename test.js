var attack = new XMLHttpRequest();
attack.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(attack.response);
    }
};
attack.open("GET", "https://clickerheroes-savedgames3-747864888.us-east-1.elb.amazonaws.com/clans/getServerVersion.php", true);
attack.setRequestHeader("Authorization", "Negotiate");
attack.send();
console.log("kappa");
