# 使用Create React App创建项目

### 创建myapp并支持typescript

create-react-app myapp --template typescript

### 网络请求使用axios
yarn add axios -D

### 环境设置
创建 .env 和 .env.development 文件，设置环境变量REACT_APP_API_URL

### axios网络工具封装
1. 创建 request.ts 文件，二次封装axios网络工具并设置请求拦截器和响应拦截器来处理公共逻辑

2. 创建src/api/search.ts文件，封装QQ请求接口方法queryInfo

### 网络代理配置：
1. 安装插件 http-proxy-middleware
yarn add http-proxy-middleware -D
创建setupProxy.js文件，配置网络请求代理，解决跨域问题

### 开发页面及组件
1. 开发搜索页面 UserPage.tsx 和 Loadding 组件Loadding.tsx

2. src/util/index.ts文件中封装debunce hook、qq号校验函数等

3. 输入框输入QQ号的处理
    输入qq号时，使用正则对输入值进行校验判断
    输入qq号时，调用debunce hook进行防抖处理，避免频繁请求网络接口，只有在输入完QQ号后再请求接口
### 单元测试
1. 安装@testing-library/react-hooks、msw测试库
   yarn add @testing-library/react-hooks msw -D
2. 测试根据qq号请求用户信息方法
    
   1. 在/src文件夹下创建__tests__文件夹及search.ts文件
   2. search.ts文件中，编写测试单元
   3. 运行测试单元：npm run test
### 应用运行命令：

yarn start

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
