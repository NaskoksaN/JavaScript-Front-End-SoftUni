function countDown(x){
    console.log(x);
    if(x>0){
        countDown(x-1);
    }
}
countDown(10);


//let func = function(text){
//    console.log(text);
//}
//func('text aaa');