import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import * as Highcharts from 'highcharts';
declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {
    taskData = null;
    showAccordion = false;
    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.taskData = this.storageService.taskPageData;

    }
    ngAfterViewInit() {
        setTimeout(() => {
            Highcharts.chart('chartcontainer', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares in January, 2018'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'brands',
                    type: 'pie',
                    data: [
                        {
                            name: 'Low Stock Variants',
                            y: 30,
                        }, {
                            name: 'Surplus',
                            y: 27
                        }, {
                            name: 'All Variants',
                            y: 43
                        }
                    ]
                }]
            });
        }, 100);
 
    }
}
