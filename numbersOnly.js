function numbersOnly(arr){
  var newarray = [];
  for ( var i = 0; i < arr.length; i++ ){
    if ( typeof arr[i] === "number" ){
      newarray.push(arr[i]);
    }
  }
  return newarray;
}

console.log(numbersOnly([1,true,3,"Banana"]));
