const express = require("express");
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer();

app.all("*", (req, res) => {
  proxy.web(req, res, { target: "https://feedback.aliexpress.com" });
});

app.listen(3000, () => {
  console.log("反向代理服务器已启动在端口 3000");
});
