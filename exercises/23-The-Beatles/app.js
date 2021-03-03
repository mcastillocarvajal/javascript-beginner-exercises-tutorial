function sing(){
    var song = "let it be";
    for (var i=1; i<12; i++){
        if (i==4){
            song = song.concat(", ","words of wisdom");
        } else if (i==10){
            song = song.concat(", ","there will be an answer");
        } else {
            song = song.concat(", ", "let it be");
        }
    }
    return song;
}

//Your code above ^^^

console.log(sing());