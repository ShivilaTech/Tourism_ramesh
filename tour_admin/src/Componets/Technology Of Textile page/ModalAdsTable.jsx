import React, { useState } from 'react';
import './ModalAdsTable.css';
import axios from 'axios';
import { useEffect } from 'react';

const ModalAdsTable = ({ onClose }) => {
  const [data, setData] = useState();
  useEffect(() => {
    loadAds();
  }, [])
  const loadAds = async () => {

    const { data } = await axios.post(`https://travel-d57k.onrender.com/adds/getAll`,
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

  const [newItem, setNewItem] = useState();

  const handleEdit = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isEditing: true } : { ...item, isEditing: false }
      )
    );
  };

  const handleSave = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, imageUrl: reader.result } : item
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    // Add the new item to the data array
    setData((prevData) => [...prevData, newItem]);

    // Clear the newItem state to prepare for the next addition
    setNewItem({
      id: data.length + 1,
      name: '',
      url: '',
      imageUrl: '',
      isEditing: true,
      isNew: true,
    });
  };

  const handleDelete = (id) => {
    // Remove the item with the given id from the data array
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="modalAdss">
      <div className="modal-content-Ads">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item) => (
              <tr key={item._id}>
                <td>
                  {item.isEditing ? (
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        setData((prevData) =>
                          prevData.map((i) =>
                            i.id === item.id ? { ...i, name: e.target.value } : i
                          )
                        )
                      }
                    />
                  ) : (
                    item.name
                  )}
                </td>

                <td>
                  {item.isEditing ? (
                    <input
                      type="text"
                      value={item.url}
                      onChange={(e) =>
                        setData((prevData) =>
                          prevData.map((i) =>
                            i.id === item.id ? { ...i, url: e.target.value } : i
                          )
                        )
                      }
                    />
                  ) : (
                    item.url
                  )}
                </td>

                <td>
                  {item.isEditing ? (
                    <div>
                      <img src={item.imageUrl} alt={item.name} style={{ width: '100px' }} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, item.id)}
                      />
                    </div>
                  ) : (
                    <img src={`https://travel-d57k.onrender.com/ads/${item.image_url}`} alt={item.name} style={{ width: '100px' }} />
                  )}
                </td>
                <td>
                  {item.isEditing ? (
                    <React.Fragment>
                      <button onClick={() => handleSave(item.id)}>Save</button>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </React.Fragment>
                  ) : (
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddItem}>Add Item</button>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalAdsTable;