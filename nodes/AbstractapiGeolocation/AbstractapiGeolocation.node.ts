import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AbstractapiGeolocation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'abstractapi-geolocation',
		name: 'N8nDevAbstractapiGeolocation',
		icon: { light: 'file:./abstractapi-geolocation.png', dark: 'file:./abstractapi-geolocation.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Abstract IP geolocation API allows developers to retrieve the region, country and city behind any IP worldwide. The API covers the geolocation of IPv4 and IPv6 addresses in 180+ countries worldwide..',
		defaults: { name: 'abstractapi-geolocation' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAbstractapiGeolocationApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
