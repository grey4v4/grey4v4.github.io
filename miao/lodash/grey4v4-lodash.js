var grey4v4 = function () {
  function chunk(array, number) {
    var result = []
    var count = 0
    var lastResult = []
    for (var i = 0; i < array.length; i++) {
        result.push(array[i])
        count++
        if (count == number) {
          lastResult.push(result)
          count = 0
          result = []
        } 
      }
      if (result.length > 0) {
        lastResult.push(result)
      }
    return lastResult
  }

  //----------------------------------------
  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!(array[i] == false || array[i] == null || array[i] == 0 || array[i] == "" || array[i] == undefined || array[i] == NaN)) {
        result.push(array[i])
      }
    }
    return result

  //-------------------------------------
    function concat(array, values) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        result.push(array[i])
      }
      for (var j = 0; j < values.length; j++) {
        result.push(values[j])
      }
      return result
    }




  

  
  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
  }
}()