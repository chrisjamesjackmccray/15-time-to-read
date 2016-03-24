function textCount() {
  let textcount = document.querySelector('body').innerHTML.split(' ').length;
  console.log(textcount)
}

textCount()



function left() {
  let left = console.log(830 / 250);
}
left();


function addTextNode() {
  let newtext = document.createTextNode("read time: 3 minutes");
  let h3 = document.querySelector('#time-to-read').innerHTML.appendChild(newtext);
}
