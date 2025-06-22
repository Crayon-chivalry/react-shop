import './index.css'

import Masonry from 'react-masonry-css'

const GoodsList = ({ list }) => {
  return (
    <Masonry breakpointCols={2} className="my-masonry-grid">
      {list.map(item =>
        <div className="goods-item" key={item.id}>
          <img src={item.cover} className="goods-cover" />
          <div className="goods-content">
            <div className="goods-name">{item.name}</div>
            <div className="goods-price">￥<span>{item.price}</span></div>
          </div>
        </div>
      )}
    </Masonry>
  )
}

export default GoodsList