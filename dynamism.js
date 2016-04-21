
'use strict';

	var crd, nm, cdd, cbd, del, sup, movs, Au;
	crd = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"
	];
	Au = {}
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
	function byId(X) { return document.getElementById(X); }
	function genCardId() { return 'card_' + ((++cardCursor).toString()); }

	function addcard() {
	    var cc = localStorage.getItem("cdd"),
            del = localStorage.getItem("del"),
            sup = localStorage.getItem("sup"),
	        ns = localStorage.getItem('ns'),
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

	    if (cardCursor < 50) {
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
	}

	function electFunc() {
	    var cds = document.getElementsByClassName('nocard'), elem;
	    ticFunc();
	    boardCTN.style.display = 'none';
	    dvScore.style.display = 'block';
	    elect.style.display = 'none';

	    if (cds.length === 0) {
	        elem = " ";
	    }

	    console.log(cds.length);
	    for (var i = 0; i < cds.length; i++) {

	        if (i < 2) {
	            elem = " ";
	        }
	        if (i > 3 && i < 5) {
	            elem = " ";
	        }
	        if (i > 6 && i < 9) {
	            elem = " ";
	        }
	        if (i > 10 && i < 12) {
	            elem = " ";
	        }
	        if (i > 13 && i < 15) {
	            elem = " ";
	        }
	        if (i > 16 && i < 18) {
	            elem = " ";
	        }
	        if (i > 19 && i < 21) {
	            elem = " ";
	        }
	        if (i > 22 && i < 24) {
	            elem = " ";
	        }
	        if (i > 25 && i < 27) {
	            elem = " ";
	        }
	        if (i > 28 && i < 30) {
	            elem = " ";
	        }
	        if (i > 31 && i < 33) {
	            elem = " ";
	        }
	        if (i > 34 && i < 35) {
	            elem = " ";
	        }
	        if (i > 36 && i < 38) {
	            elem = " ";
	        }
	        if (i > 39 && i < 41) {
	            elem = " ";
	        }
	        if (i > 42 && i < 44) {
	            elem = " ";
	        }
	        if (i > 45 && i < 47) {
	            elem = " ";
	        }
	        if (i > 48) {
	            elem = " ";
	        }
	    }
	    results.innerHTML = elem;
	}

	function hookInputs() {
	    byId('elect').onclick = function () { electFunc(); },

	    byId('Party1').onclick = function () { Party1(); },
        byId('Party2').onclick = function () { Party2(); },
        byId('Party3').onclick = function () { Party3(); },
        byId('Party4').onclick = function () { Party4(); },
        byId('Party5').onclick = function () { Party5(); },
        byId('Party6').onclick = function () { Party6(); },

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
	    var cds, del, sup, movs;

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

	            cds[0].className = 'nocard';

	            if (cdd.n1 === 'b' && cdd.n2 === 'b' && cdd.n3 === 'b') {

	                if (sup) {

	                    localStorage.setItem('sup', +sup + +200);
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
