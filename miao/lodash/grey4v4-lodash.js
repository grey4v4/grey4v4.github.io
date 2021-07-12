var grey4v4 = function () {
  function chunk(array, number) {
    var result = []
    var count = 0
    for (var i = 0; i < array.length; i++) {
      result = result.push(array[i])
      count++
      if (count == number) {
        count = 0
      }
    }
  }

  

  
  return {
    chunk: chunk
  }
}()