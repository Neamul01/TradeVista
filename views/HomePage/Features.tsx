import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Live Alerts',
    description: 'Instant notifications for timely market updates, ensuring you seize every trading opportunity with real-time insights."',
  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Smart Charts',
    description:
      'Effortlessly visualize market trends with interactive charts, empowering informed decision-making and strategic planning for optimal results.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Secure Transactions',
    description:
      'Advanced security protocols ensure every transaction is protected, providing peace of mind and safeguarding your valuable assets.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Mobile Trading',
    description:
      'Trade on the go with our user-friendly mobile app, offering seamless access to the markets for ultimate flexibility and convenience.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'AI-driven Analytics',
    description:
      'Harness the power of AI for in-depth market analysis, enabling data-driven insights that guide your trading strategy for improved outcomes.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Automated Portfolio Management',
    description:
      'Efficiently manage your portfolio with automation, optimizing asset allocation and ensuring a balanced and strategic investment approach for sustained growth.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
