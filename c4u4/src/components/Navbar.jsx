import About from "./About";
import Home from "./Home";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, gap:70,  fontSize:25, textAlign:"center" , display:'flex'}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      < About/>
      < Home/>
      <div>Products</div>
      <div>Men</div>
      <div>Women</div>
      <div>Kids</div>
      <div>Home decor</div>
    </nav>
  );
};
