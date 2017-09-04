function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list li');
  for(let i=0;i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + parseInt(n);
  }
}

function deepestChild(){
  var divs = document.querySelector('#grand-node');
  var current = divs.querySelector('div');
  while(current){
    var child = current.querySelector('div');
    if(child){
      current = child;
    } else{
      return current;
    }
  }
}