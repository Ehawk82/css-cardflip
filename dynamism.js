
'use strict';

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
    //function sort() { a.map(function (value) {JSON.stringify(value)}); }
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

	    if (ldrbrd) {
	        console.log(ldrbrd.coins);
	    }

	    if (!cc) {

	        localStorage.setItem('coins', 0);
	    }
	    if (cc) {
	        if (cc > 0) {
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
	        localStorage.setItem("sup", 200);
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

	    if (cardCursor < 30) {
	        addcard();
	    }
	}

	function rmvCard() {
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
	    board.style.background = '#b47a7a';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'op1';
	}

	function Party2() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#7a7fa7';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'op2';
	}

	function Party3() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#907d96';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'op3';
	}

	function Party4() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#98be88';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'op4';
	}

	function Party5() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#72b1af';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'op5';
	}

	function Party6() {
	    ticFunc();
	    partyPage.style.display = 'none';
	    board.style.border = '5px solid rgba(0,0,0,0.4)';
	    board.style.background = '#9f8978';
	    footer.style.display = 'block';
	    partyTitle.innerHTML = 'op6';
	    localStorage.clear();
	}

	function reShuffle() {
	    var cds = document.querySelectorAll('.nocard input.fntCls'),
            cdb = document.querySelectorAll('.nocard input.bckCls'),
	        cd = document.querySelectorAll('.nocard'),
            cc = localStorage.getItem("coins"),
	        ccc = +cc - +1;

	    if (cd.length > 0) {
	        dingFunc();
	       // console.log(cd);
	    }
        //console.log(cd);
	    for (var r = 0; r < cd.length; r++) {

	        //console.log(cd[r]);
	        cd[r].className = 'card';

	        for (var t = 0; t < cds.length; t++) {
	            var Qlen = crd.length;
	            var pp = Math.round(Math.random() * (Qlen - 1));
                
	            cds[t].value = crd[pp];
	            cdb[t].value = crd[pp];
	             
	        }
	        
	        //console.log(cd[r]);
	        localStorage.setItem("coins", ccc);

	        if (ccc === 0) {
	            return false,
                byId('addShuffle').style.display = 'none',
                coinspan.innerHTML = "0";
	        } else {
	            coinspan.innerHTML = ccc;
	        }
	    }
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

	    saveData();
	    /*
	    ldrbrd.total += scrs[3].innerHTML;
	    localStorage.setItem("ldrbrd", JSON.stringify(ldrbrd));
	    
	    if (ldrbrd) {
	        console.log(ldrbrd);
	        results.innerHTML = ldrbrd.total;
	    }
        */
	}

	function loadData() {
	    var i, renderData, datacount, key;
	    datacount = localStorage.length;
	    resultz.style.display = 'block';
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
	            //set a data-id and data-index to this element, we need them to select the correct information.
	            
	        }
	        renderData += "</table>";
	        resultz.innerHTML = renderData;
	        localStorage.setItem('coins', data.coins);
	    }
	}

	function hookInputs() {
	    byId('elect').onclick = function () { electFunc(); },

	    byId('Party1').onclick = function () { Party1(); },
        byId('Party2').onclick = function () { Party2(); },
        byId('Party3').onclick = function () { Party3(); },
        byId('Party4').onclick = function () { Party4(); },
        byId('Party5').onclick = function () { Party5(); },
        byId('Party6').onclick = function () { Party6(); },

        byId('addShuffle').onclick = function () { reShuffle(); },
	    byId('slctParty').onclick = function () { partyFunc(); },
	    byId('addcard').onclick = function () { addcard(); },
	    byId('rmvcard').onclick = function () { rmvCard(); }
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
	                        ccc = +cc + +10;

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
