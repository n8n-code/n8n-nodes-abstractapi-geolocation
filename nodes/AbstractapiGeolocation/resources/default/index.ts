import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET v1",
					"value": "GET v1",
					"action": "GET v1",
					"description": "Retrieve the location of an IP address",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1"
					]
				}
			}
		},
		{
			"displayName": "Ip Address",
			"name": "ip_address",
			"default": "195.154.25.40",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ip_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"default": "country,city,timezone",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1"
					]
				}
			}
		},
];
