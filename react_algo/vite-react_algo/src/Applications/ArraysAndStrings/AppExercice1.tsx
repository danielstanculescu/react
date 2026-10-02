import { hasAllUniqueChars } from './Exercice1'

const AppExercice1 = () => {

    const s: string = "Daniel";


    const resultToString = (s: string): string => {

        const result: boolean = hasAllUniqueChars(s);
        
        if(result){
            return "The string " + s + " has all unique chars";
        }
        else {
            return "The string " + s + " doesn't have all unique chars";
        }
    }

    const output: string = resultToString(s);

  return (
    <div>
      {output}
    </div>
  )
}

export default AppExercice1
