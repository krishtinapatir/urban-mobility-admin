# LogiTrack - Logistics Management Platform

LogiTrack is a modern, full-featured logistics management platform designed for warehouses and logistics centers. It provides comprehensive tools for tracking parcels, managing vehicles, and handling orders efficiently.

## Features

### 🚚 Vehicle Management
- Complete fleet management with detailed vehicle information
- Real-time vehicle status tracking (active, maintenance, inactive)
- Maintenance scheduling and history
- Driver assignment and management
- Fleet health monitoring

### 📦 Order Management
- Create and track orders with unique tracking numbers
- Real-time order status updates (pending, in-transit, delivered)
- Detailed order information including weight, client, and locations
- Search and filter orders by various parameters

### 🗺️ Parcel Tracking
- Real-time parcel location tracking on interactive maps
- Detailed tracking history with timestamps and status updates
- Estimated delivery dates and notifications
- Customer-facing tracking portal

### 📊 Analytics
- Fleet performance metrics
- Delivery efficiency statistics
- Order volume and trends
- Maintenance scheduling optimization

### 💰 Payments
- Order payment processing
- Invoice generation and management
- Payment history and reporting

### 🌿 Eco Tokens
- Carbon offset tracking
- Eco-friendly delivery options
- Sustainability metrics and reporting

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **UI Components**: Shadcn UI, Tailwind CSS
- **Maps**: Leaflet
- **State Management**: React Context API
- **Routing**: Next.js App Router

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### How to live this website

cd .. 

cd ADMIN

File – ADMIN 

npm run dev 

cd server 

npm run dev / server.js 


## Project Structure

```
LogiTrack/
├── app/                    # Next.js app directory
│   ├── admin/              # Admin dashboard pages
│   │   ├── orders/         # Order management
│   │   ├── vehicles/       # Vehicle management
│   │   └── ...
│   ├── client/             # Client dashboard pages
│   ├── login/              # Authentication pages
│   ├── signup/             # User registration
│   └── tracking/           # Public tracking pages
├── components/             # Reusable React components
│   ├── admin/              # Admin-specific components
│   ├── client/             # Client-specific components
│   ├── ui/                 # UI components (buttons, cards, etc.)
│   └── ...
├── context/                # React Context providers
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Usage

### Admin Dashboard

The admin dashboard provides comprehensive tools for managing the logistics operations:

1. **Dashboard**: Overview of key metrics and recent activities
2. **Orders**: Create, view, and manage orders
3. **Vehicles**: Track and manage your fleet
4. **Map**: Real-time view of all vehicles and parcels
5. **Analytics**: Performance metrics and reports
6. **Settings**: System configuration

### Client Portal

Clients can use their portal to:

1. **Book Parcels**: Create new shipping orders
2. **Track Orders**: View the status and location of their parcels
3. **Manage Payments**: View and process payments
4. **Carbon Offset**: Track and purchase carbon offsets

### Parcel Tracking

The public tracking page allows anyone with a tracking number to:

1. View the current status and location of a parcel
2. See the estimated delivery date
3. View the complete tracking history

## Contributing

We welcome contributions to LogiTrack! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Deploy Link: https://urban-mobility-admin.vercel.app/

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Leaflet](https://leafletjs.com/)
- [Lucide Icons](https://lucide.dev/) 
