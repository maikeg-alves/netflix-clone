import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Card, Carousel } from '../../components';

interface CarouselProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  original_title: string;
  release_date: string;
}

const Mylist: React.FC = () => {

  const [movie, setMovie] = React.useState<CarouselProps[]>([]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      function checkUserData() {
        const _movie = localStorage.getItem(
          'watchedMovies',
        ) as unknown as CarouselProps;

        const _obj = JSON.parse(String(_movie));

        if (_obj) {
          setMovie(_obj);
        } else {
          setMovie([]);
        }
      }

      checkUserData();

      window.addEventListener('storage', checkUserData);

      return () => {
        window.removeEventListener('storage', checkUserData);
      };
    }
  }, []);

  return (
    <>
      {movie ? (
        <Carousel title="My List">
          {movie.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                description={item.overview}
                poster_path={item.poster_path}
                original_title={item.original_title}
                release_date={item.release_date}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      ) : (
        'nada aqui '
      )}
    </>
  );
};

export default Mylist;
