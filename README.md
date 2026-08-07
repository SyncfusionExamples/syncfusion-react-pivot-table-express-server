<div align="center">

  <h1>Syncfusion® React Pivot Table – Express.js Server Quick Start</h1>

  <p>
    A production-ready quick start that connects the <strong>Syncfusion® React Pivot Table</strong> to an <strong>Express.js</strong> (Node.js + TypeScript) backend using the <strong>UrlAdaptor</strong> — enabling remote data binding and full CRUD operations over REST endpoints.
  </p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19%2B-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"></a>
    <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
    <a href="https://www.syncfusion.com/react-components/react-pivot-table"><img src="https://img.shields.io/badge/Syncfusion-EJ2-FF9C00?style=for-the-badge&logo=syncfusion&logoColor=white" alt="Syncfusion"></a>
    <a href="https://github.com/SyncfusionExamples/syncfusion-react-pivot-with-express-server/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"></a>
  </p>
</div>

---

## 📑 Table of Contents

- [🚀 Quick Overview](#-quick-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Prerequisites](#-prerequisites)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#-installation--setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend – Express.js Server](#2-backend--expressjs-server)
  - [3. Frontend – React Pivot Table](#3-frontend--react-pivot-table)
- [▶️ Running the Application](#-running-the-application)
- [🧪 Testing CRUD Operations](#-testing-crud-operations)
- [🔧 Troubleshooting](#-troubleshooting)
- [📖 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)
- [📚 Related Resources](#-related-resources)

---

## 🚀 Quick Overview

This project demonstrates how to bind the **Syncfusion® React Pivot Table** to a remote **Express.js** backend using the [`UrlAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor) of the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started). The UrlAdaptor provides full control over the request and response format, making it the perfect fit for any REST API — including lightweight Node.js servers built with Express.

| Component          | Technology                         | Purpose                                              |
| ------------------ | ---------------------------------- | ---------------------------------------------------- |
| 🎨 Frontend        | React 19 + Vite + Syncfusion® EJ2  | Render the interactive Pivot Table UI                |
| ⚙️ Backend         | Express.js 4.18 + TypeScript 5.3   | Serve data, perform CRUD, return JSON responses      |
| 🔌 Adaptor         | `UrlAdaptor`                       | Bridge between Pivot Table and Express REST API      |
| 📊 Sample Data     | In-memory `productDetails` list    | Simulate product sales records for the Pivot Table   |

> 💡 The UrlAdaptor is ideal when you want full server-side control over query processing, filtering, and data transformation. Because every request is a `POST`, the same endpoint and code path can handle read, insert, update, and delete operations.

---

## ✨ Key Features

- 📊 **Remote Data Binding** – Connects the Pivot Table to an Express.js REST endpoint over HTTP.
- 🔄 **Full CRUD Support** – Insert, update, and delete records directly from the Pivot Table drill-through grid.
- 🎨 **Type-Safe Backend** – Built with TypeScript for compile-time safety on controllers, routes, and data models.
- 🗂️ **Standardized Response Format** – Returns data as `{ result, count }` when `requiresCounts` is `true`, or as a plain array otherwise.
- 🔑 **Primary Key Configuration** – Uses `ProductID` as the primary key for unique record identification.
- 🌐 **CORS-Enabled** – Preconfigured with `cors` middleware to allow cross-origin requests from the Vite dev server.
- ⚡ **Drill-Through Editing** – Double-click a pivot cell to add, edit, or delete underlying records in a pop-up grid.
- 🛡️ **Robust Error Handling** – Controllers wrap logic in `try/catch` and return meaningful HTTP status codes (422, 404, 500).
- 📦 **Ready-to-Run** – Clone, install, and start both projects — no database setup required (in-memory sample data).

---

## 🛠️ Prerequisites

Make sure the following software and packages are installed on your machine before running the project.

| Software / Package            | Version       | Purpose                                       |
| ----------------------------- | ------------- | --------------------------------------------- |
| 🟢 Node.js                    | 20.x LTS or later | Runtime for the Express.js server and React dev server |
| 📦 npm / yarn / pnpm          | Latest stable | Package manager                              |
| ⚛️ React                      | 19.x or later | Build the Pivot Table client                  |
| 🟣 TypeScript                 | 5.3 or later  | Type-safe backend development                 |
| 🚂 Express                    | ^4.18.2       | Framework for building the REST API           |
| 🔓 cors                       | ^2.8.5        | Enables CORS between the React client and Express |
| ⚡ Vite                       | 8.1 or later  | React dev server and build tool               |
| 📦 @syncfusion/ej2-react-pivotview | 33.1.45+ | React Pivot Table component                   |
| 📦 @syncfusion/ej2-data       | 33.1.45+      | `DataManager` and `UrlAdaptor`                |

---

## 📂 Project Structure

```
syncfusion-react-pivot-with-express-server/
├── 📁 Client/                                # React frontend (Pivot Table) — Vite + TypeScript
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── App.css                           # Component styles
│   │   ├── App.tsx                           # Pivot Table with UrlAdaptor + CRUD configuration
│   │   ├── index.css
│   │   ├── main.tsx                          # React entry point
│   │   └── 📁 assets/
│   ├── index.html
│   ├── package.json                          # React dependencies & scripts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
├── 📁 ExpressServer/                         # Express.js backend (Node.js + TypeScript)
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   │   └── products.controller.ts        # CRUD handlers: get, create, update, delete
│   │   ├── 📁 routes/
│   │   │   └── products.routes.ts            # POST routes for /, /create, /update, /remove
│   │   ├── 📁 types/
│   │   │   └── interface.ts                  # ProductDetails & DataManagerRequest interfaces
│   │   └── 📁 utils/
│   │       └── data.ts                       # In-memory sample product data
│   ├── package.json                          # Express dependencies & scripts
│   ├── server.ts                             # Express app: CORS, JSON parsing, route mounting
│   └── tsconfig.json
│
├── 📄 README.md                              # You are here
 README reference
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SyncfusionExamples/syncfusion-react-pivot-with-express-server.git
cd syncfusion-react-pivot-with-express-server
```

### 2. Backend – Express.js Server

The backend project lives in the `ExpressServer/` folder.

#### 2.1 Install npm dependencies

```bash
cd ExpressServer
npm install
```

#### 2.2 Verify the dependencies

The `package.json` should include the following key packages:

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/node": "^20.10.6",
    "typescript": "^5.3.3",
    "ts-node": "^10.9.2"
  }
}
```

**Package descriptions:**

- **express** – Creates the Express.js server and handles REST API routes.
- **cors** – Allows cross-origin requests from the React client to the Express server.
- **typescript** – Adds TypeScript support to the backend.
- **ts-node** – Runs TypeScript files directly without a separate build step.
- **@types/express**, **@types/cors**, **@types/node** – Provide TypeScript type definitions.

**Available scripts:**

- `npm run dev` – Starts the Express server in development mode using `ts-node`.
- `npm run build` – Compiles TypeScript files into the `dist/` folder.
- `npm start` – Runs the compiled server (`node dist/server.js`).

#### 2.3 Inspect the configuration

`server.ts` already configures:

- ✅ **CORS** with `origin: '*'` for development (restrict this in production).
- ✅ **JSON body parsing** for request payloads from the DataManager.
- ✅ **URL-encoded body parsing** as a fallback.
- ✅ **Route mounting** at `/api/products`.

```typescript
// filepath: ExpressServer/server.ts
import express, { Application } from 'express';
import cors from 'cors';
import productsRoutes from './src/routes/products.routes';

const app: Application = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Enable CORS for all origins (configure as needed for production)
// The methods list reflects that the Syncfusion DataManager uses POST
// for all read and CRUD operations when paired with UrlAdaptor.
app.use(cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Mount product routes
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Products endpoint: http://localhost:${PORT}/api/products`);
});

export default app;
```

> 🔒 **Production CORS:** Replace `origin: '*'` with the actual frontend domain, for example `origin: 'https://yourdomain.com'`.

#### 2.4 Understand the data model

`src/types/interface.ts` defines the TypeScript contracts used throughout the backend:

```typescript
// filepath: ExpressServer/src/types/interface.ts
export interface ProductDetails {
  ProductID?: number;
  ProductName?: string;
  Category?: string;
  MRP?: number;
  Discount?: number;
}

export interface DataManagerRequest {
  skip?: number;
  take?: number;
  requiresCounts?: boolean;
}
```

`src/utils/data.ts` exports an in-memory `productDetails` array used by the controllers.

#### 2.5 Review the controllers

`src/controllers/products.controller.ts` exposes four handlers: `getProducts`, `createProduct`, `updateProduct`, and `deleteProduct`. Each handler:

- Wraps the logic in a `try/catch` block.
- Returns appropriate HTTP status codes (`200`, `201`, `404`, `422`, `500`).
- Reads the payload from `req.body.value || req.body` so it works with both the UrlAdaptor's wrapped payload and direct POSTs.

#### 2.6 Review the routes

`src/routes/products.routes.ts` mounts the controllers as `POST` endpoints:

```typescript
// filepath: ExpressServer/src/routes/products.routes.ts
import { Router } from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller';

const router = Router();

router.post('/', (req, res) => {
    return getProducts(req, res);
});
router.post('/create', (req, res) => { return createProduct(req, res); });
router.post('/update', (req, res) => { return updateProduct(req, res); });
router.post('/remove', (req, res) => { return deleteProduct(req, res); });

export default router;
```

### 3. Frontend – React Pivot Table

The React client lives in the `Client/` folder.

#### 3.1 Install npm dependencies

```bash
cd ../Client
npm install
```

#### 3.2 Install the Syncfusion Pivot Table package

```bash
npm install @syncfusion/ej2-react-pivotview @syncfusion/ej2-data
```

#### 3.3 Verify the API URL

Open `src/App.tsx` and ensure the `url` in the `DataManager` points to your backend port (default in this repo: `5000`).

```tsx
// filepath: Client/src/App.tsx
import * as React from 'react';
import { PivotViewComponent, CellEditSettings, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import type { BeginDrillThroughEventArgs } from '@syncfusion/ej2-pivotview';
import './App.css';

function App(): React.ReactElement {
    // Configure DataManager with UrlAdaptor.
    const API_BASE_URL = 'http://localhost:5000/api/products';
    const data: DataManager = new DataManager({
        url: API_BASE_URL,
        insertUrl: API_BASE_URL + '/create',
        updateUrl: API_BASE_URL + '/update',
        removeUrl: API_BASE_URL + '/remove',
        adaptor: new UrlAdaptor()
    });

    const dataSourceSettings: DataSourceSettingsModel = {
        dataSource: data,
        expandAll: true,
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Category' }],
        values: [{ name: 'MRP' }],
        filters: [],
    };

    // Enable editing functionality
    const editSettings: CellEditSettings = {
        allowEditing: true,    // Enables the Edit button and allows users to modify existing records.
        allowAdding: true,     // Enables the Add button and allows users to create new records.
        allowDeleting: true,   // Enables the Delete button and allows users to remove records.
        mode: 'Normal'         // Uses Normal mode (popup dialog) for editing; other options: 'Dialog', 'Batch', 'CommandColumn'.
    };

    const pivotObj = React.useRef<PivotViewComponent>(null);

    // Configure beginDrillThrough event to set the primary key for CRUD operations
    function beginDrillThrough(args: BeginDrillThroughEventArgs) {
        // Iterate through all columns in the drill-through grid
        for (var i = 0; i < args.gridObj.columns.length; i++) {
            // Check if the current column is the primary key column
            if (args.gridObj.columns[i].field === "ProductID") {
                // Mark this column as the primary key
                // This tells DataManager to use this column's value to uniquely identify records
                args.gridObj.columns[i].isPrimaryKey = true;
            }
        }
    }

    return (
        <div className='control-section' style={{ margin: 100 }}>
            <PivotViewComponent
                ref={pivotObj}
                id='PivotView'
                height={350}
                width={700}
                dataSourceSettings={dataSourceSettings}
                showFieldList={true}
                editSettings={editSettings}
                beginDrillThrough={beginDrillThrough}
            >
                <Inject services={[FieldList]} />
            </PivotViewComponent>
        </div>
    );
}

export default App;
```

> 📝 If your Express server runs on a different port, update `API_BASE_URL` accordingly. The same value is also used for `insertUrl`, `updateUrl`, and `removeUrl`.

---

## ▶️ Running the Application

You need **two terminals** — one for the backend API and one for the React client.

### ▶️ Start the Backend (Terminal 1)

```bash
cd ExpressServer
npm run dev
```

The server will start and listen on **http://localhost:5000** by default.

**Verify it works:**

- 🌐 Open `http://localhost:5000/api/products` in your browser or use a tool like Postman/curl.
- ✅ You should see a JSON response containing the product records (array, or `{ result, count }` if `requiresCounts` is `true`).

**Sample request via curl:**

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"requiresCounts": true, "skip": 0, "take": 10}'
```

**Sample response:**

```json
{
  "result": [
    { "ProductID": 10001, "ProductName": "Smartwatch", "Category": "Electronics", "MRP": 100.0, "Discount": 1.02 },
    { "ProductID": 10002, "ProductName": "USB Book Light", "Category": "Accessories", "MRP": 100.0, "Discount": 0.20 }
  ],
  "count": 25
}
```

> 📝 Note the port number in the terminal output and update `API_BASE_URL` in `Client/src/App.tsx` if it is different from `5000`.

### ▶️ Start the Frontend (Terminal 2)

```bash
cd Client
npm run dev
```

The Vite dev server will start and display a URL (typically `http://localhost:5173`).

### ✅ Verify in the Browser

1. Open the URL printed by Vite in your browser.
2. You should see the Pivot Table populated with aggregated **MRP** values, grouped by **ProductID** (rows) and **Category** (columns).
3. Open the browser's **Developer Tools** (F12) → **Network** tab.
4. Reload the page.
5. You should see a `POST` request to `http://localhost:5000/api/products` with status `200` and a JSON response containing the product records.
6. The Pivot Table renders the aggregated data automatically.

---

## 🧪 Testing CRUD Operations

The Pivot Table supports full CRUD through its built-in **drill-through editing** grid.

| Step | Action                                                                                                  | Expected Network Request                                |
| ---- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 1️⃣  | **Double-click** any pivot cell to open the drill-through grid showing underlying source records.       | Initial `POST /api/products`                            |
| ➕ 2️⃣ | Click **Add**, fill in the new row fields, then click **Update**.                                       | `POST http://localhost:5000/api/products/create`        |
| ✏️ 3️⃣ | Click **Edit** on an existing row, change a field, then click **Update**.                                | `POST http://localhost:5000/api/products/update`        |
| 🗑️ 4️⃣ | Click **Delete** on a row to remove it.                                                                  | `POST http://localhost:5000/api/products/remove`        |
| 🔁 5️⃣ | The Pivot Table automatically refreshes to display the updated aggregated data from the backend.        | New `POST /api/products`                                |

> 🔑 The `ProductID` column is automatically marked as the primary key inside the `beginDrillThrough` event, so update and delete operations know which record to target.

---

## 🔧 Troubleshooting

| ❓ Issue                                | 🔍 Symptom                                                                                                       | ✅ Resolution                                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 🚫 Empty Pivot Table                    | Pivot loads with no errors but no rows or values appear.                                                          | Ensure the API returns an array (or `{ result, count }`) and that field names match the `dataSourceSettings` (case-sensitive). |
| 404 Not Found                           | Network tab shows a 404 response when the Pivot Table loads.                                                     | Confirm the backend is running, the route prefix in `server.ts` is `/api/products`, and the `url` in `App.tsx` matches.       |
| 💥 500 Internal Server Error            | The Pivot Table fails and the browser shows a server error.                                                      | Check the terminal output for stack traces. Common causes: a missing `productDetails` import or a malformed request body.      |
| 🌐 CORS Blocked                         | Console shows `Access to XMLHttpRequest ... has been blocked by CORS policy`.                                    | Verify the `cors` middleware is registered in `server.ts` and that `origin` is set to a value that allows your dev server.    |
| 💾 CRUD operations not saving           | The edit dialog closes but changes are not reflected in the data.                                                | Confirm the primary key is set in `beginDrillThrough` and that the CRUD routes (`/create`, `/update`, `/remove`) are mounted. |
| 🔤 Property casing mismatch             | Pivot appears empty or shows "field not found" even though the API returns data.                                 | Ensure field names in the API response match the Pivot Table's `dataSourceSettings` (e.g., `ProductID`, `ProductName`).         |
| 🐢 Pivot Table loads slowly             | Rendering is sluggish or the browser hangs.                                                                      | Make sure `requiresCounts` is honored so the `count` field is returned and paging/virtual scrolling can be enabled.            |
| 🔌 Wrong port                           | The frontend cannot reach the backend.                                                                           | Confirm `API_BASE_URL` in `Client/src/App.tsx` matches the port the Express server is listening on (default `5000`).           |
| 🛠️ TypeScript compile errors           | `npm run dev` fails with TypeScript errors.                                                                       | Run `npm install` to ensure `@types/express`, `@types/cors`, and `@types/node` are installed, then retry.                     |
| 🔁 Changes Not Reflected in Pivot Table | A CRUD operation completes successfully, but the Pivot Table still shows the old data.                           | Programmatically refresh the Pivot Table by calling `pivotObj.current?.refresh();` after each operation if needed.             |

---

## 📖 API Reference

The backend exposes the following endpoints through `productsRoutes`. **All endpoints accept `POST` requests** because the Syncfusion DataManager with `UrlAdaptor` issues `POST` for read and CRUD operations.

| Method | Route                          | Purpose                                       | Request Body                          | Response                                  |
| ------ | ------------------------------ | --------------------------------------------- | ------------------------------------- | ----------------------------------------- |
| `POST` | `/api/products`                | Retrieve product records (read)               | `{ skip?, take?, requiresCounts? }`    | Array of products, or `{ result, count }` |
| `POST` | `/api/products/create`         | Insert a new product                          | `ProductDetails` JSON (or `{ value }`) | `201 Created` with the new product        |
| `POST` | `/api/products/update`         | Update an existing product (matched by `ProductID`) | `ProductDetails` JSON (or `{ value }`) | `200 OK` with the updated product         |
| `POST` | `/api/products/remove`         | Delete a product by primary key               | `{ key: ProductID }`                  | `200 OK` with confirmation message        |

The `ProductDetails` model exposes the following fields:

| Field         | Type      | Description                                |
| ------------- | --------- | ------------------------------------------ |
| `ProductID`   | `number?` | Unique product identifier (primary key)    |
| `ProductName` | `string?` | Name of the product                        |
| `Category`    | `string?` | Category to which the product belongs      |
| `MRP`         | `number?` | Maximum Retail Price of the product        |
| `Discount`    | `number?` | Discount value applied to the product      |

---

## 🤝 Contributing

Contributions are welcome and appreciated! 💖

1. 🍴 **Fork** the repository.
2. 🌿 **Create** a feature branch: `git checkout -b feature/my-awesome-change`
3. 💾 **Commit** your changes: `git commit -m "Add my awesome change"`
4. 📤 **Push** to your branch: `git push origin feature/my-awesome-change`
5. 🔁 **Open** a Pull Request describing the change and its motivation.

### 📋 Contribution Guidelines

- Follow the existing code style in both the React and Express.js projects.
- Keep changes focused — one feature or fix per pull request.
- Update or add documentation (`README.md`, `express-js-server.md`) when behavior changes.
- Test your changes locally against both the backend and frontend before submitting.

---

## 📜 License & Support

### 📄 License

This project is released under the **MIT License**. You are free to use, modify, and distribute the code in personal and commercial projects. See the `LICENSE` file for full text.

### 🛟 Support

- 📘 **Documentation:** [Syncfusion® React Pivot Table Docs](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)
- 💬 **Community forum:** [Syncfusion® Community](https://www.syncfusion.com/forums)
- 🐛 **Bug reports & feature requests:** [GitHub Issues](https://github.com/SyncfusionExamples/syncfusion-react-pivot-with-express-server/issues)
- 📧 **Direct support:** [Syncfusion® Support Portal](https://www.syncfusion.com/support) (for licensed users)
- 📖 **UrlAdaptor Guide:** [UrlAdaptor Documentation](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor)
- 🚂 **Express.js Reference:** [Express.js Documentation](https://expressjs.com/)

> ⭐ If this project helped you, please consider giving it a **star** on GitHub — it helps others discover it!

---

## 📚 Related Resources

- 🔗 [WebApiAdaptor with Pivot Table](https://github.com/SyncfusionExamples/webapi-adaptor-with-pivot-table) — Companion sample using `WebApiAdaptor` with an ASP.NET Core Web API.
- 📘 [PivotTable Data Binding](https://ej2.syncfusion.com/react/documentation/pivotview/data-binding)
- 📘 [DataManager Getting Started](https://ej2.syncfusion.com/react/documentation/data/getting-started)
- 📘 [UrlAdaptor Reference](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor)
- 📘 [PivotTable Editing](https://ej2.syncfusion.com/react/documentation/pivotview/editing)
- 📘 [PivotTable Drill-Through](https://ej2.syncfusion.com/react/documentation/pivotview/drill-through)
- 🚂 [Express.js Routing Guide](https://expressjs.com/en/guide/routing.html)
- 🚂 [Express CORS Middleware](https://expressjs.com/en/resources/middleware/cors.html)

---

<div align="center">
  <sub>Built with ❤️ using <a href="https://react.dev/">React</a>, <a href="https://expressjs.com/">Express.js</a>, and <a href="https://www.typescriptlang.org/">TypeScript</a> by the <a href="https://www.syncfusion.com/">Syncfusion®</a> team.</sub>
</div>
