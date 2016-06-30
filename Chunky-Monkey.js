// Split an array into chunks

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunks = [];
  
  for (var i = 0; i <arr.length; i) {
    chunks.push(arr.slice(i, i+=size));
    
  }

  
  return chunks;
}
