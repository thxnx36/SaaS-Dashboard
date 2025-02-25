import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Users', href: '/dashboard/users', icon: UsersIcon },  // แก้เป็น /users
    { name: 'Orders', href: '/orders', icon: ShoppingCartIcon },  // แก้เป็น /orders
  ];

// ลบ isOpen ออกจาก interface
type SidebarProps = {
  onClose: () => void;
};

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="h-full bg-white dark:bg-gray-800" style={{paddingTop: '10px', paddingLeft: '5px',paddingRight: '5px'}}>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b dark:border-gray-700 ">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Menu</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 "
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              } flex items-center px-4 py-2 text-sm font-medium transition-colors`}
              style={{ borderRadius: '10px' }}
            >
              <item.icon
                className={`${
                  isActive ? 'text-gray-500' : 'text-gray-400'
                } mr-3 flex-shrink-0 h-5 w-5`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}