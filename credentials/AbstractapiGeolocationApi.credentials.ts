import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AbstractapiGeolocationApi implements ICredentialType {
        name = 'N8nDevAbstractapiGeolocationApi';

        displayName = 'Abstractapi Geolocation API';

        icon: Icon = { light: 'file:../nodes/AbstractapiGeolocation/abstractapi-geolocation.png', dark: 'file:../nodes/AbstractapiGeolocation/abstractapi-geolocation.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://ipgeolocation.abstractapi.com',
                        required: true,
                        placeholder: 'https://ipgeolocation.abstractapi.com',
                        description: 'The base URL of your Abstractapi Geolocation API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
