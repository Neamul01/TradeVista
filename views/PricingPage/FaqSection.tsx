import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="How do I subscribe to a TradeVista plan?">
        Subscribing to a TradeVista plan is easy! Simply visit our website, choose the plan that suits your needs, and follow the
        straightforward subscription process.
      </Accordion>
      <Accordion title="Can I upgrade or downgrade my plan at any time?">
        Absolutely! You have the flexibility to upgrade or downgrade your plan at any time. Visit your account settings to make the desired
        changes effortlessly.
      </Accordion>
      <Accordion title="Is there a trial period for the Premium Plan?">
        Yes! We offer a 7-day free trial for the Premium Plan. Experience the full range of features before deciding on the plan that best
        fits your trading requirements.
      </Accordion>
      <Accordion title="What security measures are in place to protect my transactions?">
        We prioritize the security of your transactions. TradeVista employs advanced encryption protocols and robust security measures to
        ensure the confidentiality and integrity of your financial data.
      </Accordion>
      <Accordion title="How can TradeVista's AI-driven Analytics benefit my trading strategy?">
        TradeVista&apos;s AI-driven Analytics leverages machine learning to analyze market trends, providing you with valuable insights for
        strategic decision-making. This empowers you to make informed and data-driven trading decisions, enhancing your overall trading
        strategy.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
