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
    function filter(array, f) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (f(array[i])) {    //为true通过测试
          result.push(array[i])
        }
      }
      return result
    }
  
  //-------------------------------------------------
    function reduce(array, f, initial) {
      if (initial == undefined) {
        initial = 0
      }
      var result = initial
      for (var i = 0; i < array.length; i++) {
        result = f(result, array[i])
      }
      return result
    }

  //-------------------------------------------------
    function every(array, f) {
      for (var i = 0; i < array.length; i++) {
        if (f(array[i]) == true) {
          return true
        } else {
          return false
        }
      }
    }
  
  //-------------------------------------------------
    function some(collection, predicate=_.identity) {
      for (let i = 0; i < collection.length; i++) {
        if (typeof (collection[i] == predicate)) {
          return true
        }
        return false
      }
    }
  
  //-------------------------------------------------
    function fill(array, value, start, end = array.length) {
      if (start == undefined) {
        start = 0
      }
      if (end == undefined) {
        end = array.length
      }
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
      if (value == true || value == null || value) {
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
  
  //----------------------------------------------
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
      return -1
    }
  }
  //----------------------------------------------
  function lastIndexOf(array, value, formIndex = array.length - 1) {
    for (let i = formIndex; i <= 0; i--) {
      if (array[i] == value) {
        return i
      }
      return -1
    }
  }
  //----------------------------------------------
  function slice(array, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      return array[i]
    }
  }
  //----------------------------------------------
  function join(array, separator = ',') {
    let result = []
    for (let i = 0; i < array.length; i++) {
      result.push(array[i], separator)
    }
    return result
  }
  //-----------------------------------------
  function bind(func, thisArg, partials) {
    return func(...args) {
      return func(thisArg, partials, ...args)
    }
  }
  //--------------------------------------
  function lt(value, other) {
    if (value < other) {
      return true
    }
    return false
  }
  //---------------------------------
  function lte(value, other) {
    if (value <= other) {
      return true
    }
    return false
  }
  //----------------------------------------

  function add(augend, addend) {
    return augend + addend
  }

  //-----------------------------------
  function devide(ividend, divisor) {
    return ividend / divisor
  }

  //-----------------------------
  function max(array) {
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
      }
    }
    return max
  }
  //----------------------------------
  function min(array) {
    let min = Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  }

  //-----------------------------------
  function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand
  }
  //---------------------------------
  function subtract(minuend, subtrahend) {
    return minuend - subtrahend
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
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    slice: slice,
    join: join,
    bind: bind,
    lt: lt,
    lte: lte,
    add: add,
    devide: devide,
    max: max,
    min: min,
    multiply: multiply,
    subtract: subtract,
  }
}()