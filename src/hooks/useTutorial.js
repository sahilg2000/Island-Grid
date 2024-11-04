import { useState, useEffect } from 'react';

const useTutorial = (tutorialSteps) => {
  const [tutorialStep, setTutorialStep] = useState(0);

  useEffect(() => {
    if (tutorialStep > 0 && tutorialStep <= tutorialSteps.length) {
      const element = document.querySelector(tutorialSteps[tutorialStep - 1].element);
      if (element) {
        element.classList.add('highlight');
      }
    }

    return () => {
      tutorialSteps.forEach(step => {
        const element = document.querySelector(step.element);
        if (element) {
          element.classList.remove('highlight');
        }
      });
    };
  }, [tutorialStep, tutorialSteps]);

  const nextTutorialStep = () => {
    if (tutorialStep < tutorialSteps.length) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setTutorialStep(0);
    }
  };

  return { tutorialStep, nextTutorialStep };
};

export default useTutorial;