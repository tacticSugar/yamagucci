import type { FC } from 'react'

import { adminNavConfiguration } from './adminNavConfiguration'
import AdminNavItem from './AdminNavItem/AdminNavItem'

/** навигация */
const AdminNavigation: FC = () =>
  (
    <nav>
      <ul>
        {adminNavConfiguration.map((item) => (
          <AdminNavItem
            {...item}
            key={item.id}
          />
        ))}
      </ul>
    </nav>
  )

export default AdminNavigation
