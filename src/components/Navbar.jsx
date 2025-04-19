export default function Navbar() {
    return(
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">Navbar</div>
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#services" className="hover:text-gray-400">Services</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    )
}