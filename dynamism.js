(function () {
	"use strict";

	var crd, nm, cdd, cbd, del, sup, movs, Au, coins, ldrbrd;
	ldrbrd = {
        coins: "",
	    scr1: "",
        scr2: "",
        moves: "",
        total: ""
	}
	crd = [
        "1", "2", "3", "4", "5", "b"
	];
	Au = {}
	coins = 0
	movs = {}
	sup = {}
	del = {}
	cbd = {}
	cdd = {
	    n1: "",
	    n1a: "",
	    n2: "",
	    n2a: "",
	    n3: "",
	    n3a: "",
	    n3: "",
	    n3a: ""
	}
	var cards = [],
        cardCursor = 0,
        cardId,
        nn = 0,
        ns;
    ///


	function byId(X) { return document.getElementById(X); }
	function genCardId() { return 'card_' + ((++cardCursor).toString()); }

	function addcard() {
	    var cc = localStorage.getItem("cdd"),
            del = localStorage.getItem("del"),
            sup = localStorage.getItem("sup"),
	        ns = localStorage.getItem('ns'),
	        cc = localStorage.getItem('coins'),
            ldrbrd = localStorage.getItem('ldrbrd'),

	        newIdx = cards.length,
            cardId = genCardId(),

            Qlen = crd.length,
            rand = Math.round(Math.random() * (Qlen - 1)),

            cardBox = document.createElement('div'),

            card = document.createElement('div'),

            front = document.createElement('div'),

            frontbt = document.createElement('input'),

            back = document.createElement('div'),

            backbt = document.createElement('input'),

	        flipper = () => { card.classList.toggle('flipped'), Counter(card, backbt, frontbt, flipper) };

	    byId('board').style.display = 'block';
	    byId('partyTitle').style.display = 'block';
	    byId('coinLabel').style.display = 'block';
	    byId('purchase').style.display = 'block';
	    if (ldrbrd) {
	        console.log(ldrbrd.coins);
	    }

	    if (!cc) {

	        localStorage.setItem('coins', 0);
	    }
	    if (cc) {
	        if (cc > 0) {
	            coinspan.innerHTML = cc;
	            byId('addShuffle').style.display = 'block';
	        }
	        coinspan.innerHTML = cc;
	    }
	    if (!del) {
	        localStorage.setItem("del", 0);
	    }
	    if (del) {
	        localStorage.setItem("del", 100);
	    }
	    if (!movs) {
	        localStorage.setItem("movs", 0);
	    }
	    if (movs) {
	        localStorage.setItem("movs", 1);
	    }
	    if (!sup) {
	        localStorage.setItem("sup", 0);
	    }
	    if (sup) {
	        localStorage.setItem("sup", 0);
	    }

	    cards.push(cardId);

	    cardBox.className = 'cardbox';
	    front.className = 'cardfront';
	    back.className = 'cardback';
	    card.className = 'card';
	    frontbt.className = 'fntCls';
	    backbt.className = 'bckCls';

	    frontbt.type = 'button';
	    frontbt.style.height = '50px';
	    frontbt.onclick = flipper;
	    frontbt.value = "" + crd[rand] + "";

	    backbt.value = "" + crd[rand] + "";
	    backbt.style.backgroundImage = 'url(../images/' + crd[rand] + '.png)';
	    backbt.type = 'button';
	    backbt.style.height = '50px';

	    var cc = localStorage.getItem("cdd");
	    if (cc) {
	        localStorage.removeItem("cdd");
	    }

	    card.id = cardId;

	    front.appendChild(frontbt);
	    back.appendChild(backbt);

	    card.appendChild(front);
	    card.appendChild(back);
	    cardBox.appendChild(card);

	    byId('board').appendChild(cardBox);
	    byId('addcard').style.display = 'none';
	    byId('rmvcard').style.display = 'block';

	    byId('elect').style.display = 'block';
	    if (cardCursor < 2) {
	        ticFunc();
	    }
	    if (cardCursor < 30) {
	        addcard();
	    }
	}

	function rmvCard() {
	    ticFunc();
	    localStorage.removeItem("cdd");
	    localStorage.removeItem("cbd");
	    localStorage.removeItem("del");
	    localStorage.removeItem("sup");
	    
	    location.reload();
	}

	function partyFunc() {
	    ticFunc();
	    slctParty.style.display = 'none';
	    partyPage.style.display = 'block';
	}

	function Party1() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#ff5959';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'Red Rombus';
	}

	function Party2() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#4358ff';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'Blue Matrix';
	}

	function Party3() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#cf36ff';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'Purple Pythagoras';
	}

	function Party4() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#87ff55';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'Green Cats';
	}

	function Party5() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#20fff8';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'Cyan Cubes';
	}

	function Party6() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#ff913d';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'Orange Polygons';
	}

	function reShuffle() {
	    var cds = document.querySelectorAll('.nocard input.fntCls'),
            cdb = document.querySelectorAll('.nocard input.bckCls'),
	        cd = document.querySelectorAll('.nocard'),
            cc = localStorage.getItem("coins"),
	        ccc = +cc - +1;

	    if (cd.length >= 1) {
	        dingFunc();
	        cd.className = 'card';
	       // console.log(cd);
           for (var r = 0; r < cd.length; r++) {

	        //console.log(cd[r]);
	        cd[r].className = 'card';

	        for (var t = 0; t < cds.length; t++) {
	            var Qlen = crd.length;
	            var pp = Math.round(Math.random() * (Qlen - 1));
                
	            cds[t].value = crd[pp];
	            cdb[t].style.backgroundImage = "../images/" + crd[pp] + ".png";
	            

	        }

	        //console.log(cd[r]);
	        localStorage.setItem("coins", ccc);

            if (ccc < 0) {
	            return false,
                byId('addShuffle').style.display = 'none',
                coinspan.innerHTML = "0";
	        } else {
	            coinspan.innerHTML = ccc;
	        }
	        
	    }
	    }
        //console.log(cd);
	    
    }

	function saveData() {
	    var lscount = localStorage.length,
	        scrs = document.querySelectorAll('#dvScore span');

	    ldrbrd.coins = coinspan.innerHTML;
	    ldrbrd.scr1 = scrs[0].innerHTML;
	    ldrbrd.scr2 = scrs[1].innerHTML;
        ldrbrd.moves = scrs[2].innerHTML;
	    ldrbrd.total = scrs[3].innerHTML;

	    localStorage.setItem("ldrbrd_" + lscount, JSON.stringify(ldrbrd));

	    localStorage.removeItem('cdd');
	    localStorage.removeItem('sup');
	    localStorage.removeItem('del');
	    localStorage.removeItem('movs');
	    localStorage.removeItem('coins');

        loadData();
	}

	function electFunc() {
	    var cds = document.getElementsByClassName('nocard'),
	        scrs = document.querySelectorAll('#dvScore span');
	    ticFunc();
	    boardCTN.style.display = 'none';
	    dvScore.style.display = 'block';
	    byId('addShuffle').style.display = 'none',
	    elect.style.display = 'none'; 

	    if (cds.length === 30) {
	        dtBar.innerHTML += "<br /> HOLY COW! you managed to get all the cards! Epic gamer gets epic bonus and it's over 9000! (+9001)";
	        scrs[1].innerHTML = +9001;

	    }

	    saveData();
	    
	}

	function loadData() {
	    var i, renderData, datacount, key;
	    datacount = localStorage.length;
	    resultz.style.display = 'block';
        dtBar.style.display = 'block';
        	        renderData = "<table><tr><td> Coins </td><td> Matches </td><td> Bonus </td><td> Moves </td><td> Score </td></tr>";
	    if (datacount != "undefined") {

	        for (i = 0; i < datacount; i++) {
	            key = localStorage.key(i); //Get Key 
	            ldrbrd = localStorage.getItem(key); //Get Data

	            try {
	                var data = JSON.parse(ldrbrd); //Parse Data
	            }
	            catch (e) {
	                continue;
	            }
	            renderData += "<tr><td>" + data.coins + "</td><td>" + data.scr1 + "</td><td>" + data.scr2 + "</td><td>" + data.moves + "</td><td>" + data.total + '</td></tr><br />';

	        }
	        renderData += "</table><br />";

	        resultz.innerHTML = renderData;

	        localStorage.setItem('coins', data.coins);
	    }
	}

	function dltFunc() {
	    dltPage.style.display = 'block';
	    window.scrollTo(0, 0);
	}

	function dltNoFunc() {
	    dltPage.style.display = 'none';
	}

	function dltYesFunc() {
	    localStorage.clear();
	    location.reload();
	}

	function hookInputs() {
	    byId('elect').onclick = function () { electFunc(); },
        byId('dlt').onclick = function () { dltFunc(); },
        byId('dltNo').onclick = function () { dltNoFunc(); },
        byId('dltYes').onclick = function () { dltYesFunc(); },

	    byId('Party1').onclick = function () { Party1(); },
        byId('Party2').onclick = function () { Party2(); },
        byId('Party3').onclick = function () { Party3(); },
        byId('Party4').onclick = function () { Party4(); },
        byId('Party5').onclick = function () { Party5(); },
        byId('Party6').onclick = function () { Party6(); },

        byId('addShuffle').onclick = function () { reShuffle(); },
	    byId('slctParty').onclick = function () { partyFunc(); },
	    byId('addcard').onclick = function () { addcard(); },
	    byId('rmvcard').onclick = function () { ticFunc(); rmvCard(); }
	}

	function swipeFunc() {
	    var snd;
	    snd = new Audio("../images/swipe.wav");
	    snd.volume = '0.5';
	    snd.play();
	}

	function ticFunc() {
	    var snd;
	    snd = new Audio("../images/tic.wav");
	    snd.volume = '0.5';
	    snd.play();
	}

	function sSoundFunc() {
	    var snd;
	    snd = new Audio("../images/shuff.wav");
	    snd.volume = '0.5';
	    snd.play();
	}

	function buzzFunc() {
	    var snd;
	    snd = new Audio("../images/buzz.wav");
	    snd.volume = '0.5';
	    snd.play();
	}
	function dingFunc() {
	    var snd;
	    snd = new Audio("../images/ding.wav");
	    snd.volume = '0.5';
	    snd.play();
	}
	function Counter(card, backbt, frontbt) {
	    var fntCls = document.getElementsByClassName('fntCls');
	    nn = result.innerHTML;

	    ns = +nn + +1;

	    result.innerHTML = ns;
	    swipeFunc();

	    if (ns < 5) {
	        if (!cdd || cdd === 0) {
	            cdd.n1 = backbt.value;
	            localStorage.setItem("cdd", JSON.stringify(cdd));
	        } else {
	            if (cdd.n1 === "") {
	                cdd.n1 = backbt.value;
	                cdd.n1a = card.id;
	                localStorage.setItem("cdd", JSON.stringify(cdd));
	            } else {
	                if (cdd.n2 === "") {
	                    cdd.n2 = backbt.value;
	                    cdd.n2a = card.id;
	                    localStorage.setItem("cdd", JSON.stringify(cdd));
	                } else {
	                    if (cdd.n3 === "") {
	                        cdd.n3 = backbt.value;
	                        cdd.n3a = card.id;
	                        localStorage.setItem("cdd", JSON.stringify(cdd));
	                    } else {
	                        if (cdd.n4 === "") {
	                            cdd.n4 = backbt.value;
	                            cdd.n4a = card.id;
	                            localStorage.setItem("cdd", JSON.stringify(cdd));
	                        }
	                    }
	                }
	            }
	        }
	    }
	    var cds;
	    cds = document.getElementsByClassName('card flipped');
	    if (ns === 3) {
	        setTimeout(function () { val(ns, backbt); }, 500);
	    }
	    if (cds.length === 4) {
	        cdd.n4 = backbt.value;
	        cdd.n4a = card.id;
	        localStorage.setItem("cdd", JSON.stringify(cdd));
	        cds[3].className = 'card';

	    }
	}

	function check() {
	    var cd, cds, del, sup, movs;
	    cd = document.getElementsByClassName('nocard');
	    cds = document.getElementsByClassName('card flipped');
	    del = localStorage.getItem('del');
	    sup = localStorage.getItem('sup');
	    movs = localStorage.getItem('movs');

	    if (movs) {
	        localStorage.setItem('movs', +movs + +1);
	        moves.innerHTML = movs;

	    }

	    if (!del) {
	        localStorage.setItem('movs', +100);
	        moves.innerHTML = movs;
	    }

	    if (cdd) {
	        if (cdd.n1 === cdd.n2 && cdd.n1 === cdd.n3) {
	            dingFunc();

	            if (del) {
	                localStorage.setItem('del', +del + +100);
	                spD.innerHTML = del;

	            }

	            if (!del) {
	                localStorage.setItem('del', +100);
	                spD.innerHTML = del;
	            }

	            

	            cds[0].className = 'nocard';

	            cds[0].className = 'nocard';

	            if (cds[0]) {
	                cds[0].className = 'nocard';
	            }
	            
	            if (cdd.n1 === 'b' && cdd.n2 === 'b' && cdd.n3 === 'b') {

	                if (sup) {
	                    var cc = localStorage.getItem("coins"),
	                        ccc = +cc + +1;

	                    localStorage.setItem('sup', +sup + +200);
	                    localStorage.setItem('coins', ccc);
	                    if (cc) {

	                            byId('addShuffle').style.display = 'block';

	                        coinspan.innerHTML = ccc;
	                    }
	                    
	                    spS.innerHTML = sup;
	                    
	                }

	                if (!sup) {
	                    localStorage.setItem('sup', +200);
	                    spD.innerHTML = sup;
	                }
	            }

	            tot.innerHTML = (+del + +sup) - +movs;

	            cdd.n1 = '';
	            cdd.n2 = '';
	            cdd.n3 = '';

	            localStorage.removeItem("crd");
	        }
	        if (cdd.n1 != cdd.n2 || cdd.n1 != cdd.n3) {

	            buzzFunc();

	            cds[0].className = 'card';

	            cds[0].className = 'card';

	            if (cds[0]) {
	                cds[0].className = 'card';
	            }

	            cdd.n1 = '';
	            cdd.n2 = '';
	            cdd.n3 = '';
	            localStorage.removeItem("crd");

	        }
	    }
	}

	function val() {
	    var ft = document.getElementsByClassName('fntCls');

	    ns = 0;
	    result.innerHTML = ns;

	    result.style.display = 'none';
	    setTimeout(function () { check(); }, 500);
	}

	function startup() {
	    hookInputs();
	}

	window.onload = startup;
})();
