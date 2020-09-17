
const qApp = async (config) =>{
  return new Promise((resolve) => {
    console.log(config)
    const prefix = (config.prefix !== '/') ? `/${config.prefix}/` : '/';
    window.require.config({
      baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + prefix + "resources",
    })
    window.require( ["js/qlik"], function ( qlik ) {

      let ele = document.getElementsByTagName('kup-qlik')
      
      for (let index = 0; index < ele.length; index++) {
        ele[index].qlik = qlik        
      }

      resolve(true)        
    })
  })
}

export default qApp;