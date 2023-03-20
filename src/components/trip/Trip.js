import React from 'react';
import './tripStyle.css';
import TripData from './TripData';
import trip1 from '../../image/img1.jpg';
import trip2 from '../../image/img6.jpg';
import trip3 from '../../image/img10.jpg';


export default function Trip() {

  return (
    <div className='trip'>
       <div className='trip__header'>
           <h1>Recent Trips</h1>
           <p>You can discover unique destinations Google Maps.</p>
       </div>

        <div className='tripcard'>
            <TripData 
            image={trip3}
            heading="Trip in Indonesia"
            desc="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 island, including Sumatra. Sulwesi, and parts of Borneo and New Guinea."
            />

            <TripData 
            image={trip2}
            heading="Trip in Malaysia"
            desc="Malaysia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 island, including Sumatra. Sulwesi, and parts of Borneo and New Guinea."
            />

            <TripData 
            image={trip1}
            heading="Trip in France"
            desc="France, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 island, including Sumatra. Sulwesi, and parts of Borneo and New Guinea."
            />
        </div>
    </div>
  )
}
