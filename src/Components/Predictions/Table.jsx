import BaselineHistoryFitTable from './BaselineHistoryFitTable.jsx';
import BaselineTable from './BaselineTable.jsx';

export default function TableSwitch({
  radioValue,
  baselineData,
  baselineHistoryFitData,
  loading,
}) {
  if (radioValue === 'history_fit') {
    return (
      <BaselineHistoryFitTable
        baselineHistoryFitData={baselineHistoryFitData}
        loading={loading}
      />
    );
  }
  return <BaselineTable baselineData={baselineData} loading={loading} />;
}
