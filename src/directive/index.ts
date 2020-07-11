let dires = {
  perm: {
    // bind : function(el,binding){
    //    	el.focus()； 	// 改代码执行没效果；
    // },
    // inserted : function(el){
    // 	// inserted 表示元素 插入到DOM中的时候，会执行 inserted函数，只执行一次
    //      el.focus();   // 获取焦点
    //      el.blur();   // 失去焦点
    //  },
    //  updated : function(){
    //      // 当VNode(DOM 更新时) 更新的时候,会执行updated 函数，可能会执行多次 }
    //  }
  },
}

export default {
  install(Vue: any) {
    Object.keys(dires).forEach((key) => {
      Vue.directive(key, dires[key])
    })
  },
}
