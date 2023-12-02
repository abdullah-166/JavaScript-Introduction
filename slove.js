// Quesion-1
// var num = 45;
// if(num %2 == 0){
//     console.log("This is even numeber.");
// }
// else{
//     console.log("This is odd number.");
// }

// Question-2
var arr = [5,2,4,6,9,8,10];
var temp;
for(var i=0;i<arr.length;i++){
    for(var j=i+1; j<arr.length;j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
}

