const words = ["자동차", "두꺼비", "전지현", "옷걸이", "칼국수"];
      const index = Math.floor(Math.random() * 5); // 0 ~ 4
      let word = words[index];
      let timeCount = 5;
      const prevWord = document.querySelector(".prev-word");
      const time = document.querySelector(".time-container");
      const input = document.getElementById("input-word");
      const defaultOutline = input.style.outline;

      prevWord.innerHTML = word;
      time.innerHTML = timeCount;

      const tick = () => {
        time.innerHTML = timeCount;
        if (timeCount === 0) {
          clearInterval(start);
          alert("GAME OVER");
        } else {
          timeCount -= 1;
        }
      };
      const start = setInterval(tick, 1000);

      const updateWord = value => {
        const lastPrev = word[word.length - 1];
        const firstNext = value[0];
        if (value.length === 3 && lastPrev === firstNext) {
          word = value;
          prevWord.innerHTML = word;
          timeCount = 10;
          primaryInput();
        } else {
          warningInput();
        }
        input.value = "";
      };
      const warningInput = () => {
        input.style.outline = "1px solid red";
      };
      const primaryInput = () => {
        input.style.outline = defaultOutline;
      };