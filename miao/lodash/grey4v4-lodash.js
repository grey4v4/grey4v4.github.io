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
      if (!(array[i] == false || array[i] == null || array[i] == 0 || array[i] == "" || array[i] == undefined ||  isNaN(array[i]))) {
        result.push(array[i])
      }
    }
    return result
  }

  //-------------------------------------
    function concat(array, values) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        result.push(array[i])
      }
      for (var i = 0; i < values.length; i++) {
        result.push(values[i])
      }
      return result
    }

  //---------------------------------------
    function uniq(array) {
      var result = []
      for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++) 
          if (array[i] === array[j])
            j = ++i
          result.push(array[i])
      }
      return result
    }

  //----------------------------------------------
    function forEach(array, f) {
      for (var i = 0; i < array.length; i++) {
        f(array[i], i)
      }
      return array
  }
  
  //---------------------------------------------------
    function map(array, mapper) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        result.push(mapper(array[i], i))
      }
      return result
  }
  
  //------------------------------------------------
    function filter(array, test) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (test(array[i], i)) {    //为true通过测试
          result.push(array[i])
        }
      }
      return result
    }
  
  //-------------------------------------------------
    function reduce(array, f, initial) {
      var result = initial
      for (var i = 0; i < array.length; i++) {
        result = f(result, array[i])
      }
      return result
    }

  //-------------------------------------------------
    function every(array, f) {
      for (var i = 0; i < array.length; i++) {
        if (f(array[i])) {
          return true
        } else {
          return false
        }
      }
    }
  
  //-------------------------------------------------
    function some() {
      
    }
  
  //-------------------------------------------------
    function fill(array, value, start, end = array.length) {
      for (var i = start; i < end; i++) {
        array[i] = value
      }
      return array
    }

  //-------------------------------------------------
    function isEqual(a, b) {
      if (a === b) {
        return true
      }
      var typeA = typeof(a)
      var typeB = typeof (b)
      if (typeA != typeB) {
        return false
      }
      
    }
  //-------------------------------------------------
    function isNaN(value) {
      if (value == true || value == null) {
        return false
      } else {
        return true
      }
    }
  
  //---------------------------------------------
    function sum(array) {
      var sum = 0
      for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
      return sum
    }
  
  //----------------------------------------------
    function reverse(array) {
      var result = []
      for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
      }
      return result
    }
  
  
  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    uniq: uniq,
    forEach: forEach,
    map: map,
    filter: filter,
    reduce: reduce,
    every: every,
    some: some,
    fill: fill,
    isEqual: isEqual,
    isNaN: isNaN,
    sum: sum,
    reverse: reverse,
  }
}()