//*function nadoProverit(nado, cifra){
//    if (cifra == 0) {
//        nado.style.display = "block";
//        cifra = cifra + 1
//    }
//    else {
//        nado.style.display = "none";
//        cifra = cifra - 1
//
//    }
//    return cifra;
//}
function nadoProverit(id){
    nado = document.getElementById(id);
    if (SvoystoDisplay(id) == 'none') {
        nado.style.display = 'block';
    }
    else {
        nado.style.display = 'none';
    }
    console.log("robit")
}



function SvoystoDisplay(id){
    var element = document.getElementById(id)
    var style = getComputedStyle(element)
    var value = style.getPropertyValue('display')
    return(value);
}

function HideCalls(diff){

    if (diff == 'easy'){
        if (SvoystoDisplay('Call1') == 'block'){
            viewCall1()
        }
        if (SvoystoDisplay('Call2') == 'block'){
            viewCall2()
        }
        if (SvoystoDisplay('Call3') == 'block'){
            viewCall3()
        }
    }
    if (diff == 'middle'){
        if (SvoystoDisplay('Call4') == 'block'){
            viewCall4()
        }
        if (SvoystoDisplay('Call5') == 'block'){
            viewCall5()
        }
    }
    if (diff == 'hard'){
        if (SvoystoDisplay('Call6') == 'block'){
            viewCall6()
        }
        if (SvoystoDisplay('Call7') == 'block'){
            viewCall7()
        }
    }
};

function viewDivEasy(){
    nadoProverit('easy');
    if (SvoystoDisplay('middle') == 'block')
    {
        viewDivMiddle()
    }
    if (SvoystoDisplay('hard') == 'block')
    {
        viewDivHard()
    }
    HideCalls("easy")
};
function viewDivMiddle(){
    nadoProverit('middle');
    if (SvoystoDisplay('easy') == 'block')
    {
        viewDivEasy()
    }
    if (SvoystoDisplay('hard') == 'block')
    {
        viewDivHard()
    }
    HideCalls("middle") 
};
function viewDivHard(){
    nadoProverit('hard');
    if (SvoystoDisplay('middle') == 'block')
    {
        viewDivMiddle()
    }
    if (SvoystoDisplay('easy') == 'block')
    {
        viewDivEasy()
    } 
    HideCalls("hard")
};

var Call1 = 0
function viewCall1() {
    nadoProverit('Call1');
}

var Call2 = 0
function viewCall2() {
    nadoProverit('Call2');
}

var Call3 = 0
function viewCall3() {
    nadoProverit('Call3');

}

var Call4 = 0
function viewCall4() {
    nadoProverit('Call4');
}

var Call5 = 0
function viewCall5() {
    nadoProverit('Call5');
}

var Call6 = 0
function viewCall6() {
     nadoProverit('Call6');
}

var Call7 = 0
function viewCall7() {
    nadoProverit('Call7');
}

var Call8 = 0
function viewCall8() {
    nadoProverit('Call8');
}
