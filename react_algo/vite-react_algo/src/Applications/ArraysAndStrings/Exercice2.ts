//implement a function which reverses a null-terminated string

export function reverse(s: string): string{

    let result: string = "";

    let tab: (string|null)[] = Array(s.length+1).fill(null);
    for(let i = 0; i<s.length; i++){
        tab[i] = s.charAt(i);
    }


    for(let i=s.length-1; i>=0; i--){
        result += tab[i];
    }

    return result;

}