let Matriz = [[1,2,3],[4,5,6],[7,8,9]]
console.log("Matriz Original\n")

for(let i=0, j=0 ; i < 3 ; i++){
    console.log(Matriz[i][j], Matriz[i][j+1], Matriz[i][j+2]);
}

console.log("\n","Salida 1:","\n");

for (let i=2,j=2 ; i >=0 ; i-- ){   
    console.log(Matriz[i][j], Matriz[i][j-1], Matriz[i][j-2]);      
}

console.log("\n","Salida 2:","\n");

for(let i=0,j=0 ; j < 3 ; j++){
    console.log(Matriz[i][j], Matriz[i+1][j], Matriz[i+2][j]); 
}

console.log("\n","Salida 3:","\n");

for(let i=2,j=2 ; j >= 0 ; j--){
    console.log(Matriz[i][j], Matriz[i-1][j], Matriz[i-2][j]); 
}
