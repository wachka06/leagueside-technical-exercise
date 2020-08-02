import React from 'react';

const Sponsor = ({ name, budget }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{budget}</td>
        </tr>
    )
}

export default Sponsor;