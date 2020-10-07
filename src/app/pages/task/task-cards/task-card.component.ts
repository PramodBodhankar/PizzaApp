import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/storage.service';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
    @Input() cardTitle = '';
    constructor() {
    }

    ngOnInit()
    {
    }
}
