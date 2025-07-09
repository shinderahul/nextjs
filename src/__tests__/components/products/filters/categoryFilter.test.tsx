import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CategorySelect from '@/components/products/filters/categoryFilter';

describe("CategorySelect", () => {
    const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

    it("renders all categories as options", () => {
        render(
            <CategorySelect
                categories={categories}
                value="all"
                onChange={() => { }}
            />
        );
        categories.forEach(cat => {
            expect(screen.getAllByRole('option', { name: new RegExp(cat, "i") }).length).toBeGreaterThan(0);
        });
    });

    it("selects the correct value", () => {
        render(
            <CategorySelect
                categories={categories}
                value="jewelery"
                onChange={() => { }}
            />
        );
        const select = screen.getByRole('combobox');
        expect(select).toHaveValue("jewelery");
    });

    it("calls onChange when a new category is selected", () => {
        const handleChange = jest.fn();
        render(
            <CategorySelect
                categories={categories}
                value="all"
                onChange={handleChange}
            />
        );
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: "electronics" } });
        expect(handleChange).toHaveBeenCalled();
    });

    it("applies custom className", () => {
        render(
            <CategorySelect
                categories={categories}
                value="all"
                onChange={() => { }}
                className="test-class"
            />
        );
        const select = screen.getByRole('combobox');
        expect(select).toHaveClass("test-class");
    });
});