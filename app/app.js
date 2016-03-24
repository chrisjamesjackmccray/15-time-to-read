function textCount() {
  let textcount = document.querySelector('body').innerHTML.split(' ').length;
  let left = textcount / 250;
  document.querySelector('#time-to-read').innerHTML = "read time: " + left + " minutes";
}

textCount();
