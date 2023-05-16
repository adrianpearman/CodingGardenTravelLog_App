import { createProxyMiddleware } from "http-proxy-middleware";

const proxyFunction = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};

export default proxyFunction;
