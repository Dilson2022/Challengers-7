import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const usuarios = () => {

    const usuarios=[
        {nombre: "andres", apellido:"morales",edad:32},
        {nombre: "luis", apellido:"rodriguez",edad:25},
        {nombre: "laura", apellido:"coronel",edad:20},
      ]

    return (
        <div>
            <h1>
            prueba para ver usuarios
            </h1>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>nombre</TableCell>
            <TableCell align="right">apellido</TableCell>
            <TableCell align="right">edad</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {
            usuarios.map((row)=>(
              <TableRow>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.apellido}</TableCell>
                <TableCell>{row.edad}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>

          </div>
        
    )
}

export default usuarios