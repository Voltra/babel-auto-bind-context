const autoBindContext = (method, context=null) => {
  if(typeof method !== "function")
      throw new TypeError("Can only bind the context of a function/method");
      
  if(context === null)
   return method; //Do not bind if the context is null
        
  if(!(context instanceof Object))
   throw new TypeError("Can only bind a function's/method's context to an object");
        
  const self = autoBindContext;
  if(!self.cache.hasBinding(method, context))
   self.cache.addBinding(method, context);
        
  return self.cache.getBinding(method, context);
}
    
autoBindContext.cache = {
  /***********************************\
   binding: {context, method, bound}
  \***********************************/
 bindings: [],
  lookForBinding(method, context=null){
   return this.bindings.find(binding => {
      return binding.context === context
      && binding.method === method;
    });
  },
  hasBinding(method, context=null){
   return this.lookForBinding(method, context) !== undefined;
  },
  getBound(method, context=null){
   if(this.hasBinding(method, context))
     return this.lookForBinding(method, context).bound;
        
   return null;
  },
  getBinding(method, context=null){
   return this.getBound(method, context);
  },
  addBinding(method, context=null){
   if(!this.hasBinding(method, context)){
      this.bindings.push({
        context,
        method,
        bound: method.bind(context)
      });
    }
        
    return this;
  }
};



export default autoBindContext