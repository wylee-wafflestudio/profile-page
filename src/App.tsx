import './App.css';

function App() {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img
          className="profile-image"
          src="src/assets/profile-image.jpg"
          alt="Profile"
        />
      </div>

      <div className="name-section">
        <h1 className="name-ko">이우열</h1>
        <h2 className="name-en">Wooyeol Lee</h2>
        <p>컴퓨터공학부 20학번</p>
        <p>MBTI - INFJ</p>
        <p>헬스와 식단하기가 취미입니다 🐮</p>
        <p>3대 500이 되고 싶어요</p>
      </div>

      <div className="contact-section">
        <a href="mailto:wooyeol0519@snu.ac.kr">
          <img className="logo" src="src/assets/gmail.svg" alt="Gmail Logo" />
        </a>
        <a href="https://github.com/thisiswooyeol">
          <img className="logo" src="src/assets/github.svg" alt="GitHub Logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
