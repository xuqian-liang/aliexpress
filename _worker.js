const { createServer } = require("http");
const { createProxyServer } = require("http-proxy");

const proxy = createProxyServer({});

createServer((req, res) => {
  proxy.web(req, res, { target: "https://feedback.aliexpress.com" });
}).listen(process.env.PORT || 3000, () => {
  console.log("反向代理服务器已启动");
});
