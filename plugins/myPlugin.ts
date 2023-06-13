import dayjs from 'dayjs'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtAPP) => {
  // return {
  //   provide: {
  //     hello: () => 'world'
  //   }
  // }

  nuxtAPP.hook('app:error', (nuxtAPP) => {
    console.log('app:error2', nuxtAPP)
  })

  // 访问vue实例

  nuxtAPP.vueApp.config.globalProperties.$ggood = () => {}

  // provide
  nuxtAPP.provide('format', (date?: Date, template?: string) => {
    return dayjs(date).format(template)
  })
})


// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.hook("app:mounted", (e: any) => {
//     console.log(11111111);
//   });
//   nuxtApp.hook("page:start", (e: any) => {
//     NProgress.start();
//   });
//   nuxtApp.hook("page:finish", (e: any) => {
//     setTimeout(() => {
//       NProgress.done();
//     }, 150);
//   });
//   nuxtApp.hook("app:error", (e: any) => {
//     if (process.client) {
//       NProgress.done();
//     }
//   });
// });
