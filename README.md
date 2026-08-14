# Northstar Retail Co. — Support Deflection MVP

## Purpose
A GitHub-ready educational prototype for a retail customer-support portal. It demonstrates complete self-service journeys for order status, returns and refunds, stock availability, and controlled human support escalation.

## Important
All order, customer, inventory, delivery and reference information is simulated demonstration data. This project does not connect to live order-management, inventory, payment, carrier, email, or support systems.

## Core design principle
A supported customer journey should not terminate with an incomplete instruction. Each workflow provides a meaningful next action:
- Order status leads to delivery progress, returns, or delivery-problem reporting.
- Returns provide eligibility, complete written instructions, request creation, and status.
- Out-of-stock items provide alternatives and stock-notification requests.
- Human support is available for genuine exceptions or unresolved cases.

## Test records
### Orders
- `NS1001` / `714440059` — Northstar Runner, Medium — In Transit — Standard Delivery — estimated 22 August 2026.
- `NS1002` / `757092013` — Northstar Classic Tee, Large — Delivered — outside the standard 30-day demonstration return window.

### Inventory
- Northstar Runner: Small In Stock, Medium Low Stock, Large Out of Stock.
- Northstar Classic Tee: Small In Stock, Medium In Stock, Large In Stock.
- Northstar Hoodie: Small Out of Stock, Medium In Stock, Large Out of Stock.
- Northstar Classic: Small In Stock, Medium In Stock, Large In Stock.

## Project structure
```text
northstar-support-deflection-mvp/
├── index.html
├── pages/
│   ├── order-status.html
│   ├── order-tracking.html
│   ├── returns.html
│   ├── return-instructions.html
│   ├── return-status.html
│   ├── stock.html
│   ├── alternatives.html
│   ├── notification.html
│   └── human-support.html
├── css/styles.css
├── js/
│   ├── app.js
│   ├── orders.js
│   ├── returns.js
│   ├── inventory.js
│   └── support.js
├── data/demo-data.js
└── README.md
```

## GitHub Pages deployment
1. Create a public GitHub repository named `northstar-support-deflection-mvp`.
2. Upload the contents of this folder, preserving the folder structure.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**.
6. Save and wait for GitHub Pages to publish.
7. Open the generated Pages URL and test every workflow.

## Required QA
Test:
- valid and invalid order lookup
- order status and delivery progress
- standard-delivery explanation
- return eligibility
- complete return instructions
- return request and reference
- outside-return-period explanation
- defective, damaged and wrong-item pathways
- in-stock and low-stock inventory
- out-of-stock alternatives
- stock notification
- human-support request
- mobile layout
- every navigation link and button

## Student project
This is an educational prototype and is not affiliated with a real Northstar Retail Co.
