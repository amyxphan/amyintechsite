import React, { useState, useEffect } from 'react';
import './About.css'; 

//importing photos
import about1 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/about1.jpg';
import highlight1 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight1.JPG';
import highlight2 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight2.jpg';
import highlight3 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight3.jpg';
import highlight4 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight4.jpg';
import highlight6 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight6.jpg';
import highlight7 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight7.JPG';
import highlight8 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight8.JPG';
import highlight9 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight9.JPG';
import highlight10 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight10.JPG';
import highlight11 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight11.JPG'; 
import highlight12 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight12.JPG';
import highlight13 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight13.jpg';
import highlight14 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight14.JPG';
import highlight15 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight15.JPG';
import highlight16 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight16.jpg';

// typewwriter effect for intro
const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, index, text, speed]);

  return <span>{displayedText}</span>;
};

//slideshow functionallities
const slides = [
  { img: highlight1,
    title: '2022 New Student Organization of the Year',
    subtitle: 'Awarded by UNT Department of Student Activities',
    caption: ' Honors a newly created student organization that has contributed excellent service and leadership to the University community or constituent group' 
  },
  { img: highlight2, 
    title: '2022 UNT Brick Ceremony',
    subtitle: 'Awarded by UNT Department of Student Activities',
    caption: ' Honors a newly created student organization that has contributed excellent service and leadership to the University community or constituent group' 
  },
  { img: highlight6, 
    title: 'UNT SASE First General Meeting',
    subtitle: 'collaboration with SHPE, NSBE, and American Airlines',
    caption: ' UNT SASE first ever meeting as a chapter, we had over 45+ engineering students in attendance at this meeting' 
  },
  { img: highlight3, 
    title: '2022 SASE Outstanding New Chapter',
    subtitle: 'Awarded by Society of Asian Scientists and Engineers (SASE) ',
    caption: ' Recognize chapters and student leaders around the nation who have gone above and beyond the call of duty over their recognized year. These chapters are acknowledged in professional development, cultural awareness, diversity, community involvement, impact of events, initiatives, and member engagement to name a few. * Awarded to the chapter that made outstanding contributions and advancements of SASEs mission statement',
  },
  { img: highlight4, 
    title: '2022 CodeForGood Hackathon Winner',
    subtitle: 'Awarded by JPMorgan Chase & Co. (Plano, TX)',
    caption: ' Generated a website and mobile application to help Education to Employment Partners (non-profit) expand their mission to help expand Coastal Compass programming to residents of the rural areas of the Coastal Bend.',
  },
  { img: highlight8, 
    title: '2023 President of the Year',
    subtitle: 'Awarded by UNT Department of Student Activities',
    caption: ' Honors a president (out of 450+) who has demonstrated a high level of leadership and involvement in their organization' 
  },
  { img: highlight7, 
    title: '2023 Software Engineer Intern at JPMC',
    subtitle: 'my 1st day at my dream internship',
    caption: ' Established a backend testing system enabling 100% service automation for customer verification without disrupting user experience within 3 months. * Excelled as a problem-solver for cloud deployment and multithreading ensuring smoother and efficient operations of a testing application.' 
  },
  { img: highlight10, 
    title: '2023 Grace Hopper Scholar',
    caption: ' attended GHC 2023 in Orlando, FL * Received a scholarship that allows women and non-binary individuals who are undergraduate students, graduate students, or post-doctoral students to attend GHC 23 virtually * Gained access to career and academic workshops, networking opportunities, inspirational role models, and memories that will last a lifetime' 
  },
  { img: highlight11, 
    title: 'SASE Mental Health Initiative Team Member',
    caption: ' participated in SASE Mental Health initiative * created monthly newsletters, social media posts, and support groups available for collegiate and professional SASE members.' 
  }, 
  { img: highlight12, 
    title: '2023-24 SASE South Regional Coordinator',
    caption: ' Serve as a liaison to keep communications between the SASE National Board and advocate for 4 collegiate chapters. * Elevated growth and engagement in SASE mission by providing guidance and support to 4 university chapters; Embry-Riddle Aeronautical University (ERAU), University of Houston (UH), University of Miami (UM), and University of Oklahoma (OU)' 
  },
  { img: highlight14, 
    title: 'hosted Networking 101 workshop',
    subtitle: 'at SASE South Central Regional Conference',
    caption: ' led a workshop for students about networking at Texas A&M university * over 75+ students in attendance (many students were standing in the back)' 
  },
  { img: highlight16, 
    title: 'Supported at 4 SASE South Chapters',
    subtitle: '1 of my 4 schools that I mentored (OU)',
    caption: ' mentored over 25+ students and advised 40+ students in leadership operations within chapters * supported the Univerity of Oklahoma (OU), University of Houston (UH), Embry-Riddle Aeronautics University (ERAU), and University of Miami (UM)' 
  },
  { img: highlight13, 
    title: 'WeHack UTD Challenge Winner',
    subtitle: 'won 2nd place in L3Harris Challenge',
    caption: ' Developed a full-stack React application with a team of 4 over 24 hours * Worked on hand drawing and developing the UI/UX for the mobile app while editing pages following Figma Design.' 
  },
  { img: highlight15, 
    title: '2024 UNT Golden Eagle Recipient',
    subtitle: 'Awarded by UNT Department of Student Activities',
    caption: ' the most prestigious award that UNT bestows on a student leader. The recipients show a tremendous commitment to co-curricular activities and enhancing campus life at UNT by engaging in considerable service and displaying great leadership, all while achieving excellence in the classroom.' 
  },
  { img: highlight9, 
    title: 'Completed B.S. in Computer Engineering',
    subtitle: 'from the University of North Texas',
    caption: 'Key Highlights: * founded a new chapter of SASE at UNT * served as President for SASE UNT (2 yrs) * served as SASE South Regional Coordinator * served as Vice President for Engineers United (HackUNT) * made Dean’s List (multiple semesters) * 2022 UNT New Student Org of the Year * 2022 SASE Outstanding New Chapter * 2022 CodeForGood Hackathon Winner * 2023 James Carls Matthews President of the Year * 2023 SASE South Region Collegiate Star Honorable Mention * 2023 SWE Intern at JPMorgan Chase * 2023 Grace Hopper Celebration Scholar * 2024 WEHack Winner (2nd place L3Harris Challenge) * 2024 Golden Eagle Award Recipient ' 
  },
];


function About() {
  //slideshow 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="About">
      <header className="About-header">
        <p className="About-title">
          $ <Typewriter text="print(About Me)" />
        </p>

      <div className="About-intro-container">

        <img src={about1} className="About-photo" alt="" />

        <div className="About-intro-des">
          <h1 className="About-subtitle">
            Get to know me!
          </h1>

          <ul className="About-intro">
            <li> 🎓 &nbsp;&nbsp;Recent Grad from UNT </li>
            <li> 💻 &nbsp;&nbsp;B.S. Computer Engineering </li>
            <li> 👩‍💻 &nbsp;&nbsp;Incoming SWE at JPMorgan Chase & Co. </li>
            <li> 🧪 &nbsp;&nbsp;Founder of Society of Asian Scientists and Engineers at UNT (SASE UNT) </li>
          </ul>
        </div>
      </div>

      <div className="About-spacer"></div>

      <div className="About-story-container">
        <h1 className="About-story-subtile">
          My Story
        </h1>

        <p className="About-intro">
        I grew up in a low-income, immigrant family near Dallas, TX, where my parents encouraged me 
        to seize every opportunity. As a child, I often stole my dad’s screwdriver to take apart and 
        reassemble household items. At 12, I entered my first STEM competition and won 1st place in 
        state math, marking the beginning of my engineering journey. I completed high school in 3 
        years, balancing leadership activities in 3 different clubs and managing our nationally 
        ranked varsity girl’s basketball team. I attended the University of North Texas, earning a 
        B.S. in Computer Engineering. During my time there, I founded the Society of Asian Scientists
         and Engineers (SASE) and spent my free time learning computer science concepts beyond my 
         formal studies. After graduation, I will join JPMorgan Chase & Co. as a Software Engineer. 
         In my free time, I enjoy hiking, pilates, playing with my pet hamster, and taking care of my 
         plants. I am passionate about accessibility and aim to create innovative solutions that 
         bridge gaps and drive positive change in the tech industry.
        </p>
      </div>

      <div className="About-awards-container">
        <h1 className="About-subtitle">
          Highlights + Leadership
        </h1>

        <div className="About-slideshow-container">
          {slides.map((slide, index) => (
            <div key={index} className={`mySlides fade ${index === currentIndex ? 'active' : ''}`}>
              <img src={slide.img} alt={`Slide ${index}`} style={{ width: '100%' }} />
              <div className="About-slide-title">{slide.title}</div>
              <div className="About-slide-subtitle">{slide.subtitle}</div>
              <div className="About-slide-caption">
                {slide.caption.split('*').map((part, idx) => (
                  <div key={idx}>
                    * {part.trim()}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="prev" onClick={prevSlide} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>&#10094;</button>
          <button className="next" onClick={nextSlide} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>&#10095;</button>
          <div className="dots-container">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default About;