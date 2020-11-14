
function checkAnswer() {
    let result = 0;

    switch(true) {
        case document.getElementById("year_1").checked===true: 
            result = result;
        break;
        case document.getElementById("year_2").checked===true:
            result = result + 2;
        break;
        case document.getElementById("year_3").checked===true: 
            result = result;
        break;
    }

    switch(true) {
        case document.getElementById("secYear_1").checked===true: 
            result = result + 2;
        break;
        case document.getElementById("secYear_2").checked===true:
            result = result;
        break;
        case document.getElementById("secYear_3").checked===true: 
            result = result;
        break;
    }

    switch(true) {
        case document.getElementById("thirdYear_1").checked===true: 
            result = result;
        break;
        case document.getElementById("thirdYear_2").checked===true:
            result = result + 2;
        break;
        case document.getElementById("thirdYear_3").checked===true: 
            result = result;
        break;
    }

    if(result === 0) {
        let audio = new Audio('./audio/audio_1.mp3');
        audio.play();
    }
    result = `You got  ${result}   points`;
    document.getElementById("message").innerHTML = result;
    document.getElementById("message").style.backgroundColor = "rgba(110,200,200,0.8)";
    
    return result;
}
