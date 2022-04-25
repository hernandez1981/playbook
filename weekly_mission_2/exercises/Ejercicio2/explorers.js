//Ejercicicio 2
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "CDMX",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   
   //1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   console.log("1. Imprimiendo nombre de cada explorer en la lista:");
   explorers.forEach( explorer=> console.log(explorer.name));   

    // 2. Imprime el stack de cada explorer, usa FOR EACH
    console.log("2. Imprimiendo stack de cada explorer en la lista:")
    explorers.forEach( explorer=> {
        console.log(explorer.name);
        console.log(explorer.stack);
    });

    //3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
    console.log("3. Creando una nueva lista con las listas de stacks de cada explorer:");
    const explorers_stacks= explorers.map(explorer => explorer.stack) 
    console.log(explorers_stacks);

    //4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
    console.log("4. Imprimiendo la lista de explorers que tienen en su stack js:");
    const explorer_with_js= explorers.filter(explorer => explorer.stack.includes("js")); 
    console.log(explorer_with_js);

    //5. Busca el primer explorer que sea de la CDMX, usa FIND
    console.log("5. Imprimiendo primer explorers que vive en CDMX:");
    const explorer_in_cdmx = explorers.find(explorer=> explorer.city === "CDMX");
    console.log(explorer_in_cdmx);

    //6. Obtén la suma de todos los exercises_completed, usa REDUCE
    console.log("6. Imprimiendo la suma de todos los exercises_completed:");   
    const addition_of_exercises_completed = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0) // acc acumula el valor devuelto por una función    
    console.log("Suma de todos los exercises_completed:" + addition_of_exercises_completed);

    //7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
    console.log("7. Imprimiendo si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true:");  
    const exercisesFinished = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true)
    console.log("Al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true:" + exercisesFinished)

    //8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
    console.log("8. Imprimiendo si todos los explorers tiene la propiedad isFinished del onboarding como true:");  
    const isFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
    console.log("Todos los explorers tienen la propiedad isFinished del onboarding como true:" + isFinished)

   

    
   
   