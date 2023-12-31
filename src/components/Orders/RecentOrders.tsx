import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { type Order } from '@components/DashBoard/types'
import { Button } from '@/components/ui/button'
import ConfirmationDialog from '@components/Orders/ConfirmationDialog'
import { useRouter } from 'next/router'

const RecentOrders = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/orders')
      .then((response) => response.json())
      .then((data: Order[]) => {
        setOrders(data)
      })
      .catch((error) => console.error('Error fetching orders', error))
  }, [])

  const handleCancelOrder = (_id: string, order_number: string) => {
    setSelectedOrder({ _id, order_number } as Order)
  }

  const confirmCancellation = () => {
    if (selectedOrder) {
      console.log(
        `Cancel Order ${selectedOrder.order_number} (${selectedOrder._id})`
      )
      router
        .push('/dashboard')
        .then(() => {
          setSelectedOrder(null)
          window.location.reload()
        })
        .catch((error) => {
          console.error('Error navigating to dashboard:', error)
        })
    }
  }
  const cancelCancellation = () => {
    setSelectedOrder(null)
  }

  const recentOrders = orders.slice(0, 3)

  if (recentOrders.length === 0) {
    return null
  }

  return (
    <div className="recent-orders-container mt-14 flex flex-col items-start p-5">
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="recent-order-header">
          <h2 className="mb-2 text-xl font-bold">Recent Orders</h2>
        </div>
        <div>
          <Link href="/orders">
            <Button variant="secondary">View More</Button>
          </Link>
        </div>
      </div>

      <div className="recent-orders-list flex flex-wrap">
        {recentOrders.map((order) => (
          <div
            key={order.order_number}
            className="order-box mb-4 mr-4 flex-shrink-0 overflow-hidden rounded-lg border"
          >
            <div className="rounded-xl bg-white p-4">
              <p className="mb-2 text-base font-bold">
                Order #{order.order_number}
              </p>

              <div className="order-buttons mt-2">
                <Button
                  variant="secondary"
                  onClick={() =>
                    handleCancelOrder(order._id, order.order_number)
                  }
                  style={{
                    opacity:
                      order.status === 'Cancelled' ||
                      order.status === 'Delivered'
                        ? '0.7'
                        : '1',
                    cursor:
                      order.status === 'Cancelled' ||
                      order.status === 'Delivered'
                        ? 'not-allowed'
                        : 'pointer',
                  }}
                  disabled={
                    order.status === 'Cancelled' || order.status === 'Delivered'
                  }
                >
                  Cancel Order
                </Button>
                <Link href={`/orders/${order._id}`}>
                  <Button className="ml-2">Manage Order</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <ConfirmationDialog
          message={`Are you sure you want to cancel Order #${selectedOrder.order_number}?`}
          onCancel={cancelCancellation}
          onConfirm={confirmCancellation}
          orderId={selectedOrder._id}
        />
      )}
    </div>
  )
}

export default RecentOrders
