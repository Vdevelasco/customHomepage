import Button from "./modules/Button";
import Clock from "./modules/Clock";
import DateDisplay from "./modules/Date";
import Localhost from "./modules/Localhost";
import fadeIn from "./functions/fadeIn";
import chatGPTLogo from "./assets/chatGPT-logo.webp";
import redditLogo from "./assets/reddit-logo.png";
import githubLogo from "./assets/github-logo.png";
import youtubeLogo from "./assets/youtube-logo.png";
import background from "./assets/glenn-branca.png";

function App() {
  const chatGPTText = "chatGPT";
  const chatGPTURL = "https://chat.openai.com";
  const redditText = "Reddit";
  const redditURL = "https://reddit.com";
  const githubText = "Github";
  const githubURL = "https://github.com";
  const youtubeText = "Youtube";
  const youtubeURL = "https://youtube.com";

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-cover bg-center bg-black w-full h-full justify-center z-0">
          <div
            id="background"
            className="bg-cover bg-center h-fill w-fill bg-no-repeat opacity-100"
            style={{
              backgroundImage: `url(${background})`,
              animation: fadeIn(0, 1500),
            }}
          >
            <div className="bg-gradient-to-t from-black via-transparent to-black h-screen w-screen opacity-100 z-10">
              <div className="flex flex-row justify-center items-center pt-40">
                  <div className="flex flex-col items-center">
                    <Clock />
                    <DateDisplay />
                </div>
              </div>
            </div>
            <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <div className="flex flex-row mt-4 text-white text-center items-center justify-center w-10/12 mx-auto">
                <Localhost />
              </div>

              <div className="mt-8 items-center justify-center">
                <div className="flex flex-row items-center justify-center mt-4">
                  <Button
                    text={chatGPTText}
                    logo={chatGPTLogo}
                    url={chatGPTURL}
                    style={{ animation: fadeIn(500, 1000) }}
                  />
                  <Button
                    text={redditText}
                    logo={redditLogo}
                    url={redditURL}
                    style={{ animation: fadeIn(800, 1000) }}
                  />
                  <Button
                    text={githubText}
                    logo={githubLogo}
                    url={githubURL}
                    style={{ animation: fadeIn(1100, 1000) }}
                  />
                  <Button
                    text={youtubeText}
                    logo={youtubeLogo}
                    url={youtubeURL}
                    style={{ animation: fadeIn(1400, 1000) }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
