import React, { useEffect, useState, Component } from "react";
import { Suspense } from 'react';
import axios from 'axios';

class Home extends Component {
    render() {
        var list = ['a', 'b'];
        // axios.get('http://10.0.0.249:5001/device/list')
        return (
            <div>
                <h3>Home</h3>
                <p>The plane display is not yet ready, please go to <a href="http://plane.centurionx.net">http://plane.centurionx.net</a> for the current data</p>
                <Page />
            </div >
        )
    }
}
export interface Device {
    serialNumber: string;
    isOnline: boolean;
    lastPowerChange: string;
}

function Page() {
    const empy: Device = {
        serialNumber: "",
        isOnline: false,
        lastPowerChange: ""
    };
    const [deviceList, setDeviceList] = useState([empy]);

    async function restart(serialNumber : string){
            var key = localStorage.getItem("key");
            if (key == "")
            {
                console.warn("no key");
                return;
            }
            const myHeaders = new Headers();
            myHeaders.append("token", key!);
            myHeaders.append("Content-Type", "application/json");

            
            const response = await fetch("http://localhost:5000/device/restart/"+ serialNumber, {
              method: "POST",
              headers: myHeaders,
            });

    }



    useEffect(() => {
        async function startFetching() {
            var key = localStorage.getItem("key");
            if (key == "")
            {
                console.warn("no key");
                return;
            }
            const myHeaders = new Headers();
            myHeaders.append("token", key!);
            myHeaders.append("Content-Type", "application/json");

            
            const response = await fetch("https://api.centurionx.net/device/list", {
              method: "GET",
              headers: myHeaders,
            });


            console.log(response);
            var res = await response.json();

            console.log(res);
            //var result = await axios.get('https://api.centurionx.net/device/list');
            

            //console.log(result.data);
            if (!ignore) {
                setDeviceList(res);
                // setDeviceList(['a','b','c']);
            }
        }
        let ignore = false;
        startFetching();

        return () => { ignore = true };
    }, [])

    return (
        <table>
            <tr><th> SerialNumber </th><th> Online </th> <th> Last Power Change </th></tr>
            {

                deviceList.map((item) => {
                    return <tr>
                        <td>{item.serialNumber} </td>
                        <td> {item.isOnline ? "true" : "false"} </td>
                        <td> {(new Date(item.lastPowerChange)).toString()}</td>
                        <td> <button type="button" > Restart</button></td></tr>
                })
            }
        </table>
    )
}

export default Home;
