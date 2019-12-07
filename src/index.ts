(function(exports) {
  exports.test = () => {
    return 'Hello World'
  }
})(typeof exports === 'undefined' ? (this as any)['peppermark'] = {} : exports)
