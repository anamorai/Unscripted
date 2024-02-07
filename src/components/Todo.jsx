import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Check, Delete } from '@mui/icons-material';

const Todo = () => {
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
                >
                    <IconButton>
                        <Check style={{color: "green"}} />
                    </IconButton>
                    <IconButton style={{float: "right"}}>
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
