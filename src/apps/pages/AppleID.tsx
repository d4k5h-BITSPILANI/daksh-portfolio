import { LuExternalLink } from "react-icons/lu";

export default function AppleID() {
  const arr: { id: number; text: string; img: string; link: string }[] = [
    
    {
      id: 1,
      text: "MyFirstBite (Backend)",
      img: "/projects/06.png",
      link: "https://www.myfirstbite.in/",
    },
    {
      id: 2,
      text: "Pokedex",
      img: "/projects/02.png",
      link: "https://poke-dex-bice.vercel.app/",
    },
    {
      id: 3,
      text: "Callsheets/FileUpload",
      img: "/projects/05.png",
      link: "https://callsheets--amber.vercel.app",
    },
    {
      id: 4,
      text: "MacOS Portfolio",
      img: "/projects/04.png",
      link: "https://prakhar-gupta-macos.vercel.app/",
    },
    {
      id: 5,
      text: "My Rama Krishna (Wordpress) Only Mobile",
      img: "/projects/09.png",
      link: "https://myramakrishna.com/",
    },
    {
      id: 6,
      text: "Sports N Stats (React Native) U/P ",
      img: "/projects/10.png",
      link: " ",
    },
  ];

  return (
    <section className='apple_id'>
      <div className='nav'>
        <ul>
          <a href='#home'>
            <li>Home</li>
          </a>
          <a href='#projects'>
            <li>Projects</li>
          </a>
          <a href='#contact'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className='content'>
        <div className='grids grid-1' id='home'>
          <div className='inner'>
            <h1> Daksh Kriplani</h1>
            <h2> UG at BITS PILANI, I am a full Stack Developer?? kind of.. </h2>

            <p>
              Hi, I'm Daksh Kriplani,4th year student at BITS PILANI, a frontend and backend developer who loves making
              amazing websites. I specialize in using React and React Native, a powerful tool for
              creating interactive sites. I'm really into Problem Solving and Data Structres and finding solutions. I also use
              animations with framer-motion and GSAP to bring websites to life.
              Overall, my goal is to create websites that look great and engage
              users.{" "}
            </p>
          </div>
        </div>
        <div className='grids grid-2' id='projects'>
          <div className='inner'>
            <div className='inner'>
              <h1> Projects </h1>
              <p> (Scroll Horizontally) </p>
            </div>
            <div className='images'>
              {arr.map((e) => {
                return (
                  <div className='card' key={e.id}>
                    <img src={e.img} alt='img' />
                    <a href={e.link} target='_blank'>
                      {e.text} <LuExternalLink />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='grids grid-3' id='contact'>
          <div className='inner'>
            <h1>Contact</h1>
            <p>
              {" "}
              I'm available for freelance projects and full time roles, you can contact me directly
              from my email
              <a href='mailto:kriplanidaksh4@gmail.com'>
                (kriplanidaksh4@gmail.com)
              </a>
              or my socials down below:
            </p>

            <ul>
              <li>
                <a href='https://github.com/d4k5h-BITSPILANI' target='__blank'>
                  <img src='/icons/github.png' alt='img' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/daksh-kriplani-53ab18235/'
                  target='__blank'
                >
                  <img src='/icons/linkedin.png' alt='img' />
                </a>
              </li>
            </ul>
            <form action=''></form>
          </div>
        </div>
      </div>
    </section>
  );
}
