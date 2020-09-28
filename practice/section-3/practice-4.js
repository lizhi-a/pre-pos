'use strict';

function createUpdatedCollection(collectionA, objectB) {
 // 在此写代码
 var array = new Array();
    var k=0;
    var count=0;
    for(var i=0;i<collectionA.length;i++){
        if(collectionA[i].length==1){
            if(collectionA[i]==collectionA[i+1]){
                    count++;
            }
            else{
                array[k]={
                    key:collectionA[i-1],
                    count:count+1
                }
                k++;
                count=0;
            }
        }
        else{
            var [a,x,n]=collectionA[i];
            array[k]={
                key:a,
                count: Number(n)
            }
            k++;
            count=0;
        }
    }
    
    objectB=objectB.value;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < objectB.length; j++){
            if(objectB[j]==array[i].key){
                array[i].count -=  parseInt(array[i].count/3);
            }
        }
    }
    return array;
}
