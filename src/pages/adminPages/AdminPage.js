import Sidenav from "./components/SideNav";
const adminLinks = [
  {
    title: 'Dashboard',
    icon: './images/icons/dashboard.png',
    subLinks: [
      { title: 'Overview', url: '/admin/dashboard/overview' },
      { title: 'Sales Analytics', url: '/admin/dashboard/sales-analytics' },
      { title: 'Revenue', url: '/admin/dashboard/revenue' },
      { title: 'Customer Insights', url: '/admin/dashboard/customer-insights' },
    ]
  },
  {
    title: 'Products',
    icon: './images/icons/products.png',
    subLinks: [
      { title: 'All Products', url: '/admin/products/all' },
      { title: 'Add New Product', url: '/admin/products/add' },
      { title: 'Categories', url: '/admin/products/categories' },
      { title: 'Stock Management', url: '/admin/products/stock-management' },
      { title: 'Product Reviews', url: '/admin/products/reviews' },
    ]
  },
  {
    title: 'Orders',
    icon: './images/icons/orders.png',
    subLinks: [
      { title: 'All Orders', url: '/admin/orders/all' },
      { title: 'Pending Orders', url: '/admin/orders/pending' },
      { title: 'Completed Orders', url: '/admin/orders/completed' },
      { title: 'Returns & Refunds', url: '/admin/orders/returns-refunds' },
      { title: 'Shipping Settings', url: '/admin/orders/shipping-settings' },
    ]
  },
  {
    title: 'Users',
    icon: './images/icons/users.png',
    subLinks: [
      { title: 'All Users', url: '/admin/users/all' },
      { title: 'Admins', url: '/admin/users/admins' },
      { title: 'Customer Accounts', url: '/admin/users/customers' },
      { title: 'Permissions', url: '/admin/users/permissions' },
    ]
  },
  {
    title: 'Marketing',
    icon: './images/icons/bullhorn.png',
    subLinks: [
      { title: 'Campaigns', url: '/admin/marketing/campaigns' },
      { title: 'Email Marketing', url: '/admin/marketing/email' },
      { title: 'SEO Tools', url: '/admin/marketing/seo' },
      { title: 'Social Media', url: '/admin/marketing/social-media' },
    ]
  },
  {
    title: 'Reports',
    icon: './images/icons/reports.png',
    subLinks: [
      { title: 'Sales Reports', url: '/admin/reports/sales' },
      { title: 'Customer Reports', url: '/admin/reports/customers' },
      { title: 'Inventory Reports', url: '/admin/reports/inventory' },
      { title: 'Revenue Reports', url: '/admin/reports/revenue' },
    ]
  },
  {
    title: 'Settings',
    icon: './images/icons/settings.png',
    subLinks: [
      { title: 'General Settings', url: '/admin/settings/general' },
      { title: 'Payment Settings', url: '/admin/settings/payment' },
      { title: 'Shipping Settings', url: '/admin/settings/shipping' },
      { title: 'Tax Settings', url: '/admin/settings/tax' },
      { title: 'Notification Settings', url: '/admin/settings/notifications' },
    ]
  },
  {
    title: 'Support',
    icon: './images/icons/support.png',
    subLinks: [
      { title: 'Customer Support', url: '/admin/support/customer' },
      { title: 'Technical Support', url: '/admin/support/technical' },
      { title: 'Documentation', url: '/admin/support/documentation' },
      { title: 'Live Chat', url: '/admin/support/live-chat' },
    ]
  },
];


function AdminPage() {
    return (
        <div>
            <Sidenav links={adminLinks} />
        </div>
    );
}

export default AdminPage;