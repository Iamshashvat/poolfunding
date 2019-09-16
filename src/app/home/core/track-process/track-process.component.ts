import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';

@Component({
	selector: 'app-track-process',
	templateUrl: './track-process.component.html',
	styleUrls: [ './track-process.component.css' ]
})
export class TrackProcessComponent implements OnInit {
	public alerts: {}[];
	public items: any[][] = [ [] ];
	public itemName: any[][] = [ [] ];

	public pieChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			position: 'top'
		},
		plugins: {
			datalabels: {
				formatter: (value, ctx) => {
					const label = ctx.chart.data.labels[ctx.dataIndex];
					return label;
				}
			}
		}
	};
	public pieChartType: ChartType = 'doughnut';
	public pieChartLegend = true;
	public pieChartData: number[] = [ 300, 500, 100 ];
	public pieChartLabels = [ 'Requested', 'Received', 'In-Transit' ];
	public pieChartPlugins = [ pluginDataLabels ];
	public pieChartColors = [
		{
			backgroundColor: [ 'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)' ]
		}
	];
	constructor(private db: AngularFireDatabase) {
		this.db.list('alert').valueChanges().subscribe((res) => {
			this.alerts = res;
			let index = 0;
			this.alerts.forEach((element) => {
				index = 0;
				element['description'].forEach((elementz) => {
					this.itemName[index] = [ ...this.itemName[index], elementz.item ];
					this.items[index] = [
						...this.items[index],
						[ elementz.quantity, elementz.received, elementz.transit ]
					];
				});
				index++;
			});
		});
	}

	ngOnInit() {}
	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}
}
