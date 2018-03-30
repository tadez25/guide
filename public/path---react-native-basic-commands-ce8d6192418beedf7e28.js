webpackJsonp([0xc26172792b6be000],{"./node_modules/json-loader/index.js!./.cache/json/react-native-basic-commands.json":function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Basic Commands</h2>\n<p>Here you will find a list of basic commands to start developing iOS and Android apps with React Native. If you don’t have it installed yet, is highly recommended that you follow the <a href="https://facebook.github.io/react-native/docs/getting-started.html">official guide</a>.</p>\n<p><strong>Start new project</strong></p>\n<p>You can use <strong>Expo</strong> or <code>create-react-native-app</code> to start your new project, but with this method you are in more control of what happend in your projecto and allow to understand more in deep the functionality of React Native.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>react-native init [PROJECT-NAME]\ncd [PROJECT-NAME]</code></pre>\n      </div>\n<p><strong>Run app in Android emulator</strong></p>\n<p>This command is self explanatory and as it says it will start the Android emulator and install the app you just created. You need to be in the root of the project to run this command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>react-native run-android</code></pre>\n      </div>\n<p><strong>Run app in iOS emulator</strong></p>\n<p>This command do exactly the same as <code>react-native run-android</code> but instead of the Android emulator, it opens the iPhone simulator.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>react-native run-ios</code></pre>\n      </div>\n<p><strong>Link dependencies to native projects</strong></p>\n<p>Some Libraries have dependencies that need to be linked in the native code generated for React Native. If something doesn’t work after you installed a new library, maybe is because you skip this step.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>react-native link [LIBRARY-NAME]</code></pre>\n      </div>\n<p><strong>Clear bundle</strong></p>\n<p>If something don’t run as expected, maybe you need to clear and create a new bundle with this command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>watchman watch-del-all</code></pre>\n      </div>\n<p><strong>Support decorators</strong></p>\n<p>JSX doesn’t support decorators by default so you need to install the <strong>Babel</strong> plugin to make it work.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install babel-plugin-transform-decorators-legacy --save\nnpm install babel-plugin-transform-class-properties --save</code></pre>\n      </div>\n<h3>Export APK to run in device</h3>\n<p>With the following commands you will have and unsigned apk so you can install and share with your colleagues for testing purposes. Just remember that this apk is not ready to upload to the App Store or production.\nYou will find your fresh apk in <em>android/app/build/outputs/apk/app-debug.apk</em></p>\n<p><strong>1. Bundle debug build</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug</code></pre>\n      </div>\n<p><strong>2. Create debug build</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>cd android\n./gradlew assembleDebug</code></pre>\n      </div>',fields:{slug:"/react-native/basic-commands/"},frontmatter:{title:"Basic Commands"}}},pathContext:{slug:"/react-native/basic-commands/"}}}});
//# sourceMappingURL=path---react-native-basic-commands-ce8d6192418beedf7e28.js.map