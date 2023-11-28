import { Container } from '@mui/material';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Intererst.css';

function Interest() {
  const [expanded, setExpanded] = useState([false, false, false, false, false]);

  const handleChange = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((state, i) => (i === index ? !state : state))
    );
  };

  const accordionContent = [
    {
      question: 'What is iCards?',
      answer: 'Digital Cards is a digital business card solution that allows users to create and share their contact information with others in a convenient, efficient, and sustainable way.',
    },
    {
      question: 'Is Digital Cards secure?',
      answer: 'Digital Cards is a digital business card solution that allows users to create and share their contact information with others in a convenient, efficient, and sustainable way.',
    },
    {
      question: 'How do I get started with Digital Cards?',
      answer: 'Digital Cards is a digital business card solution that allows users to create and share their contact information with others in a convenient, efficient, and sustainable way.',
    },
    {
      question: 'How do I share my digital business card with others?',
      answer: 'Digital Cards is a digital business card solution that allows users to create and share their contact information with others in a convenient, efficient, and sustainable way.',
    },
    {
      question: 'How do I update my digital business card?',
      answer: 'Digital Cards is a digital business card solution that allows users to create and share their contact information with others in a convenient, efficient, and sustainable way.',
    },
    // Add more objects for each Accordion with different content
  ];

  const interest = {
    background: `linear-gradient(86deg, #0E7C72 -17.41%, #2CBE65 110.89%)`,
    // padding: `10% 0%`,
  };

  return (
    <>
      <div className="" style={interest}>
        <div className="interest">
          <Container>
            <div
                className=""
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
            >
              <div className="interestText" style={{ width: '50%' }}>
                <p style={{ fontSize: '17px', fontWeight: '400', opacity: '75%', color: '#FFF', marginBlockStart: '0em' }}>
                  Commonly asked question(s)
                </p>
                <p style={{ fontSize: '40px', fontWeight: '700', color: '#FFF', lineHeight: '51px', letterSpacing: '-2px', textTransform: 'capitalize' }}>
                  Questions that are of interest to many people
                </p>
              </div>
              <div className="interestAccordion" style={{ width: '70%' }}>
                {accordionContent.map((item, index) => (
                    <Accordion key={index} expanded={expanded[index]} onChange={() => handleChange(index)}>
                      <AccordionSummary
                          expandIcon={expanded[index] ? <RemoveIcon style={{ color: '#FFF' }} /> : <AddIcon style={{ color: '#FFF' }} />}
                          aria-controls={`panel${index + 1}a-content`}
                          id={`panel${index + 1}a-header`}
                          style={{ color: '#FFF' }}
                      >
                        <Typography style={{ fontSize: '22px', fontWeight: '500', lineHeight: '28px', color: '#FFF' }}>{`${index + 1}. ${item.question}`}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ color: '#FFF', fontSize: '16px', lineHeight: '28px' }}>
                          {item.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                ))}
              </div>
            </div>
          </Container>

        </div>
      </div>
    </>
  );
}

export default Interest;
