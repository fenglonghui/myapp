import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { queryInfo } from '../api/search';



// 获取测试地址
const apiUrl = process.env.REACT_APP_API_URL;

const server = setupServer();

// 测试前，调用回调
beforeAll(() => server.listen());

// 重置mock路由
afterEach(() => server.resetHandlers());

// 关闭mock路由
afterAll(() => server.close());

// 单元测试
test("queryInfo方法发送异步请求", async () => {
    // mock请求地址
    const endpoint = "test-endpoint";
    const mockResult = { mockValue: 'mock' };
    // mock 请求
    server.use(rest.get(`${apiUrl}/${endpoint}`,
        (req, res, ctx) => res(ctx.json(mockResult)))
    );

    const result = await queryInfo(endpoint);
    expect(result).toEqual(mockResult);

});