import { Component, OnInit } from '@angular/core';
import { GetWorkItemsByProjectQuery } from 'app/application/work-items/get-work-items-by-project/get-work-items-by-project.query';
import { WorkItem } from 'app/domain/work-items/work-item';
import { TreeNode } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-work-items',
    templateUrl: 'work-items.component.html',
    styleUrls: ['./work-items.component.scss'],
})
export class WorkItemsComponent implements OnInit {
    workItems!: TreeNode[];

    constructor(
        private _getWorkItems: GetWorkItemsByProjectQuery,
        private _dialogConfig: DynamicDialogConfig
    ) { }

    ngOnInit() {
        this.getWorkItems();
    }

    public async getWorkItems() {
        const projectId: string = this._dialogConfig.data.projectId;

        const result = await this._getWorkItems.execute(projectId);

        this.workItems = result.data.map((workItem) =>
            this.transformToTreeNode(workItem)
        );
        console.log(this.workItems);
    }

    private transformToTreeNode(workItem: WorkItem): TreeNode {
        return {
            data: {
                id: workItem.id,
                workItemType: workItem.workItemType,
                title: workItem.title,
                state: workItem.state,
                valueArea: workItem.valueArea
            },
            children: workItem.items
                ? workItem.items.map((workItem) => this.transformToTreeNode(workItem))
                : [],
        };
    }
}
