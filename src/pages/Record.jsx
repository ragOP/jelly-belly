import React, { useState, useEffect } from 'react'
import { BACKEND_URL } from '../api_service/BACKEND_URL'
import Header from '../components/Header'
import { Calendar, User, Mail, Phone, Package, DollarSign, Clock, AlertCircle } from 'lucide-react'

const Record = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/lander8/get-orders`)
      const result = await response.json()
      
      if (result.success) {
        setOrders(result.data)
      } else {
        setError('Failed to fetch orders')
      }
    } catch (err) {
      setError('Error fetching orders: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN')
  }

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString('en-IN')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff8a9f] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading orders...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <Package className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Order Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Order <span className="text-[#ff8a9f] font-lora italic">Records</span> <span className="align-middle text-2xl">📋</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#ffabbb]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a9f] to-[#ff6b85] rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                <p className="text-gray-600 text-sm">Total Orders</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#ffabbb]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b85] to-[#ff8a9f] rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{orders.reduce((sum, order) => sum + (order.amount || 0), 0).toLocaleString('en-IN')}
                </p>
                <p className="text-gray-600 text-sm">Total Revenue</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#ffabbb]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffabbb] to-[#ff8a9f] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter(order => {
                    const orderDate = new Date(order.orderDate || order.createdAt)
                    const today = new Date()
                    return orderDate.toDateString() === today.toDateString()
                  }).length}
                </p>
                <p className="text-gray-600 text-sm">Today's Orders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#ffabbb]/20 overflow-hidden">
          <div className="px-6 py-4 border-b border-[#ffabbb]/20">
            <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#ffabbb]/10 to-[#ff8a9f]/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Order ID
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Customer
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Amount
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Order Date
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ffabbb]/20">
                {orders.map((order, index) => (
                  <tr key={order._id || order.orderId} className={`hover:bg-[#ffabbb]/5 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 font-mono">
                        {order.orderId || order._id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.fullName}</div>
                      <div className="text-sm text-gray-500">{order.phoneNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-[#ff8a9f]">
                        ₹{(order.amount || 0).toLocaleString('en-IN')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDateTime(order.orderDate || order.createdAt)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-[#ffabbb] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500">No orders have been placed yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Record
