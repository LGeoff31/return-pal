// components/Orders/OrderList.tsx
import React from 'react'
import Link from 'next/link'
import { type Order } from '@components/DashBoard/types'

interface OrderListProps {
  orders?: Order[]
}

const OrderList: React.FC<OrderListProps> = ({ orders = [] }) => {
  return (
    <div className="rounded-3xl p-4">
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            className="mb-4 flex items-center justify-between  border-b-2 border-b-gray-300 p-4"
          >
            <div className="flex items-center space-x-4 ">
              <div className="mr-2 h-11 w-11 rounded bg-gray-300"></div>
              <div className="flex flex-col space-y-2">
                <div className="text-gray-700">Order #{order.order_number}</div>
                <div className="text-sm text-gray-500">
                  Pick up Scheduled for {order.order_number}
                </div>
              </div>
            </div>
            <div className="flex-grow"></div>
            {order.status === 'Cancelled' && (
              <div className="mr-4 h-6 w-24 rounded bg-gray-500 text-center">
                Cancelled
              </div>
            )}
            <Link href={`/orders/${order._id}`} passHref>
              <button
                className={`cursor-pointer text-gray-700 underline focus:outline-none ${
                  order.status === 'Cancelled' || order.status === 'Delivered'
                    ? 'cursor-not-allowed disabled:opacity-50'
                    : ''
                }`}
                disabled={
                  order.status === 'Cancelled' || order.status === 'Delivered'
                }
              >
                Manage Order
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p>No orders available</p>
      )}
    </div>
  )
}

export default OrderList
