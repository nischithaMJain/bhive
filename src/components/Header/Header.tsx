import * as React from 'react';
import Image from '../Image/Image'
import logo from '../../assets/logo.png'
import { MdCall } from "react-icons/md";
import styles from './Header.module.scss';
import Loading from '../Loading/Loading';
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <React.Suspense fallback={<Loading />}>
        <Image src={logo} alt="Behive logo" height={40} width={125} />
      </React.Suspense>
      <div className={styles.contactUs}>
        <MdCall className={styles.callIcon} />
      </div>

    </header>
  )
}

export default Header;
