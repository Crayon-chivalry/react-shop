import styles from './index.module.scss'
import { SearchBar, SideBar } from 'antd-mobile'

const tabs = [
  {id: 1, title: '服饰箱包'},
  {id: 2, title: '食品'},
  {id: 3, title: '电器'},
  {id: 4, title: '手机'},
]

const Category = () => {
  return (
    <>
      <div className={styles['header']}>
        <SearchBar placeholder="请输入内容" />
      </div>
      

      <div className={styles['category-row']}>
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item key={item.id} title={item.title} />
          ))}
        </SideBar>
        <div className={styles['content']}>
          <div className={styles['grid']}>
            <div className={styles['grid-item']}>
              <img src='/src/assets/images/xiaomi.png' className={styles['grid-cover']} />
              <div className='grid-name'>小米</div>
            </div>
            <div className={styles['grid-item']}>
              <img src='/src/assets/images/xiaomi.png' className={styles['grid-cover']} />
              <div className='grid-name'>小米</div>
            </div>
            <div className={styles['grid-item']}>
              <img src='/src/assets/images/xiaomi.png' className={styles['grid-cover']} />
              <div className='grid-name'>小米</div>
            </div>
            <div className={styles['grid-item']}>
              <img src='/src/assets/images/xiaomi.png' className={styles['grid-cover']} />
              <div className='grid-name'>小米</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
