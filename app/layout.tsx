import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visionary Notes",
    "one_liner": "Transform your screencaps into actionable notes using AI.",
    "why_now": "With remote work and virtual collaboration skyrocketing, efficient data capture has never been more crucial.",
    "novel_mechanism": "Combining OCR with natural language processing to synthesize notes from screenshots into concise summaries.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Vision",
      "Agents"
    ],
    "edge_use_cases": [
      "Collaborative note-taking during online meetings",
      "Summarizing visual content for research and reference"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR capability",
        "Text summarization",
        "Basic user interface"
      ],
      "tools": [
        "React",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public dataset of annotated screenshots",
        "user-generated content"
      ],
      "risk": [
        "competitor saturation",
        "technical integration challenges"
      ],
      "mitigation": [
        "focus on unique user experience",
        "incremental feature rollout"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Show how manual note-taking is a pain compared to automated summaries"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Online forums"
      ],
      "pricing": {
        "free": "Up to 5 screenshots per month",
        "pro": "$9.99/month for unlimited access",
        "business": "$49.99/month for team features"
      }
    },
    "moat": [
      "User engagement through community feedback",
      "Data improvement with each use",
      "Integration with popular collaboration tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "It combines existing powerful AI technologies in a novel way that directly addresses the pain points of modern virtual workflows, unlike simple OCR tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}