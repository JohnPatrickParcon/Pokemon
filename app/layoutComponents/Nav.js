import Link from "next/link"

const Nav = () => {
  return (
      <nav>
          <Link href={'./'}>Home</Link>
          <div>
            <input type="search" placeholder="Pokemon name"></input>
            <select type="text"></select>
          </div>
      </nav>
  )
}

export default Nav