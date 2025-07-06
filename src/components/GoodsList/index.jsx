import styles from './index.module.scss'

import Masonry from 'react-masonry-css'

const GoodsList = ({ list }) => {
  return (
    <Masonry breakpointCols={2} className={styles['my-masonry-grid']}>
      {list.map(item =>
        <div className={styles['goods-item']} key={item.id}>
          <img src={item.cover} className={styles['goods-cover']} />
          <div className={styles['goods-content']}>
            <div className={styles['goods-name']}>{item.name}</div>
            <div className={styles['goods-price']}>￥<span>{item.price}</span></div>
          </div>
        </div>
      )}
    </Masonry>
  )
}

export default GoodsList