# MYTEL FTTH DATA — local search & management tool

Express + MongoDB (Mongoose) backend, replacing the previous Supabase version, with a
plain HTML/Tailwind/JS frontend served from the same server. Supports search plus full
create/edit/delete.

## 1. Prerequisites

- [Node.js](https://nodejs.org) 18+
- MongoDB running locally, or a connection string to Atlas / another MongoDB instance
  (install locally from https://www.mongodb.com/try/download/community, or run
  `mongod` if you already have it installed)

## 2. Setup

```bash
cd mytel-ftth
npm install
cp .env.example .env
# edit .env if your MongoDB isn't on the default local port
```

## 3. Load sample data (optional)

```bash
npm run seed
```

This clears the `customers` collection and inserts 3 sample records so you can try
search right away. Skip this once you're entering real data.

## 4. Run

```bash
npm start
```

Then open http://localhost:3000 in your browser.

Use `npm run dev` instead if you want the server to auto-restart on file changes
(requires Node 18.11+).

## Project structure

```
mytel-ftth/
├── server.js           # Express app: connects to MongoDB, serves API + frontend
├── seed.js             # Inserts sample records
├── models/
│   └── Customer.js     # Mongoose schema
├── routes/
│   └── customers.js    # /api/customers CRUD + /api/customers/search
├── public/
│   └── index.html      # Frontend: search, table, detail view, add/edit form
└── .env.example
```

## API reference

| Method | Endpoint                    | Purpose                                   |
|--------|------------------------------|--------------------------------------------|
| GET    | `/api/customers/search?q=`  | Search by account, station code, VMY code, or phone |
| GET    | `/api/customers`            | List all records                          |
| GET    | `/api/customers/:id`        | Get one record                            |
| POST   | `/api/customers`             | Create a record                           |
| PUT    | `/api/customers/:id`        | Update a record                           |
| DELETE | `/api/customers/:id`        | Delete a record                           |

## Notes on the field names

The original Supabase version had several fallback field names (`lat_long` /
`lat_lng` / `location`, `tech_name` / `technician_name`, etc.) because the source
data wasn't consistent. This version standardizes on one clean field per piece of
data (see `models/Customer.js`) — update the seed data or your import script to
match if you're migrating data from the old sheet/database.

## Next steps you may want

- Add authentication before exposing this beyond your own machine (currently anyone
  who can reach the server can view and edit all records).
- Add pagination to `GET /api/customers` if your dataset grows large.
- If you later want to host this online instead of running it locally, you'll need
  a hosted MongoDB (e.g. Atlas free tier) and a place to run the Node server
  (Render, Railway, a VPS, etc.) — the code doesn't need to change, just the
  `MONGODB_URI` and where you deploy it.
