import WebsocketService from './WebsocketService';

describe('WebsocketService', () => {
    it('should not be undefined', () => {
        expect(WebsocketService).not.toBe(undefined);
    });
    it('should be able instantiate', () => {
        const websocket = new WebsocketService('ws://127.0.0.1:1337');
        expect(websocket).not.toBe(undefined);
    });
});
