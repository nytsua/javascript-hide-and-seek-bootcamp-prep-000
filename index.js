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
  var current = document.querySelector('#grand-node div');
  var toReturn;
  while(current){
    var child = current.querySelector('div');
    current = child ? child : undefined;
    if(!child){
        toReturn = current;
    }
  }
  return toReturn;
}
