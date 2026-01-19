import { create } from 'zustand';

const useOrdersStore = create((set, get) => ({
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  
  createOrder: (orderData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    
    const updatedOrders = [...get().orders, newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    set({ orders: updatedOrders });
    
    return newOrder;
  },
  
  updateOrderStatus: (orderId, status) => {
    const updatedOrders = get().orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    );
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    set({ orders: updatedOrders });
  },
  
  cancelOrder: (orderId) => {
    const order = get().orders.find(o => o.id === orderId);
    if (order && order.status === 'pending') {
      get().updateOrderStatus(orderId, 'cancelled');
      return { success: true };
    }
    return { success: false, error: 'Order cannot be cancelled' };
  },
  
  getUserOrders: (userId) => {
    return get().orders.filter(order => order.userId === userId);
  },
  
  getOrderById: (orderId) => {
    return get().orders.find(order => order.id === orderId);
  }
}));

export default useOrdersStore;
