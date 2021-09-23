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

  const handleClickAdd = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { id: Number(data[data.length - 1].id) + 1, like: 0, ...formData },
    ]);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  return (
    <div className="width-100">
      <Navbar loggedUser={loggedUser} />
      <Search setSearchText={setSearchText} />
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
      <div className="form-container">
        <button className="toggle-btn btn-1" onClick={handleClickAdd}>
          {showForm ? '-' : '+'}
        </button>
        {showForm && (
          <form className="add-form" onSubmit={handleSubmit}>
            <label>
              Title <input type="text" onChange={handleChange} name="title" />
            </label>
            <br />
            <label>
              Subtitle{' '}
              <input type="text" onChange={handleChange} name="subtitle" />
            </label>
            <br />
            <label>
              Media <input type="text" onChange={handleChange} name="media" />
            </label>
            <br />
            <button className="btn-1">Add</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Main;
