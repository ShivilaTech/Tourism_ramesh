import React, { useState } from 'react';
import './about.css';

import WeOffer from './weOffer.js';
import { useEffect } from 'react';
import axios from 'axios';

const AboutAdmin = () => {
  const [data, setData] = useState();

  const [editingMember, setEditingMember] = useState(null);
  useEffect(() => {
    loadTeam();
  }, [])
  const loadTeam = async () => {

    const { data } = await axios.post(`https://travel-d57k.onrender.com/about/team/getAll`,
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setData(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  const handleEdit = (id) => {
    const memberToEdit = data.find((item) => item.id === id);
    setEditingMember(memberToEdit);
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editingMember.id ? { ...editingMember } : item
      )
    );
    setEditingMember(null);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const newMember = {
      id: data.length + 1,
      sr: (data.length + 1) + '.',
      name: 'New Team Member',
      image: 'path_to_new_image.jpg',
      description: 'Enter description here',
    };
    setData([...data, newMember]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected image file
    const reader = new FileReader();

    reader.onloadend = () => {
      // After the image is read, update the editingMember object with the selected image data
      setEditingMember((prevMember) => ({ ...prevMember, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file); // Read the selected image as a data URL
    }
  };


  return (
    <>

      <div className='col1'>
        <WeOffer />
        <div
          className='row'
          style={{
            fontWeight: '500',
            color: 'white',
            padding: '5px',
            backgroundColor: 'blue',
          }}
        >
          Our Team
        </div>
        <div className='row roww '>
          <div>
            <button style={{ width: '350px' }} onClick={handleAdd}>
              Add Member
            </button>
          </div><br /><br />
          {editingMember && (
            <div className='form2'>
              <input
                type='text'
                value={editingMember.name}
                onChange={(e) =>
                  setEditingMember({ ...editingMember, name: e.target.value })
                }
              />
              <div>
                <input
                  type="file"
                  accept="image/*" // Only allow image files
                  onChange={handleImageChange}
                />
                {/* ... (other input fields for name and description) */}

              </div>
              <input
                type='text'
                value={editingMember.description}
                onChange={(e) =>
                  setEditingMember({ ...editingMember, description: e.target.value })
                }
              />
              <button onClick={handleSave}>Save</button>
            </div>
          )}
          <table className='table '>
            <thead>
              <tr className='tr'>
                {/* <th>SR</th> */}
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => (
                <tr className='tr' key={item.id}>
                  {/* <td>{item.sr}</td> */}
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={item.logo}
                      alt={item.title}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </td>
                  <td>{item.des}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default AboutAdmin;
