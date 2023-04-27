import "../styles/globals.scss";



const pjson = require('../package.json');

function MyApp({ Component, pageProps }) {
  

  return (
      <>
        <Component {...pageProps} />
        <div className="sticky bottom-0 right-0 p-3 text-center text-gray-400">
          Lottto.io version {pjson.version} | By Thomas Tang
        </div>
      </>
  );
}

export default MyApp;
