// Create ResponsiveTable.jsx
export default function ResponsiveTable({ children }) {
  return (
    <div style={{ 
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      margin: '0 -1rem'
    }}>
      {children}
    </div>
  )
}

// Usage in Invesment.jsx:
import ResponsiveTable from './ResponsiveTable';

{inputValid && (
  <ResponsiveTable>
    <Results input={userInput} />
  </ResponsiveTable>
)}
