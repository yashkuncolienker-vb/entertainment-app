import './Song.css';
const Song = ({ data, songObj }) => {
  const handleClick = () => {
    const fData = songObj.data.filter(
      (d) => d.id.toString() !== data.id.toString()
    );
    songObj.setData(fData);
  };
  return (
    <div className="song-container">
      <div>
        {data.like}
        <button style={{ width: '30px' }}>Like</button>
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
          <p onClick={handleClick}>Delete Song</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
