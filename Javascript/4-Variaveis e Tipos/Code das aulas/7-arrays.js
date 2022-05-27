let array=[]

array.push(3);
//adiciona um item no ultimo elemento
array.push(2);

//retirar o ultimo elemento
array.pop();


array.push(2);
array.push(5);

//Retirar o primeiro elemento da array
array.shift();

//adiciona o primeiro elemento na array
array.unshift(1);

/*
for(let i=0;  i<array.length;  i++){
  
    console.log(array[i]);
}
*/

array.every(item => item===5);
//reverte a array
array.reverse();

console.log(array);