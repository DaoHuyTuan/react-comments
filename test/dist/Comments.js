"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const react_comments_1 = require("@daohuytuan/react-comments");
describe('Comments', () => {
    test('throws if has no content', () => {
        const spy = jest.spyOn(console, 'error');
        spy.mockImplementation(() => void 0);
        expect(() => {
            const data = [{ contents: 'fdsfds' }, { contents: 'fdsfdsfwedsfds' }];
            react_1.render(jsx_runtime_1.jsx(react_comments_1.Comments, { data: data }, void 0));
        }).toThrowError('must have either "icon" or "children"');
        spy.mockRestore();
    });
});
