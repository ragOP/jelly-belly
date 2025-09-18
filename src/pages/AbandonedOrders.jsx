import React, { useState, useEffect } from 'react'
import { BACKEND_URL } from '../api_service/BACKEND_URL'
import Header from '../components/Header'
import { Calendar, User, Mail, Phone, Package, DollarSign, Clock, AlertCircle, Download, Filter, RefreshCw } from 'lucide-react'

const AbandonedOrders = () => {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [customStart, setCustomStart] = useState(null)
  const [customEnd, setCustomEnd] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [orders, filter, customStart, customEnd])

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/lander8/get-abandoned-orders`)
      const result = await response.json()
      
      if (result.success) {
        const sorted = result.data.sort(
          (a, b) => new Date(b.createdAt || b.orderDate).getTime() - new Date(a.createdAt || a.orderDate).getTime()
        )
        setOrders(sorted)
      } else {
        setError('Failed to fetch abandoned orders')
      }
    } catch (err) {
      setError('Error fetching abandoned orders: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const isWithin = (date, from, to) => {
    return date >= from && date <= to
  }

  const applyFilters = () => {
    const now = new Date()
    let filtered = [...orders]

    switch (filter) {
      case 'today':
        filtered = filtered.filter(
          (order) =>
            new Date(order.createdAt || order.orderDate).toDateString() === now.toDateString()
        )
        break
      case 'yesterday':
        const y = new Date()
        y.setDate(y.getDate() - 1)
        filtered = filtered.filter(
          (order) =>
            new Date(order.createdAt || order.orderDate).toDateString() === y.toDateString()
        )
        break
      case 'last7days':
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(now.getDate() - 6)
        filtered = filtered.filter((order) => {
          const d = new Date(order.createdAt || order.orderDate)
          return isWithin(d, sevenDaysAgo, now)
        })
        break
      case 'custom':
        if (customStart && customEnd) {
          filtered = filtered.filter((order) => {
            const d = new Date(order.createdAt || order.orderDate)
            return isWithin(d, customStart, customEnd)
          })
        }
        break
      default:
        break
    }

    filtered.sort(
      (a, b) =>
        new Date(b.createdAt || b.orderDate).getTime() - new Date(a.createdAt || a.orderDate).getTime()
    )
    setFilteredOrders(filtered)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN')
  }

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString('en-IN')
  }

  const isNewOrder = (orderDate) => {
    return (Date.now() - new Date(orderDate).getTime()) / (1000 * 60) < 60
  }

  const totalAmount = filteredOrders.reduce((sum, order) => sum + (order.amount || 0), 0)

  const exportToCSV = () => {
    const csvData = filteredOrders.map((order) => ({
      OrderID: order.orderId || order._id,
      Name: order.fullName,
      Email: order.email,
      Phone: order.phoneNumber,
      SelectedBundle: order.selectedBundle || 'N/A',
      Amount: order.amount || 0,
      CreatedDate: formatDateTime(order.createdAt || order.orderDate),
    }))

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).map(val => `"${val}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.setAttribute('download', 'abandoned-orders.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'last7days', label: 'Last 7 Days' },
    { value: 'custom', label: 'Custom Range' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff8a9f] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading abandoned orders...</p>
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
            <AlertCircle className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Abandoned Orders</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Abandoned <span className="text-[#ff8a9f] font-lora italic">Orders</span> <span className="align-middle text-2xl">🛒</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track customers who started but didn't complete their purchases
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#ffabbb]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a9f] to-[#ff6b85] rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{filteredOrders.length}</p>
                <p className="text-gray-600 text-sm">Abandoned Orders</p>
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
                  ₹{totalAmount.toLocaleString('en-IN')}
                </p>
                <p className="text-gray-600 text-sm">Lost Revenue</p>
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
                  {filteredOrders.filter(order => {
                    const orderDate = new Date(order.createdAt || order.orderDate)
                    const today = new Date()
                    return orderDate.toDateString() === today.toDateString()
                  }).length}
                </p>
                <p className="text-gray-600 text-sm">Today's Abandoned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === option.value
                    ? 'bg-[#ff8a9f] text-white shadow-lg transform scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-[#ff8a9f]/10 border border-[#ffabbb]/30'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={fetchOrders}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 text-gray-700 rounded-full hover:bg-[#ff8a9f]/10 border border-[#ffabbb]/30 transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-[#ff8a9f] text-white rounded-full hover:bg-[#ff6b85] transition-all duration-200 shadow-lg"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Custom Date Range */}
        {filter === 'custom' && (
          <div className="mb-6 flex gap-4 items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#ffabbb]/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#ff8a9f]" />
              <span className="text-sm font-medium text-gray-700">From:</span>
              <input
                type="date"
                value={customStart ? customStart.toISOString().split('T')[0] : ''}
                onChange={(e) => setCustomStart(new Date(e.target.value))}
                className="px-3 py-2 border border-[#ffabbb]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8a9f] text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">To:</span>
              <input
                type="date"
                value={customEnd ? customEnd.toISOString().split('T')[0] : ''}
                onChange={(e) => setCustomEnd(new Date(e.target.value))}
                className="px-3 py-2 border border-[#ffabbb]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8a9f] text-sm"
              />
            </div>
          </div>
        )}

        {/* Orders Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#ffabbb]/20 overflow-hidden">
          <div className="px-6 py-4 border-b border-[#ffabbb]/20">
            <h2 className="text-xl font-bold text-gray-900">Abandoned Order Details</h2>
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
                    Bundle
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Amount
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Abandoned Date
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ffabbb]/20">
                {filteredOrders.map((order, index) => (
                  <tr 
                    key={order._id || order.orderId} 
                    className={`hover:bg-[#ffabbb]/5 transition-colors duration-200 ${
                      isNewOrder(order.createdAt || order.orderDate)
                        ? 'bg-red-50/50 border-l-4 border-red-400'
                        : index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
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
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#ff8a9f]/10 text-[#ff8a9f]">
                        {order.selectedBundle || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-[#ff8a9f]">
                        ₹{(order.amount || 0).toLocaleString('en-IN')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDateTime(order.createdAt || order.orderDate)}
                      </div>
                      {isNewOrder(order.createdAt || order.orderDate) && (
                        <div className="text-xs text-red-600 font-medium mt-1">
                          ⚠️ Recent
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              {filteredOrders.length > 0 && (
                <tfoot className="bg-gradient-to-r from-[#ffabbb]/10 to-[#ff8a9f]/10">
                  <tr className="font-semibold">
                    <td colSpan={4} className="px-6 py-4 text-right text-gray-700">
                      Total Lost Revenue
                    </td>
                    <td className="px-6 py-4 text-[#ff8a9f] text-lg">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              )}
            </table>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-[#ffabbb] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No abandoned orders found</h3>
                <p className="text-gray-500">No orders have been abandoned in the selected time period.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbandonedOrders
