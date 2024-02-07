import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask("");
    }

    const handleChange = (e) => {
        setTask(e.target.value);
    }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl>
            <TextField
                id="standard-basic"
                label="What you need to do?"
                variant="filled"
                required={true}
                value={task}
                onChange={handleChange}

            />
            <Button
                variant='contained' 
                color='primary' 
                type='submit'
                style={{marginTop: 5}}
            
            >
                Add
            </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default TodoForm;
