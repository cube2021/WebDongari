restFile.rest.forEach((restaurant, index) => {
    let category;
    if (index < 9) {
        category = "한식";
    } else if (index < 18) {
        category = "중식";
    } else if (index < 27) {
        category = "일식";
    } else if (index < 36) {
        category = "양식";
    } else {
        category = "기타";
    }

    window[`${category}${(index % 9) + 1}`] = restaurant.name;
});

thumbnailFile.thumbnailurl.forEach((imgthumb, index) => {
    let category;
    if (index < 9) {
        category = "kothumb";
    } else if (index < 18) {
        category = "cnthumb";
    } else if (index < 27) {
        category = "jpthumb";
    } else if (index < 36) {
        category = "euthumb";
    } else {
        category = "otthumb";
    }

    window[`${category}${(index % 9) + 1}`] = imgthumb.imgurl;
});

restmainimg1.mainimg1.forEach((imgmain1, index) => {
    let category;
    if (index < 9) {
        category = "firstkoimg";
    } else if (index < 18) {
        category = "firstcnimg";
    } else if (index < 27) {
        category = "firstjpimg";
    } else if (index < 36) {
        category = "firsteuimg";
    } else {
        category = "firstotimg";
    }

    window[`${category}${(index % 9) + 1}`] = imgmain1.imgurl;
});

restmainimg2.mainimg2.forEach((imgmain2, index) => {
    let category;
    if (index < 9) {
        category = "secondkoimg";
    } else if (index < 18) {
        category = "secondcnimg";
    } else if (index < 27) {
        category = "secondjpimg";
    } else if (index < 36) {
        category = "secondeuimg";
    } else {
        category = "secondotimg";
    }

    window[`${category}${(index % 9) + 1}`] = imgmain2.imgurl;
});

restmainimg3.mainimg3.forEach((imgmain3, index) => {
    let category;
    if (index < 9) {
        category = "thirdkoimg";
    } else if (index < 18) {
        category = "thirdcnimg";
    } else if (index < 27) {
        category = "thirdjpimg";
    } else if (index < 36) {
        category = "thirdeuimg";
    } else {
        category = "thirdotimg";
    }

    window[`${category}${(index % 9) + 1}`] = imgmain3.imgurl;
});
restaddress.restjuso.forEach((jusorepeat, index) => {
    let category;
    if (index < 9) {
        category = "koaddress";
    } else if (index < 18) {
        category = "cnaddress";
    } else if (index < 27) {
        category = "jpaddress";
    } else if (index < 36) {
        category = "euaddress";
    } else {
        category = "otaddress";
    }

    window[`${category}${(index % 9) + 1}`] = jusorepeat.address;
});

restrating.restpyeongjeom.forEach((pyeongjeomrepeat, index) => {
    let category;
    if (index < 9) {
        category = "korating";
    } else if (index < 18) {
        category = "cnrating";
    } else if (index < 27) {
        category = "jprating";
    } else if (index < 36) {
        category = "eurating";
    } else {
        category = "otrating";
    }

    window[`${category}${(index % 9) + 1}`] = pyeongjeomrepeat.rating;
});
restcall.restnumber.forEach((restnumberrepeat, index) => {
    let category;
    if (index < 9) {
        category = "konumber";
    } else if (index < 18) {
        category = "cnnumber";
    } else if (index < 27) {
        category = "jpnumber";
    } else if (index < 36) {
        category = "eunumber";
    } else {
        category = "otnumber";
    }

    window[`${category}${(index % 9) + 1}`] = restnumberrepeat.callnumber;
});

resttime.unyoungsigan.forEach((timerepeat, index) => {
    let category;
    if (index < 9) {
        category = "kotime";
    } else if (index < 18) {
        category = "cntime";
    } else if (index < 27) {
        category = "jptime";
    } else if (index < 36) {
        category = "eutime";
    } else {
        category = "ottime";
    }

    window[`${category}${(index % 9) + 1}`] = timerepeat.sigan;
});

restmap.zido.forEach((zidorepeat, index) => {
    let category;
    if (index < 9) {
        category = "komap";
    } else if (index < 18) {
        category = "cnmap";
    } else if (index < 27) {
        category = "jpmap";
    } else if (index < 36) {
        category = "eumap";
    } else {
        category = "otmap";
    }

    window[`${category}${(index % 9) + 1}`] = zidorepeat.zidourl;
});

restsubimg1.subimg1.forEach((imgsub1, index) => {
    let category;
    if (index < 9) {
        category = "sfkoimg";
    } else if (index < 18) {
        category = "sfcnimg";
    } else if (index < 27) {
        category = "sfjpimg";
    } else if (index < 36) {
        category = "sfeuimg";
    } else {
        category = "sfotimg";
    }

    window[`${category}${(index % 9) + 1}`] = imgsub1.imgurl;
});

restsubimg2.subimg2.forEach((imgsub2, index) => {
    let category;
    if (index < 9) {
        category = "sckoimg";
    } else if (index < 18) {
        category = "sccnimg";
    } else if (index < 27) {
        category = "scjpimg";
    } else if (index < 36) {
        category = "sceuimg";
    } else {
        category = "scotimg";
    }

    window[`${category}${(index % 9) + 1}`] = imgsub2.imgurl;
});

restsubimg3.subimg3.forEach((imgsub3, index) => {
    let category;
    if (index < 9) {
        category = "stkoimg";
    } else if (index < 18) {
        category = "stcnimg";
    } else if (index < 27) {
        category = "stjpimg";
    } else if (index < 36) {
        category = "steuimg";
    } else {
        category = "stotimg";
    }

    window[`${category}${(index % 9) + 1}`] = imgsub3.imgurl;
});

restdel.restdelivery.forEach((restdelrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kobaedal";
    } else if (index < 18) {
        category = "cnbaedal";
    } else if (index < 27) {
        category = "jpbaedal";
    } else if (index < 36) {
        category = "eubaedal";
    } else {
        category = "otbaedal";
    }

    window[`${category}${(index % 9) + 1}`] = restdelrepeat.baedal;
});

restpyeong.resthanjulpyeong.forEach((restpyeongrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kopyeong";
    } else if (index < 18) {
        category = "cnpyeong";
    } else if (index < 27) {
        category = "jppyeong";
    } else if (index < 36) {
        category = "eupyeong";
    } else {
        category = "otpyeong";
    }

    window[`${category}${(index % 9) + 1}`] = restpyeongrepeat.pyeong;
});

restfirstmainmeun.restfirstmeein.forEach((restfirstmainmeunrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kofirstmain";
    } else if (index < 18) {
        category = "cnfirstmain";
    } else if (index < 27) {
        category = "jpfirstmain";
    } else if (index < 36) {
        category = "eufirstmain";
    } else {
        category = "otfirstmain";
    }

    window[`${category}${(index % 9) + 1}`] = restfirstmainmeunrepeat.meun;
});

restfirstmainmeund.restfirstmeeind.forEach((restfirstmainmeundrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kofirstmaind";
    } else if (index < 18) {
        category = "cnfirstmaind";
    } else if (index < 27) {
        category = "jpfirstmaind";
    } else if (index < 36) {
        category = "eufirstmaind";
    } else {
        category = "otfirstmaind";
    }

    window[`${category}${(index % 9) + 1}`] = restfirstmainmeundrepeat.meun;
});

restsecondmainmeun.restsecondmeein.forEach((restsecondmainmeunrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kosecondmain";
    } else if (index < 18) {
        category = "cnsecondmain";
    } else if (index < 27) {
        category = "jpsecondmain";
    } else if (index < 36) {
        category = "eusecondmain";
    } else {
        category = "otsecondmain";
    }

    window[`${category}${(index % 9) + 1}`] = restsecondmainmeunrepeat.meun;
});

restsecondmainmeund.restsecondmeeind.forEach((restsecondmainmeundrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kosecondmaind";
    } else if (index < 18) {
        category = "cnsecondmaind";
    } else if (index < 27) {
        category = "jpsecondmaind";
    } else if (index < 36) {
        category = "eusecondmaind";
    } else {
        category = "otsecondmaind";
    }

    window[`${category}${(index % 9) + 1}`] = restsecondmainmeundrepeat.meun;
});

restthirdmainmeun.restthridmeein.forEach((restthirdmainmeunrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kothirdmain";
    } else if (index < 18) {
        category = "cnthirdmain";
    } else if (index < 27) {
        category = "jpthirdmain";
    } else if (index < 36) {
        category = "euthirdmain";
    } else {
        category = "otthirdmain";
    }

    window[`${category}${(index % 9) + 1}`] = restthirdmainmeunrepeat.meun;
});

restthirdmainmeund.restthridmeeind.forEach((restthirdmainmeundrepeat, index) => {
    let category;
    if (index < 9) {
        category = "kothirdmaind";
    } else if (index < 18) {
        category = "cnthirdmaind";
    } else if (index < 27) {
        category = "jpthirdmaind";
    } else if (index < 36) {
        category = "euthirdmaind";
    } else {
        category = "otthirdmaind";
    }

    window[`${category}${(index % 9) + 1}`] = restthirdmainmeundrepeat.meun;
});