import React from 'react';
import DestinationDeta from './DestinationDeta';
import Destination1 from '../../image/river1.jpg';
import Destination2 from '../../image/river2.jpg';
import Destination3 from '../../image/long1.jpg';
import Destination4 from '../../image/long2.jpg';
import "./destinationStyle.css";

const Destination = () => {

    return(
        <>
        <div className='destination'>
            <div className='header__desti'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            </div>

            <DestinationDeta
            className="frist__desc"
              heading="Taal Volcano, Batangas"
              desc="One of the most inconic views in luzon, Mt. Taal boasts a volcano insade a lake inside an island. If you fancy a closer look, the hike up to the creter is a mere 45 minutes, and is easy enough for beginners.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

              img1={Destination1}
              img2={Destination2}
            />

            <DestinationDeta
            className="second__desc__reverse"
            heading="Mt. Daguldul, Batangas"
            desc="One of the most inconic views in luzon, Mt. Taal boasts a volcano insade a lake inside an island. If you fancy a closer look, the hike up to the creter is a mere 45 minutes, and is easy enough for beginners.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

            img1={Destination3}
            img2={Destination4}
          />
        </div>
        </>
    )
}

export default Destination;