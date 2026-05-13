import logo from './logo.svg';
import './App.css';

function App() {
  //khai bao ham chao1 nhan tham so name va in ra "chao name"
 // khai bao 1 doi tuong person co cac thuoc tinh id, name, age, address. Sau do khai bao ham chao2 nhan tham so la doi tuong person va in ra "xin chao name!" trong do name la thuoc tinh name cua doi tuong person
  let chao1 = (name) => console.log(`chao ${name}!`);
  let person = {
    id: 1,
    name: "Huy",
    age: 20,
    address: "Quang Ngai"
  };
  let chao2 = (person) => console.log(`xin chao ${person.name}!`);
//in thong tin cua doi tuong person ra the card trong react

  return (
    <>
    <button onClick={() => chao1("Huy")}>Chao</button>
    <div className="card">
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Address: {person.address}</p>
    </div>
    </>
    
  );
}

export default App;