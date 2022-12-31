const countdown = () => {
  const countDate = new Date("Jan 01,2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textday = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);
  document.querySelector(".day").innerText = textday;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textminute;
  document.querySelector(".second").innerText = textsecond;
};

setInterval(countdown, 1000);
