import React, { useEffect, useState, Component } from "react";
import { Suspense } from 'react';
import axios from 'axios';


class Login extends Component {
    // Source - https://stackoverflow.com/a/69374442
    // Posted by Sorter, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-10-01, License - CC BY-SA 4.0

    logout() {
      localStorage.removeItem("key");
    }

    render() {
        var j = async function(event:any) 
     {
        var loginView = ( <div>
                <h3>Welcome!</h3>
                  <form id="formy" method="post" onSubmit={j} class="form-example" >
                    <div class="form-example">
                      <label for="name">Enter your name: </label>
                      <input type="text" name="user" id="name" required />
                    </div>
                    <div class="form-example">
                      <label for="psw">Enter your email: </label>
                      <input type="password" name="pass" id="pass" required />
                    </div>
                    <div class="form-example">
                      <input type="submit" value="Subscribe!" />
                    </div>
                  </form>
            </div >);
           event.preventDefault();
            var formData = new FormData(event.target);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

           const response = await fetch("https://api.centurionx.net/login", {
             method: "POST",
             headers: myHeaders,
             body: JSON.stringify(Object.fromEntries(formData))
           });

           console.log("got it?");
           console.log(response);
           if ( response.ok)
             {
               var key = await response.json();
               console.log("I am here");
               console.log(key);
               console.log(key.key);
              localStorage.setItem("key", key.key);
             }

            //Fail the onsubmit to avoid page refresh.
            return false; 
        };
        var list = ['a', 'b'];
        // axios.get('http://10.0.0.249:5001/device/list')
        var form = (
                  <form id="formy" method="post" onSubmit={j} class="form-example" >
                    <div class="form-example">
                      <label for="name">Enter your name: </label>
                      <input type="text" name="user" id="name" required />
                    </div>
                    <div class="form-example">
                      <label for="psw">Enter your email: </label>
                      <input type="password" name="pass" id="pass" required />
                    </div>
                    <div class="form-example">
                      <input type="submit" value="Subscribe!" />
                    </div>

                  </form>);

        var logout = (<button type="button" onClick={ this.logout()}>Test</button>);
        return (
            <div>
                <h3>Welcome!</h3>
                { localStorage.getItem("key") != null ? logout : form}
            </div >


        )
    }
}
export default Login;
