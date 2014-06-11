var mainPerms = function(rest){ 
  
  var recPerms = function(sofar, rest, acc){ 
    if( rest.length === 0 ){ 
      acc.push(sofar); 
    } else { 
      for( var i = 0; i < rest.length; i++ ){ 
        var remaining = rest.slice(); 
        remaining.splice(i,1); 
        var copy = sofar.slice(); 
        copy.push(rest[i]); 
        recPerms(copy, remaining, acc); 
      }
    } 
  } 
  
  var acc = []; 
  recPerms([], rest, acc); 
  return acc; 
} 

var test = ['rock', 'paper', 'scissors']; 

var res = mainPerms(test); 
console.log(res); 
