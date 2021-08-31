import Link from 'next/link'

const Header = () => {
  return (
          <>
            <header className="min-h-screen bg-gray-50">
              <nav className="flex items-start justify-start p-6 h-20 bg-white shadow-sm">
                  <Link href='/' className="space-x-2 text-xl">
                        <a className="hidden sm:inline-block text-gray-700 hover:text-indigo-700 pr-4">Home</a>
                  </Link>
                  <Link href='/about' className="space-x-2 text-xl">
                        <a className="hidden sm:inline-block text-gray-700 hover:text-indigo-700 pr-4">About Us</a>
                  </Link>
              </nav>
            </header>
          </>
  )
}

export default Header
