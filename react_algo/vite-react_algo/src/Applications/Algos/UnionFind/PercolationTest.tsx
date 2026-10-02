import { type ReactElement } from 'react'
import { Percolation } from './Percolation';

const PercolationTest = () => {

    const renderTest = (): ReactElement[] => {

        let ret: ReactElement[] = [];

        const percolation: Percolation = new Percolation(3);

        percolation.open(1,1);
        percolation.open(2,1);
        percolation.open(3,1);

        const isFull: string = percolation.isFull(3,1).toString();
        const percolates: string = percolation.percolates().toString();

        ret.push(<div>Is Full(path)? {isFull}</div>);
        ret.push(<div>Percolates? {percolates}</div>)
        return ret; 
    }

  return (
    <>
        <div>
            {renderTest()}
        </div>
    </>
  )
}

export default PercolationTest
