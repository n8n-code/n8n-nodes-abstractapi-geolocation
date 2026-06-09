import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AbstractapiGeolocation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Abstractapi Geolocation',
		name: 'N8nDevAbstractapiGeolocation',
		icon: { light: 'file:./abstractapi-geolocation.png', dark: 'file:./abstractapi-geolocation.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'IP geolocation API retrieves region, country, city for IPv4/IPv6 addresses across 180+ countries.',
		defaults: { name: 'Abstractapi Geolocation' },
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
