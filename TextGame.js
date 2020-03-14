 var word = '카카오'

 while (true) {
    var answer = prompt(word);
    if (word [word.length - 1] === answer[0]) {
        alert('정답 입니다.');
        word = answer;
    } else {
        alert('오답 입니다.');
    }
} 