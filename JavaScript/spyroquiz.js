function tarkista() {

    var k1 = document.spyrothequiz.k1.value;
    var k2 = document.spyrothequiz.k2.value;
	var k3 = document.spyrothequiz.k3.value;
	var k4 = document.spyrothequiz.k4.value;
	var k5 = document.spyrothequiz.k5.value;
	var k6 = document.spyrothequiz.k6.value;
	var k7 = document.spyrothequiz.k7.value;
	var k8 = document.spyrothequiz.k8.value;
	var k9 = document.spyrothequiz.k9.value;
	var k10 = document.spyrothequiz.k10.value;
	var k11 = document.spyrothequiz.k11.value;
	var k12 = document.spyrothequiz.k12.value;
	var k13 = document.spyrothequiz.k13.value;
	var k14 = document.spyrothequiz.k14.value;
	var k15 = document.spyrothequiz.k15.value;
	var k16 = document.spyrothequiz.k16.value;
	var k17 = document.spyrothequiz.k17.value;
	var k18 = document.spyrothequiz.k18.value;
	var k19 = document.spyrothequiz.k19.value;
	var k20 = document.spyrothequiz.k20.value;

    var oikein = 0;

    if (k1 == "purple"){
        oikein++;
}
    if (k2 == "dragonfly") {
        oikein++;
}
	if (k3 == "two"){
        oikein++;
}
	if (k4 == "twentyfive"){
        oikein++;
}
	if (k5 == "huntergnasty"){
        oikein++;
}
	if (k6 == "vastaus2"){
        oikein++;
}
	if (k7 == "bubba"){
        oikein++;
}
	if (k8 == "drshemp"){
        oikein++;
}
	if (k9 == "ltfgi"){
        oikein++;
}
	if (k10 == "mistybog"){
        oikein++;
}
	if (k11 == "dragonshores"){
        oikein++;
}
	if (k12 == "crushgulp"){
        oikein++;
}
	if (k13 == "trolley"){
        oikein++;
}
	if (k14 == "handelgreta"){
        oikein++;
}
	if (k15 == "metropolis"){
        oikein++;
}
	if (k16 == "sheila"){
        oikein++;
}
	if (k17 == "sheriffwyatt"){
        oikein++;
}
	if (k18 == "1000g"){
        oikein++;
}
	if (k19 == "lostfleet"){
        oikein++;
}
	if (k20 == "dan"){
        oikein++;
}

  document.getElementById("submitin_jalkeen").style.visibility="visible";
   
   if (oikein <= 4) {
		document.getElementById("oikeidenvastaustenmaara").innerHTML = "You got " + oikein + " correct. Man, looks like you got torched.";
	}
	else if (oikein > 4 && oikein <= 8) {
		document.getElementById("oikeidenvastaustenmaara").innerHTML = "You got " + oikein + " correct. Starting to get somewhere, but you can do better than that.";
	}
	else if (oikein > 8 && oikein <= 12) {
		document.getElementById("oikeidenvastaustenmaara").innerHTML = "You got " + oikein + " correct. Nice amount of correct answers, but you still have some holes in your Spyro knowledge.";
	}
	else if (oikein > 12 && oikein <= 16) {
		document.getElementById("oikeidenvastaustenmaara").innerHTML = "You got " + oikein + " correct. You seem to know quite a bit about Spyro. We're starting to get impressed.";
	}
	else if (oikein > 16 && oikein < 20) {
		document.getElementById("oikeidenvastaustenmaara").innerHTML = "You got " + oikein + " correct. You got almost everything right! Keep trying and see if you can get all questions right!";
	}
	else {
		document.getElementById("oikeidenvastaustenmaara").innerHTML = "You got " + oikein + " correct. Amazing! You got every question right! Perhaps we need to come up with harder questions!";
	}
}
		