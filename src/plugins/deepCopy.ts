export default {
  install: (app: any) => {
    app.config.globalProperties.$deepCopy = (obj: any) => {
      return JSON.parse(JSON.stringify(obj));
    };
    app.provide("$deepCopy", app.config.globalProperties.$deepCopy);
  },
};
