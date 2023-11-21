// import { useState } from 'react';
// import { empData } from '../lib/db/mockData';
// import '../styles/App.css';
// import '../styles/Form.css';

// const initialState = {
//   id: '',
//   name: '',
//   age: '',
// };

// const EditEmployee = () => {
//   const [form, setForm] = useState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const target = empData.findIndex((emp) => emp.id === form.id);
//     empData[target] = form;
//   };

//   return (
//     <div className="app app-container">
//       <h2>Please enter new employee information</h2>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Enter name"
//               value={form.name}
//               onChange={(e) => {
//                 setForm((s) => ({ ...s, name: e.target.value }));
//               }}
//             />
//             <input
//               type="number"
//               placeholder="Enter Age"
//               value={form.age}
//               onChange={(e) => {
//                 setForm((s) => ({ ...s, age: Number(e.target.value) }));
//               }}
//             />
//           <button
//             className="btn"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditEmployee;
