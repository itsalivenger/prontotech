import Sidenav from "./components/SideNav";
const links = [
    {
      title: 'Category 1',
      icon: './images/icons/cart.png', // Main link icon
      subLinks: [
        { href: '/sub1', label: 'Sub-link 1' },
        { href: '/sub2', label: 'Sub-link 2' },
      ],
    },
    {
      title: 'Category 2',
      icon: '/path/to/main-icon2.png', // Main link icon
      subLinks: [
        { href: '/sub3', label: 'Sub-link 3' },
        { href: '/sub4', label: 'Sub-link 4' },
      ],
    },
  ];
function AdminPage() {
    return (
        <div>
            <Sidenav links={links} />
        </div>
    );
}

export default AdminPage;