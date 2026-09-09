import { WeightedQuickUnionFind } from "../../Utils/WeightedQuickUnionFind";

export class Percolation {
    private n:number
    private sites:boolean[];
    private numberOfOpenSites: number = 0;
    private completeGrid: WeightedQuickUnionFind;
    private topGrid: WeightedQuickUnionFind;

    constructor(n: number){
        if(n <= 0){
            console.error("illegal argument exception");
        }

        this.n = n;
        const sitesNumber: number = n * n;

        this.completeGrid = new WeightedQuickUnionFind(sitesNumber + 2);
        this.topGrid = new WeightedQuickUnionFind(sitesNumber + 1);

        this.sites = Array(sitesNumber + 1).fill(false);

        for (let i = 1; i <= n; i++) {
            this.completeGrid.union(0, i);
            this.completeGrid.union(n*n+1, n*n+1-i);

            this.topGrid.union(0, i);
        }
    }

    public open = (row: number, col: number): void => {
        
        this.checkRowColumn(row, col);
        if (this.isOpen(row, col))
            return;
        this.numberOfOpenSites++;
        const siteIndex: number = this.map2Dto1DStartingFrom1(row, col);
        this.sites[siteIndex] = true;

        // Left
        if (col > 1 && this.isOpen(row, col-1)) {
            //console.log("Left: " + (siteIndex - 1) + " " + siteIndex);
            this.completeGrid.union(siteIndex - 1, siteIndex);
            this.topGrid.union(siteIndex - 1, siteIndex);
        }
        // Up
        if (row > 1 && this.isOpen(row-1, col)) {
            //console.log("Up: " + this.map2Dto1DStartingFrom1(row-1, col) + " " + siteIndex)
            this.completeGrid.union(this.map2Dto1DStartingFrom1(row-1, col), siteIndex);
            this.topGrid.union(this.map2Dto1DStartingFrom1(row-1, col), siteIndex);
        }
        // Down
        if (row < this.n && this.isOpen(row+1, col)) {
            //console.log("Down: " + this.map2Dto1DStartingFrom1(row+1, col) + " " + siteIndex)
            this.completeGrid.union(this.map2Dto1DStartingFrom1(row+1, col), siteIndex);
            this.topGrid.union(this.map2Dto1DStartingFrom1(row+1, col), siteIndex);
        }
        // Right
        if (col < this.n && this.isOpen(row, col+1)) {
            //console.log("Right: " + this.map2Dto1DStartingFrom1(row, col+1) + " " + siteIndex);
            this.completeGrid.union(this.map2Dto1DStartingFrom1(row, col+1), siteIndex);
            this.topGrid.union(this.map2Dto1DStartingFrom1(row, col+1), siteIndex);
        }
    }

    // is the site (row, col) open?
    public isOpen = (row: number, col: number): boolean => {

        this.checkRowColumn(row, col);

        if (this.sites[this.map2Dto1DStartingFrom1(row, col)])
            return true;

        return false;
    }

    public isFull = (row: number, col: number):boolean => {

        this.checkRowColumn(row, col);

        const rootOfSite: number = this.topGrid.find(this.map2Dto1DStartingFrom1(row, col));

        if (this.isOpen(row, col) && (rootOfSite === this.topGrid.find(0)))
            return true;

        return false;
    }

    public getNumberOfOpenSites = (): number => {

        return this.numberOfOpenSites;
    }

    public percolates = (): boolean => {

        //console.log(this.completeGrid.find(0));
        //console.log(this.completeGrid.find(this.n * this.n + 1));
        if (this.completeGrid.find(0) === this.completeGrid.find(this.n * this.n + 1)) {
            if (this.n > 1 || (this.n === 1 && this.isOpen(1, 1)))
                return true;
        }
        return false;
    }

    private checkRowColumn = (row: number, col: number): void => {
        if (row < 1 || row > this.n){
            console.error("illegal argument exception");
            return;
        }
        if (col < 1 || col > this.n){
            console.error("illegal argument exception");
            return;
        }
    }

    private map2Dto1DStartingFrom1 = (row: number, col: number): number => {
        return (row-1) * this.n + col;
    }
}