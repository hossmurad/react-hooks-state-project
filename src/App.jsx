import {useState} from "react";


const App = () => {

const [myObject , setMyObject] = useState({
    name:"Md. Murad Hossain",
    age: 23,
    city:"Beijin",
    home: "Dhaka"
});
    return (
        <div>
            <h1>Name : {myObject.name}</h1>
            <h1>age : {myObject.age}</h1>
            <h1>city : {myObject.city}</h1>
            <h1>home : {myObject.home}</h1>

        </div>
    );
};

export default App;