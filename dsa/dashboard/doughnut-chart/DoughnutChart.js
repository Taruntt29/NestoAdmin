import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import './DoughnutChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    // cutout: 50,
    // layout: {
    //   padding: 20,
    // },
  };

  return <Doughnut data={data} options={options} />;
};

const DoughnutChartDashboard = ({ title, data }) => {
  return (
    <Card className="shadow-sm border-0 doughnut-chart">
      <Card.Header className="bg-transparent">
        <Card.Title className="fw-semibold">{title}</Card.Title>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center align-items-center p-5">
        <DoughnutChart data={data} />
      </Card.Body>
      <Card.Footer className="bg-transparent py-4">
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="row gy-4 gx-2">
              {data.labels.map((label, index) => (
                <div className="col-12 col-lg-6" key={label}>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      className="rounded flex-shrink-0"
                      style={{
                        backgroundColor:
                          data.datasets[0].backgroundColor[index],
                        flexBasis: '20px',
                        height: '20px',
                      }}
                    ></div>
                    <div className="text-truncate">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default DoughnutChartDashboard;
