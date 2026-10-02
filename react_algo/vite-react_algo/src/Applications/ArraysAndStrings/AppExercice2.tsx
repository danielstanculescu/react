import { reverse } from './Exercice2'

const AppExercice2 = () => {

    const s: string = "Daniel";


    const resultToString = (s: string): string => {

        const result: string = reverse(s);
        
        return "The reverse string of " + s + " is " + result;
    }

    const output: string = resultToString(s);

  return (
    <div>
      {output}
    </div>
  )
}

export default AppExercice2
