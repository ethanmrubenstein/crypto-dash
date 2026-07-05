# 🚀 Crypto Dash

A cryptocurrency dashboard built with React, Vite, and React Router. It fetches live market data from the [CoinGecko API](https://www.coingecko.com/en/api) and lets you browse the top coins with live prices, 24h change, and market cap — plus controls to filter, sort, and change how many coins are shown. Click any coin to open a details page with in-depth stats and a 7-day price chart.

## Features

- **Live market data** — pulls the top coins by market cap from CoinGecko (prices in USD).
- **Filter** — search coins by name or symbol.
- **Sort** — order by market cap, price, or 24h change (ascending or descending).
- **Limit** — show 5, 10, 20, 50, or 100 coins.
- **At-a-glance cards** — each coin shows its icon, name, symbol, current price, 24h change (color-coded green/red), and market cap. Cards link through to the coin's details page.
- **Coin details page** — rank, current price, market cap, 24h high/low and change, circulating/total supply, all-time high/low, and links to the project website and blockchain explorer.
- **7-day price chart** — an interactive line chart (Chart.js) of the coin's price over the last week.
- **Client-side routing** — Home, About, coin details, and a custom 404 Not Found page via React Router.
- **Loading and error states** for a smoother experience.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Chart.js](https://www.chartjs.org/) via [react-chartjs-2](https://react-chartjs-2.js.org/) (with `chartjs-adapter-date-fns`)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
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

2. Create a `.env` file in the project root and set both API URLs:

   ```bash
   VITE_API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
   VITE_COIN_API_URL="https://api.coingecko.com/api/v3/coins"
   ```

   - `VITE_API_URL` powers the home page list. The app appends `order`, `per_page`, `page`, and `sparkline` query parameters to this base URL at request time.
   - `VITE_COIN_API_URL` powers the coin details page and price chart. The app appends `/{id}` and `/{id}/market_chart` to this base URL.

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

## Routes

| Path         | Page             | Description                                             |
| ------------ | ---------------- | ------------------------------------------------------- |
| `/`          | `HomePage`       | Coin list with filter, sort, and limit controls.        |
| `/about`     | `AboutPage`      | Information about the project.                           |
| `/coin/:id`  | `CoinDetailsPage`| Detailed stats and a 7-day price chart for one coin.    |
| `*`          | `NotFoundPage`   | Custom 404 for any unmatched route.                     |

## Project Structure

```
src/
├── App.jsx                      # Root component: data fetching + route definitions
├── main.jsx                     # App entry point, wraps App in BrowserRouter
├── index.css                    # Global styles
├── components/
│   ├── CoinCard.jsx             # Displays a single coin's data (links to details)
│   ├── CoinChart.jsx            # 7-day price line chart (Chart.js)
│   ├── FilterInput.jsx          # Text input to filter coins
│   ├── Header.jsx               # Top navigation (Home / About)
│   ├── LimitSelector.jsx        # Dropdown to choose how many coins to show
│   ├── SortSelector.jsx         # Dropdown to choose the sort order
│   └── Spinner.jsx              # Loading spinner
└── pages/
    ├── HomePage.jsx             # Coin list with filter/sort/limit controls
    ├── AboutPage.jsx            # Project information
    ├── CoinDetailsPage.jsx      # Detailed stats + price chart for one coin
    └── NotFoundPage.jsx         # 404 page for invalid routes
```

## How It Works

`App.jsx` fetches the coin list from the CoinGecko markets endpoint whenever the selected limit changes, then passes the data and control state down to `HomePage`. Filtering and sorting are applied on the client side, so typing in the filter or changing the sort order updates the view instantly without a new network request.

Each `CoinCard` links to `/coin/:id`. `CoinDetailsPage` reads the `id` from the route params and fetches that coin's full data from the CoinGecko coins endpoint, while `CoinChart` separately fetches 7 days of market-chart price data and renders it as an interactive line chart.
