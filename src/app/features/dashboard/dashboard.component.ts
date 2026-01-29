import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  ngOnInit(): void {
    this.initLineChart();
    this.initBarChart();
    this.initDoughnutChart();
    this.initMiniCharts();
  }

  // ===== LINE CHART =====
  initLineChart() {
    const ctx = (
      document.getElementById('lineChart') as HTMLCanvasElement
    ).getContext('2d');
    new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Visitors',
            data: [120, 200, 150, 300, 250, 400, 320],
            borderColor: '#215950',
            backgroundColor: 'rgba(33,89,80,0.1)',
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#2e7c71',
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#215950',
            bodyColor: '#1F2D2B',
          },
        },
        scales: {
          x: { grid: { color: '#DCE8E6' }, ticks: { color: '#1F2D2B' } },
          y: { grid: { color: '#DCE8E6' }, ticks: { color: '#1F2D2B' } },
        },
      },
    });
  }

  // ===== BAR CHART =====
  initBarChart() {
    const ctx = (
      document.getElementById('barChart') as HTMLCanvasElement
    ).getContext('2d');
    new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
          {
            label: 'Sales',
            data: [50, 70, 40, 90],
            backgroundColor: '#215950',
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#DCE8E6' }, ticks: { color: '#1F2D2B' } },
          y: { grid: { color: '#DCE8E6' }, ticks: { color: '#1F2D2B' } },
        },
      },
    });
  }

  // ===== DOUGHNUT CHART =====
  initDoughnutChart() {
    const ctx = (
      document.getElementById('doughnutChart') as HTMLCanvasElement
    ).getContext('2d');
    new Chart(ctx!, {
      type: 'doughnut',
      data: {
        labels: ['Free', 'Pro', 'Enterprise'],
        datasets: [
          {
            data: [40, 35, 25],
            backgroundColor: ['#215950', '#2e7c71', '#F4B942'],
            borderColor: '#fff',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#1F2D2B' } },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#215950',
            bodyColor: '#1F2D2B',
          },
        },
      },
    });
  }

  // ===== MINI CHARTS IN CARDS =====
  initMiniCharts() {
    const miniChartsData = [
      { id: 'mini1', data: [10, 15, 12, 20, 18], color: '#2e7c71' },
      { id: 'mini2', data: [5, 8, 6, 10, 12], color: '#F4B942' },
      { id: 'mini3', data: [20, 18, 25, 22, 30], color: '#215950' },
    ];

    miniChartsData.forEach((chart) => {
      const ctx = (
        document.getElementById(chart.id) as HTMLCanvasElement
      ).getContext('2d');
      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [
            {
              data: chart.data,
              borderColor: chart.color,
              tension: 0.3,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } },
        },
      });
    });
  }
}
