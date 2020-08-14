# Project Titile
Crime Zero Inc is an application which sends an emergency sms code to a superhero of your choice expecting them to solve the crime, thereby reducing the crime rate.

# Link to the project
The final version of this application is running on heroku link [click here to goto ptoject]().

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
To install all dependencies (node  should be installed)-
```bash
npm install
```
To start React App-
```bash
 npm start
```
Back-end-
```bash
npm install
```
Run node-
```bash
node app.js
```
