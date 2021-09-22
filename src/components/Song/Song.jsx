import './Song.css';
import { useState } from 'react';

const Song = ({ data, songObj }) => {
  const [like, setLike] = useState(false);

  const handleDelete = () => {
    const fData = songObj.data.filter(
      (d) => d.id.toString() !== data.id.toString()
    );
    songObj.setData(fData);
  };

  const handleLike = () => {
    if (!like) {
      const fData = { ...data, like: Number(data.like) + 1 };
      songObj.setData(
        songObj.data.map((d) =>
          d.id.toString() === data.id.toString() ? fData : d
        )
      );
      setLike(true);
    } else {
      const fData = { ...data, like: Number(data.like) - 1 };
      songObj.setData(
        songObj.data.map((d) =>
          d.id.toString() === data.id.toString() ? fData : d
        )
      );
      setLike(false);
    }
  };
  return (
    <div className="song-container">
      <div>
        {data.like}
        <button onClick={handleLike} className="btn">
          Like
        </button>
      </div>
      <div>
        <div>{data.title}</div>
        <div>{data.subtitle}</div>
      </div>
      <div>
        <audio controls>
          <source src={data.media} type="audio/mp3" />
        </audio>
      </div>
      <div className="drop-down-container">
        <p>&darr;</p>
        <div className="drop-down">
          <p onClick={handleDelete} className="btn">
            Delete Song
          </p>
        </div>
      </div>
    </div>
  );
};

export default Song;
