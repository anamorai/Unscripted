import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Check, Delete } from '@mui/icons-material';

const Todo = ({title, checkTodo, deleteTodo, id, isComplited}) => {
  const todoStyle = isComplited ? {textDecoration: "line-through"} : {textDecoration: "none"};

  return (
    <>
      <Container>
        <Card
            variant='outlined'
            style={{marginBottom: 25, background: "lightblue"}}
        >
            <CardContent>
                <Typography
                    variant='h5'
                    component='h2'
                    style={todoStyle}
                >
                    <IconButton onClick={() => checkTodo(id)}>
                        <Check style={{color: "green"}} />
                    </IconButton>
                      {title}
                    <IconButton onClick={() => deleteTodo(id)} style={{float: "right"}}>
                        <Delete style={{color: "red"}} />
                    </IconButton>
                </Typography>
            </CardContent>

        </Card>
      </Container>
    </>
  )
}

export default Todo;
