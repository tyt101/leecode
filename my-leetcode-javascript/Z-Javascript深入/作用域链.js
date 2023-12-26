var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();


checkscope.[[scope]] = [
  globalContext.VO
];

ECStack = [
  checkscopeContext,
  globalContext
];

checkscopeContext = {
  Scope: checkscope.[[scope]],
}

checkscopeContext = {
  AO: {
      arguments: {
          length: 0
      },
      scope2: undefined
  },
  Scope: checkscope.[[scope]],
}

checkscopeContext = {
  AO: {
      arguments: {
          length: 0
      },
      scope2: undefined
  },
  Scope: [AO, [[Scope]]]
}

checkscopeContext = {
  AO: {
      arguments: {
          length: 0
      },
      scope2: 'local scope'
  },
  Scope: [AO, [[Scope]]]
}

ECStack = [
  globalContext
];