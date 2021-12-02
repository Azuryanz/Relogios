function showTime() {
  let d = new Date();

  // Para o relógio analógico
  let hPointer = d.getHours();
  let mPointer = d.getMinutes();
  let sPointer = d.getSeconds();

  // Para o relógio digital
  let h = ("0" + d.getHours()).slice(-2);
  let min = ("0" + d.getMinutes()).slice(-2);
  let s = ("0" + d.getSeconds()).slice(-2);
  let y = d.getFullYear();
  let mon = ("0" + (d.getMonth()+1)).slice(-2);
  let day = ("0" + d.getDate()).slice(-2);
  let weekDay = d.getDay();

  // Verifica o dia da semana e escreve por extenso 
  switch (weekDay) {
    case 0:
      weekDay = "Domingo"
    break;

    case 1:
      weekDay = "Segunda"
    break;

    case 2:
      weekDay = "Terça"
    break;

    case 3:
      weekDay = "Quarta"
    break;

    case 4:
      weekDay = "Quinta"
    break;

    case 5:
      weekDay = "Sexta"
    break;

    case 6:
      weekDay = "Sábado"
    break;
  }

  // Calcula a rotação dos ponteiros com base na hora  e altera o respectivo HTML
  let hRotation = (360/12) * hPointer - 90;
  let mRotation = (360/60) * mPointer - 90;
  let sRotation = (360/60) * sPointer - 90;

  document.querySelector(".pointer-hours").style.transform = `rotate(${hRotation}deg)`;
  document.querySelector(".pointer-minutes").style.transform = `rotate(${mRotation}deg)`;
  document.querySelector(".pointer-seconds").style.transform = `rotate(${sRotation}deg)`;

  // Organiza a disposição dos elementos e altera o respectivo HTML
  let hourTxt = `${h}:${min}:${s}`;
  let weekTxt = `${weekDay}`
  let dateTxt = `${day}/${mon}/${y}`;

  document.querySelector(".hour").innerHTML = hourTxt;
  document.querySelector(".week").innerHTML = weekTxt.toUpperCase();
  document.querySelector(".date").innerHTML = dateTxt;
}

let timer = setInterval(showTime, 1000);
showTime();
