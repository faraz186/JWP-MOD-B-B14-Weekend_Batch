import Button from "./Components/Button/Button";
import Student from "./Components/Student/Student";
import "./App.css";
import Card from "./Components/Card/Card";
import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jfif";
import user3 from "./assets/user3.jfif";
import user4 from "./assets/user4.png";
import { Data } from "./data";

const App = () => {
  console.log(Data);   

  return (
    <>
    
      <h1 className="heading">Home Page</h1>

      <Student />

      <Student stdName="ali" stdAge={25} isStudent={true} />


      <Student stdName="farooq" stdAge={20} isStudent={false} />


      <Student stdName="ahmed" stdAge={28} isStudent={true} />


      <Student stdAge={56} isStudent={true} />


      <Card imgSrc={user1} title="Title 01" desc="This is a sample Text 01" />

      <Card imgSrc={user2} title="Title 02" desc="This is a sample Text 02" />

      <Card imgSrc={user3} title="Title 03" desc="This is a sample Text 03" />

      <Card imgSrc={user4} title="Title 04" desc="This is a sample Text 04" />





      {Data.map((e, i) => {
        return <Card key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />;
      })}




      {/* There are three(3) ways to apply css in jsx elements */}

      {/* 1) Inline CSS */}

      {/* 2) External CSS */}

      {/* 3) Module CSS */}
    </>
  );
};

export default App;
