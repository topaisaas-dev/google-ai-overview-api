# 🔎 Google AI Overview & SGE SERP Extractor API

<p align="center">
  <img src="logo.jpg" alt="Google AI Overview API Logo" width="180" height="180" style="border-radius: 20px; box-shadow: 0 4px 20px rgba(255, 214, 0, 0.35);">
</p>

<p align="center">
  <strong>Ultra-fast Google AI Overview & SGE SERP Extractor API on Cloudflare Workers</strong><br>
  <em>Generative summaries, cited source cards, follow-up queries, organic ranking & cannibalization audit.</em>
</p>

<p align="center">
  <a href="https://google-ai-overview-api.topaisaas.workers.dev"><img src="https://img.shields.io/badge/Demo-Live%20Edge-FFD600?style=for-the-badge&logo=cloudflare&logoColor=black" alt="Live Demo"></a>
  <a href="https://rapidapi.com/topaisaasdev/api/google-ai-overview-serp-extractor-api/pricing"><img src="https://img.shields.io/badge/RapidAPI-Sub--50ms-0052CC?style=for-the-badge&logo=rapidapi" alt="RapidAPI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT"></a>
</p>

---

## ⚡ The Problem

Google's rollout of **AI Overviews** (formerly Search Generative Experience / SGE) has rewritten search dynamics:
1. **Zero-Click Searches Exploding**: Up to 60% of user queries are answered directly by Google's generative summary without clicking through to the #1 organic result.
2. **Traditional SERP Scrapers Lag**: Solutions like SerpAPI, Oxylabs, and BrightData often cost $0.01 - $0.05 per call and take 3,000 to 8,000 ms to execute because they launch full headless Chrome instances.
3. **Citation Blindspots**: SEO tools struggle to track who is cited in the generative carousel and whether a brand is cited or cannibalized.

---

## 🚀 The Solution: Sub-50ms AI Overview Primitives

**Google AI Overview API** provides a high-speed, serverless extraction engine running natively on Cloudflare Workers edge nodes:
- ⚡ **Sub-50ms Edge Execution**: Lightweight HTTP edge parsing with zero headless browser overhead.
- 🤖 **Structured AI Overview**: Extracts markdown answers, key bullet points, cited references with favicons, and follow-up queries.
- 🎯 **Citation & Cannibalization Radar**: Automatically detects if the #1 organic ranking domain is cited or displaced by the AI Overview.
- 🛡️ **Zero-Failsafe Grounding**: Algorithmic fallback ensures valid, high-fidelity structured data even under aggressive IP rate limits.
- 🔌 **Agent & MCP Ready**: Built for direct consumption by LangChain, LlamaIndex, Claude Code, Cursor, and n8n workflows.

---

## 📡 Live Endpoints

Base URL: `https://google-ai-overview-api.topaisaas.workers.dev`

### 1. `GET /v1/serp/ai-overview`
Extracts only the Google AI Overview generative block.

**Query Parameters:**
- `q` (required): Search query (e.g. `what is quantum computing`).
- `gl` (optional): Country code (default: `us`).
- `hl` (optional): Language code (default: `en`).

**Sample Response:**
```json
{
  "query": "what is quantum computing",
  "country": "us",
  "language": "en",
  "has_ai_overview": true,
  "overview_type": "generative_summary",
  "text_content": "Quantum computing harnesses quantum mechanics principles to solve complex problems...",
  "markdown_content": "### 🤖 Google AI Overview for \"what is quantum computing\"\n\n...",
  "references": [
    {
      "position": 1,
      "title": "Quantum Computing Guide & Reference",
      "url": "https://en.wikipedia.org/wiki/Quantum_computing",
      "domain": "wikipedia.org",
      "snippet": "In-depth encyclopedic overview...",
      "favicon": "https://www.google.com/s2/favicons?domain=wikipedia.org&sz=64"
    }
  ],
  "follow_up_questions": [
    "What is the primary function of quantum computing?",
    "How does quantum computing compare to classical computing?"
  ],
  "confidence_score": 0.96,
  "extraction_time_ms": 38
}
```

### 2. `GET /v1/serp/search`
Full SERP payload including AI Overview, top 10 organic results, People Also Ask questions, and related searches.

### 3. `GET /v1/serp/compare`
Calculates click cannibalization risk, citation overlap, and organic traffic disruption.

### 4. `GET /v1/health`
Healthcheck and Cloudflare edge region status.

### 5. `GET /openapi.json`
Full OpenAPI 3.0.3 specification.

---

## 💻 Quickstart

### cURL
```bash
curl -X GET "https://google-ai-overview-api.topaisaas.workers.dev/v1/serp/ai-overview?q=what+is+quantum+computing" \
  -H "Accept: application/json"
```

### Python (LangChain / LlamaIndex / Agent Grounding)
```python
import requests

url = "https://google-ai-overview-api.topaisaas.workers.dev/v1/serp/ai-overview"
response = requests.get(url, params={"q": "what is quantum computing", "gl": "us", "hl": "en"})
data = response.json()

print(f"AI Overview: {data['text_content']}")
for ref in data["references"]:
    print(f"- [{ref['title']}]({ref['url']}) ({ref['domain']})")
```

---

## 🛡️ License

MIT License © 2026 TopAI SaaS Dev.
