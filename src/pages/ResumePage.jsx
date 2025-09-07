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
              <h2>Full-Stack Developer</h2>
              <p>
                Managed end-to-end website development projects, ensuring high
                performance and user satisfaction. Collaborated with clients to
                understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <h2>Project Manager</h2>
              <p>
                Led cross-functional teams to successfully launch multiple
                projects. Oversaw project timelines, budgets, and resources to
                ensure timely and quality project delivery.
              </p>
            </div>
          </div>
          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <h2>Client Manager</h2>
              <p>
                Built strong relationships with clients, providing exceptional
                service and support. Acted as a primary point of contact for
                client inquiries and project updates.
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
              <h2>Bachelor's Degree in Computer Science </h2>
            </div>
          </div>
          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <img src={DEV_SVG} alt="degree svg" />
              <h2>Specialization in Web Development</h2>
            </div>
          </div>
          <div className="box__body ">
            <div className="details" ref={registerOnce}>
              <img src={LER_SVG} alt="degree svg" />
              <h2>Continuous Learning and Skill Enhancement</h2>
            </div>
          </div>
          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <img src={CER_SVG} alt="degree svg" />
              <h2>Certifications in Front-End Technologies</h2>
            </div>
          </div>
        </div>
        {/* achievements */}
        <div className="box experience achievments">
          <div className="box__head" ref={registerOnce}>
            <h1>Achievements</h1>
            <h2>Accolades & Recognitions</h2>
          </div>
          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <div className="left">
                <h2>Client Satisfaction</h2>
                <p>Consistently Delivering Beyond Expectations</p>
              </div>
              <div className="right">
                <p>
                  Maintained a 95%+ client satisfaction rate across multiple
                  projects by prioritizing user experience, accessibility, and
                  performance. Received repeat business and referrals due to a
                  strong commitment to quality and open communication.
                </p>
              </div>
            </div>
          </div>
          <div className="box__body">
            <div className="details" ref={registerOnce}>
              <div className="left">
                <h2>Project Excellence</h2>
                <p>Successfully Launching High-Impact Websites</p>
              </div>
              <div className="right">
                <p>
                  Maintained a 95%+ client satisfaction rate across multiple
                  projects by prioritizing user experience, accessibility, and
                  performance. Received repeat business and referrals due to a
                  strong commitment to quality and open communication.
                </p>
              </div>
            </div>
          </div>
          <div className="box__body ">
            <div className="details" ref={registerOnce}>
              <div className="left">
                <h2>Innovative Solutions</h2>
                <p>Pioneering Scalable and Future-Proof Technologies</p>
              </div>
              <div className="right">
                <p>
                  Maintained a 95%+ client satisfaction rate across multiple
                  projects by prioritizing user experience, accessibility, and
                  performance. Received repeat business and referrals due to a
                  strong commitment to quality and open communication.
                </p>
              </div>
            </div>
          </div>
          <div className="box__body ">
            <div className="details" ref={registerOnce}>
              <div className="left">
                <h2>Team Collaboration</h2>
                <p>Fostering a Productive and Inclusive Work Environment</p>
              </div>
              <div className="right">
                <p>
                  Worked closely with cross-functional teams, including
                  designers, marketers, and backend developers, to bring
                  projects from concept to completion. Championed agile
                  methodologies, ensuring seamless workflows and faster project
                  turnaround.
                </p>
              </div>
            </div>
          </div>
          <div className="box__body ">
            <div className="details" ref={registerOnce}>
              <div className="left">
                <h2>Leadership Excellence</h2>
                <p>Guiding and Mentoring Junior Developers</p>
              </div>
              <div className="right">
                <p>
                  Led a team of 4+ junior developers, providing mentorship and
                  guidance on best coding practices, debugging techniques, and
                  performance optimization. Conducted training sessions to
                  enhance team skills in React, JavaScript, and modern
                  frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="box__body bb__transparent">
            <div className="details" ref={registerOnce}>
              <div className="left">
                <h2>Community Engagement</h2>
                <p>Sharing Knowledge and Giving Back</p>
              </div>
              <div className="right">
                <p>
                  Actively contributed to open-source projects, participated in
                  developer meetups, and wrote technical articles to help fellow
                  developers. Engaged in tech communities to share insights,
                  stay updated on industry trends, and support aspiring web
                  developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
