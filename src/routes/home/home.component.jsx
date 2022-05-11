import Menu from '../../components/category-menu/category-menu.component';

function Home() {
   const categories = [
      {
         id: 1,
         title: 'hats',
         imageUrl: 'https://i.ibb.co/M51dLPV/4s-B6kne-DQ4-GV6mj52x-YV-IMG-20210717-155051-293.jpg',
      },
      {
         id: 2,
         title: 'jackets',
         imageUrl: 'https://i.ibb.co/n7D0Tg2/Silver-tehri-nath.jpg',
      },
      {
         id: 3,
         title: 'sneakers',
         imageUrl:
            'https://i.ibb.co/9YKsMr2/hiu-Gw-Vh-LSVOc-QB4t0jsz-102677029-634023430537542-7976596323569325079-n.jpg',
      },
      {
         id: 4,
         title: 'womens',
         imageUrl: 'https://i.ibb.co/mt3cHpn/16331609864552.jpg',
      },
      {
         id: 5,
         title: 'mens',
         imageUrl: 'https://i.ibb.co/5BhY41q/b5.jpg',
      },
   ];

   return (
      <>
         <Menu categories={categories} />
      </>
   );
}

export default Home;
