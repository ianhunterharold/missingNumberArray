const missingNumber = function(nums) {
  // 0 to n 
     
     const sorted= nums.sort( (a,b) => a-b);
 
     let current = 0;
 
     for (let i=0; i< sorted.length; i++){
       if (sorted[i] !== current){
         return sorted[i]-1;
       }
       current++
     }
     return (sorted.length - 1) + 1
 };
 
 const arr= [0,1];
 missingNumber(arr);
 
     
     // sort, look at next value, if next value is not what you expect return that value plus one