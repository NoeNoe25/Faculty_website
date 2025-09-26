import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchClasses = cva(
  'flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-1',
  {
    variants: {
      variant: {
        default: 'border',
        filled: 'bg-gray-50',
        outline: 'border-2',
      },
      size: {
        small: 'text-xs px-2 py-1',
        medium: 'text-sm px-3 py-2',
        large: 'text-base px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const SearchView = ({
  // Required parameters with defaults
  placeholder = "Search",
  text_font_size = "text-sm",
  text_font_family = "Inter",
  text_font_weight = "font-normal",
  text_line_height = "leading-tight",
  text_text_align = "left",
  text_color = "text-text-muted",
  fill_background_color = "bg-secondary-background",
  border_border = "border-search-border",
  border_border_radius = "rounded-md",
  layout_align_self = "self-end",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  onSubmit,
  disabled = false,
  className,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build required styles
  const requiredClasses = [
    text_font_size,
    `font-[${text_font_family}]`,
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_color,
    fill_background_color,
    border_border,
    border_border_radius,
    layout_align_self,
  ]?.join(' ');

  const handleInputChange = (event) => {
    const newValue = event?.target?.value;
    setSearchValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={twMerge(
        searchClasses({ variant, size }),
        requiredClasses,
        optionalClasses,
        className
      )}>
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          disabled={disabled}
          className="flex-1 bg-transparent outline-none placeholder-current"
          {...props}
        />
      </div>
    </form>
  );
};

export default SearchView;