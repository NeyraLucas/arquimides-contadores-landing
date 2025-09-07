function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 px-10 py-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-3xl text-[var(--secondary-color)]">
          business_center
        </span>
        <h2 className="text-xl font-bold tracking-tight">ConstructWise</h2>
      </div>
      <nav className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-8">
          {["Home", "About", "Services", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-[var(--secondary-color)]"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="h-10 flex items-center justify-center rounded-md px-5 bg-[var(--secondary-color)] text-sm font-bold hover:bg-opacity-90"
        >
          Contact Us
        </a>
      </nav>
    </header>
  )
}

export default Header
