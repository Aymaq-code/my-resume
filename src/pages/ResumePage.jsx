import { useAnimation } from "../context/ScrollAnimationProvider";
import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";
import DEG_SVG from "../assets/images/degree.svg";
import DEV_SVG from "../assets/images/developer.svg";
import LER_SVG from "../assets/images/learning.svg";
import CER_SVG from "../assets/images/certificate.svg";

export default function ResumePage() {
  const { registerOnce } = useAnimation();
  return (
    <main className="resumePage">
      <Navigation />

      <div className="resumePage__contents">
        <h1 className="title">Resume</h1>

        {/* experience */}
        <div className="box experience">
          <div className="box__head" ref={registerOnce}>
            <h1>Experience</h1>
            <h2>Work History</h2>
          </div>

          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <h2>Travel Consultant – Tolo Travel & Tours</h2>
              <p>
                Working since 2015 with Emirates Airlines GSA in Afghanistan.
                Skilled in flight bookings (Amadeus, IATI), hotel reservations,
                and visa services. Experienced in handling corporate accounts,
                group bookings, and delivering excellent customer service with
                accuracy and professionalism.
              </p>
            </div>
          </div>

          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <h2>Frontend Developer (Self-Learning & Projects)</h2>
              <p>
                Over 2 years of hands-on learning in frontend development.
                Completed CSS and JavaScript (Beginner to Advanced) courses on
                Udemy (instructors with 200K+ students). Currently 50% through a
                React.js course. Built multiple projects including a resume
                website, to-do app, weather app, and stationery store. Focused
                on responsive design, clean code, and user-friendly UI.
              </p>
            </div>
          </div>
        </div>

        {/* education */}
        <div className="box education">
          <div className="box__head" ref={registerOnce}>
            <h1>Education</h1>
            <h2>Academic Background</h2>
          </div>

          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <img src={DEG_SVG} alt="degree svg" />
              <h2>High School Diploma – Kabul, Afghanistan</h2>
            </div>
          </div>

          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <img src={DEV_SVG} alt="degree svg" />
              <h2>BBA – Business & Administration, Kardan University</h2>
            </div>
          </div>

          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <img src={LER_SVG} alt="degree svg" />
              <h2>
                Diploma in English Language – Buniad-E-Elm Academic Center
              </h2>
            </div>
          </div>

          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <img src={CER_SVG} alt="degree svg" />
              <h2>Online Courses – Udemy (CSS, JavaScript, React.js)</h2>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="box experience">
          <div className="box__head" ref={registerOnce}>
            <h1>Skills</h1>
            <h2>Professional & Technical</h2>
          </div>
          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <h2>Travel Consulting</h2>
              <p>
                Airline Ticketing (Amadeus, IATI, GDS), Visa & Hotel Booking,
                Customer Service, Corporate Accounts Management, Sales &
                Upselling, Problem-Solving.
              </p>
            </div>
          </div>
          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <h2>Frontend Development</h2>
              <p>
                HTML5, CSS3, JavaScript (ES6+), React.js (in progress),
                Responsive Web Design, Git & GitHub, UI/UX Fundamentals.
              </p>
            </div>
          </div>
        </div>

        {/* languages */}
        <div className="box experience">
          <div className="box__head" ref={registerOnce}>
            <h1>Languages</h1>
            <h2>Communication Skills</h2>
          </div>
          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <h2>Dari / Persian – Native</h2>
              <h2>Pashto – Excellent</h2>
              <h2>English – Excellent</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
