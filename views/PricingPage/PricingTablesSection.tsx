import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Explorer"
          description="Give us a try for free"
          benefits={['Live Alerts', 'Smart Charts', 'Secure Transactions', '10 blocks']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Pioneer"
          description="Best for individual desginers"
          benefits={['Live Alerts', 'Smart Charts', 'Secure Transactions', 'Mobile Trading', 'AI-driven Analytics']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Voyager"
          description="Get your team together"
          benefits={[
            'Live Alerts',
            'Smart Charts',
            'Secure Transactions',
            'Mobile Trading',
            'AI-driven Analytics',
            'Automated Portfolio Management',
            'Priority Customer Support',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
