import React from 'react';

/**
 * AnimalTable - Displays a table of animal records.
 * @param {Array} animals - Array of animal objects to display.
 */
const AnimalTable = ({ animals, onRowClick }) => {
  return (
    <table className= "table">
      <thead>
        <tr>
        <th>Animal Id</th>
        <th>Record Number</th>
          <th>Name</th>
          <th>Breed</th>
          <th>Type</th>
          <th>Color</th>
          <th>Outcome Type</th>
          <th>Outcome Subtype</th>
          <th>Sex Upon Outcome</th>
          <th>Age Upon Outcome</th>
          {/* Add additional columns as needed */}
        </tr>
      </thead>
      <tbody>
        {animals.map(animal => (
          <tr key={animal._id} onClick={() => onRowClick(animal)}>
            <td>{animal.animal_id || "N/a"} </td>
            <td>{animal.rec_num || "N/a"} </td>
            <td>{animal.name || "N/a"} </td>
            <td>{animal.breed || "N/a"}</td>
            <td>{animal.animal_type || "N/a"}</td>
            <td>{animal.color || "N/a"}</td>
            <td>{animal.outcome_type || "N/a"}</td>
            <td>{animal.outcome_subtype || "N/a"}</td>
            <td>{animal.sex_upon_outcome || "N/a"}</td>
            <td>{animal.age_upon_outcome || "N/a"}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalTable;