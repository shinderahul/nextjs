import { renderHook, waitFor } from "@testing-library/react";
import { useProducts } from "@/hooks/useProducts";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: "Product A", price: 10, category: "electronics" },
        { id: 2, title: "Product B", price: 20, category: "jewelery" },
      ]),
  })
) as jest.Mock;

describe("useProducts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and returns products", async () => {
    const { result } = renderHook(() =>
      useProducts({ category: "all", page: 1, limit: 6 })
    );
    // Wait for useEffect to finish
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.products.length).toBeGreaterThan(0);
    expect(result.current.loading).toBe(false);
  });

  it("filters by category", async () => {
    // Mock fetch to only return electronics products for this test
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Product A", price: 10, category: "electronics" },
          { id: 3, title: "Product C", price: 15, category: "electronics" },
        ]),
    });

    const { result } = renderHook(() =>
      useProducts({ category: "electronics", page: 1, limit: 6 })
    );
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(
      result.current.products.every((p) => p.category === "electronics")
    ).toBe(true);
  });

  it("filters by search", async () => {
    const { result } = renderHook(() =>
      useProducts({ search: "Product A", page: 1, limit: 6 })
    );
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(
      result.current.products.some((p) => p.title.includes("Product A"))
    ).toBe(true);
  });

  it("sorts by price ascending", async () => {
    const { result } = renderHook(() =>
      useProducts({ sortBy: "price_asc", page: 1, limit: 6 })
    );
    await waitFor(() => expect(result.current.loading).toBe(false));
    const prices = result.current.products.map((p) => p.price);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  it("returns paginated products", async () => {
    const { result } = renderHook(() => useProducts({ page: 1, limit: 1 }));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.products.length).toBe(1);
  });
});
