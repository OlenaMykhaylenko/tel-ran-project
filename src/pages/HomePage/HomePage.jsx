import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';

import MainBanner from '../../layout/HomePageLayouts/MainBanner/MainBanner';

import GoodsBlockMain from '../../layout/HomePageLayouts/GoodsBlockMain/GoodsBlockMain';


import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <CategoriesBlockMain />

      <MainBanner />

      <GoodsBlockMain/>

    </div>
  );
};
export default HomePage;
