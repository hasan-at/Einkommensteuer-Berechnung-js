function steuer() {
    let jahr = document.getElementById("jahr").value;
    let txt = document.getElementById("one");
    txt.innerHTML = "";
    if (jahr == '2018') {
        steuer2018();
    } else if (jahr == "2019") {
        steuer2019();
    } else if (jahr == "2020") {
        steuer2020();
    }
}
function steuer2018() {
    let geld = document.getElementById("geld").value;
    let tarif = document.getElementById("tarif").value;
    let txt = document.getElementById("one");
    let Est = 0;
    geld = geld / tarif;
    console.log("geld " + geld + " tarif " + tarif);

    if (geld >= 9001 && geld <= 13996) {
        let y = (geld - 9000) / 10000;
        //let y = getY(geld,9000);
        Est = (997.80 * y + 1400) * y;

    }
    else if (geld >= 13997 && geld <= 54949) {
        console.log("geld " + geld);
        let y = (geld - 13996) / 10000;
        //let y = getY(geld,9000);
        Est = (220.13 * y + 2397) * y + 948.49;
        //txt.innerHTML = "Steuer: " + Est ;
    }
    else if (geld >= 54950 && geld <= 260532) {
        console.log("geld " + geld);
        Est = 0.42 * geld - 8621.75;
        //let y = getY(geld,9000);
        //txt.innerHTML = "Steuer: " + Est ;
    }
    else if (geld >= 260533) {
        console.log("geld " + geld);
        Est = 0.45 * geld - 16437.70;
        //let y = getY(geld,9000);
        //txt.innerHTML = "Steuer: " + Est ;
    }


    txt.innerHTML = "Steuer: " + parseInt(Est * tarif);
}


/*
function getY(geld,p) {
    return (geld - p) / 10000;
}
*/





function steuer2019() {
    let geld = document.getElementById("geld").value;
    let tarif = document.getElementById("tarif").value;
    let txt = document.getElementById("one");
    let Est = 0;
    geld = geld / tarif;
    console.log("geld " + geld + " tarif " + tarif);
    if (geld >= 9169 && geld <= 14254) {

        let y = (geld - 9168) / 10000;
        //let y = getY(geld,9000);
        Est = (980.14 * y + 1400) * y;

    }
    else if (geld >= 14255 && geld <= 55960) {
        console.log("geld " + geld);
        let y = (geld - 14254) / 10000;
        //let y = getY(geld,9000);
        Est = (216.16 * y + 2397) * y + 965.58;
        //txt.innerHTML = "Steuer: " + Est ;
    }
    else if (geld >= 55961 && geld <= 265326) {
        console.log("geld " + geld);
        Est = 0.42 * geld - 8780.90;
        //let y = getY(geld,9000);
        //txt.innerHTML = "Steuer: " + Est ;
    }
    else if (geld >= 265327) {
        console.log("geld " + geld);
        Est = 0.45 * geld - 16740.68;
        //let y = getY(geld,9000);
        //txt.innerHTML = "Steuer: " + Est ;
    }


    txt.innerHTML = "Steuer: " + parseInt(Est * tarif);
}


function steuer2020() {
    let geld = document.getElementById("geld").value;
    let tarif = document.getElementById("tarif").value;
    let txt = document.getElementById("one");
    let Est = 0;
    geld = geld / tarif;
    console.log("geld " + geld + " tarif " + tarif);
    if (geld >= 9409 && geld <= 14532) {

        let y = (geld - 9408) / 10000;
        //let y = getY(geld,9000);
        Est = (972.87 * y + 1400) * y;

    }
    else if (geld >= 14533 && geld <= 57051) {
        console.log("geld " + geld);
        let y = (geld - 14532) / 10000;
        //let y = getY(geld,9000);
        Est = (212.02 * y + 2397) * y + 972.79;
        //txt.innerHTML = "Steuer: " + Est ;
    }
    else if (geld >= 55961 && geld <= 265326) {
        console.log("geld " + geld);
        Est = 0.42 * geld - 8963.74;
        //let y = getY(geld,9000);
        //txt.innerHTML = "Steuer: " + Est ;
    }
    else if (geld >= 265327) {
        console.log("geld " + geld);
        Est = 0.45 * geld - 17078.74;
        //let y = getY(geld,9000);
        //txt.innerHTML = "Steuer: " + Est ;
    }


    txt.innerHTML = "Steuer: " + parseInt(Est * tarif);
}
