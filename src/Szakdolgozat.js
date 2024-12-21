import React, { useState } from 'react';

const Szakdoga = ({ id, title, description, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/szakdoga/${id}`, {
      method: 'DELETE',
    }).then(() => {
      onDelete(id); 
      alert('Deleted successfully');
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedData = {
      title: updatedTitle,
      description: updatedDescription,
    };

    fetch(`http://localhost:8000/api/szakdoga/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }).then(() => {
      onEdit(id, updatedData); 
      setIsEditing(false);
      alert('Updated successfully');
    });
  };

  return (
    <div className="szakdoga">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Szakdoga;
