export const ChartData = [
  {
    title: 'Payment Card',
    data: {
      labels: ['Paid', 'Processing', 'Pending', 'Overdue'],
      datasets: [
        {
          label: 'Payment',
          data: [12, 19, 3, 5],
          backgroundColor: ['#278FD9', '#FC5C67', '#FFAFAF', '#ECE9FF'],
          borderColor: ['#278FD9', '#FC5C67', '#FFAFAF', '#ECE9FF'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    title: 'Loan Queries Analysis',
    data: {
      labels: ['Accept', 'Deny', 'Awaiting Response'],
      datasets: [
        {
          label: 'Payment',
          data: [12, 19, 3],
          backgroundColor: ['#FC5C67', '#FFAFAF', '#278FD9'],
          borderColor: ['#FC5C67', '#FFAFAF', '#278FD9'],
          borderWidth: 1,
        },
      ],
    },
  },
];
