'use strict';

function countSameElements(collection) {
 // 在此写代码
    var array = new Array();
    var k=0;
    var count=0;
    for(var i=0;i<collection.length;i++){
       if(collection[i]==collection[i+1]){
            count++;
       }
       else{
           array[k]={
               key:collection[i-1],
               count:count+1
           }
           k++;
           count=0;
       }
    }
    return array;
}