import * as SC from "./AppCustom";
import CommentsList from "./components/CommentsList/CommentsList";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Rate from "./components/Rate/Rate";
function App() {
  return (
    <SC.AppCustom>
      <Hero>
        <Intro />
        <Rate />
      </Hero>
      <CommentsList/>
    </SC.AppCustom>
  );
}

export default App;
