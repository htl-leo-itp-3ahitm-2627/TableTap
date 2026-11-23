# TableTap Features

This is the list of features planned for TableTap, grouped by role.

**Priority**
- **Core**: part of the 6 core features in milestone M5 (07.05.2027)
- **Nice to have**: built after M5 if there is time left
- **Out of scope**: not planned for this school year

---

## 1. Guest (orders from their phone)

| Feature | Description | Priority |
| :--- | :--- | :---: |
| QR code ordering | Scanning the table's QR code opens the menu in the browser, with no app download | Core |
| Digital menu | Dishes with categories, prices, descriptions and images | Core |
| Shopping cart | Add or remove dishes and change quantities before ordering | Core |
| Special requests | Free-text note per dish (e.g. "no onions") | Core |
| Live order status | Status updates live: received → in preparation → ready → served | Core |
| Allergen information | Allergens per dish (EU allergen codes A–R) | Nice to have |
| Allergen and diet filter | Filter the menu by vegetarian, vegan, gluten-free and more | Nice to have |
| Search | Search for dishes by name | Nice to have |
| Call waiter | Button that notifies the service staff | Nice to have |
| Request the bill | Button that tells the waiter the table wants to pay | Nice to have |
| Reorder | Add another round of drinks with one tap | Nice to have |
| Multiple languages | Menu in German and English | Nice to have |
| Rate a dish | Star rating after the meal | Nice to have |
| Group ordering | Several guests at one table add to a shared cart | Nice to have |

## 2. Kitchen and bar

| Feature | Description | Priority |
| :--- | :--- | :---: |
| Live kitchen display | New orders appear within 3 seconds without reloading (WebSockets) | Core |
| Change order status | Mark an order as "in preparation" or "ready" with one tap | Core |
| Order timer | Shows how long an order has been waiting; turns red when it is late | Nice to have |
| Split by station | Drinks go to the bar, food goes to the kitchen | Nice to have |
| Sold-out dishes | Mark a dish as sold out so it disappears from the guest menu | Nice to have |
| Sound alert | Plays a sound when a new order comes in | Nice to have |
| Order history | List of completed orders of the day | Nice to have |

## 3. Service staff

| Feature | Description | Priority |
| :--- | :--- | :---: |
| Table plan | Overview of all tables, coloured by status: free, occupied, waiting for food, wants to pay | Core |
| Reservations | Create reservations with name, time and number of people | Core |
| "Food is ready" notification | Message to the waiter when the kitchen finishes an order | Nice to have |
| Order for a guest | The waiter takes an order on their own device for guests without a phone | Nice to have |
| Move or merge tables | Move an order to another table or combine tables | Nice to have |
| Close a table | Mark the table as paid and free again | Nice to have |

## 4. Owner and admin

| Feature | Description | Priority |
| :--- | :--- | :---: |
| Menu management | Create, edit and delete dishes, prices, categories and images | Core |
| Revenue statistics | Daily revenue, peak hours and best-sellers, live | Core |
| Staff accounts and roles | Accounts for service, kitchen and owner, each with its own permissions | Core |
| Charts | Revenue and orders per day, week and month | Nice to have |
| QR code generator | Creates a QR code per table as a printable PDF | Nice to have |
| Table management | Add, rename and remove tables | Nice to have |
| Opening hours | No orders are possible outside opening hours | Nice to have |
| CSV export | Export revenue and orders as a CSV file | Nice to have |
| Daily specials | Highlight dishes that are only offered today | Nice to have |

## 5. Payment

| Feature | Description | Priority |
| :--- | :--- | :---: |
| Online payment | Pay with Stripe or PayPal from the phone | Out of scope |
| Split the bill | Every guest pays only for their own dishes | Out of scope |
| Tips | Add a tip when paying | Out of scope |
| Receipt by e-mail | Digital receipt after payment | Out of scope |

## 6. Technical and quality

| Feature | Description | Priority |
| :--- | :--- | :---: |
| Login with roles | JWT login with role-based access to every route | Core |
| Real-time updates | WebSocket connection between guest, kitchen and service | Core |
| Responsive design | Works on phone, tablet and kitchen screen | Core |
| Input validation | All requests are checked on the server before they reach the database | Core |
| Demo restaurant | Seed data with a sample menu and tables for the presentation | Core |
| Reconnect on connection loss | Orders and live updates continue after the connection drops | Nice to have |
| Dark mode | Dark theme, mainly for the kitchen display | Nice to have |
| Automated tests | Unit and API tests that run in the CI pipeline | Nice to have |
