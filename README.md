# Summarise Frontpage Posts

A TypeScript Express server built with Bun that provides endpoints for summarising frontpage posts.

```
├── src/
│   ├── handlers/       # Request handlers for each endpoint
│   ├── routes/         # Express route definitions
│   ├── stores/         # Data access layer
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   └── index.ts        # Main application entry point
```

## Available Endpoints

- `GET /health` - Health check endpoint to verify server status
- `POST /summarise/posts` - Summarise one or multiple posts at once

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Install dependencies
bun install
```

### Running the Server

```bash
# Development mode with auto-reload
bun dev

# Production mode
bun start
```

The server will start on http://localhost:8080 by default.

### Summarising posts

Posts can be summarised one at a time or in batches. The endpoint expects a JSON
array of post ids and their URLs.

```json
// example post body to /summarise/posts
{
  "posts": [
    {
      "id": "1154",
      "url": "https://www.sustainabilitybynumbers.com/p/carbon-footprint-chatgpt"
    }
  ]
}
```
