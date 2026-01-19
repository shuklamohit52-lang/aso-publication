import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, Users, BookOpen, TrendingUp } from 'lucide-react';
import useBooksStore from '@/stores/useBooksStore';
import useOrdersStore from '@/stores/useOrdersStore';

const AdminDashboard = () => {
  const books = useBooksStore(state => state.books);
  const orders = useOrdersStore(state => state.orders);

  const totalSales = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const totalOrders = orders.length;
  const totalBooks = books.length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;

  const stats = [
    {
      label: 'Total Sales',
      value: `₹${totalSales.toFixed(2)}`,
      icon: DollarSign,
      color: 'from-green-400 to-green-600',
      textColor: 'text-green-600'
    },
    {
      label: 'Total Orders',
      value: totalOrders,
      icon: ShoppingCart,
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-600'
    },
    {
      label: 'Total Books',
      value: totalBooks,
      icon: BookOpen,
      color: 'from-amber-400 to-amber-600',
      textColor: 'text-amber-600'
    },
    {
      label: 'Pending Orders',
      value: pendingOrders,
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
      textColor: 'text-purple-600'
    }
  ];

  const recentOrders = orders.slice(0, 5).sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Items</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900">{order.id}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{order.items.length} items</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    ₹{order.totalAmount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Low Stock Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Low Stock Alert</h2>
        <div className="space-y-3">
          {books.filter(book => book.stock < 10).map((book) => (
            <div key={book.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-3">
                <img src={book.coverImage} alt={book.title} className="w-12 h-16 object-cover rounded" />
                <div>
                  <p className="font-semibold text-gray-900">{book.title}</p>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
              </div>
              <span className="text-red-600 font-bold">{book.stock} left</span>
            </div>
          ))}
          {books.filter(book => book.stock < 10).length === 0 && (
            <p className="text-gray-600 text-center py-4">All books are well stocked!</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
