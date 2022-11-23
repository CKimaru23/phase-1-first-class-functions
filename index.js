function callback(name) {
    return `Hello ${name}`;
  }
  
  function receivesAFunction(spy) {
    const name = "Jack";
    spy(name);
  }
receivesAFunction(callback);

  

function returnsANamedFunction() {
    function namedFunction() {return " "}
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){}
}