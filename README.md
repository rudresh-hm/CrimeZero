# Project Titile
Crime Zero Inc is an application which sends an emergency sms code to a superhero of your choice expecting them to solve the crime, thereby reducing the crime rate.

# Link to the project
The final version of this application is running on heroku [click here to goto project](https://superhero-caller.herokuapp.com/).

# Tech/Framework used
* __client side__- React js and React router dom
* __Back-end__- node with Express js

# Algorithm at the back-end
* __Problem__: When the user sends the code in the request body to the server, we have to map the code to the corresponding superhero and send the same as response. 
* __Idea behind the algorithm__: Instead of finding out all the possible words for that particular code which would take O(n!) and then search for the correct name, what we do is create a array of codes corresponding to all the  superheros in the array 'superheroArr' now we just have to search the code sent in the request with our mapped array which will have the running time of O(n).
``` javascript
    const superheroArr=["SUPERMAN","THOR","ROBIN","IRONMAN","GHOSTRIDER","CAPTAINAMERICA"];
    //the fucntion below maps all superheros to their corresponding codes
    function mapStringToCode(shArr){
    let resultArr=shArr.map((item)=>{
        let code="0 "
        for(let i=0;i<item.length;i++){
            code=code+alphanumMap[item[i]];
        }
        return code;
    });
    return resultArr;
}
```
# Installation to run locally
This link contains the full application created using create react app.
NOTE: Node must be installed on the local machine.
* To install all the required dependencies-
  ```bash
  npm install
* To start the appplication on localhost-
    ```bash
    npm start
    ```
## For the application to work the node server must be running.
Github link to sever files [click here for server repo](https://github.com/rudresh-hm/Crime-zero-server)
* cd to above folder and run the following command
    ```bash
    npm install
    ```
* now run the app.js file
    ```bash 
    node app.js
    ```
Note: the server runs on port 8000.



