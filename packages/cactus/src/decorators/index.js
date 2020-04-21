function reader(target, descriptor) {
    let { enumerable, configurable, property: { name, get }, hint } = descriptor;
  
    // extractPublicName('_first') === 'first'
    let publicName = extractPublicName(name() /* extract computed property */);
  
    // define a public accessor: get first() { return this._first; }
    Object.defineProperty(target, publicName, {
      // give the public reader the same enumerability and configurability
      // as the property it's decorating
      enumerable, configurable, get: function() { return get(this, name); }
    });
    
    return descriptor;
  }
  
  function extractPublicName(name) {
    // _first -> first
    return name.slice(1);
  }


  class Person {
    @reader _first = "Andreas";
    @reader _last = "Rossberg";
  }