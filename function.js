function action(par) {
    changerestgo();
    changerest(par);
    changerestimg(par);
    clearalert();
}

function sendname(par) {
    localStorage.setItem("name", par[checker]);
}

function sendfirstimg(par) {
    localStorage.setItem("firstmainimg", par[checker]);
}

function sendsecondimg(par) {
    localStorage.setItem("secondmainimg", par[checker]);
}

function sendthirdimg(par) {
    localStorage.setItem("thirdmainimg", par[checker]);
}

function sendaddress(par) {
    localStorage.setItem("restaddress", par[checker]);
}

function sendrating(par) {
    localStorage.setItem("restrating", par[checker]);
}

function sendcallnumber(par) {
    localStorage.setItem("number", par[checker]);
}

function sendtime(par) {
    localStorage.setItem("time", par[checker]);
}

function sendmap(par) {
    localStorage.setItem("map", par[checker]);
}

function sendsubfirstimg(par) {
    localStorage.setItem("firstsubimg", par[checker]);
}

function sendsubsecondimg(par) {
    localStorage.setItem("secondsubimg", par[checker]);
}

function sendsubthirdimg(par) {
    localStorage.setItem("thirdsubimg", par[checker]);
}

function sendbaedaltime(par) {
    localStorage.setItem("baedaltime", par[checker]);
}

function sendpyeong(par) {
    localStorage.setItem("pyeong", par[checker]);
}

function sendfirstmainmeun(par) {
    localStorage.setItem("fmm", par[checker]);
}

function sendsmm(par) {
    localStorage.setItem("smm", par[checker]);
}

function sendtmm(par) {
    localStorage.setItem("tmm", par[checker]);
}

function sendfmmd(par) {
    localStorage.setItem("fmmd", par[checker]);
}

function sendsmmd(par) {
    localStorage.setItem("smmd", par[checker]);
}

function sendtmmd(par) {
    localStorage.setItem("tmmd", par[checker]);
}

function changerest(par) {
    $("#cardtext1").html(rest1[par]);
    $("#cardtext2").html(rest2[par]);
    $("#cardtext3").html(rest3[par]);
    $("#cardtext4").html(rest4[par]);
    $("#cardtext5").html(rest5[par]);
    $("#cardtext6").html(rest6[par]);
    $("#cardtext7").html(rest7[par]);
    $("#cardtext8").html(rest8[par]);
    $("#cardtext9").html(rest9[par]);
} //식당명 변경 함수

function changerestimg(par) {
    $("#cardimg1").attr("src", "img/" + imgsource1[par]);
    $("#cardimg2").attr("src", "img/" + imgsource2[par]);
    $("#cardimg3").attr("src", "img/" + imgsource3[par]);
    $("#cardimg4").attr("src", "img/" + imgsource4[par]);
    $("#cardimg5").attr("src", "img/" + imgsource5[par]);
    $("#cardimg6").attr("src", "img/" + imgsource6[par]);
    $("#cardimg7").attr("src", "img/" + imgsource7[par]);
    $("#cardimg8").attr("src", "img/" + imgsource8[par]);
    $("#cardimg9").attr("src", "img/" + imgsource9[par]);
} //식당 이미지 변경 함수

function changerestgo() {
    $("#cardlink1").attr("href", "rest/rest.html");
    $("#cardlink2").attr("href", "rest/rest.html");
    $("#cardlink3").attr("href", "rest/rest.html");
    $("#cardlink4").attr("href", "rest/rest.html");
    $("#cardlink5").attr("href", "rest/rest.html");
    $("#cardlink6").attr("href", "rest/rest.html");
    $("#cardlink7").attr("href", "rest/rest.html");
    $("#cardlink8").attr("href", "rest/rest.html");
    $("#cardlink9").attr("href", "rest/rest.html");
} // 식당 이동 링크 변경

function clearalert(par) {
    $("#cardlink1").attr(
        "onclick",
        "sendname(rest1); sendtmmd(thirdmaind1); sendsmmd(secondmaind1); sendfmmd(firstmaind1); sendtmm(thirdmain1); sendsmm(secondmain1); sendfirstmainmeun(firstmain1); sendfirstimg(firstmainimg1); sendsecondimg(secondmainimg1); sendthirdimg(thirdmainimg1); sendrating(rating1); sendaddress(address1); sendcallnumber(number1); sendtime(time1); sendmap(map1); sendsubfirstimg(firstsubimg1); sendsubsecondimg(secondsubimg1); sendsubthirdimg(thirdsubimg1); sendbaedaltime(baedal1); sendpyeong(pyeong1);"
    );
    $("#cardlink2").attr(
        "onclick",
        "sendname(rest2); sendtmmd(thirdmaind2); sendsmmd(secondmaind2); sendfmmd(firstmaind2); sendtmm(thirdmain2); sendsmm(secondmain2); sendfirstmainmeun(firstmain2); sendfirstimg(firstmainimg2); sendsecondimg(secondmainimg2); sendthirdimg(thirdmainimg2); sendrating(rating2); sendaddress(address2); sendcallnumber(number2); sendtime(time2); sendmap(map2); sendsubfirstimg(firstsubimg2); sendsubsecondimg(secondsubimg2); sendsubthirdimg(thirdsubimg2); sendbaedaltime(baedal2); sendpyeong(pyeong2);"
    );
    $("#cardlink3").attr(
        "onclick",
        "sendname(rest3); sendtmmd(thirdmaind3); sendsmmd(secondmaind3); sendfmmd(firstmaind3); sendtmm(thirdmain3); sendsmm(secondmain3); sendfirstmainmeun(firstmain3); sendfirstimg(firstmainimg3); sendsecondimg(secondmainimg3); sendthirdimg(thirdmainimg3); sendrating(rating3); sendaddress(address3); sendcallnumber(number3); sendtime(time3); sendmap(map3); sendsubfirstimg(firstsubimg3); sendsubsecondimg(secondsubimg3); sendsubthirdimg(thirdsubimg3); sendbaedaltime(baedal3); sendpyeong(pyeong3);"
    );
    $("#cardlink4").attr(
        "onclick",
        "sendname(rest4); sendtmmd(thirdmaind4); sendsmmd(secondmaind4); sendfmmd(firstmaind4); sendtmm(thirdmain4); sendsmm(secondmain4); sendfirstmainmeun(firstmain4); sendfirstmainmeun(firstmain1); sendfirstimg(firstmainimg4); sendsecondimg(secondmainimg4); sendthirdimg(thirdmainimg4); sendrating(rating4); sendaddress(address4); sendcallnumber(number4); sendtime(time4); sendmap(map4); sendsubfirstimg(firstsubimg4); sendsubsecondimg(secondsubimg4); sendsubthirdimg(thirdsubimg4); sendbaedaltime(baedal4); sendpyeong(pyeong4);"
    );
    $("#cardlink5").attr(
        "onclick",
        "sendname(rest5); sendtmmd(thirdmaind5); sendsmmd(secondmaind5); sendfmmd(firstmaind5); sendtmm(thirdmain5); sendsmm(secondmain5); sendfirstmainmeun(firstmain5); sendfirstimg(firstmainimg5); sendsecondimg(secondmainimg5); sendthirdimg(thirdmainimg5); sendrating(rating5); sendaddress(address5); sendcallnumber(number5); sendtime(time5); sendmap(map5); sendsubfirstimg(firstsubimg5); sendsubsecondimg(secondsubimg5); sendsubthirdimg(thirdsubimg5); sendbaedaltime(baedal5); sendpyeong(pyeong5);"
    );
    $("#cardlink6").attr(
        "onclick",
        "sendname(rest6); sendtmmd(thirdmaind6); sendsmmd(secondmaind6); sendfmmd(firstmaind6); sendtmm(thirdmain6); sendsmm(secondmain6); sendfirstmainmeun(firstmain6); sendfirstimg(firstmainimg6); sendsecondimg(secondmainimg6); sendthirdimg(thirdmainimg6); sendrating(rating6); sendaddress(address6); sendcallnumber(number6); sendtime(time6); sendmap(map6); sendsubfirstimg(firstsubimg6); sendsubsecondimg(secondsubimg6); sendsubthirdimg(thirdsubimg6); sendbaedaltime(baedal6); sendpyeong(pyeong6);"
    );
    $("#cardlink7").attr(
        "onclick",
        "sendname(rest7); sendtmmd(thirdmaind7); sendsmmd(secondmaind7); sendfmmd(firstmaind7); sendtmm(thirdmain7);  sendsmm(secondmain7); sendfirstmainmeun(firstmain7); sendfirstimg(firstmainimg7); sendsecondimg(secondmainimg7); sendthirdimg(thirdmainimg7); sendrating(rating7); sendaddress(address7); sendcallnumber(number7); sendtime(time7); sendmap(map7); sendsubfirstimg(firstsubimg7); sendsubsecondimg(secondsubimg7); sendsubthirdimg(thirdsubimg7); sendbaedaltime(baedal7); sendpyeong(pyeong7);"
    );
    $("#cardlink8").attr(
        "onclick",
        "sendname(rest8); sendtmmd(thirdmaind8); sendsmmd(secondmaind8); sendfmmd(firstmaind8); sendtmm(thirdmain8); sendsmm(secondmain8); sendfirstmainmeun(firstmain8); sendfirstimg(firstmainimg8); sendsecondimg(secondmainimg8); sendthirdimg(thirdmainimg8); sendrating(rating8); sendaddress(address8); sendcallnumber(number8); sendtime(time8); sendmap(map8); sendsubfirstimg(firstsubimg8); sendsubsecondimg(secondsubimg8); sendsubthirdimg(thirdsubimg8); sendbaedaltime(baedal8); sendpyeong(pyeong8);"
    );
    $("#cardlink9").attr(
        "onclick",
        "sendname(rest9); sendtmmd(thirdmaind9); sendsmmd(secondmaind9); sendfmmd(firstmaind9); sendtmm(thirdmain9); sendsmm(secondmain9); sendfirstmainmeun(firstmain9); sendfirstimg(firstmainimg9); sendsecondimg(secondmainimg9); sendthirdimg(thirdmainimg9); sendrating(rating9); sendaddress(address9); sendcallnumber(number9); sendtime(time9); sendmap(map9); sendsubfirstimg(firstsubimg9); sendsubsecondimg(secondsubimg9); sendsubthirdimg(thirdsubimg9); sendbaedaltime(baedal9); sendpyeong(pyeong9);"
    );
}

function errorpopup() {
    swal({
        title: "잠깐!",
        text: "위의 버튼을 눌러 음식 종류를 선택해주세요",
        icon: "info"
    });
}

function selectdisplay(par) {
    $("#mainbanner").attr("src", "img/" + "banner" + par + ".webp");
}