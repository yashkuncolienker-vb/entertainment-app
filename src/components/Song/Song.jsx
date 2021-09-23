import './Song.css';

const Song = ({ data, songObj, likesObj }) => {
  const like = likesObj.likes.includes(data.id);

  const handleDelete = () => {
    const fData = songObj.data.filter((d) => d.id !== data.id);
    songObj.setData(fData);
    likesObj.setLikes(likesObj.likes.filter((id) => id !== data.id));
  };

  const handleLike = () => {
    if (!like) {
      const fData = { ...data, like: data.like + 1 };
      songObj.setData(songObj.data.map((d) => (d.id === data.id ? fData : d)));
      likesObj.setLikes([...likesObj.likes, data.id]);
    } else {
      const fData = { ...data, like: data.like - 1 };
      songObj.setData(songObj.data.map((d) => (d.id === data.id ? fData : d)));
      likesObj.setLikes(likesObj.likes.filter((d) => d !== data.id));
    }
  };
  return (
    <div className="song-container">
      <div className="details-container">
        <div className="like-container">
          <h5 style={{ color: like ? 'blue' : 'gray' }}>{data.like}</h5>
          <button onClick={handleLike} className="btn">
            <i
              className="fa fa-thumbs-up"
              style={{ color: like ? 'blue' : 'gray' }}
            ></i>
          </button>
        </div>
        <div className="title-container">
          <div className="title">{data.title}</div>
          <div className="subtitle">{data.subtitle}</div>
        </div>
      </div>
      <div className="audio-container">
        <audio controls className="audio-style">
          <source src={data.media} type="audio/mp3" />
        </audio>
        <div className="drop-down-container">
          <i
            className="fa fa-angle-down"
            aria-hidden="true"
            style={{ fontSize: '48px' }}
          ></i>

          <div className="drop-down">
            <div onClick={handleDelete}>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
