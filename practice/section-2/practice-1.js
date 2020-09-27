'use strict';

function countSameElements(collection) {
 // 在此写代码
    var array = new Array();
    var obj = {
        key:'',
        count:''
    };
    for(var i=0;i<collection.length;i++){
        var item = collection[i]; 
        obj[item] = obj[item] +1; 
    }
    return array;
}