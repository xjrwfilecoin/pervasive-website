import { deviceType } from "~/utils/deviceType";

export default function (context) {
  context.userAgent = process.server ? context.req.headers["user-agent"] : navigator.userAgent;
  context.deviceType = deviceType(context.userAgent);
  if (context.deviceType.type === "pc") {
    if (context.route.fullPath == '/') {
      context.redirect(302, '/web/Home')    //301是永久重定向，如果你想随着设备类型改变一直变，请改为302
    }   
  } else if (context.deviceType.type === "mobile" || context.deviceType.type === "ios" || context.deviceType.type === "android"){
    if (context.route.fullPath == '/') {
      context.redirect(302, '/mobile/Home')    //301是永久重定向，如果你想随着设备类型改变一直变，请改为302
    }  
  }
}