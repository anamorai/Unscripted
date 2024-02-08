import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Check, Delete } from '@mui/icons-material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Todo = ({ title, checkTodo, deleteTodo, id, isComplited }) => {
  const todoStyle = isComplited ? { textDecoration: "line-through" } : { textDecoration: "none" };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    touchAction: "none"
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(id);
  }


  return (
    <>
      <Container
        ref={ setNodeRef }
        { ...attributes }
        { ...listeners }
        style={ style }
      >
        <Card
          variant='outlined'
          style={ { marginBottom: 25, background: "lightblue" } }
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={ todoStyle }
            >
              <IconButton onDoubleClick={ () => checkTodo(id) }>
                <Check style={ { color: "green" } } />
              </IconButton>
              { title }
              <IconButton onDoubleClick={ handleDelete } style={ { float: "right" } }>
                <Delete style={ { color: "red" } } />
              </IconButton>
            </Typography>
          </CardContent>

        </Card>
      </Container>
    </>
  )
}

export default Todo;
