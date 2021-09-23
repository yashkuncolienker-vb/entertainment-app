import dummyData from './dummydata.json';
import { useState } from 'react';
import Song from '../Song/Song';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Main.css';

const Main = () => {
  const loggedUser = 'Yash Rk';
  const [data, setData] = useState(dummyData.data);
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [likes, setLikes] = useState([]);
  const likesObj = {
    likes,
    setLikes,
  };
  const songObj = {
    data,
    setData,
  };
  const handleExpand = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.subtitle || !formData.media) {
      alert('Please, fill all details');
      return;
    }
    setShowForm(!showForm);
    setData([
      ...data,
      { id: data[data.length - 1].id + 1, like: 0, ...formData },
    ]);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  return (
    <>
      <Navbar loggedUser={loggedUser} />
      <Search setSearchText={setSearchText} />
      <div>
        <div className="main-container">
          {data
            .filter((item) => {
              const ctdn =
                searchText === '' ||
                item.title.toLowerCase().startsWith(searchText.toLowerCase());
              if (ctdn) {
                return true;
              }
              return false;
            })
            .map((info, key) => (
              <Song
                data={info}
                key={key + 1}
                songObj={songObj}
                likesObj={likesObj}
              />
            ))}
        </div>
      </div>
      <div className="form-container">
        <button className="toggle-btn btn-1 hvr-btn" onClick={handleExpand}>
          {showForm ? '-' : '+'}
        </button>
        {showForm && (
          <form className="add-form" onSubmit={handleSubmit}>
            <label>
              Title <input type="text" onChange={handleChange} name="title" />
            </label>
            <label>
              Subtitle
              <input type="text" onChange={handleChange} name="subtitle" />
            </label>
            <label>
              Media <input type="text" onChange={handleChange} name="media" />
            </label>
            <button className="btn-1">Add</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Main;
