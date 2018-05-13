function consumer(fn, time) {
  let tasks = [],
    timer;

  return function (...args) {
    tasks.push(fn.bind(this, ...args));
    if (timer == null) {
      timer = setInterval(() => {
        tasks.shift().call(this)
        if (tasks.length <= 0) {
          clearInterval(timer);
          timer = null;
        }
      }, time)
    }
  }
}

btn.onclick = consumer((evt) => {
  let t = parseInt(count.innerHTML.slice(1)) + 1;
  count.innerHTML = `+${t}`;
  count.className = 'hit';
  let r = t * 7 % 256,
    g = t * 17 % 128,
    b = t * 31 % 128;

  count.style.color = `rgb(${r},${g},${b})`.trim();
  setTimeout(() => {
    count.className = 'hide';
  }, 500);
}, 800)
