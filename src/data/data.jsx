import { car1, car2, car3, car4 } from '../image';

const data = {

  digitalContent: [
    {
      name: 'Music Amazon',
      subList: {
        title: 'Stream Music',
        list: [
          { index: 'Amazon Music Unlimited' },
          { index: 'Free Streaming Music' },
          { index: 'Podcasts' },
          { index: 'Play Music' },
          { index: 'Open Web Player' },
          { index: 'Download the app' },
        ],
      },
      icone: <i className='fa-solid fa-angle-right text-gray-400'></i>,
    },
    {
      name: 'Kindle E-readers & Books',
      subList: [
        {
          title: 'Kindle Store',
          list: [
            { index: ' Kindle Books' },
            { index: 'Kindle LJnlimited' },
            { index: 'Prime Reading' },
            { index: 'Kindle Vella' },
          ],
        },
        {
          title: 'Kindle E-Readers',
          list: [
            { index: 'All-new Kindle Kids' },
            { index: 'All-new Kindle' },
            { index: 'Kindle Oasis' },
            { index: 'Introducing Kindle Scribe' },
            { index: 'Accessories' },
            { index: 'See all Kindle E-Readers' },
          ],
        },
        {
          title: 'Apps & Resources',
          list1: [
            { index: 'Free Kindle Reading Apps' },
            { index: 'Kindle Cloud Reader' },
            { index: 'Manage Your Content and Devices' },
          ],
        },
      ],
      icone: <i className='fa-solid fa-angle-right text-gray-400'></i>,
    },

    {
      name: 'Amazon Appstore',
      subList: {
        title: 'Amazon Appstore',
        list: [
          { index: 'All Apps and Games' },
          { index: 'Games' },
          { index: 'Amazon Coins' },
          { index: 'Download Amazon Appstore' },
          { index: 'Amazon Apps' },
          { index: 'Your Apps and Subscriptions' },
        ],
      },
      icone: <i className='fa-solid fa-angle-right text-gray-400'></i>,
    },
  ],
  ShopByDepartment:[

  ],
  carousel:[
    {img :car1},
    {img :car2},
    {img :car3},
    {img :car4},

  ]
};
export default data;
