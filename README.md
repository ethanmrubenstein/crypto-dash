# 🚀 Crypto Dash

A simple cryptocurrency dashboard built with React and Vite. It fetches live market data from the [CoinGecko API](https://www.coingecko.com/en/api) and lets you browse the top coins with live prices, 24h change, and market cap — plus controls to filter, sort, and change how many coins are shown.

## Features

- **Live market data** — pulls the top coins by market cap from CoinGecko (prices in USD).
- **Filter** — search coins by name or symbol.
- **Sort** — order by market cap, price, or 24h change (ascending or descending).
- **Limit** — show 5, 10, 20, 50, or 100 coins.
- **At-a-glance cards** — each coin shows its icon, name, symbol, current price, 24h change (color-coded green/red), and market cap.
- **Loading and error states** for a smoother experience.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- ESLint

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)

### Installation

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and set the API URL:

   ```bash
   VITE_API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
   ```

   The app appends `order`, `per_page`, `page`, and `sparkline` query parameters to this base URL at request time.

3. Start the development server:

   ```bash
   npm run dev
   ```

   Then open the URL Vite prints (typically http://localhost:5173).

## Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite development server with HMR.      |
| `npm run build`   | Build the app for production into `dist/`.       |
| `npm run preview` | Preview the production build locally.            |
| `npm run lint`    | Run ESLint across the project.                   |

## Project Structure

```
src/
├── App.jsx                  # Root component: data fetching, filtering, and sorting
├── main.jsx                 # App entry point
├── index.css                # Global styles
└── components/
    ├── CoinCard.jsx         # Displays a single coin's data
    ├── FilterInput.jsx      # Text input to filter coins
    ├── LimitSelector.jsx    # Dropdown to choose how many coins to show
    └── SortSelector.jsx     # Dropdown to choose the sort order
```

## How It Works

`App.jsx` fetches coin data from the CoinGecko markets endpoint whenever the selected limit changes. Filtering and sorting are applied on the client side, so typing in the filter or changing the sort order updates the view instantly without a new network request.
