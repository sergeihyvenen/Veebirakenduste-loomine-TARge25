import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 {/*const [count, setCount] = useState(0)*/}
  document.getElementById("");
  //näitab kõiki DOM-i elemente, mis on lehel olemas. See on nagu
  //veebilehe struktuuri kaart, mis näitab kõiki elemente ja
  //nende suhteid üksteisega. See võib olla kasulik, kui
  //soovite mõista, kuidas leht on üles ehitatud ja kuidas
  //erinevad elemendid omavahel seotud on.
  //console.log(document);
  
  //dir näitab kõiki DOM-i elemente, mis on lehel olemas, kuid see
  //kuvab need hierarhiliselt, näidates iga elemendi lapsi ja vanemaid.
  //See on kasulik, kui soovite näha, kuidas elemendid on omavahel seotud
  //ja kuidas nad on paigatatud lehel. See võib aidata teil mõista,
  //kuidas leht on üles ehitatud ja kuidas erinevad elemendid omavahel seotud on.
  //console.dir(document);

  //nüüd proovime muuta documendi title-i, mis on DOM-i element.
  //see on nagu veebilehe pealkiri, mis kuvatakse brauseri vahekaardil.
  //document.title = "DOM-i pealkiri on muudetud"

  //nüüd proovime muuta documenti body tastavärvi, mis on DOM-i element.
  //document.body.style.backgroundColor = "skyblue";

  //nüüd muudame h1 all olevat teksti värvi, mis on DOM-i element. See on
  //nagu veebilehe peamine pealkiri, mis kuvatakse lehe sisu sees.
  //document.querySelector("h1")!.textContent = "DOM-i peamine pealkiri on muudetud!";

  //Nüüd sisestame uue muutuja nimega useranme
  // see on nagu veebilehe kasutajanimi, mis võib olla tühi või siselda
  //kasutaja nime. see voib olla kasulik, kui soovite näidata erinevat
  // teksti sõltuvalt sellest, kas kasutaja on sisee logitud või mitte
  
  const username: string = "";

  const domTitle = document.getElementById("dom-Title");
  if (domTitle){
    domTitle.textContent += username === "" ? "Tere külaline!" : username;
  }
   
  return (
    <>
      <section id="center">
        {/*<div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>*/}
      <h1 id ="dom-Title">
        {username === "" ? "Mis on DOM!" : username}
      </h1>
        <p>
          DOM on document object model.
          On võimalik teha staatiline leht dünaamiliseks. JS/TS on
          võimalik manipuleerida DOM-i, millega saab muuta sisu, struktuuri
          ja vaadet.
          <br />
          <br />
            Kui vaadate index.html, siis näete erinevaid elemente,
            mis suhtlevad DOM-iga. Näiteks div id="root" /div on koht,
            kuhu React rakendus renderdatakse. Kui React rakendus käivitub,
            siis see loob DOM-i elemendid ja renderdab need #root div-i sisse,
            võimaldades teil näha ja suhelda nende elementidega veebilehel.
            <br />
            <br />
            Nt, html sees on head ja title. Body sees on h1, p, a jne. Need
            on kõik DOM-i elemendid, mida saab JavaScripti abil manipuleerida.
        </p>
      </section>

      {/*<div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>*/}

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
