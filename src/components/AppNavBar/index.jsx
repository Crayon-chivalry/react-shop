import { useNavigate } from "react-router-dom";
import styles from './index.module.scss'

import { NavBar } from "antd-mobile";

const AppNavBar = ({ title }) => {
  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }

  return (
    <NavBar className={styles['nav-bar']} onBack={onBack}>
      {title}
    </NavBar>
  )
}

export default AppNavBar;