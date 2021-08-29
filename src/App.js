import { Container } from 'react-bootstrap'
import ReportTable from './components/ResultTable';
import BreedingForm from './components/BreedingForm';
import { useState } from 'react';
// import { getReport } from './utils/mocks';
import { getReport } from './utils/network';

function App() {

  const [reports, setReports] = useState([])

  return (
    <Container fluid>
      <BreedingForm onSubmit={async (criteria) => {
        const res = await getReport(criteria)
        setReports([res, ...reports])
      }} />

      <div className="my-4">
        <h3>Reports</h3>
      </div>

      {reports.length > 0
        ? reports.map((report) => <div key={report.id}><ReportTable
          onRemove={(id) => {
            const _reports = []
            for (let i = 0; i < reports.length; i++) {
              if (reports[i].id !== id) {
                _reports.push(reports[i])
              }
            }
            setReports(_reports)
          }}
          report={report}
        /></div>)
        : 'No reports found'}

    </Container>
  );
}

export default App;
