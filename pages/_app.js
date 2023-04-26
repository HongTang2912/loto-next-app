import "../styles/globals.scss";
import {SocketTemplate} from "../store/socketStore";


const pjson = require('../package.json');

function MyApp({ Component, pageProps }) {
  

  return (
    <SocketTemplate>
      <>
        <Component {...pageProps} />
        <div className="sticky bottom-0 right-0 p-3 text-center text-gray-400">
          Lottto.io version {pjson.version} | By Thomas Tang
        </div>
      </>
    </SocketTemplate>
  );
}

export default MyApp;
