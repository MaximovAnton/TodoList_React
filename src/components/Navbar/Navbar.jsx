import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item} >
            <NavLink to="/pictures" className={ navData => navData.isActive ? s.active : s.item }> Pictures </NavLink>
        </div>
        <div className={s.item} >
            <NavLink to="/music"  className={ navData => navData.isActive ? s.active : s.item }> Music </NavLink>
        </div>
        <div className={s.item} >
            <NavLink to="/plusone"  className={ navData => navData.isActive ? s.active : s.item }> PlusOne </NavLink>
        </div>
    </nav>
}

export default Navbar