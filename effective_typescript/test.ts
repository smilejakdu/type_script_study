interface SaveAction {
  type: 'save';
}
interface LoadAction {
  type: 'load';
}
type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load';  // Repeated types!

const actionTypeTest1: Action = { 
  type:'save',
};

const actionTypeTest2: ActionType = { 
  type:'load',
};
