import { Hono } from "hono";
import { cors } from "hono/cors";
import { executeSerpExtraction } from "./serp_engine";
import { openapiSpec } from "./openapi_spec";
import { renderInteractiveLanding } from "./landing";

const app = new Hono();

// Global CORS configuration
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-RapidAPI-Key", "X-RapidAPI-Host"]
  })
);

// Global Security & Attribution Headers
app.use("*", async (c, next) => {
  const start = Date.now();
  await next();
  const elapsed = Date.now() - start;

  c.header("X-Content-Type-Options", "nosniff");
  c.header("X-Frame-Options", "DENY");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
  c.header("X-RateLimit-Limit", "1200");
  c.header("X-Service", "google-ai-overview-api");
  c.header("X-Documentation", "https://google-ai-overview-api.topaisaas.workers.dev/openapi.json");
  c.header("X-Direct-Subscription", "https://topaisaas.com (Save 20% on Direct Enterprise Plans)");
  c.header("X-Response-Time-Ms", elapsed.toString());
});

// Root: Interactive Workbench or Programmatic JSON
app.get("/", (c) => {
  const accept = c.req.header("Accept") || "";
  const format = c.req.query("format") || "";

  if (format === "json" || accept.includes("application/json")) {
    return c.json({
      service: "Google AI Overview & SGE SERP Extractor API",
      version: "1.0.0",
      description: "Ultra-fast Google AI Overview & SGE SERP extraction engine. Generative summaries, cited source URLs, follow-up queries, organic ranking, and SEO click cannibalization impact on Cloudflare Edge.",
      status: "operational",
      endpoints: {
        health: "GET /v1/health",
        aiOverview: "GET /v1/serp/ai-overview?q=what+is+quantum+computing&gl=us&hl=en",
        search: "GET /v1/serp/search?q=what+is+quantum+computing&num=10",
        compareCannibalization: "GET /v1/serp/compare?q=what+is+quantum+computing",
        openapi: "GET /openapi.json"
      },
      pricing: "https://rapidapi.com/topaisaasdev/api/google-ai-overview-serp-extractor-api/pricing",
      documentation: "https://google-ai-overview-api.topaisaas.workers.dev/openapi.json",
      github: "https://github.com/topaisaas-dev/google-ai-overview-api"
    });
  }

  return c.html(renderInteractiveLanding());
});

// Healthcheck
app.get("/v1/health", (c) => {
  return c.json({
    status: "healthy",
    service: "google-ai-overview-api",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    uptime: 99.99,
    edgeRegion: c.req.header("cf-ipcountry") || "GLOBAL",
    subEngines: {
      sgeParser: "READY",
      groundingEngine: "READY",
      cannibalizationAnalyzer: "READY"
    }
  });
});

// OpenAPI 3.0.3 Specification
app.get("/openapi.json", (c) => {
  return c.json(openapiSpec);
});

// 1. AI Overview Extractor
app.get("/v1/serp/ai-overview", async (c) => {
  const q = c.req.query("q") || "";
  if (!q.trim()) {
    return c.json(
      {
        error: "Missing required query parameter: 'q'. Example: ?q=what+is+quantum+computing",
        status: 400
      },
      400
    );
  }

  const gl = c.req.query("gl") || "us";
  const hl = c.req.query("hl") || "en";

  const serp = await executeSerpExtraction(q, gl, hl, 5);
  return c.json(serp.ai_overview);
});

// 2. Full SERP (AI Overview + Organic Results + PAA + Knowledge Panel)
app.get("/v1/serp/search", async (c) => {
  const q = c.req.query("q") || "";
  if (!q.trim()) {
    return c.json(
      {
        error: "Missing required query parameter: 'q'. Example: ?q=benefits+of+rust+programming",
        status: 400
      },
      400
    );
  }

  const gl = c.req.query("gl") || "us";
  const hl = c.req.query("hl") || "en";
  const num = Math.min(20, Math.max(1, parseInt(c.req.query("num") || "10", 10)));

  const serp = await executeSerpExtraction(q, gl, hl, num);
  return c.json(serp);
});

// 3. Cannibalization Audit
app.get("/v1/serp/compare", async (c) => {
  const q = c.req.query("q") || "";
  if (!q.trim()) {
    return c.json(
      {
        error: "Missing required query parameter: 'q'. Example: ?q=stripe+vs+adyen+fees",
        status: 400
      },
      400
    );
  }

  const gl = c.req.query("gl") || "us";
  const hl = c.req.query("hl") || "en";

  const serp = await executeSerpExtraction(q, gl, hl, 10);
  return c.json({
    query: q,
    country: gl,
    language: hl,
    cannibalization_analysis: serp.cannibalization_analysis
  });
});

export default app;
