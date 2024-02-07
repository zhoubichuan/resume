declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.json' {
  const value: any;
  export default value;
}
declare module 'web-echarts' {
  // import Vue from 'vue'
  // export default Vue
}
declare module 'WebEcharts' {
  // import Vue from 'vue'
  // export default Vue
}
declare module 'web-openlayers' {
  // import Vue from 'vue'
  // export default Vue
}
declare module 'WebOpenlayers' {
  // import Vue from 'vue'
  // export default Vue
}
interface Window {
  __POWERED_BY_QIANKUN__:boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__:string
}