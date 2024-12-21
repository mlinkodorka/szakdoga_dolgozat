
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAdatContext from './context/ApiContext';

const App = () => {

  const { szakdogaLista } = useAdatContext()

  return (
    <div>
      <h1>Szakdolgozatok</h1>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>GitHub Link</th>
            <th>Oldal Link</th>
            <th>Tagok Neve</th>
          </tr>
        </thead>
        <tbody>
          {szakdogaLista.map(szakdoga => (
            <tr key={szakdoga.id}>
              <td>{szakdoga.szakdoga_nev}</td>
              <td>{szakdoga.githublink}</td>
              <td>{szakdoga.oldallink}</td>
              <td>{szakdoga.tagokneve}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;