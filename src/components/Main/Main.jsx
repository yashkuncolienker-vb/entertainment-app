import { Redirect } from 'react-router';
import dummyData from './dummydata.json';
import { useState } from 'react';
import Song from '../Song/Song';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Main.css';

const Main = () => {
  const loggedUser = localStorage.getItem('loggedUser');
  const [data, setData] = useState(dummyData.data);
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState(false);

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

  return loggedUser ? (
    <div className="width-100">
      <Navbar loggedUser={loggedUser} />
      <Search />
      <div className="main-container">
        {data.map((info, key) => (
          <Song data={info} key={key + 1} id={key} songObj={songObj} />
        ))}
        <button className="toggle-btn" onClick={handleClickAdd}>
          {showForm ? '-' : '+'}
        </button>
      </div>
      {showForm && (
        <form className="add-form" onSubmit={handleSubmit}>
          <label>
            Title <input type="text" onChange={handleChange} name="title" />
          </label>
          <label>
            Subtitle{' '}
            <input type="text" onChange={handleChange} name="subtitle" />
          </label>
          <label>
            Media <input type="text" onChange={handleChange} name="media" />
          </label>
          <button>Add</button>
        </form>
      )}
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Main;
