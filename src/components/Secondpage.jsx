import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import search from "../assets/search.png";
import "../App.css";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx"

function Secondpage() {
    const { pincode } = useContext(DataContext);
    const [arr, setArr] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false)
                setArr(res[0].PostOffice);
                setFilteredArr(res[0].PostOffice);
            })
            .catch((e) => console.log(e));
    }, []);

    function handleChange(e) {
        const inputValue = e.target.value.toLowerCase();
        setFilter(inputValue);
        const updatedFilteredArr = arr.filter((ele) => {
            return ele.Name.toLowerCase().includes(inputValue);
        });

        setFilteredArr(updatedFilteredArr);
    }

    return (
        <div className='secondpage'>
            {loading?<Loading/>:        <div>
            <div className='pincode'>
                <h4>Pincode: {pincode}</h4>
                <h4>Message: <span>Number of pincodes found</span></h4>
            </div>
            <div className='image-container'>
                <img src={search} alt="Search" />
                <input type="text" placeholder='Filter' onChange={handleChange} />
            </div>
            <div className='cards'>
                {filteredArr !== null && filteredArr.length>0 ? (
                    filteredArr.map((ele) => (
                        <Card
                            key={ele.Name}
                            name={ele.Name}
                            branch={ele.BranchType}
                            delivery={ele.DeliveryStatus}
                            district={ele.District}
                            division={ele.Division}
                        />
                    ))
                ) : (
                    <h1 style={{ color: "red" }}>No records found</h1>
                )}
            </div>
        </div>}
        </div>
    );
}

export default Secondpage;
