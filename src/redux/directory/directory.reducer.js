import mens from '../../assets/mens.webp';
import womens from '../../assets/women2.jpg';
import hats from '../../assets/hats.webp';

const INITAL_STATE = {
    sections : [
        {
          title: 'hats',
          imageUrl: `${hats}`,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: `${womens}`,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: `${mens}`,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;