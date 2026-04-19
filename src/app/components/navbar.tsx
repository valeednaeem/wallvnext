import Link from 'next/link'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-black/80 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl">Wall-V</span>
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">Wall-V</Link>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
                  <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
                  <Link href="/skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/api/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                  <Link href="/api/register" className="text-gray-600 hover:text-gray-900">Register</Link>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-r from-transparent via-gray-200 to-transparent h-1 w-full"></div>
            <div className="container mx-auto px-4 py-2">
              <p className="text-sm text-gray-500 text-center">Welcome to Wall-V, the portfolio of Valeed Naeem, a full stack developer specializing in web development, software engineering, and technology solutions.</p>
            </div>
    </nav>
  )
}

export default Navbar
