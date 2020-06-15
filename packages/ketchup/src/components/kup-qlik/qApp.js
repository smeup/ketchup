
const qApp = async (config,appid) =>{
  return new Promise((resolve) => {
    window.require.config({
      baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "/resources",
    })
    window.require( ["js/qlik"], function ( qlik ) {

      var app = qlik.openApp(appid, config);	
		
      if ( app ) {
        resolve(app)
      }
    })
  })
}

export default qApp;