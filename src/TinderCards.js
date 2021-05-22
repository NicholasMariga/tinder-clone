
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';


function TinderCards() {
    const [people, setPeople] = useState([

        // {
        //     name: "Nicholas Mariga",
        //     imgUrl: "https://scontent.fnbo11-1.fna.fbcdn.net/v/t1.6435-1/c0.0.720.720a/p720x720/53364970_2255114454709217_784420839687716864_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=mWuLkr6Two4AX-rwU0v&_nc_ht=scontent.fnbo11-1.fna&tp=27&oh=f46671f02fd8dba68888f590801e5d8e&oe=60CFA9AD"
        // },

        // {
        //     name: "Elon Musk",
        //     imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        // },
        // {
        //     name: "Jeff Bezos",
        //     imgUrl:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        // },
        // {
        //     name: "Trevor Noah",
        //     url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwOTcxODYzOTMxODg5MDAw/gettyimages-1151301182.jpg"
        // },
        // {
        //     name: "Larry Page",
        //     imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc2NTUzODU1ODcwOTY1/gettyimages-83414114.jpg"
        // },
        // {
        //     name: "Donald Triumph",
        //     imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzAyMDMwMjQzNTA1NTA0/donald_trump_photo_michael_stewartwireimage_gettyimages-169093538jpg.jpg"
        // },
        // {
        //     name: "Warren Buffett",
        //     imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MTY4Njg1MDY3/warren-buffett-9230729-1-402.jpg"
        // },
        

    ] );

    //hooking BE to FE
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            
            setPeople(req.data);
        }
  
        fetchData();

    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                     className="swipe"
                     key={person.name}
                     preventSwipe={["up","down"]}
                     onSwipe={(dir) => swiped(dir, person.name)}
                     onCardLeftScreen={() => outOfFrame(person.name)}>
                         <div 
                           style={{background: "url(" + person.imgUrl + ")"}}
                           className="card">
                               <h3>
                                   {person.name}
                               </h3>
                         </div>
                    </TinderCard>
                ))}
            </div>    
        </div>
    )
}

export default TinderCards
