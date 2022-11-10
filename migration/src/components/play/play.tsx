import dynamic from 'next/dynamic';
import { Player } from './styles';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type PlayProps = {
  idmovie: string;
};

const Play: React.FC<PlayProps> = ({ idmovie }) => {
  return (
    <>
      <Player xs={12}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${idmovie}`}
          playing={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </Player>
    </>
  );
};
export default Play;
