import Image from 'next/image';
import searchPng from './assets/search.png';
import LogoPng from './assets/logo.png';
import dropdownPng from './assets/dropdown.png';
import styles from './styles/header.module.less';
import Search from './search';

const Header = () => {
  return (
    <div className={styles["g-header"]}>
    <div className={styles["header"]}>
      <div>
        <Image  style={{ cursor: 'pointer' }} className={styles["logo"]} src={LogoPng} alt="" />
        <div className={styles["search-box-v2"]}>
          <Image src={searchPng} alt="search" width={23} />
          <Search />
          {/* <input /> */}
        </div>
      </div>
      <div className={styles["header-right"]}>
        <div><span>首页</span></div>
        <div><span>移动端组件库</span></div>
        <div
          className={styles["web-parent"]}
          style={{ position: 'relative' }}
        >
          <span><span>Web端组件库</span></span>
          <Image src={dropdownPng} alt="" width={16} height={16} />
          {/* <div
            className={styles["web-child-wrap"]}
            style={{
              position: 'absolute', width: 120, height: 88, border: '1px solid #D8D8D8', flexWrap: 'wrap', paddingLeft: 16, paddingBottom: 16, alignItems: 'flex-end', background: '#fff', top: 27, left: '-8px',
            }}
          >
            <div className={styles["child"]}>React组件库</div>
            <div className={styles["child"]}>Vue2.0组件库</div>
          </div> */}
        </div>
        <div><span>图表库</span></div>
        <div ><span>资源与下载</span></div>
        <div className={styles["header-avatar"]}>
          <span>欢迎您</span>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Header;