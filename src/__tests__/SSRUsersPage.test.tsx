import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsersPage from "../app/ssr/page";

// Mock fetch globally
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
            ]),
    })
) as jest.Mock;

describe("UsersPage SSR (App Router)", () => {
    it("renders a list of users", async () => {
        const { findAllByTestId } = render(await UsersPage());

        const userItems = await findAllByTestId("user-item");
        expect(userItems).toHaveLength(2);
        expect(userItems[0]).toHaveTextContent("Alice");
        expect(userItems[1]).toHaveTextContent("Bob");
    });

    it("renders no users when API returns empty array", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: () => Promise.resolve([]),
        });
        const ui = await UsersPage();
        render(ui);

        expect(screen.queryAllByTestId("user-item")).toHaveLength(0);
    });
});
