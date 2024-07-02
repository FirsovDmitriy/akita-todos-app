export const FILTER_VALUES = {
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL'
} as const

export type FilterValues = typeof FILTER_VALUES[keyof typeof FILTER_VALUES];

export type Option = {
  label: string
  value: FilterValues
}

export const initialOptions: Option[] = [
  {
    label: 'Все заметки',
    value: FILTER_VALUES.SHOW_ALL
  },
  {
    label: 'Выполненные',
    value: FILTER_VALUES.SHOW_COMPLETED
  },
  {
    label: 'Активные',
    value: FILTER_VALUES.SHOW_ACTIVE
  }
];
