import axios from "axios";
// url = https://jsonplaceholder.typicode.com/users

const submitBtn = document.getElementById("submitBtn")! as HTMLButtonElement; // ! - non-null assertion operator
const toDoInput = document.getElementById("toDoInput")! as HTMLInputElement;
const toDoForm = document.getElementById("toDoForm")! as HTMLFormElement;
const taskList = document.getElementById("taskList")! as HTMLUListElement;

const toDoList: toDoItem[] = readToDos()
toDoList.forEach(createTask)

function readToDos(): toDoItem[] {
    const toDosJSON = localStorage.getItem("toDoList")
    if (toDosJSON === null) {
        return []
    }
    return JSON.parse(toDosJSON)
}

function saveToDoList() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList))
}

interface toDoItem {
    task: string,
    completed: boolean,
}

function submitForm(event: SubmitEvent) {
    event?.preventDefault()

    const newTask: toDoItem = { task: toDoInput.value, completed: false}

    createTask(newTask)
    toDoList.push(newTask)

    saveToDoList()

    toDoInput.value = ''
    
}

function createTask(task: toDoItem) {
    const newLI = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed
    checkbox.addEventListener('change', function() {
        task.completed = checkbox.checked
        saveToDoList()
    })

    newLI.append(task.task)
    newLI.append(checkbox)
    taskList.append(newLI)
}

toDoForm.addEventListener("submit", submitForm)

interface Person {
    firstName: string,
    lastName: string,
}

axios.get("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    console.log("got a response");
})
.catch(error => {
    console.log("ERROR: ", error);
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TS CLASSES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Player implements Person {

    public readonly firstName: string;
    public readonly lastName: string;
    public readonly gamerTag: string;
    public console: string;
    protected _score: number = 0;
    private region: "EU" | "US" | "ME"; // private: this method/property should only be accessable/usable in the class its defined in

    constructor(firstName: string, lastName: string, gamerTag: string, console: string, region: "EU" | "US" | "ME") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gamerTag = gamerTag;
        this.console = console;
        this.region = region
    }

    get playerDetails(): string {
        return `Player: ${this.gamerTag} - Score: ${this.score}`
    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative")
        }
        this._score = newScore
    }
}

class SuperPlayer extends Player {
    isAdmin: boolean = true;
    maxScore() {
        this._score = 9000
    }
}

// TS CLASSES - Shortcut way:
// class Player {

//     public score: number = 0;

//     constructor( 
//         public gamerTag: string, 
//         public console: string, 
//         private region: "EU" | "US" | "ME" 
//         ) {}
// }

const spartanD23 = new Player("Stefan", "Madzarac", "SpartanD23", "playstation", "EU")
const spartanA16 = new SuperPlayer("Stefan", "Madzarac", "SpartanA16", "All", "US")

// Initialize ts-config file: tsc --init
// compile to js: tsc index.ts / tsc (all files)
// watch mode: tsc --watch / tsc -w