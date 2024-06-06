import React, { useState } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Typography 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';
import imgCarrito from '../img/carrito.png';

function ListaDeCompra() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
    <Container maxWidth="sm" sx={{ textAlign:'center', margin:'0', padding:'0'}}>
      <img alt='carrito de compra' src={imgCarrito} style={{width:'20vh',height:'20vh', marginRight:'50px'}}></img>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de compra
      </Typography>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={addTask} 
        style={{ marginTop: '10px', marginBottom: '20px' }}
        fullWidth
      >
        Añadir Tarea
      </Button>
      <List sx={{ 
          maxHeight: '400px',
          wordWrap: 'break-word'
        }}>
        {tasks.map((task, index) => (
          <ListItem 
            key={index} 
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                <DeleteIcon sx={{ color: '#1976d2'}} />
              </IconButton>
            }
          >
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Container>
    </div>
  );
}

export default ListaDeCompra;