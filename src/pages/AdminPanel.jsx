import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, Package, LogOut } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdminDashboard from '@/pages/AdminDashboard';
import AdminBooks from '@/pages/AdminBooks';
import AdminOrders from '@/pages/AdminOrders';
import useAuthStore from '@/stores/useAuthStore';
import { Button } from '@/components/ui/button';

const AdminPanel = () => {
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { id: 'books', label: 'Books', icon: BookOpen, path: '/admin/books' },
    { id: 'orders', label: 'Orders', icon: Package, path: '/admin/orders' }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Panel - BookHub</title>
        <meta name="description" content="Manage books, orders, and view analytics." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-blue-50">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-blue-900">Admin Panel</h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <Link
                        key={tab.id}
                        to={tab.path}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            activeTab === tab.id
                              ? 'bg-blue-900 text-white'
                              : 'text-gray-700 hover:bg-blue-50'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{tab.label}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-4">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/books" element={<AdminBooks />} />
                <Route path="/orders" element={<AdminOrders />} />
              </Routes>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AdminPanel;
