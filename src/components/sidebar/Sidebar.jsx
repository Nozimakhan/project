import "./Sidebar.scss"
import uzb from '../../assets/images/uzbek.svg';
import rus from '../../assets/images/russian.png';
import logo from '../../assets/images/adminlogo.svg';
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlinePlus, AiOutlineEnter } from "react-icons/ai"
import { TfiPencilAlt } from "react-icons/tfi"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Sidebar = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch({ type: "LOGOUT" });
    }
    
    return (
        <div className="adminSideBar">
            <img className="admin_siebar_logo-img" src={logo} alt="" />
            <div className="flags_lang">
                <img src={uzb} alt="" />
                <img src={rus} alt="" />
            </div>
            <div className="admin_panel_id">
                <div className="admin_panel_id_icon"><MdOutlineAdminPanelSettings /></div>
                <div className="admin_panel_id_title">
                    <h4>6270F64B</h4>
                    <p>Админ</p>
                </div>
            </div>
            <Link to="/admin/order">
                <div className="admin_page">
                    <AiOutlineShoppingCart className="admin_page_icon" />
                    <p>Буюртмалар</p>
                </div>
            </Link>
            <Link to="/admin/create">
                <div className="admin_page">
                    <TfiPencilAlt className="admin_page_icon" />
                    <p>Махсулот бошкариш</p>
                </div>
            </Link>
            <Link >
                <div className="admin_page">
                    <AiOutlinePlus className="admin_page_icon" />
                    <p>Кушиш</p>
                </div>
            </Link>
            <button className="exit" onClick={signOut}>
                <div className="admin_page admin_page_lastchild">
                    <AiOutlineEnter className="admin_page_icon" />
                    <p>Чикиш</p>
                </div>
            </button>
        </div>
    )
}

export default Sidebar