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
  
  function property(prop) {
    return function (obj) {
      return obj[prop]
    }
  }
  function matches(src) {
    return function(obj) {
      for (var key in src) {
        if (src[key] !== obj[key]) {
            return false
          }
        }
        return true
      }
    }
    function matchesProperty(ary) {
      var key = ary[0]
      var val = ary[1]
      return function (obj) {
        return obj[key] == val
      }
    }
  
    function iteratee(maybePredicate) {
      if (typeof maybePredicate == 'function') {
        return maybePredicate
      }
      if (typeof maybePredicate == 'string') {
        return property(mapper)
      }
      if (Array.isArray(maybePredicate)) {
        return matchesProperty(...maybePredicate)
      }
      if (typeof maybePredicate == 'object') {
        return matches(...maybePredicate)
      }
    }
  //---------------------------
    function map(collection, mapper) {
      mapper = iteratee(mapper)
      var result = []
      for (var key in collection) {
        result.push(mapper(collection[i], i, collection))
      }
      return result
    }
  
  //------------------------------------------------
    function filter(collection, predicate) {
      predicate = iteratee(predicate)
      var result = []
      for (var key in collection) {
        if (predicate(collection[i], i, collection)) {    //为true通过测试
          result.push(collection[i])
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
    }
    return -1
  }
  //----------------------------------------------
  function lastIndexOf(array, value, formIndex = array.length - 1) {
    for (let i = formIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
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
  // function bind(func, thisArg, partials) {
  //   return func(...args) {
  //     return func(thisArg, partials, ...args)
  //   }
  // }
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
    if (array.length == 0) {
      return undefined
    }
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
    if (array.length == 0) {
      return undefined
    }
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
  //---------------------------------
  function inRange(number, start, end) {
    
    for (let i = start; i < end; i++) {
      if (number >= start && number <= end) {
        return true
      }
      return false
    }
  }
  //---------------------------------
  function drop(array, n) {
    if (n == undefined) {
      n = 1
    }
    for (let i = 0; i < n; i++) {
      array.shift(array[i])
    }
    return array
  }
  //---------------------------------
  function dropRight(array, n) {
    if (n == undefined) {
      n = 1
    }
    for (let i = n; i > 0; i--) {
      array.pop(array[i])
    }
    return array
  }
  //---------------------------------
  function initial(array) {
    array.pop()
    return array
  }
  //---------------------------------
  function last(array) {
    return array[array.length - 1]
  }
  //---------------------------------

  function head(array) {
    if (array == undefined) {
      return undefined
    }
    return array[0]
  }
  //---------------------------------
  function nth(array, n) {
    if (n >= 0) {
      return array[n]
    } else {
      return array[array.length - Math.abs(n)]
    }
  }

  //---------------------------------

  function tail(array) {
    array.shift()
    return array
  }
  //---------------------------------
  function get(object, path, defalutVal) {
    for (var i = 0; i < path.length; i++) {
      if (object == undefined) {
        return defalutVal
      } else {
        object = object[path[i]]
      }
    }
  }
  //---------------------------------
  function toPath(value) {
    if (Array.isArray(value)) {
      return value
    } else {
      return value.split('.')
    }
  }

  //---------------------------------
  function isMatch(object, source) {
    if (typeof object !== 'object' || typeof source !== 'object') {
      return false
    }
    for (var key in object) {
      if (source[key] && typeof source[key] !== 'object') {
        if (object[key] !== source[key]) {
          return false
        }
      } else {
        if (!isMatch(object[key], source[key])) {
          return false
        }
      }
    }
    return true
  }
  //-------------------------------------
    function pull(array, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
          array.shift(array[i])
        }
      }
      return array
  }
  
  //-------------------------------------
  function sortedIndex(array, value) {
    if (array == []) {
      return 0
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      } else {
        return array.length
      }
    }
  }
  //-------------------------------------
  function sortedUniq(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1]) {
        result.push(array[i])
      }
    }
    return result
  }
  //-------------------------------------
  function take(array, n) {
    if (n == undefined) {
      return array[0]
    }
    if (n == 0) {
      return []
    }
    if (n > array.length) {
      return array
    }
    let result = []
    for (let i = 0; i < n; i++) {
      result.push(array[i])
    }
    return result
  }
  //-------------------------------------
  function size(collection) {
    if (typeof collection == 'number' || typeof collection == 'string') {
      return collection.length
    }
    if (typeof collection == 'object') {
      // var obj = Object.keys(collection)
      // return obj.length
      var keys = []
      for (key in collection) {
        keys.push(key)
      }
      return keys.length
    }
  }

  //-------------------------------------
  function gt(value, other) {
    if (value > other) {
      return true
    }
    return false
  }
  //-------------------------------------
  function gte(value, other) {
    if (value >= other) {
      return true
    }
    return flase
  }
//-------------------------------------
  function isArgument(value) {
    return Object.prototype.toString.call(value) === '[object Function]'
  }
  
  //-------------------------------------
  function isArray(value) {
    return Array.isArray(value)
  }

//-------------------------------------
  function isArrayLike(value) {
    if (!isArgument(value)) {
      return true
    }
    return false
  }
//-------------------------------------
  function isBoolean(value) {
    if (value == true || value == false) {
      return true
    }
    return false
  }

//-------------------------------------
  function isFinite(value) {
    if (typeof value == 'number' && Number.MAX_VALUE >= value && Number.MIN_VALUE <= value) {
      return true
    }
    return false
  }

  //-------------------------------------
  function isFunction(value) {
    if (value == '_' || value == '$') {
      return true
    } else {
      return Object.prototype.toString.call(value) === '[object Function]'
    }
  }

  //-------------------------------------
  function isInteger(value) {
    if (typeof value == 'number' && Math.abs(value % 1) == 0 && Number.MAX_VALUE > value && Number.MIN_VALUE < value) {
      return true
    }
    return false
  }
  //-------------------------------------
  function isNumber(value) {
    if (value == Infinity || value == -Infinity || value == NaN) {
      return true
    }
    return isFinite(value)
  }

  //-------------------------------------
  function parseJson(str) {
    var i = 0
    return parseValue()

    function parseValue() {
      var c = str[i]
      if (c == '[') {
        return parseArray()
      }
      if (c == '{') {
        return parseObject()
      }
      if (c == '"') {
        return parseString()
      }
      if (c == 't') {
        return parseTrue()
      }
      if (c == 'f') {
        return parseFalse()
      }
      if (c == 'n') {
        return parseNull()
      }
      return parseNumber()
    }

    function parseArray() {
      i++
      var result = []
      while (str[i] !== ']') {
        var val = parseValue()
        result.push(val)
        if (str[i] == ',') {
          i++
        }
      }
      i++
      return result
    }
    function parseObject() {
      i++
      var result = {}
      while (str[i] !== '}') {
        var key = parseString()
        i++  //冒号
        var val = parseValue()
        result[key] = val
        if (str[i] == ',') {
          i++
        }
      }
      i++
      return result
    }
    function parseString() {
      i++
      var result = ''
      while (str[i] !== '"') {
        result += str[i++]
      }
      i++
      return result
    }
    function parseTrue() {
      if (i += 4) {
        return true
      }
    }
    function parseFalse() {
      if (i += 5) {
        return false
      }
    }
    function parseNull() {
      if (i += 4) {
        return null
      }
    }
    function parseNumber() {
      var numStr = ''
      while (str[i] <= 9 && str[i] >= 0) {
        numStr += str[i++]
      }
      return Number(numStr)
    }
  }

  //-------------------------------
  function isSafeInteger(value) {
    if (typeof value == 'number' && value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER && value % 1 == 0) {
      return true
    }
    return false
  }
  //-------------------------------
  function isString(value) {
    return typeof value == 'string'
  }
  //-------------------------------
  function toArray(value) {
    var result = []
    if (typeof value == 'object') {
      for (i in value) {
        result.push(value[i])
      }
    }
    if (typeof value == 'string') {
      for (let i = 0; i < value.length; i++) {
        result.push(value[i])
      }
    }
    if (value == null) {
      return result
    }
    return result
    
  }

  //------------------------------------------
  function mean(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length
  }

  //------------------------------------------
  function clamp(number, lower, upper) {

  }

  //-----------------------------------------------
  function capitalize(str) {
    let result = []
    result.push(str[0].toUpperCase())
    for (let i = 1; i < str.length; i++) {
      result.push(str[i].toLowerCase)
    }
    return result.join('')
  }
  //------------------------------------------
  function endWith(str, target, position) {
    if (position == undefined) {
      if (str[str.length - 1] == target) {
        return true
      }
    } else if (str[position - 1] == target) {
      return true
    }
    return false
  }

  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    uniq: uniq,
    forEach: forEach,
    iteratee:iteratee,
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
    lt: lt,
    lte: lte,
    add: add,
    devide: devide,
    max: max,
    min: min,
    multiply: multiply,
    subtract: subtract,
    inRange: inRange,
    drop: drop,
    dropRight: dropRight,
    initial: initial,
    last: last,
    head: head,
    nth: nth,
    tail: tail,
    get: get,
    toPath: toPath,
    isMatch: isMatch,
    pull: pull,
    sortedIndex: sortedIndex,
    sortedUniq: sortedUniq,
    take: take,
    size: size,
    gt: gt,
    gte: gte,
    isArray: isArray,
    isArrayLike: isArrayLike,
    isBoolean: isBoolean,
    isFinite: isFinite,
    isFunction: isFunction,
    isInteger: isInteger,
    isNumber: isNumber,
    parseJson: parseJson,
    isSafeInteger: isSafeInteger,
    isString: isString,
    toArray: toArray,
    mean: mean,
    clamp: clamp,
    capitalize: capitalize,
    endWith: endWith,
  }
}()