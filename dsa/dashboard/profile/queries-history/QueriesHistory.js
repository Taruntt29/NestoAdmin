import DashboardChildCard from '../../dashboard-card-big/DashboardChildCard';
import DashboardTabs from '../../dashboard-tabs/DashboardTabs';

const tabKey = ['All', 'Assigned ', ' Matured', 'Not Matured'];
const tabKey2 = ['Accept', 'Deny'];
const QueriesHistory = () => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey2} activeState={tabKey2[0]}></DashboardTabs>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <DashboardChildCard cardType="acceptedLoanQueries" />
      </DashboardTabs>
    </>
  );
};

export default QueriesHistory;
