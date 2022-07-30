import MiniDrawer from "../src/features/AppBar/AppBar";

describe("onNavItemClick", () => {
    test("it should dispatch selected nav item to the store when tested", () => {
        const mockDispatch = jest.fn("home");
        jest.mock('./src/features/AppBar/AppBar.jsx', () => ({
            dispatch: mockDispatch
        }));
    })
})