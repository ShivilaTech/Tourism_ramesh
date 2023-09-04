import React, { useState, useEffect } from 'react';
import '../Tailoring Extraordinary page/Adventure.css';


import axios from "axios";
import showNotification from '../../helpers/show_notification';

const AddState = () => {
const [editingForm , setEditingForm] = useState(null)
    const [showAddForm, setShowAddForm] = useState(false)
    const [editedFormData, setEditedFormData] = useState(null)
    const [formData, setFormData] = useState({
      name: '',
      url: '',
      add: null,
  
    });
  const [data, setData] = useState([

    {
      id: 1,

      name: 'Aghori',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TG_gnIWcJDShUfM4p9zvHiPSVvHSajp5k7Nhv9tGsbrw0pHjzGLWg8Dr4eRbDcRwpo0&usqp=CAU',
      locUrl: 'https://gaana.com/podcast/ek-kahani-aisi-bhi-season-1',
    },

    {
      id: 2,

      name: 'Raj Kamal',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwHFfzRnRm6kcgE-qzWWXsWIe1Ipl_rycf67UO5wpILy_7Sdz_Oa8Jv9q3K8ENFNCP2U&usqp=CAU',
      locUrl: 'https://gaana.com/podcast/ek-kahani-aisi-bhi-season-1',
    },
    // Add more data items here if needed
  ]);

  const handleToggleImage = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, showImage: !item.showImage } : item
      )
    );
  };

  const handleEdit = async (id  , item, s , index) => {

    try {
        setEditedFormData(true)
      console.log("Deleting item with ID:", id ,"s:", s , index , item);
    //   const response = await axios.post('http://localhost:4000/adventure/edit', { id: id });
    //   showNotification(response.data.message, "Success");
    //   fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    return;
  };

  const handleDeleteRow = async (id , item , index ,s) => {
    try {
      console.log("Deleting item with ID:", id ,"s:", s , index , item);
      const response = await axios.delete(`http://localhost:4000/locations/delete/${id._id}`);
      showNotification(response.data.message, "Success");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    return;
  };

  useEffect(() => {


    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, team: file }));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/locations/getAll');
      console.log("Status58:", response.data.data);

      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        setData(response.data.data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    console.log("formdara146", formData)
    console.log("formdara147", editedFormData)

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('id', editedFormData);
      formDataToSend.append('add', formData.team);
      formDataToSend.append('name', formData.title);
      formDataToSend.append('url', formData.des);
      console.log("formDataToSend", formDataToSend)
      const response = await axios.post('http://localhost:4000//update', formDataToSend);
      if (response.status >= 200 && response.status < 300) {
        showNotification("updated successfully", "Success")
        setEditingForm(false)
        window.alert(response.data.message);
        // Reload the team data after successful update

      } else {
        setEditingForm(false)
        window.alert(response.data.message);
        throw new Error('Network response was not ok.');

      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };


  const handleSubmitFormEdit = async (e) => {
    e.preventDefault();

    console.log("formdara146", formData)
    console.log("formdara147", editedFormData)

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('id', editedFormData);
      formDataToSend.append('add', formData.team);
      formDataToSend.append('name', formData.title);
      formDataToSend.append('url', formData.des);
      console.log("formDataToSend", formDataToSend)
      const response = await axios.post('http://localhost:4000//update', formDataToSend);
      if (response.status >= 200 && response.status < 300) {
        showNotification("updated successfully", "Success")
        setEditingForm(false)
        window.alert(response.data.message);
        // Reload the team data after successful update

      } else {
        setEditingForm(false)
        window.alert(response.data.message);
        throw new Error('Network response was not ok.');

      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };
  console.log("70", data)
  return (
    <>
    <div className="modalAdss">
    
      {showAddForm && (
        <div className='blurBackground'>

          <div className="blurForml">
          <br />
      <h1>add state data here</h1>
      <br />
            <form onSubmit={handleSubmitForm}>
              <label>
                name:
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <br />
              </label>
              <label>
                url:
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                />
              </label>
              <label>
                Add Image:
                <input
                  type="file"
                  onChange={(e) => setFormData({ ...formData, add: e.target.files[0] })}
                />
              </label>
              <button type="submit">Submit</button>
              <button style={{ backgroundColor: "orange" }} onClick={setEditedFormData(false)}>Cancel</button>
            </form>
          </div>

        </div>
      )}
      {editingForm && (
        <div className='blurBackground'>

          <div className="blurForml">

            <form onSubmit={handleSubmitFormEdit}>
              <label>
                Name:
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <br />
              </label>
              <label>
                Url:
                <input
                  type="text"
                  value={formData.des}
                  onChange={(e) => setFormData({ ...formData, des: e.target.value })}
                />
              </label>
              <label>
                Image:
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              <button type="submit">Submit</button>
              <button style={{ backgroundColor: "orange" }} onClick={setEditedFormData(false)}>Cancel</button>
            </form>

          </div>
        </div>
      )} 
    </div>
    
      <div className='myAdvantureContainerr'>
        <table>
          <thead className='ag11'>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>firstPara</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
          <h2 >Add</h2>

  {data && data.map((item) => (
    <tr className="colm11" key={item._id}>

      <td>{item.state}</td>

      {item.caraImgLocation && item.caraImgLocation.map((s , index) => (
        <React.Fragment   key={s._id}>
        <tr>
          <td> 
            <img src={`http://localhost:4000/caraImgLocation/${s}`} alt={s} style={{ width: '100px' }} />
          </td>
       
          <td>{item.firstPara}</td>
          <td>{item.secondPara}</td>
          <td>
            <button onClick={() => handleEdit(item , s, index)}>Edit</button>
          </td>
          <td>
            <button onClick={() => handleDeleteRow(item , s ,index)}>Delete</button>
          </td>
          </tr>
        </React.Fragment>
      ))}

    </tr>
   
  ) )} 
</tbody>


        </table>



      </div>




    </>
  )
}

export default AddState ;

