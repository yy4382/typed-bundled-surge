declare global {
  var $network: any;
  var $script: {
    name: string;
    type: string;
    startTime: Date;
  };
  var $environment: {
    system: string;
    "surge-build": string;
    "surge-version": string;
    language: string;
    "device-model": string;
  };
  var $persistentStore: {
    write: (data: string, key?: string) => boolean;
    read: (key?: string) => string | null;
  };
  /**
   * You may use $httpAPI to call all HTTP APIs to control Surge's functions.
   * No authentication parameters are required.
   * See the HTTP API section for the available abilities.
   */
  var $httpAPI: (
    method: string,
    path: string,
    body: object|null,
    callback: (result: object) => void
  ) => void;

  interface HttpClientOpt {
    url: string;
    headers?: object;
    body?: any;
    timeout?: number;
    insecure?: boolean;
    "auto-cookie"?: boolean;
    "auto-redirect"?: boolean;
    policy?: string;
    "policy-descriptor"?: string;
    "binary-mode"?: boolean;
  }
  type HttpClientCallback = (error: any, response: any, data: any) => void;
  type HttpClientCmd = (
    url: string | HttpClientOpt,
    callback: HttpClientCallback
  ) => void;
  var $httpClient: {
    post: HttpClientCmd;
    get: HttpClientCmd;
    delete: HttpClientCmd;
    put: HttpClientCmd;
    options: HttpClientCmd;
    patch: HttpClientCmd;
  };

  var $request: {
    url: string;
    method: string;
    headers: Record<string, string>;
    body: string | Uint8Array;
    id: string;
    dnsResult: object;
    srcPort: number;
    protocol: number;
    hostname: string;
    destPort: number;
    processPath: string;
    userAgent: string;
    sourceIP: string;
    listenPort: number;
  };

  var $response: {
    status?: number;
    headers?: object;
    body?: string | Uint8Array;
  };

  var $done: (opts: {
    url?: string;
    headers?: object;
    body?: string | Uint8Array;
    response?: {
      status?: number;
      headers?: object;
      body?: string | Uint8Array;
    };
    status?: number;
    servers?: string[];
    server?: string;
    addresses?: string[];
    address?: string;
    ttl?: number;
  }) => void;
  var $cronexp: string;
  var $notification: {
    post: (title: string, subtitle: string, body: string) => void;
  };
  var $utils: {
    geoip: (ip: string) => string;
    ipasn: (ip: string) => string;
    ipaso: (ip: string) => string;
    ungzip: (binary: Uint8Array) => Uint8Array;
  };
  var $input: any;
  var $argument: any;
}

export {};
