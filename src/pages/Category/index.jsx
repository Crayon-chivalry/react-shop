import './index.css'
import { SearchBar, SideBar } from 'antd-mobile'

const tabs = [
  {id: 1, title: '服饰箱包'},
  {id: 2, title: '食品'},
  {id: 3, title: '电器'},
  {id: 4, title: '手机'},
]

const Category = () => {
  return (
    <div className="category">
      <div className='category-header'>
        <SearchBar placeholder="请输入内容" className="search" />
      </div>
      

      <div className='category-row'>
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item key={item.id} title={item.title} />
          ))}
        </SideBar>
        <div className="content">1</div>
      </div>
    </div>
  );
};

export default Category;
