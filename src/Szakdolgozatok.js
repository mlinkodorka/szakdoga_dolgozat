import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from './context/ApiContext';

const Szakdolgozatok = () => {
  const [szakdogak, setSzakdogak] = useState([]);
  const { fetchSzakdogak, deleteSzakdoga } = useContext(ApiContext);

  useEffect(() => {
    const getSzakdogak = async () => {
      const data = await fetchSzakdogak();
      setSzakdogak(data);
    };
    getSzakdogak();
  }, [fetchSzakdogak]);

  const handleDelete = async (id) => {
    await deleteSzakdoga(id);
    setSzakdogak(szakdogak.filter(doga => doga.id !== id));
  };

  return (
    <div className="container">
      <h2>Szakdolgozatok</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Név</th>
            <th>GitHub Link</th>
            <th>Webcím</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {szakdogak.map((szakdoga) => (
            <tr key={szakdoga.id}>
              <td>{szakdoga.szakdoga_nev}</td>
              <td><a href={szakdoga.githublink} target="_blank" rel="noopener noreferrer">GitHub</a></td>
              <td><a href={szakdoga.oldallink} target="_blank" rel="noopener noreferrer">Webcím</a></td>
              <td><button onClick={() => handleDelete(szakdoga.id)} className="btn btn-danger">Törlés</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Szakdolgozatok;
