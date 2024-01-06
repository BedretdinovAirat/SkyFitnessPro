// import { Password } from "./components/Password/Password";
// import { Login } from "./components/Login/Login";
import * as S from "./AppStyle";
import { Profile } from "./components/Profile/Profile";
import { GlobalStyled } from "./GlobalAppStyle";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";
import { MainPage } from "./pages/main/MainPage";
import { Course } from "./components/course/Course";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <MainPage />
        <Profile />
        <Course />
        {/* <Password /> */}
      </S.Container>
      <GlobalStyled />
      {/* <GlobalStyles /> */}
      <WorkOutComponent />
    </S.Wrapper>
  );
}

export default App;
