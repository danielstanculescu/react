import type { ReactElement } from 'react';
import { WeightedQuickUnionFind } from '../../Utils/WeightedQuickUnionFind';


const UnionFindApp = () => {

    let uf: WeightedQuickUnionFind = new WeightedQuickUnionFind(5);

    const renderTest = (p: number, q: number): ReactElement[] => {

        let ret: ReactElement[] = [];
        
        if (uf.find(p) === uf.find(q)){
            //console.log('they are in the same set');
            ret.push(<div>they are in the same set</div>)
        }

        else{
            //console.log(p + " " + q );
            uf.union(p, q);
            ret.push(<div>{p} {q}</div>);
        }

        ret.push(<div>{uf.count()} components</div>)

        return ret;
    }

  return (
    <>
    <div>
        {renderTest(1,3)}
    </div>
    <div>
        {renderTest(1,4)}
    </div>
    </>
  )
}

export default UnionFindApp
