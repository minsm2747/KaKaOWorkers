var 숫자1 = Math.ceil( Math.random() * 9);
var 숫자2 = Math.ceil( Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = document.createElement('div');
    단어.textContent = String(숫자1) + 'X' String(숫자2) + '=';
var 폼 = document.createElement('form');
    document.body.append(폼);
var 입력창 = document.createElement('input');
    입력창.type = 'number';
    폼.append(입력창);
var 버튼 = document.createElement('button');
    버튼.textContent = '입력!!';
    폼.append(버튼);
var 결과창 = document.createElement('div');
    document.body.append(결과창);

    폼.addEventListener('submit', function 콜백함수 (e) {
    e.preventDefault();
    if (결과 === Number(입력창.value)) {
        결과창.textContent = '딩동댕, 정답 입니다!!';
            숫자1 = Math.ceil(Math.random() * 9);
            숫자2 = Math.ceil(Math.random() * 9);
            결과 = 숫자1 * 숫자2;
            단어.textContent = String(숫자1) + 'X' + String(숫자2) + '=';
            입력창.value = '';
            입력창.focus();
    } else {
        결과창.textContent = '땡, 오답 입니다!!';
        입력창.value = '';
        입력창.focus();   
    }
})