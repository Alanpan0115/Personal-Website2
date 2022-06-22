var isShow = false;

function aa() {

    document.getElementById("page1").style.background = "#8c8b89";
    document.getElementById("page1").style.color = "#ffffff";
    document.getElementById("page2").style.background = "#ffffff";
    document.getElementById("page2").style.color = "#8c8b89";

    isShow = true;
    document.getElementById('S3-p1').style.display = '';
    document.getElementById('S3-p2').style.display = '';
    document.getElementById('S3-p3').style.display = '';
    document.getElementById('S3-p4').style.display = '';
    document.getElementById('S3-p5').style.display = '';
    document.getElementById('S3-page1').style.display = '';
    document.getElementById('page1');
    document.getElementById('S3-b1').style.display = 'none';
    document.getElementById('S3-b2').style.display = 'none';
    document.getElementById('S3-b3').style.display = 'none';
    /*
    document.getElementById('S3-b3').style.display = 'none';
    document.getElementById('S3-b4').style.display = 'none';
    */
    document.getElementById('S3-page2').style.display = 'none';
    document.getElementById('page2');
}

function bb() {

    document.getElementById("page2").style.background = "#8c8b89";
    document.getElementById("page2").style.color = "#ffffff";
    document.getElementById("page1").style.background = "#ffffff";
    document.getElementById("page1").style.color = "#8c8b89";

    isShow = true;
    document.getElementById('S3-p1').style.display = 'none';
    document.getElementById('S3-p2').style.display = 'none';
    document.getElementById('S3-p3').style.display = 'none';
    document.getElementById('S3-p4').style.display = 'none';
    document.getElementById('S3-p5').style.display = 'none';
    document.getElementById('S3-page1').style.display = 'none';
    document.getElementById('page1');
    document.getElementById('S3-b1').style.display = '';
    document.getElementById('S3-b2').style.display = '';
    document.getElementById('S3-b3').style.display = '';
    /*
    document.getElementById('S3-b3').style.display = '';
    document.getElementById('S3-b4').style.display = '';
    */
    document.getElementById('S3-page2').style.display = '';
    document.getElementById('page2');
}