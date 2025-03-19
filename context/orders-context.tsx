"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Order } from "@/components/admin/add-order-dialog"

// Initial mock data
const initialOrders: Order[] = [
  {
    id: "ORD-001",
    client: "John Smith",
    from: "Sarojni, Delhi",
    to: "Lajpat Nagar, Delhi",
    weight: "5.2 kg",
    status: "in-transit",
    createdAt: "2024-03-01",
    estimatedDelivery: "2024-03-05",
    trackingNumber: "TRK-12345678",
  },
  {
    id: "ORD-002",
    client: "Rahul Kumar",
    from: "Connaught Place, Delhi",
    to: "Kashmere Gate",
    weight: "3.7 kg",
    status: "delivered",
    createdAt: "2024-02-25",
    estimatedDelivery: "2024-02-28",
    trackingNumber: "TRK-23456789",
  },
  {
    id: "ORD-003",
    client: "Smith",
    from: "Haus Khas, Delhi",
    to: "Chandni Chowk",
    weight: "8.1 kg",
    status: "pending",
    createdAt: "2024-03-05",
    estimatedDelivery: "2024-03-09",
    trackingNumber: "TRK-34567890",
  },
  {
    id: "ORD-004",
    client: "Emily Davis",
    from: "Bali Nagar, Delhi",
    to: "Dwaraka, Delhi",
    weight: "2.3 kg",
    status: "in-transit",
    createdAt: "2024-03-02",
    estimatedDelivery: "2024-03-06",
    trackingNumber: "TRK-45678901",
  },
  {
    id: "ORD-005",
    client: "Robert Wilson",
    from: "India Gate, Delhi",
    to: "Kirti Nagar, Delhi",
    weight: "4.5 kg",
    status: "pending",
    createdAt: "2024-03-06",
    estimatedDelivery: "2024-03-10",
    trackingNumber: "TRK-56789012",
  },
  {
    id: "ORD-006",
    client: "Jennifer Lee",
    from: "Paschim Vihar, Delhi",
    to: "Central Secretariat, Delhi",
    weight: "6.8 kg",
    status: "delivered",
    createdAt: "2024-02-20",
    estimatedDelivery: "2024-02-24",
    trackingNumber: "TRK-67890123",
  },
  {
    id: "ORD-007",
    client: "David Martinez",
    from: "Central delhi, Delhi",
    to: "Connaught Place, Delhi",
    weight: "9.2 kg",
    status: "in-transit",
    createdAt: "2024-03-03",
    estimatedDelivery: "2024-03-07",
    trackingNumber: "TRK-78901234",
  },
  {
    id: "ORD-008",
    client: "Lisa Anderson",
    from: "Delhi Cantoment, Delhi",
    to: "Geeta Colony, Delhi",
    weight: "3.1 kg",
    status: "pending",
    createdAt: "2024-03-07",
    estimatedDelivery: "2024-03-11",
    trackingNumber: "TRK-89012345",
  },
  {
    id: "ORD-009",
    client: "James Taylor",
    from: "Geetanjali, Delhi",
    to: "Kashmere Gate, Delhi",
    weight: "7.4 kg",
    status: "delivered",
    createdAt: "2024-02-15",
    estimatedDelivery: "2024-02-19",
    trackingNumber: "TRK-90123456",
  },
  {
    id: "ORD-010",
    client: "Patricia White",
    from: "Lajpat Nagar, Delhi",
    to: "Lodhi Garden, Delhi",
    weight: "4.9 kg",
    status: "in-transit",
    createdAt: "2024-03-04",
    estimatedDelivery: "2024-03-08",
    trackingNumber: "TRK-01234567",
  },
]

// Define context type
interface OrdersContextType {
  orders: Order[]
  addOrder: (order: Order) => void
  getOrderById: (id: string) => Order | undefined
}

// Create context
const OrdersContext = createContext<OrdersContextType | undefined>(undefined)

// Provider component
export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [order, ...prevOrders])
  }

  const getOrderById = (id: string) => {
    return orders.find((order) => order.id === id)
  }

  return (
    <OrdersContext.Provider value={{ orders, addOrder, getOrderById }}>
      {children}
    </OrdersContext.Provider>
  )
}

// Custom hook to use the orders context
export function useOrders() {
  const context = useContext(OrdersContext)
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrdersProvider")
  }
  return context
} 