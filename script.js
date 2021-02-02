function _$(selector) {
	return document.querySelector(selector);
}

function _$$(selector) {
	return document.querySelectorAll(selector);
}

var dolg = 0;
var elemscred = document.getElementsByName("credit");
var elemslives = document.getElementsByName("live");
var lenlives = elemslives.length;
var t = 0;
var n = 0;
var i = 0;
var k = 0;
var z = 0;
var w = 370;
var scr = [100,1000,10000,1000000,100000000,10000000000];

TimerFormoney();

tax();

function tax() {
setTimeout (function(){
		i = i - Math.round(i * 0.2);
		document.getElementById("balance").innerHTML = '<img class="ico" src = "img/money.png">' + i;
		document.getElementById("put").className = "putin move-putin";
		setTimeout (function(){
		document.getElementById("put").className = "putin";
	},3000);
		tax();
	},20000);
}

function addscore() {
	i+=1;
	document.getElementById("balance").innerHTML = '<img class="ico" src = "img/money.png">' + i;
	var myImg = document.createElement("img");
	myImg.src = "img/rain.png";
	myImg.className = 'rain';
	var elem=document.body.appendChild(myImg);
	setTimeout (function(){
		document.body.removeChild(elem);
	},3000);

}

function plus1() {
	if (i >= scr[0]){
		i-=scr[0];
		k+=1;
		scr[0]+=scr[0];
		document.getElementById("moneyPerSecond").innerHTML = '<img class="ico" src = "img/money.png">' + k + " в сек";
		document.getElementById("balance").innerHTML = '<img class="ico" src = "img/money.png">' + i;
		document.getElementById("lvl1").innerHTML = 'Попрошайка<br><img class="ico" src = "img/money.png">' + scr[0];
		if (z == 0)
		{
			setTimeout (function(){
				TimerEver();	
			},1000);
			setTimeout (function(){
				TimerEverforrain();	
			},1000);
			z = 1;
		}
	
	}
	
}
function plus10() {
	if (i >= scr[1]){
		i-=scr[1];
		k += 10;
		scr[1]+=scr[1];
		document.getElementById("moneyPerSecond").innerHTML ='<img class="ico" src = "img/money.png">' + k + " в сек";
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
		document.getElementById("lvl2").innerHTML ='Подработка<br><img class="ico" src = "img/money.png">' + scr[1];
	}
	
}
function plus100() {
	if (i >= scr[2]){
		i-=scr[2];
		k+=100;
		scr[2]+=scr[2];
		document.getElementById("moneyPerSecond").innerHTML ='<img class="ico" src = "img/money.png">' + k + " в сек";
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
		document.getElementById("lvl3").innerHTML ='Работник офиса<br><img class="ico" src = "img/money.png">' + scr[2];
		
	}
	
}
function plus1000() {
	if (i >= scr[3]){
		i-=scr[3];
		k+=1000;
		scr[3]+=scr[3];
		document.getElementById("moneyPerSecond").innerHTML ='<img class="ico" src = "img/money.png">' + k + " в сек";
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
		document.getElementById("lvl4").innerHTML ='Зам директора<br><img class="ico" src = "img/money.png">' + scr[3];
		
	}
	
}
function plus10000() {
	if (i >= scr[4]){
		i-=scr[4];
		k+=10000;
		scr[4]+=scr[4];
		document.getElementById("moneyPerSecond").innerHTML ='<img class="ico" src = "img/money.png">' + k + " в сек";
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
		document.getElementById("lvl5").innerHTML ='Директор<br><img class="ico" src = "img/money.png">' + scr[4];
		
	}
	
}
function plus100000() {
	if (i >= scr[5]){
		i-=scr[5];
		k+=100000;
		scr[5]+=scr[5];
		document.getElementById("moneyPerSecond").innerHTML ='<img class="ico" src = "img/money.png">' + k + " в сек";
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
		document.getElementById("lvl6").innerHTML ='Олигарх<br><img class="ico" src = "img/money.png">' + scr[5];
		
	}
	
}

_$('#casino').addEventListener('click', function(e) {
	if(e.target.classList.contains('mini-game')) {
		this.classList.remove('open');
	}
});

function OnCasino() {
	_$("#casino").className = "mini-game open";
}

_$('#bank').addEventListener('click', function(e) {
	if(e.target.classList.contains('mini-game')) {
		this.classList.remove('open');
	}
});
function OnBank() {
	_$("#bank").className = "mini-game open";
}


function moverich() {
	var a = [];
	if (i >= 1000) {
	i-=1000;
	document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
	document.getElementById("casino-play").className = "casino-btn move";
	for (var j = 0; j < 3; j++)
		a[j] = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
	console.log(i);
		if (a[0] == 1 && a[1] == 1 && a[2] == 1)
			i *= 100;
		if (a[0] == 2 && a[1] == 2 && a[2] == 2)
			i *= 50;
		if (a[0] == 3 && a[1] == 3 && a[2] == 3)
			i *= 10;
		if (a[0] == 4 && a[1] == 4 && a[2] == 4)
			i *= 0;
	console.log(i);
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
	for (var j = 0; j < 3; j++)
	{
		switch (a[j]){
			case 1: document.getElementById(j + 1).src = "img/seven.png"; break;
			case 2: document.getElementById(j + 1).src = "img/strawberry.png"; break;
			case 3: document.getElementById(j + 1).src = "img/cherry.png"; break;
			case 4: document.getElementById(j + 1).src = "img/sad.png"; break;
		}
	}
	setTimeout (function(){
		document.getElementById("casino-play").className = "casino-btn";
	},3000);
	} else alert("У ТЕБЯ НЕТ ДЕНЕГ ВАЛИ ОТСЮДА");
}


function TimerEverforrain() {
	var myImg = document.createElement("img");
	myImg.src = "img/rain.png";
	myImg.className = 'rain';
	var elem = document.body.appendChild(myImg);
	setTimeout (function(){
		document.body.removeChild(elem);
	},3000);
	if (k <= 10)
	setTimeout (function(){
		TimerEverforrain();
	},1000);
	if (k <= 100 && k > 10)
		setTimeout (function(){
		TimerEverforrain();
	},500);
	if (k <= 1000 && k > 100)
		setTimeout (function(){
		TimerEverforrain();
	},300);
	if (k > 1000)
		setTimeout (function(){
		TimerEverforrain();
	},200);
}

function TimerFormoney() {
		setTimeout (function(){
			if (i >= scr[0])
				document.getElementById("lvl1").className = "on";
			else
				document.getElementById("lvl1").className = "off";
			if (i >= scr[1])
				document.getElementById("lvl2").className = "on";
			else
				document.getElementById("lvl2").className = "off";
			if (i >= scr[2])
				document.getElementById("lvl3").className = "on";
			else
				document.getElementById("lvl3").className = "off";
			if (i >= scr[3])
				document.getElementById("lvl4").className = "on";
			else
				document.getElementById("lvl4").className = "off";
			if (i >= scr[4])
				document.getElementById("lvl5").className = "on";
			else
				document.getElementById("lvl5").className = "off";
			if (i >= scr[5])
				document.getElementById("lvl6").className = "on";
			else
				document.getElementById("lvl6").className = "off";
		TimerFormoney();
	},10);
}

function TimerEver(element) {
	i+=k;
	document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">' + i;
	setTimeout (function(){
		TimerEver();
	},1000);
}
function cred700() {
	if (dolg == 0) {
		i += 500;
		for (var j = 0; j  < elemscred.length; j++) {
			elemscred[j].className = "btnCredit off";
			elemscred[j].disabled = true;
		}
		dolg = 700;
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">   ' + i;
		document.getElementById("credit").innerHTML ='<img class="ico" src = "img/cashback.png">   ' + dolg;
		n = 300;
		document.getElementById("timerForCredit").innerHTML ='<img class="ico" src = "img/timer.png">   ' + n;
		StartCred(n);
	}
}

function cred8000() {
	if (dolg == 0) {
		i += 5000;
		for (var j = 0; j  < elemscred.length; j++) {
			elemscred[j].className = "btnCredit off";
			elemscred[j].disabled = true;
		}
		dolg = 8000;
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">   ' + i;
		document.getElementById("credit").innerHTML ='<img class="ico" src = "img/cashback.png">   ' + dolg;
		n = 300;
		document.getElementById("timerForCredit").innerHTML ='<img class="ico" src = "img/timer.png">   ' + n;
		StartCred(n);
	}
}
function cred90000() {
	if (dolg == 0) {
		i += 50000;
		for (var j = 0; j  < elemscred.length; j++) {
			elemscred[j].className = "btnCredit off";
			elemscred[j].disabled = true;
		}
		dolg = 90000;
		document.getElementById("balance").innerHTML ='<img class="ico" src = "img/money.png">   ' + i;
		document.getElementById("credit").innerHTML ='<img class="ico" src = "img/cashback.png">   ' + dolg;
		n = 300;
		document.getElementById("timerForCredit").innerHTML ='<img class="ico" src = "img/timer.png">   ' + n;
		StartCred(n);
	}
}

function StartCred(n){
	if (i >= dolg) {
		i-=dolg;
		dolg = 0;
		var dt = 0;
		for (var j = 0; j  < elemscred.length; j++) {
			elemscred[j].className = "btnCredit on";
			elemscred[j].disabled = false;
		}
		document.getElementById("credit").innerHTML ='<img class="ico" src = "img/cashback.png">   ' + dolg;
		document.getElementById("timerForCredit").innerHTML ='<img class="ico" src = "img/timer.png">   ' + 0;
	}
	else{
		if (n == 0){
		document.getElementById("col").className = "collector move-collector";
		setTimeout (function(){
		document.getElementById("col").className = "collector";
		},3000);
			n = 300;
			lenlives--;
			if (lenlives == 0){
				alert("Ты умер, для перерождения нажми ок");
				window.location.reload();
			}
			elemslives[lenlives-1].className = "lives off";
			setTimeout(function (){
		StartCred(n);
		document.getElementById("timerForCredit").innerHTML ='<img class="ico" src = "img/timer.png">   ' + n;
	}, 1000);
	} else {
	n--;
	setTimeout(function (){
		StartCred(n);
		document.getElementById("timerForCredit").innerHTML ='<img class="ico" src = "img/timer.png">   ' + n;
	}, 1000);
	}
	}
}
function Heal() {
	
	if (lenlives < 3) {
		elemslives[lenlives-1].className = "lives ico";
		lenlives++;
		document.getElementById("btnHeal").disabled = true;
		document.getElementById("btnHeal").className = "off";
		t = 10;
		StartTimer(t);
	} else alert("Вы не нуждаетесь.");
	
}
function StartTimer() {
	t--;
	setTimeout(function (){
		if (t == 0) {
			document.getElementById("btnHeal").disabled = false;
			document.getElementById("btnHeal").className = "on";
			document.getElementById("btnHeal").innerHTML = 'Подорожник<br><img class="ico" src = "img/heal.png">';
		} else {
		document.getElementById("btnHeal").innerHTML ='Подорожник<br><img class="ico" src = "img/heal.png"><br><img class="ico" src = "img/timer.png">   ' + t;
		StartTimer(t);
		}
	}, 1000);
}

