import React, { useState, useEffect } from 'react';
import './About.css'; 

//importing photos
import about1 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/about1.jpg';
import highlight1 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight1.JPG';
import highlight2 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight2.jpg';
import highlight3 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight3.jpg';
import highlight4 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight4.jpg';
import highlight5 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/highlight5.jpg';
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
    caption: '2022 New Student Organization of the Year Awarded by UNT Department of Student Activities * Honors a newly created student organization that has contributed excellent service and leadership to the University community or constituent group' 
  },
  { img: highlight2, 
    caption: '2022 Brick Ceremony Awarded by UNT Department of Student Activities * Honors a newly created student organization that has contributed excellent service and leadership to the University community or constituent group' 
  },
  { img: highlight6, 
    caption: 'First general meeting for SASE with American Airlines' 
  },
  { img: highlight3, 
    caption: '2022 Outstanding New Chapter Awarded by Society of Asian Scientists and Engineers (SASE) * Recognize chapters and student leaders around the nation who have gone above and beyond the call of duty over their recognized year. These chapters are acknowledged in professional development, cultural awareness, diversity, community involvement, impact of events, initiatives, and member engagement to name a few. * Awarded to the chapter that made outstanding contributions and advancements of SASEs mission statement' 
  },
  { img: highlight4, 
    caption: '2022 JPMorgan Chase & Co. CodeForGood Hackathon Winner Awarded by JPMorgan Chase & Co. * Generated a website and mobile application to help a nonprofit organization. * This project can be found in the Projects tab! *' 
  },
  { img: highlight8, 
    caption: '2023 President of the Year' 
  },
  { img: highlight7, 
    caption: 'Dream internship at JPMC' 
  },
  { img: highlight10, 
    caption: 'attended GHC 2023 in Orlando FL' 
  },
  { img: highlight11, 
    caption: 'participated in SASE Mental Health initiative' 
  }, 
  { img: highlight12, 
    caption: 'SASE South Team' 
  },
  { img: highlight14, 
    caption: 'led a workshop for students about networking' 
  },
  { img: highlight16, 
    caption: '1 of my 4 schools that I mentored (OU)' 
  },
  { img: highlight13, 
    caption: 'participted in WeHack UTD won 2nd Place' 
  },
  { img: highlight15, 
    caption: 'won 2024 golden eagle ' 
  },
  { img: highlight9, 
    caption: 'graduated ' 
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
              <div className="text">{slide.caption}</div>
            </div>
          ))}
          <a className="prev" onClick={prevSlide}>&#10094;</a>
          <a className="next" onClick={nextSlide}>&#10095;</a>
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