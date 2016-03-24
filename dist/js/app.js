(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function textCount() {
  var textcount = document.querySelector('body').innerHTML.split(' ').length;
  console.log(textcount);
}

textCount();

function left() {
  var left = console.log(830 / 250);
}
left();

function addTextNode() {
  var newtext = document.createTextNode("read time: 3 minutes");
  var h3 = document.querySelector('#time-to-read').innerHTML.appendChild(newtext);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixTQUEvQixDQUF5QyxLQUF6QyxDQUErQyxHQUEvQyxFQUFvRCxNQUFwRCxDQURHO0FBRW5CLFVBQVEsR0FBUixDQUFZLFNBQVosRUFGbUI7Q0FBckI7O0FBS0E7O0FBSUEsU0FBUyxJQUFULEdBQWdCO0FBQ2QsTUFBSSxPQUFPLFFBQVEsR0FBUixDQUFZLE1BQU0sR0FBTixDQUFuQixDQURVO0NBQWhCO0FBR0E7O0FBR0EsU0FBUyxXQUFULEdBQXVCO0FBQ3JCLE1BQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLENBQVYsQ0FEaUI7QUFFckIsTUFBSSxLQUFLLFNBQVMsYUFBVCxDQUF1QixlQUF2QixFQUF3QyxTQUF4QyxDQUFrRCxXQUFsRCxDQUE4RCxPQUE5RCxDQUFMLENBRmlCO0NBQXZCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHRleHRDb3VudCgpIHtcbiAgbGV0IHRleHRjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbm5lckhUTUwuc3BsaXQoJyAnKS5sZW5ndGg7XG4gIGNvbnNvbGUubG9nKHRleHRjb3VudClcbn1cblxudGV4dENvdW50KClcblxuXG5cbmZ1bmN0aW9uIGxlZnQoKSB7XG4gIGxldCBsZWZ0ID0gY29uc29sZS5sb2coODMwIC8gMjUwKTtcbn1cbmxlZnQoKTtcblxuXG5mdW5jdGlvbiBhZGRUZXh0Tm9kZSgpIHtcbiAgbGV0IG5ld3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInJlYWQgdGltZTogMyBtaW51dGVzXCIpO1xuICBsZXQgaDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZS10by1yZWFkJykuaW5uZXJIVE1MLmFwcGVuZENoaWxkKG5ld3RleHQpO1xufVxuIl19
