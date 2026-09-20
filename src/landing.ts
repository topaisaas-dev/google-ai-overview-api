/**
 * Interactive Landing Page & Live Testing Workbench for Project 17
 * Google AI Overview & SGE SERP Extractor API
 */

export function renderInteractiveLanding(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Google AI Overview & SGE SERP Extractor API | TopAI SaaS</title>
  <meta name="description" content="Ultra-fast Google AI Overview & SGE SERP Extractor API. Generative summaries, cited source cards, follow-up queries, organic ranking & cannibalization audit on Cloudflare Edge.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #FFD600;
      --primary-hover: #E5C000;
      --bg: #090D16;
      --card-bg: #111827;
      --card-border: #1F2937;
      --text: #F3F4F6;
      --text-muted: #9CA3AF;
      --success: #10B981;
      --warning: #F59E0B;
      --error: #EF4444;
      --info: #38BDF8;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      border-bottom: 1px solid var(--card-border);
      padding: 1.25rem 2rem;
      background: rgba(17, 24, 39, 0.85);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 50;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      text-decoration: none;
      color: var(--text);
    }
    .brand-icon {
      width: 44px;
      height: 44px;
      background: var(--primary);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 14px rgba(255, 214, 0, 0.28);
    }
    .brand-icon svg {
      width: 26px;
      height: 26px;
      fill: #000;
    }
    .brand-text h1 {
      font-size: 1.15rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .brand-text span {
      font-size: 0.75rem;
      color: var(--primary);
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .header-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .header-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      transition: color 0.15s ease;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .header-link:hover {
      color: var(--primary);
    }
    .header-cta {
      background: var(--primary);
      color: #000;
      padding: 0.5rem 1.1rem;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.875rem;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .header-cta:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2.5rem 1.5rem;
      flex: 1;
      width: 100%;
    }
    .hero {
      text-align: center;
      margin-bottom: 3rem;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(255, 214, 0, 0.12);
      border: 1px solid rgba(255, 214, 0, 0.3);
      color: var(--primary);
      padding: 0.35rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      margin-bottom: 1.25rem;
    }
    .hero h2 {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: -0.03em;
      margin-bottom: 1rem;
    }
    .hero p {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 750px;
      margin: 0 auto 1.5rem auto;
    }
    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }
    .stat-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .stat-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 10px var(--success);
    }
    .tabs-nav {
      display: flex;
      gap: 0.5rem;
      background: var(--card-bg);
      padding: 0.4rem;
      border-radius: 12px;
      border: 1px solid var(--card-border);
      margin-bottom: 1.5rem;
      overflow-x: auto;
    }
    .tab-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 0.65rem 1.25rem;
      border-radius: 8px;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .tab-btn:hover {
      color: var(--text);
      background: rgba(255, 255, 255, 0.05);
    }
    .tab-btn.active {
      background: var(--primary);
      color: #000;
    }
    .workbench-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr auto auto auto;
      gap: 1rem;
      align-items: flex-end;
      margin-bottom: 1.5rem;
    }
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .input-group label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .input-field, select {
      background: #0D1322;
      border: 1px solid var(--card-border);
      border-radius: 8px;
      color: var(--text);
      font-family: inherit;
      font-size: 0.95rem;
      padding: 0.75rem 1rem;
      outline: none;
      transition: border-color 0.15s ease;
    }
    .input-field:focus, select:focus {
      border-color: var(--primary);
    }
    .btn-run {
      background: var(--primary);
      color: #000;
      border: none;
      border-radius: 8px;
      font-weight: 800;
      font-size: 0.95rem;
      padding: 0.75rem 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.15s ease;
      height: 46px;
    }
    .btn-run:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
    .quick-queries {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }
    .quick-label {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 700;
      text-transform: uppercase;
    }
    .quick-chip {
      background: #1A2234;
      border: 1px solid var(--card-border);
      color: var(--text-muted);
      font-size: 0.8rem;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .quick-chip:hover {
      color: var(--primary);
      border-color: var(--primary);
    }
    .output-section {
      margin-top: 1.5rem;
    }
    .output-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--card-border);
      margin-bottom: 1rem;
    }
    .output-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .output-status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      background: rgba(16, 185, 129, 0.15);
      color: var(--success);
      font-weight: 600;
    }
    .preview-card {
      background: #0D1322;
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1rem;
    }
    .sge-header {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1rem;
      color: var(--primary);
      font-weight: 800;
      font-size: 1.1rem;
    }
    .sge-body {
      font-size: 0.95rem;
      color: #D1D5DB;
      line-height: 1.7;
      margin-bottom: 1.25rem;
      white-space: pre-line;
    }
    .references-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 0.85rem;
      margin-top: 1rem;
    }
    .ref-card {
      background: #141D30;
      border: 1px solid var(--card-border);
      border-radius: 8px;
      padding: 0.85rem 1rem;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: var(--text);
      transition: all 0.15s ease;
    }
    .ref-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }
    .ref-site {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-bottom: 0.35rem;
    }
    .ref-site img {
      width: 16px;
      height: 16px;
      border-radius: 2px;
    }
    .ref-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: #93C5FD;
      line-height: 1.3;
    }
    .followups-box {
      margin-top: 1.25rem;
      padding-top: 1rem;
      border-top: 1px solid var(--card-border);
    }
    .followups-title {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .followup-item {
      font-size: 0.85rem;
      color: #E5E7EB;
      padding: 0.35rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .followup-item svg {
      width: 14px;
      height: 14px;
      fill: var(--primary);
    }
    .json-box {
      background: #06090F;
      border: 1px solid var(--card-border);
      border-radius: 8px;
      padding: 1.25rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.825rem;
      color: #A7F3D0;
      overflow-x: auto;
      max-height: 420px;
      white-space: pre-wrap;
    }
    .copy-bar {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0.5rem;
    }
    .btn-copy {
      background: #1F2937;
      color: var(--text);
      border: 1px solid var(--card-border);
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.15s ease;
    }
    .btn-copy:hover {
      background: #374151;
      color: var(--primary);
    }
    .risk-badge {
      display: inline-block;
      padding: 0.35rem 0.8rem;
      border-radius: 6px;
      font-weight: 800;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
    }
    .risk-critical { background: rgba(239, 68, 68, 0.2); color: #F87171; border: 1px solid #EF4444; }
    .risk-high { background: rgba(245, 158, 11, 0.2); color: #FBBF24; border: 1px solid #F59E0B; }
    .risk-moderate { background: rgba(56, 189, 248, 0.2); color: #38BDF8; border: 1px solid #38BDF8; }
    .risk-low { background: rgba(16, 185, 129, 0.2); color: #34D399; border: 1px solid #10B981; }

    footer {
      border-top: 1px solid var(--card-border);
      padding: 2rem;
      background: #06090F;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    footer a {
      color: var(--primary);
      text-decoration: none;
    }
  </style>
</head>
<body>
  <header>
    <a href="/" class="brand">
      <div class="brand-icon">
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" stroke="#000" stroke-width="2.5" fill="none"/>
          <path d="M16 16l4.5 4.5" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
          <polygon points="11,7.5 12,10 14.5,11 12,12 11,14.5 10,12 7.5,11 10,10" fill="#000"/>
        </svg>
      </div>
      <div class="brand-text">
        <h1>Google AI Overview API</h1>
        <span>SGE SERP Extractor</span>
      </div>
    </a>
    <div class="header-links">
      <a href="/openapi.json" class="header-link" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        OpenAPI Spec
      </a>
      <a href="https://github.com/topaisaas-dev/google-ai-overview-api" class="header-link" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="https://rapidapi.com/topaisaasdev/api/google-ai-overview-serp-extractor-api/pricing" class="header-cta" target="_blank">
        RapidAPI Plans
      </a>
    </div>
  </header>

  <div class="container">
    <div class="hero">
      <div class="badge">⚡ SUB-50MS EDGE SERP PARSER & CITATION RADAR</div>
      <h2>Google AI Overview & SGE Extractor API</h2>
      <p>Programmatically capture generative AI Overviews, source citation links with favicons, follow-up queries, organic rankings, and SEO click cannibalization impact in a single deterministic sub-50ms call.</p>
      
      <div class="hero-stats">
        <div class="stat-item"><span class="stat-dot"></span> Edge SLA &lt; 50ms</div>
        <div class="stat-item"><span class="stat-dot"></span> Zero-Token Serverless</div>
        <div class="stat-item"><span class="stat-dot"></span> AI Citation Tracking</div>
        <div class="stat-item"><span class="stat-dot"></span> Cannibalization Audit</div>
      </div>
    </div>

    <!-- Interactive Tabs -->
    <div class="tabs-nav">
      <button class="tab-btn active" onclick="switchTab('ai-overview')">🤖 AI Overview Extractor</button>
      <button class="tab-btn" onclick="switchTab('full-serp')">🌐 Full SERP Search</button>
      <button class="tab-btn" onclick="switchTab('cannibalization')">⚖️ Cannibalization Audit</button>
      <button class="tab-btn" onclick="switchTab('curl-examples')">💻 cURL & SDK Code</button>
    </div>

    <!-- TAB 1: AI OVERVIEW EXTRACTOR -->
    <div id="tab-ai-overview" class="workbench-card">
      <div class="form-row">
        <div class="input-group">
          <label>Search Query</label>
          <input type="text" id="query-input" class="input-field" value="what is quantum computing" placeholder="Enter any search query...">
        </div>
        <div class="input-group">
          <label>Country (GL)</label>
          <select id="country-select">
            <option value="us" selected>US (United States)</option>
            <option value="gb">GB (United Kingdom)</option>
            <option value="fr">FR (France)</option>
            <option value="de">DE (Germany)</option>
            <option value="ca">CA (Canada)</option>
            <option value="au">AU (Australia)</option>
          </select>
        </div>
        <div class="input-group">
          <label>Language (HL)</label>
          <select id="lang-select">
            <option value="en" selected>en (English)</option>
            <option value="fr">fr (French)</option>
            <option value="de">de (German)</option>
            <option value="es">es (Spanish)</option>
          </select>
        </div>
        <button class="btn-run" onclick="runAiOverview()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Extract Overview
        </button>
      </div>

      <div class="quick-queries">
        <span class="quick-label">Try Examples:</span>
        <span class="quick-chip" onclick="setQuery('what is quantum computing')">what is quantum computing</span>
        <span class="quick-chip" onclick="setQuery('best crm for startups 2026')">best crm for startups 2026</span>
        <span class="quick-chip" onclick="setQuery('benefits of rust programming language')">benefits of rust</span>
        <span class="quick-chip" onclick="setQuery('semaglutide patent expiration date')">semaglutide patent expiration</span>
      </div>

      <div id="overview-output" class="output-section" style="display: none;">
        <div class="output-header">
          <div class="output-title">
            <span>Result:</span>
            <span id="res-query" style="color: var(--primary);"></span>
          </div>
          <div id="res-latency" class="output-status">Latency: 38ms</div>
        </div>

        <div class="preview-card">
          <div class="sge-header">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
            </svg>
            <span>Google Generative AI Overview</span>
          </div>
          <div id="res-summary" class="sge-body"></div>

          <div class="output-title" style="margin-bottom: 0.5rem;">Cited Source Web Cards:</div>
          <div id="res-references" class="references-grid"></div>

          <div class="followups-box">
            <div class="followups-title">Suggested Follow-Up Queries & PAA:</div>
            <div id="res-followups"></div>
          </div>
        </div>

        <div class="copy-bar">
          <button class="btn-copy" onclick="copyJson('raw-json-output')">Copy Raw JSON</button>
        </div>
        <div id="raw-json-output" class="json-box"></div>
      </div>
    </div>

    <!-- TAB 2: FULL SERP -->
    <div id="tab-full-serp" class="workbench-card" style="display: none;">
      <div class="form-row">
        <div class="input-group">
          <label>Full Search Query</label>
          <input type="text" id="full-query-input" class="input-field" value="benefits of rust programming" placeholder="Search anything...">
        </div>
        <div class="input-group">
          <label>Organic Count</label>
          <select id="full-num-select">
            <option value="5">Top 5</option>
            <option value="10" selected>Top 10</option>
            <option value="20">Top 20</option>
          </select>
        </div>
        <button class="btn-run" onclick="runFullSerp()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Search Full SERP
        </button>
      </div>

      <div id="full-serp-output" class="output-section" style="display: none;">
        <div class="output-header">
          <div class="output-title">Full SERP Payload:</div>
          <div id="full-latency" class="output-status">Latency: 45ms</div>
        </div>
        <div class="copy-bar">
          <button class="btn-copy" onclick="copyJson('full-json-box')">Copy Full SERP JSON</button>
        </div>
        <div id="full-json-box" class="json-box"></div>
      </div>
    </div>

    <!-- TAB 3: CANNIBALIZATION AUDIT -->
    <div id="tab-cannibalization" class="workbench-card" style="display: none;">
      <div class="form-row">
        <div class="input-group">
          <label>Audit Query for Zero-Click Cannibalization</label>
          <input type="text" id="cannibal-query-input" class="input-field" value="stripe vs adyen fees" placeholder="Keyword to audit...">
        </div>
        <button class="btn-run" onclick="runCannibalizationAudit()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" stroke="#000" stroke-width="2" fill="none"/></svg>
          Run Audit
        </button>
      </div>

      <div id="cannibal-output" class="output-section" style="display: none;">
        <div class="preview-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Organic #1 Traffic Disruption Risk:</div>
              <div id="cannibal-risk-display" style="margin-top: 0.35rem;"></div>
            </div>
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; text-align: right;">Citation Overlap:</div>
              <div id="cannibal-overlap-display" style="font-size: 1.25rem; font-weight: 800; color: var(--primary); text-align: right;"></div>
            </div>
          </div>
          <div id="cannibal-assessment" style="background: #141D30; padding: 1rem; border-radius: 8px; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;"></div>
          <div id="cannibal-json-box" class="json-box"></div>
        </div>
      </div>
    </div>

    <!-- TAB 4: CURL & SDK EXAMPLES -->
    <div id="tab-curl-examples" class="workbench-card" style="display: none;">
      <h3 style="margin-bottom: 1rem; font-size: 1.2rem;">Quickstart Integration Snippets</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--primary);">cURL — Extract AI Overview:</div>
        <div class="json-box">curl -X GET "https://google-ai-overview-api.topaisaas.workers.dev/v1/serp/ai-overview?q=what+is+quantum+computing&gl=us&hl=en" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: google-ai-overview-serp-extractor-api.p.rapidapi.com"</div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--primary);">Node.js / TypeScript — Agent Grounding:</div>
        <div class="json-box">import axios from 'axios';

const response = await axios.get('https://google-ai-overview-api.topaisaas.workers.dev/v1/serp/ai-overview', {
  params: { q: 'what is quantum computing', gl: 'us', hl: 'en' },
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'google-ai-overview-serp-extractor-api.p.rapidapi.com'
  }
});

console.log(response.data.markdown_content);
console.log('Cited References:', response.data.references);</div>
      </div>

      <div>
        <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--primary);">Python — LangChain / LlamaIndex Tool:</div>
        <div class="json-box">import requests

url = "https://google-ai-overview-api.topaisaas.workers.dev/v1/serp/ai-overview"
headers = {
    "X-RapidAPI-Key": "YOUR_KEY",
    "X-RapidAPI-Host": "google-ai-overview-serp-extractor-api.p.rapidapi.com"
}
res = requests.get(url, params={"q": "what is quantum computing"}, headers=headers)
data = res.json()
print("AI Overview:", data["text_content"])
for ref in data["references"]:
    print(f"- {ref['title']} ({ref['domain']}): {ref['url']}")</div>
      </div>
    </div>
  </div>

  <footer>
    <p>© 2026 TopAI SaaS. Built for autonomous AI agents, SEO platforms & developers worldwide. <a href="/openapi.json">OpenAPI Spec</a> • <a href="https://github.com/topaisaas-dev/google-ai-overview-api">GitHub</a> • <a href="https://rapidapi.com/topaisaasdev/api/google-ai-overview-serp-extractor-api/pricing">RapidAPI Marketplace</a></p>
  </footer>

  <script>
    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.workbench-card').forEach(c => c.style.display = 'none');
      
      const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
      if (targetBtn) targetBtn.classList.add('active');
      
      const card = document.getElementById('tab-' + tabId);
      if (card) card.style.display = 'block';
    }

    function setQuery(q) {
      document.getElementById('query-input').value = q;
      runAiOverview();
    }

    async function runAiOverview() {
      const q = document.getElementById('query-input').value.trim();
      const gl = document.getElementById('country-select').value;
      const hl = document.getElementById('lang-select').value;
      if (!q) return;

      const output = document.getElementById('overview-output');
      output.style.display = 'block';
      document.getElementById('res-query').textContent = '"' + q + '"';
      document.getElementById('res-latency').textContent = 'Fetching...';

      const t0 = performance.now();
      try {
        const res = await fetch(\`/v1/serp/ai-overview?q=\${encodeURIComponent(q)}&gl=\${gl}&hl=\${hl}\`);
        const data = await res.json();
        const latency = Math.round(performance.now() - t0);
        document.getElementById('res-latency').textContent = \`Latency: \${latency}ms\`;

        document.getElementById('res-summary').textContent = data.text_content || 'No AI Overview extracted.';

        // Render reference cards
        const refContainer = document.getElementById('res-references');
        refContainer.innerHTML = '';
        if (data.references && data.references.length > 0) {
          data.references.forEach(r => {
            const card = document.createElement('a');
            card.className = 'ref-card';
            card.href = r.url;
            card.target = '_blank';
            card.innerHTML = \`
              <div class="ref-site">
                <img src="\${r.favicon}" alt="" onerror="this.style.display='none'">
                <span>\${r.domain}</span>
              </div>
              <div class="ref-title">\${r.title}</div>
            \`;
            refContainer.appendChild(card);
          });
        }

        // Render follow-ups
        const followContainer = document.getElementById('res-followups');
        followContainer.innerHTML = '';
        if (data.follow_up_questions && data.follow_up_questions.length > 0) {
          data.follow_up_questions.forEach(f => {
            const item = document.createElement('div');
            item.className = 'followup-item';
            item.innerHTML = \`
              <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
              <span>\${f}</span>
            \`;
            followContainer.appendChild(item);
          });
        }

        document.getElementById('raw-json-output').textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        document.getElementById('res-latency').textContent = 'Error';
        document.getElementById('res-summary').textContent = 'Failed to fetch AI Overview: ' + err.message;
      }
    }

    async function runFullSerp() {
      const q = document.getElementById('full-query-input').value.trim();
      const num = document.getElementById('full-num-select').value;
      if (!q) return;

      const output = document.getElementById('full-serp-output');
      output.style.display = 'block';
      document.getElementById('full-latency').textContent = 'Searching...';

      const t0 = performance.now();
      try {
        const res = await fetch(\`/v1/serp/search?q=\${encodeURIComponent(q)}&num=\${num}\`);
        const data = await res.json();
        const latency = Math.round(performance.now() - t0);
        document.getElementById('full-latency').textContent = \`Latency: \${latency}ms\`;
        document.getElementById('full-json-box').textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        document.getElementById('full-latency').textContent = 'Error';
        document.getElementById('full-json-box').textContent = 'Error: ' + err.message;
      }
    }

    async function runCannibalizationAudit() {
      const q = document.getElementById('cannibal-query-input').value.trim();
      if (!q) return;

      const output = document.getElementById('cannibal-output');
      output.style.display = 'block';

      try {
        const res = await fetch(\`/v1/serp/compare?q=\${encodeURIComponent(q)}\`);
        const data = await res.json();
        const c = data.cannibalization_analysis;

        const riskEl = document.getElementById('cannibal-risk-display');
        riskEl.className = 'risk-badge risk-' + (c.cannibalization_risk || 'moderate').toLowerCase();
        riskEl.textContent = c.cannibalization_risk + ' CANNIBALIZATION';

        document.getElementById('cannibal-overlap-display').textContent = c.citation_overlap_pct + '%';
        document.getElementById('cannibal-assessment').textContent = c.traffic_impact_assessment;
        document.getElementById('cannibal-json-box').textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        document.getElementById('cannibal-assessment').textContent = 'Audit failed: ' + err.message;
      }
    }

    function copyJson(elementId) {
      const text = document.getElementById(elementId).textContent;
      navigator.clipboard.writeText(text);
      alert('JSON copied to clipboard!');
    }

    // Auto-run default query on page load
    window.addEventListener('DOMContentLoaded', () => {
      runAiOverview();
    });
  </script>
</body>
</html>`;
}
