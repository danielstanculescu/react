import type { ReactElement } from "react"

type Props = {
    filterText: string,
    inStockOnly: boolean,
    onFilterTextChange: (value: string) => void,
    onInStockOnlyChange: (value: boolean) => void
}

const SearchBar = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}: Props): ReactElement => {

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder='Search...'
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
          Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar
