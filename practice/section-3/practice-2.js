'use strict';

function createUpdatedCollection(collectionA, objectB) {
  // 在此写代码
  objectB=objectB.value;
  for(var i = 0; i < collectionA.length; i++){
      for(var j = 0; j < objectB.length; j++){
          if(objectB[j]==collectionA[i].key){
              collectionA[i].count -=  parseInt(collectionA[i].count/3);
          }
      }
  }
  return collectionA;
 }