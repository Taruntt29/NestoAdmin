import DashboardTabs from '../../dashboard-tabs/DashboardTabs';
import AccordionCard from '../accordion/AccordionCard';
const tabKey = ['Support', 'FAQ'];
const Support = () => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]} />
      <AccordionCard
        itemLength={4}
        accordionTitle="What is App flow and why is it the best App ?"
        accordionText="text goes here"
      />
    </>
  );
};

export default Support;
