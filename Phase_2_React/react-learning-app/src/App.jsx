import {PracticeApp , BrokenComponent , StyledBox , ProfileCard2 , MapOne } from "./practice/week-09-jsx-components/PracticeApp";

import {Heading , Avatar , Badge, DetailCard, DaysList, Counter, ColorBoxes , ProductTag , FruitList , StudentList , Maping} from "./practice/week-09-jsx-components/pracWeek9";

import { WeatherCard } from "./practice/week-09-jsx-components/09-weather-card";
import { ProfileStats } from "./practice/week-09-jsx-components/10-profile-stats";

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
    <DetailCard title="Test Card" description="This is a test description for the detail card." />
    <DaysList />
    <Counter />
    <ColorBoxes />
    <ProductTag productName = "Mobile" price = "23000"/>
    <FruitList/>
    <StudentList/>
    <Maping/>
      <WeatherCard city="Karachi" temperature={32} condition="Sunny" />
      <WeatherCard city="Islamabad" temperature={22} condition="Cloudy" />
      <ProfileStats username="saif_khalid" posts={42} followers={1250} following={89} />
    </>
  );
}
export default App;