export {}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare global {
  interface Window {
    API: string
  }
}
