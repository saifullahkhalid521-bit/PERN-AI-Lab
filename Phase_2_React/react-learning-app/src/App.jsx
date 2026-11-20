import {PracticeApp , BrokenComponent , StyledBox , ProfileCard2 , MapOne } from "./practice/week-09-jsx-components/PracticeApp";

import {Heading , Avatar , Badge} from "./practice/week-09-jsx-components/pracWeek9";

function App() {
  return (
    <>
    <PracticeApp/>
    <StyledBox/>
    <BrokenComponent/>
    <ProfileCard2/>
    <MapOne/>

    <Heading text = "Welcome to React" size={32}/>
    <Avatar imageUrl = "https://picsum.photos/seed/picsum/200/300"  name = "Dog Face" />
    <Badge label = "new" color = "red" />
    <Badge label = "Default"  />
    </>
  );
}
export default App;