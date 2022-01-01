import { useCallback, useState } from 'react';

export default function useNewEventState() {
  const [activeStep, setActiveStep] = useState(0);
  const goNextStep = useCallback(() => setActiveStep(activeStep + 1), []);

  return { activeStep, goNextStep };
}
