import autoBindContext from "./autoBindContext"


export default function ({Plugin, types: t}) {
  return new Plugin('ast-transform', {
    visitor: {
      BindExpression(path){
        const {object, callee} = path.node;
        path.replaceWith(
        	t.callExpression(
            	autoBindContext,
                object.callee,
                object
            )
        );
      }
    }
  });
}