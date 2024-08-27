function vowelsAndConsonants(s) {
    let consonents = [];
    for (let i=0; i < s.length; i++) {
        if ("aeiou".includes(s[i])) {
            console.log(s[i]); 
        } else {
            consonents.push(s[i]);
        }
    }    
    console.log(consonents.join('\n'))
}