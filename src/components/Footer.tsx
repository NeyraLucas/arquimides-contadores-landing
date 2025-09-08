function Footer() {
  return (
    <footer
      id="contact"
      className="py-10 text-center border-t border-gray-800 mt-10"
    >
      <p className="mb-4">
        © {new Date().getFullYear()} Arquimides Contadores. All rights reserved.
      </p>
      {/* <a
        href="mailto:info@constructwise.com"
        className="text-[var(--secondary-color)] hover:underline"
      >
        info@constructwise.com
      </a> */}
    </footer>
  )
}

export default Footer
