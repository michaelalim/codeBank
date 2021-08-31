const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < Math.ceil(arr.length / 2); i++){
    let a = arr[0];
    arr.splice(0, 1);
    arr.splice(Math.floor(Math.random()*arr.length), 0, a);

    let z = arr[arr.length - 1];
    arr.splice(arr.length - 1, 1);
    arr.splice(Math.floor(Math.random()*arr.length), 0, z);
}

console.log(arr);