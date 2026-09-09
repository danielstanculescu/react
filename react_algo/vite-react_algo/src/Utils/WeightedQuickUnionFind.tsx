export class WeightedQuickUnionFind {

    private counter: number;
    private parent: number[] = [];
    private size: number[] = [];


    constructor(n: number){
        this.counter = n;
        
        for (let index = 0; index < n; index++) {
            this.parent[index] = index;
            this.size[index] = 1;
        }
    }

    private validate = (p: number): void => {

        const n: number = this.parent.length;

        if(p < 0 || p >= n){
            alert("index " + p + " is not between 0 and " + (n - 1));
        }
    }

    find = (p: number): number => {
        
        this.validate(p);
        while(p !== this.parent[p])
            p = this.parent[p];

        return p;
    }

    union = (p: number, q: number): void => {

        const rootP: number = this.find(p);
        const rootQ: number = this.find(q);

        if( rootP === rootQ) return;

        if(this.size[rootP] < this.size[rootQ]){
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        else{
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }

        this.counter --;
    }

    count(): number {
        return this.counter;
    }
}