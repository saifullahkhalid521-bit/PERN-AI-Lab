// import UserCard from "./01-user-card";
// import UserProfile from "./01-user-card";
import { UserCard, UserProfile , JsxBasics , MyInfo  } from "./01-user-card";

export function PracticeApp() {
  return (
    <div>
      <h1>My React Learning</h1>

      {/* <UserCard /> */}
      <UserCard />
      <UserProfile/>
      <JsxBasics/>
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

      <MyInfo />
    </div>
  )
}
// export default PracticeApp;