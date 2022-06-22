var isShow = false;


function show2_1() {
    isShow = true;
    document.getElementById('g2-1').style.display = '';
    document.getElementById('control-1');
    document.getElementById('g2-2').style.display = 'none';
    document.getElementById('control-2');
    document.getElementById('g2-3').style.display = 'none';
    document.getElementById('control-3');

}

function show2_2() {
    isShow = true;
    document.getElementById('g2-2').style.display = '';
    document.getElementById('control-2');
    document.getElementById('g2-1').style.display = 'none';
    document.getElementById('control-1');
    document.getElementById('g2-3').style.display = 'none';
    document.getElementById('control-3');
}

function show2_3() {
    isShow = true;
    document.getElementById('g2-3').style.display = '';
    document.getElementById('control-3');
    document.getElementById('g2-2').style.display = 'none';
    document.getElementById('control-2');
    document.getElementById('g2-1').style.display = 'none';
    document.getElementById('control-1');
}