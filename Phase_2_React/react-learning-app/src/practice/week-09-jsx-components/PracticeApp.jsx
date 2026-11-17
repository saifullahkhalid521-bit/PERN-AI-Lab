// import UserCard from "./01-user-card";
// import UserProfile from "./01-user-card";
import { UserCard, UserProfile , JsxBasics , MyInfo  } from "./01-user-card";
import {Greeting} from "./03-props"

export function PracticeApp() {
  return (
    <div>
      <h1>My React Learning</h1>

      {/* <UserCard /> */}
      <UserCard name = "Saifullah Khalid🫡" />
      <UserCard name = "Robot🤖" />
      <UserProfile/>
      <JsxBasics/>
      <Greeting name ="Saif Khalid" age ="22" />
    </div>
  );
}


export function BrokenComponent () {
  return (
    <div className="box">
      <h1>Hello</h1>
      <img src="pic.jpg" alt="load jpg"/>
      <p style={{ color: "red" }}>Red Text</p>
      <br />

      <MyInfo name = "Ego" city= "Ranchi" goal= "Fullstack Developer👽"/>
      <MyInfo name="Robot" city="Pune" goal="Take over World👽"/>
      <MyInfo name="Khalid" city="Delhi" goal="Frontend Dev👽"/>
    </div>
  )
}

export function StyledBox () {
  const age = 22;
  return (
    <div className="styledBox" style={{backgroundColor : "lightblue" , padding: "20px" , border: "10px"}}>
      <h3>2 + 2 = {2 + 2}</h3>
      <p>I am {age} year old</p>
    </div>
  );
}

export function ProfileCard2 () {
  const name = "Saifullah";
  const role = "Front-end-developer";
  const skills = ["HTML" , "CSS" , "JS"];
  const experience = 2;

  return (
    <>
    <div style={{border: "2px solid white" , padding: "15px" , width: "300px" , margin: "auto"}}>
    <h2>My name is : {name}</h2>
    <p>My role is : {role}</p>
    <p>My skills are {skills.join(" . ")}</p>
    <p>My experience {1+ experience} years</p>
    </div>
    {/* Profile Card */}
    </>
    
  )
}
// export default PracticeApp;