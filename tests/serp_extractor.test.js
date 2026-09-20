import test from "node:test";
import assert from "node:assert/strict";
import {
  stripHtml,
  extractDomain,
  getFaviconUrl,
  parseGoogleSerpHtml,
  synthesizeGroundedAiOverview,
  computeCannibalizationAnalysis,
  executeSerpExtraction
} from "../src/serp_engine.ts";

test("Utility: stripHtml removes tags and decodes entities", () => {
  const input = "<div class='test'>Hello &amp; welcome to <b>Google SGE</b>!<script>alert(1)</script></div>";
  const cleaned = stripHtml(input);
  assert.equal(cleaned, "Hello & welcome to Google SGE!");
});

test("Utility: extractDomain handles protocols and subdomains", () => {
  assert.equal(extractDomain("https://www.wikipedia.org/wiki/Quantum"), "wikipedia.org");
  assert.equal(extractDomain("https://developer.mozilla.org/en-US/docs/"), "developer.mozilla.org");
  assert.equal(extractDomain("http://sub.domain.co.uk/path?q=1"), "sub.domain.co.uk");
});

test("Utility: getFaviconUrl returns Google favicon URL", () => {
  const url = getFaviconUrl("wikipedia.org");
  assert.equal(url, "https://www.google.com/s2/favicons?domain=wikipedia.org&sz=64");
});

test("Grounded Synthesizer: Generates high-fidelity AI Overview structure", () => {
  const result = synthesizeGroundedAiOverview("what is quantum computing", "us", "en");

  assert.ok(result.aiOverview);
  assert.equal(result.aiOverview.has_ai_overview, true);
  assert.equal(result.aiOverview.query, "what is quantum computing");
  assert.equal(result.aiOverview.overview_type, "generative_summary");
  assert.ok(result.aiOverview.text_content.length > 50);
  assert.ok(result.aiOverview.markdown_content.includes("### 🤖 Google AI Overview"));
  assert.ok(result.aiOverview.references.length >= 3);
  assert.ok(result.aiOverview.follow_up_questions.length > 0);
  assert.ok(result.aiOverview.confidence_score >= 0.9);

  // Check references format
  const ref1 = result.aiOverview.references[0];
  assert.ok(ref1.domain);
  assert.ok(ref1.url);
  assert.ok(ref1.title);
  assert.ok(ref1.favicon);

  // Check organic results
  assert.ok(result.organicResults.length >= 5);
  assert.equal(result.organicResults[0].position, 1);
});

test("Cannibalization Analyzer: Identifies risks when leader is not cited", () => {
  const mockAiOverview = {
    query: "test query",
    country: "us",
    language: "en",
    has_ai_overview: true,
    overview_type: "generative_summary",
    text_content: "This is a detailed overview that answers the entire query directly.",
    markdown_content: "",
    references: [
      { position: 1, title: "Ref 1", url: "https://secondary.com", domain: "secondary.com", snippet: "", favicon: "" }
    ],
    follow_up_questions: [],
    confidence_score: 0.95,
    extraction_time_ms: 10,
    source: "serp_grounded_engine"
  };

  const mockOrganic = [
    { position: 1, title: "Leader", url: "https://leader.com", domain: "leader.com", snippet: "", is_cited_in_ai_overview: false },
    { position: 2, title: "Secondary", url: "https://secondary.com", domain: "secondary.com", snippet: "", is_cited_in_ai_overview: true }
  ];

  const analysis = computeCannibalizationAnalysis(mockAiOverview, mockOrganic);
  assert.equal(analysis.ai_overview_present, true);
  assert.equal(analysis.is_organic_leader_cited, false);
  assert.equal(analysis.cannibalization_risk, "CRITICAL");
  assert.ok(analysis.traffic_impact_assessment.includes("CRITICAL RISK"));
});

test("Cannibalization Analyzer: Handles absence of AI Overview", () => {
  const analysis = computeCannibalizationAnalysis(null, [
    { position: 1, title: "Leader", url: "https://leader.com", domain: "leader.com", snippet: "", is_cited_in_ai_overview: false }
  ]);

  assert.equal(analysis.ai_overview_present, false);
  assert.equal(analysis.cannibalization_risk, "LOW");
  assert.equal(analysis.citation_overlap_pct, 0);
});

test("End-to-End Orchestrator: executeSerpExtraction completes successfully", async () => {
  const serp = await executeSerpExtraction("benefits of rust programming", "us", "en", 10);

  assert.ok(serp);
  assert.equal(serp.query, "benefits of rust programming");
  assert.ok(serp.ai_overview);
  assert.ok(serp.organic_results.length > 0);
  assert.ok(serp.people_also_ask.length > 0);
  assert.ok(serp.related_searches.length > 0);
  assert.ok(serp.cannibalization_analysis);
  assert.ok(serp.extraction_time_ms >= 0);
});
