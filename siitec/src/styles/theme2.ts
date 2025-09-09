export const theme = {
  colors: {
    copper: '#cA8c50', // New primary copper color
    copperLight: '#E2BB80', // Lighter copper shade
    copperDark: '#A87A40', // Darker copper shade
    gray: '#4c5354', // New primary gray color
    grayLight: '#7A8586', // Lighter gray shade
    grayDark: '#303637', // Darker gray shade
    white: '#FFFFFF',
    black: '#000000',
    background: '#F5F5F5',
    text: '#333333',
    accent: '#cA8c50', // Using new copper as accent
    // Maintaining tech colors but with updated copper/gray focus
    tech: {
      neon: '#cA8c50', // Updated to new copper
      darkBlue: '#303637', // Updated to dark gray
      highlight: '#E2BB80', // Updated to light copper
      grid: 'rgba(76, 83, 84, 0.2)', // Updated to new gray grid lines
    },
  },
  fonts: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto", sans-serif',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
    fast: '0.2s ease',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
};