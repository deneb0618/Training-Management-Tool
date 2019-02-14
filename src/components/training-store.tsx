export class TrainingStore {
  state: TrainingModel[] = initialState;

  removeItem = (uid: number) => {
    let newState = this.state.filter((item) => item.uid !== uid);
    this.state = newState;
    console.log(this.state);
  }

  addItem = () => {

  }

  editTitle = () => {

  }

  editDescription = () => {

  }
}

let counter = 0;
export class TrainingModel {
  uid: number = counter++;
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

const initialState: TrainingModel[] = [
  new TrainingModel('fake training 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.')
];
