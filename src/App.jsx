import './App.css'
function App() {
  return (
    <div className='app'>
  <h1>Calculator</h1>
  <h1 />
  <table style={{
     width: '400px',
     margin:'auto'
     }}>
   <tr > 
   <td colSpan={4} style={{
    border: '1px solid black',
    textAlign: 'end'
   }}>
    <h2>0</h2> 
   </td>
   </tr>
   <tr>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> C </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> / </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> * </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> - </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 7 </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 8 </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 9 </button></td>
   <td rowSpan={2}><button type='button'
   className='btn btn-primary w-75 mt-2' style={{height: "85px"}}> + </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 4 </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 5 </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 6 </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 1 </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 2 </button></td>
   <td><button type='button'
   className='btn btn-primary w-75 mt-2'> 3 </button></td>
   <td rowSpan={2}><button type='button'
   className='btn btn-primary w-75 mt-2' style={{height: "85px"}} > = </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className='btn btn-primary mt-2 w-75'> DEL </button></td>
   <td><button type='button'
   className='btn btn-primary mt-2 w-75'> 0 </button></td>
   <td>
   <button type='button'
   className='btn btn-primary w-75 mt-2'> . </button>
   </td>
   </tr>
   
  </table>
</div>
  )
}  

export default App;
