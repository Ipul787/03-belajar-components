const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {

    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/2017_British_GP_-_Vettel%27s_Ferrari_SF70H_with_%27Shield%27_system_%282%29.jpg/180px-2017_British_GP_-_Vettel%27s_Ferrari_SF70H_with_%27Shield%27_system_%282%29.jpg';
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={imageUrl}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }