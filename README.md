# Personal Expense Tracker

Personal Expense Tracker is a simple React dashboard for recording and reviewing everyday income and expenses. It provides a focused overview of balance, spending, budget progress, transactions, and recent activity in one place.

## Features

- Login and sign-up screens for entering the application.
- Dashboard summary cards for total balance, income, expenses, and monthly budget.
- Add income or expense transactions with amount, category, date, and description.
- Search, filter, sort, and delete transactions.
- Spending breakdown by category with current-month and previous-month views.
- Budget insights for highest spending, recent income, and recent expenses.
- Recent activity feed.
- Profile menu with account and logout actions.
- Transaction data persisted in browser `localStorage`.
- Responsive layout with a desktop sidebar and mobile-friendly content.

## Technologies

- React 19
- React DOM
- Vite
- Tailwind CSS
- JavaScript (ES modules)
- ESLint
- Browser `localStorage`

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From the project directory:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

The login form is currently a demo flow: enter any non-empty username and password to open the dashboard.

### Other commands

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Screenshots

The following screenshots show the main application states. Store exported captures in `public/screenshots/` using these filenames so they render in the repository README.

### Login

![Expense Tracker login screen](public/screenshots/login.png)

### Dashboard

![Expense Tracker dashboard](public/screenshots/dashboard.png)

### Profile menu

![Expense Tracker profile menu](public/screenshots/profile-menu.png)

## Known Limitations

- Authentication is only a front-end demo; there is no backend, user account, or password validation.
- Transactions are stored only in the current browser's `localStorage` and are not synced between devices.
- Profile and Settings menu items are visual placeholders.
- The fixed monthly budget is currently set to Rs. 25,000 and cannot be edited in the UI.
- Charts are represented with category progress bars rather than a dedicated charting library.
- Screenshot files need to be exported into `public/screenshots/` for the gallery links above to display when the README is rendered.
