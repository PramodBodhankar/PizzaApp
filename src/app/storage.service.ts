import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    taskPageData = {
        taskCount: 95,
        orderCategories: [
            {
                title: 'New Order',
                count: 29,
                increase: '15%',
                lastUpdatedOn: 'yesterday'
            },
            {
                title: 'To be Shipped',
                count: 35,
                increase: '15%',
                lastUpdatedOn: 'yesterday'
            },
            {
                title: 'To be Invoiced',
                count: 17,
                increase: '15%',
                lastUpdatedOn: 'yesterday'
            },
            {
                title: 'To be Delivered',
                count: 24,
                increase: '15%',
                lastUpdatedOn: 'yesterday'
            }
        ],
        taskDetails: [
            {
                type: 'High',
                count: 29,
                Description: 'There are 29 high tasks. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                isCollapsed: true
            },
            {
                type: 'Medium',
                count: 20,
                Description: 'There are 20 high tasks. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                isCollapsed: true
            },
            {
                type: 'Low',
                count: 15,
                Description: 'There are 15 high tasks.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                isCollapsed: true
            }
        ],
        sellingVariants: [
            {
                variantName: 'Arbutus',
                SubVariant: 'Marina',
                count: 25
            },
            {
                variantName: 'Sempervirens',
                SubVariant: 'Buxus',
                count: 25
            },
            {
                variantName: 'Camellia',
                SubVariant: 'Jab Purity',
                count: 25
            },
            {
                variantName: 'Betula',
                SubVariant: 'Utilis',
                count: 25
            }
        ],
        products: [
            [
                {
                    name: 'Refrigarator',
                    image: 'Asset 2.png'
                },
                {
                    name: 'Washing Machine',
                    image: 'Asset 4.png'
                },
                {
                    name: 'TV',
                    image: 'Asset 5.png'
                },
                {
                    name: 'Nidi Kumari',
                    image: 'Asset 3.png'
                }
            ],
            [
                {
                    name: 'Refrigarator 1',
                    image: 'Asset 2.png'
                },
                {
                    name: 'Washing Machine 1',
                    image: 'Asset 4.png'
                },
                {
                    name: 'TV 1',
                    image: 'Asset 5.png'
                },
                {
                    name: 'Nidi Kumari 1',
                    image: 'Asset 3.png'
                }
            ]
        ]
    }

    constructor() {

    }

}