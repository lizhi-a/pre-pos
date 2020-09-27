'use strict';

function createUpdatedCollection(collectionA, objectB) {
// 在此写代码
  objectB=objectB.value;
	for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<objectB.length;j++){
            if(collectionA[i].key==objectB[j]){
              if(collection>3){
                collectionA[i].count-=collectionA%3;
              }
              else if(collectionA==3)
              collectionA[i]-=1;
              break;
            }
        }
    }
    return collectionA;
}
