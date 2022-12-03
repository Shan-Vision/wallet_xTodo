export const selectStyles = typeTransaction => {
  const optionColor = typeTransaction === 'income' ? '#24CCA7' : '#FF6596';
  return {
    control: data => ({
      ...data,
      border: 'none',
      borderRadius: 0,
      borderBottom: '1px solid #e0e0e0',
      minHeight: 34,
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      },
    }),

    indicatorSeparator: () => ({ display: 'none' }),
    valueContainer: data => ({
      ...data,
      height: 34,
      display: 'flex',
      justifyContent: 'start',
      padding: '0 20px',

      '@media (min-width: 768px)': {
        padding: '0 8px',
      },
    }),

    input: data => ({
      ...data,
      height: 34,
      margin: 0,
    }),

    placeholder: data => ({
      ...data,
      color: '#bdbdbd',
      margin: 0,
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),

    singleValue: data => ({
      ...data,
      color: '#000000',
      margin: 0,
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),

    dropdownIndicator: data => ({
      ...data,
      color: '#000000',
      alignItems: 'flex-start',
    }),

    menu: data => ({
      ...data,
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      overflow: 'hidden',
    }),

    menuList: data => ({
      ...data,
      background: 'transparent',
      borderRadius: 20,
      cursor: 'pointer',

      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f9f9f9',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#e1e1e1',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#f9f9f9',
      },
    }),

    option: (data, { isFocused, isSelected }) => ({
      ...data,
      background: isFocused || isSelected ? '#ffffff' : 'transparent',
      color: isFocused || isSelected ? optionColor : '#000000',
      cursor: 'pointer',
      padding: '14px 20px',
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
      display: 'flex',
    }),
  };
};
