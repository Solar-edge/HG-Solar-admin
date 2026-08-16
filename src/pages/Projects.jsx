import ReviewOne from '../assets/review 1.jpeg';
import ReviewTwo from '../assets/review 2.jpeg';
import ReviewThree from '../assets/review 3.jpeg';
import ReviewFour from '../assets/review 4.jpeg';
import ReviewFive from '../assets/review 5.jpeg';
import ReviewSix from '../assets/review 6.jpeg';
import ReviewSeven from '../assets/review 7.jpeg';




export default function Projects() {
  return (
    <>

      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />

      <section className="section page-top simple-page">
        <span className="eyebrow">PROJECTS</span>
        <h1>Solar projects that make a difference.</h1>
        <div className="stats">
          <div className="stats-and-description">
            <h3 className="figure">
              300+
            </h3>
            <p className="des">
              Projects Completed
            </p>
          </div>
          <div className="stats-and-description">
            <h3 className="figure">
              2MW+
            </h3>
            <p className="des">
              Total Capacity
            </p>
          </div>
          <div className="stats-and-description">
            <h3 className="figure">
              150+
            </h3>
            <p className="des">
              Clients
            </p>
          </div>
        </div>
        <div className="project-placeholders">
          <article>
            <div className="article-writeup">
              <span>PROJECT 01</span>
              <h2>Community Solar</h2>
            </div>
            <img src={ReviewOne} className='review-one' alt="Picture of some men on a roof" />
          </article>
          <article>
            <div className="article-writeup">
              <span>PROJECT 02</span>
              <h2>Eduction Centers Solar</h2>
            </div>
            <img src={ReviewTwo} className='review-two' alt="Picture of a building with solars on it" />
          </article>
          <article>
            <div className="article-writeup">
              <span>PROJECT 03</span>
              <h2>Residential Inverters</h2>
            </div>
            <img src={ReviewThree} className='review-three' alt="Picture of a Solar Inverters" />
          </article>
          <article>
            <div>
              <span>PROJECT 04</span>
              <h2>Residential Inverters and Solar Panels</h2>
            </div>
            <img src={ReviewFour} className='review-four' alt="Picture of a building with solars on it" />
          </article>
          <article>
            <div>
              <span>PROJECT 05</span>
              <h2>Educational Center Solar</h2>
            </div>
            <img src={ReviewFive} className='review-five' alt="Picture of a building with solars on it" />
          </article>
          <article>
            <div>
              <span>PROJECT 06</span>
              <h2>Residential Inverters</h2>
            </div>
            <img src={ReviewSix} className='review-six' alt="Picture of a building with solars on it" />
          </article>
          <article>
            <div>
              <span>PROJECT 07</span>
              <h2>Educational Center Solar</h2>
            </div>
            <img src={ReviewSeven} className='review-seven' alt="Picture of a building with solars on it" />
          </article>
        </div>
      </section>
    </>


  );
}