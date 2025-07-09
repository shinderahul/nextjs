import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '@/components/products/filters/searchInput';

describe("SearchInput", () => {
    it("renders with default placeholder", () => {
        render(<SearchInput value="" onChange={() => { }} />);
        expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    it("renders with custom placeholder", () => {
        render(<SearchInput value="" onChange={() => { }} placeholder="Find products" />);
        expect(screen.getByPlaceholderText("Find products")).toBeInTheDocument();
    });

    it("calls onChange when input changes", () => {
        const handleChange = jest.fn();
        render(<SearchInput value="" onChange={handleChange} />);
        const input = screen.getByPlaceholderText("Search...");
        fireEvent.change(input, { target: { value: "abc" } });
        expect(handleChange).toHaveBeenCalled();
    });

    it("shows the correct value", () => {
        render(<SearchInput value="hello" onChange={() => { }} />);
        const input = screen.getByDisplayValue("hello");
        expect(input).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<SearchInput value="" onChange={() => { }} className="test-class" />);
        const input = screen.getByPlaceholderText("Search...");
        expect(input).toHaveClass("test-class");
    });
});