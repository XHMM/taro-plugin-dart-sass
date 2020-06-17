# tarojs-plugin-dart-sass

tarojs在处理scss时默认用的是 `node-sass` (lib-sass)，该插件将其替换为了 `sass` (dart-sass)。

1. `npm i tarojs-plugin-dart-sass`
2. 修改 config/index.js 文件配置 ：
    ```js
    const config = {  
      // ...
      plugins: ["tarojs-plugin-dart-sass"],
      // ...
    }
    ```
