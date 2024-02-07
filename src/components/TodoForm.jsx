import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const TodoForm = () => {
  return (
    <Container>
      <form >
        <FormControl>
            <TextField
                id="standard-basic"
                label="What you need to do?"
                variant="filled"
                required={true}

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
