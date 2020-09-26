function char1(word1){
    return word1;
}

function char2(word2){
    return word2;
}

    var name =["eyad" ,"jalal" ,"Jalal","haydara","hamza","lolo","jomana"];
var i=0;
for(i=0 ; i<name.length ; i++){
    if(name.charAt(i) === 'j' || name.charAt(i) === 'J'){
        document.write("<span class='char'>" + name.charAt(i) + "</span>" + ' ' + '=>' + ' ' +"<span>" + char1('Goodbye JSomeName') +"</span>"+ "<br>");
    }
    else{
        document.write(name.charAt(i) + ' ' + '=>' + ' ' + char2('Hello SomeName') + "<br>");
    }
}


