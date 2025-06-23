import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SSGProductsPage from "../app/ssg/page";

// Mock fetch globally for products
beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
        json: () =>
            Promise.resolve([
                { id: 1, title: "Product A" },
                { id: 2, title: "Product B" },
            ]),
    }) as jest.Mock;
});

afterEach(() => {
    jest.resetAllMocks();
});

describe("SSGProductsPage (Static Site Generation)", () => {
    it("renders a list of products", async () => {
        const ui = await SSGProductsPage();
        render(ui);

        const productItems = await screen.findAllByTestId("product-item");
        expect(productItems).toHaveLength(2);
        expect(productItems[0]).toHaveTextContent("Product A");
        expect(productItems[1]).toHaveTextContent("Product B");
    });

    it("renders no products when API returns empty array", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: () => Promise.resolve([]),
        });
        const ui = await SSGProductsPage();
        render(ui);

        expect(screen.queryAllByTestId("product-item")).toHaveLength(0);
    });

    it("renders different products if API returns different data", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: () => Promise.resolve([
                { id: 3, title: "Product X" },
                { id: 4, title: "Product Y" },
            ]),
        });
        const ui = await SSGProductsPage();
        render(ui);

        expect(await screen.findByText("Product X")).toBeInTheDocument();
        expect(await screen.findByText("Product Y")).toBeInTheDocument();
    });

    it("calls fetch with correct URL and cache option", async () => {
        await SSGProductsPage();
        expect(global.fetch).toHaveBeenCalledWith(
            "https://fakestoreapi.com/products",
            { cache: "force-cache" }
        );
    });
});