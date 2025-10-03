import { cn } from '@/utils/cn';
import React from 'react';

export type TableColumn<T = Record<string, unknown>> = {
  key: keyof T | string;
  label: React.ReactNode;
  sortable?: boolean;
  onSort?: () => void;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
  className?: string;
  width?: string;
};

export type TableData<T = Record<string, unknown>> = T & {
  id: React.Key;
  onClick?: () => void;
  className?: string;
};

export type TableVariant = 'default' | 'striped' | 'bordered' | 'minimal';
export type TableSize = 'sm' | 'md' | 'lg';
export type TableColor = 'black' | 'white' | 'gray' | 'transparent';

export type TableProps<T = Record<string, unknown>> = {
  columns: TableColumn<T>[];
  data: TableData<T>[];
  variant?: TableVariant;
  size?: TableSize;
  color?: TableColor;
  className?: string;
  emptyMessage?: React.ReactNode;
  loading?: boolean;
  onRowClick?: (row: T, index: number) => void;
};

const colorSchemes = {
  black: {
    table: 'bg-black',
    header: 'bg-black/90',
    headerText: 'text-white',
    headerTextMuted: 'text-white/60',
    cellText: 'text-white/80',
    emptyText: 'text-white/40',
    border: 'border-white/20',
    borderLight: 'border-white/10',
    hover: 'hover:bg-white/5',
    hoverStrong: 'hover:bg-white/10',
    stripe: 'even:bg-white/5',
    loading: 'bg-white/20',
    loadingLight: 'bg-white/10',
    sortIcon: 'text-white/50',
  },
  white: {
    table: 'bg-white',
    header: 'bg-gray-50',
    headerText: 'text-gray-900',
    headerTextMuted: 'text-gray-600',
    cellText: 'text-gray-700',
    emptyText: 'text-gray-500',
    border: 'border-gray-200',
    borderLight: 'border-gray-100',
    hover: 'hover:bg-gray-50',
    hoverStrong: 'hover:bg-gray-100',
    stripe: 'even:bg-gray-50',
    loading: 'bg-gray-200',
    loadingLight: 'bg-gray-100',
    sortIcon: 'text-gray-400',
  },
  gray: {
    table: 'bg-gray-800',
    header: 'bg-gray-700',
    headerText: 'text-gray-100',
    headerTextMuted: 'text-gray-400',
    cellText: 'text-gray-300',
    emptyText: 'text-gray-400',
    border: 'border-gray-600',
    borderLight: 'border-gray-700',
    hover: 'hover:bg-gray-700',
    hoverStrong: 'hover:bg-gray-600',
    stripe: 'even:bg-gray-700/50',
    loading: 'bg-gray-700',
    loadingLight: 'bg-gray-600',
    sortIcon: 'text-gray-400',
  },
  transparent: {
    table: 'bg-transparent',
    header: 'bg-black/10 backdrop-blur-sm',
    headerText: 'text-current',
    headerTextMuted: 'text-current/60',
    cellText: 'text-current/80',
    emptyText: 'text-current/40',
    border: 'border-current/20',
    borderLight: 'border-current/10',
    hover: 'hover:bg-black/5',
    hoverStrong: 'hover:bg-black/10',
    stripe: 'even:bg-black/5',
    loading: 'bg-current/20',
    loadingLight: 'bg-current/10',
    sortIcon: 'text-current/50',
  },
};

const getTableVariants = (color: TableColor) => {
  const scheme = colorSchemes[color];
  return {
    default: {
      table: `min-w-full border-collapse ${scheme.table}`,
      header: `${scheme.header} border-b ${scheme.border}`,
      headerCell: `font-semibold ${scheme.headerText} text-left`,
      row: `border-b ${scheme.borderLight} ${scheme.hover} transition-colors`,
      cell: scheme.cellText,
    },
    striped: {
      table: `min-w-full border-collapse ${scheme.table}`,
      header: `${scheme.header} border-b ${scheme.border}`,
      headerCell: `font-semibold ${scheme.headerText} text-left`,
      row: `border-b ${scheme.borderLight} ${scheme.stripe} ${scheme.hoverStrong} transition-colors`,
      cell: scheme.cellText,
    },
    bordered: {
      table: `min-w-full border-collapse ${scheme.table} border ${scheme.border} rounded-lg overflow-hidden`,
      header: `${scheme.header} border-b ${scheme.border}`,
      headerCell: `font-semibold ${scheme.headerText} text-left border-r ${scheme.border} last:border-r-0`,
      row: `border-b ${scheme.border} last:border-b-0 ${scheme.hover} transition-colors`,
      cell: `${scheme.cellText} border-r ${scheme.border} last:border-r-0`,
    },
    minimal: {
      table: `min-w-full border-collapse ${scheme.table}`,
      header: `border-b ${scheme.border}`,
      headerCell: `font-medium ${scheme.headerTextMuted} text-left`,
      row: `${scheme.hover} transition-colors`,
      cell: scheme.cellText,
    },
  };
};

const tableSizes = {
  sm: { padding: 'px-3 py-1.5', text: 'text-sm' },
  md: { padding: 'px-4 py-2', text: 'text-base' },
  lg: { padding: 'px-6 py-3', text: 'text-lg' },
};

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  variant = 'default',
  size = 'md',
  color = 'black',
  className,
  emptyMessage = 'No data found.',
  loading = false,
  onRowClick,
}: TableProps<T>) {
  const tableVariants = getTableVariants(color);
  const variantStyles = tableVariants[variant];
  const sizeStyles = tableSizes[size];
  const colorScheme = colorSchemes[color];

  const handleRowClick = (row: TableData<T>, index: number) => {
    if (row.onClick) {
      row.onClick();
    } else if (onRowClick) {
      onRowClick(row, index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  if (loading) {
    return (
      <div className={cn('animate-pulse', className)}>
        <div className={cn('h-10 rounded mb-2', colorScheme.loading)} />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={cn('h-8 rounded', colorScheme.loadingLight)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className={variantStyles.table}>
        <thead>
          <tr className={variantStyles.header}>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  variantStyles.headerCell,
                  sizeStyles.padding,
                  sizeStyles.text,
                  column.className,
                  column.sortable &&
                    `cursor-pointer select-none ${colorScheme.hoverStrong}`
                )}
                style={{ width: column.width }}
                onClick={column.onSort}
                onKeyDown={
                  column.onSort
                    ? (e) => handleKeyDown(e, column.onSort!)
                    : undefined
                }
                tabIndex={column.sortable ? 0 : undefined}
                role={column.sortable ? 'button' : undefined}
                aria-sort={column.sortable ? 'none' : undefined}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <svg
                      className={cn('w-4 h-4', colorScheme.sortIcon)}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={cn(
                  'text-center py-8',
                  colorScheme.emptyText,
                  sizeStyles.padding,
                  sizeStyles.text
                )}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => {
              const isClickable = Boolean(row.onClick || onRowClick);
              return (
                <tr
                  key={row.id}
                  className={cn(
                    variantStyles.row,
                    row.className,
                    isClickable && 'cursor-pointer'
                  )}
                  onClick={() => handleRowClick(row, index)}
                  onKeyDown={
                    isClickable
                      ? (e) =>
                          handleKeyDown(e, () => handleRowClick(row, index))
                      : undefined
                  }
                  tabIndex={isClickable ? 0 : undefined}
                  role={isClickable ? 'button' : undefined}
                >
                  {columns.map((column) => {
                    const value =
                      typeof column.key === 'string'
                        ? (row as Record<string, unknown>)[column.key]
                        : undefined;

                    const cellContent = column.render
                      ? column.render(value, row, index)
                      : String(value ?? '');

                    return (
                      <td
                        key={String(column.key)}
                        className={cn(
                          variantStyles.cell,
                          sizeStyles.padding,
                          sizeStyles.text
                        )}
                      >
                        {cellContent}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
