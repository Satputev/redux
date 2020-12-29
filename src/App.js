// // import React, { Component } from "react";
// // import { connect } from "react-redux";
// // class App extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1 style={{ color: "red" }}>{this.props.bal}</h1>
// //         <br></br>
// //         <br></br>
// //         <button onClick={this.props.deposit}>Deposit</button>
// //         <button onClick={this.props.withdraw}>Withdraw</button>
// //       </div>
// //     );
// //   }
// // }
// // const recive = state => {
// //   return {
// //     bal: state.bal
// //   };
// // };

// // const send = dispatch => {
// //   return {
// //     deposit: () => {
// //       dispatch({ type: "DEPOSIT", value: 10000 });
// //     },
// //     withdraw: () => {
// //       dispatch({ type: "WITHDRAW", value: 11000 });
// //     }
// //   };
// // };

// // export default connect(recive, send)(App);

// import React, { Component } from "react";
// import "./App.css";
// import { connect } from "react-redux";
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="col">
//           <h1>
//             A:<span style={{ color: "red" }}>{this.props.a}</span>
//           </h1>
//           <button
//             onClick={() => {
//               this.props.updateA(this.props.b);
//             }}
//           >
//             UPDATE_A
//           </button>
//         </div>
//         <div className="col">
//           <h1>
//             B:<span style={{ color: "green" }}>{this.props.b}</span>
//           </h1>
//           <button
//             onClick={() => {
//               this.props.updateB(this.props.a);
//             }}
//           >
//             UPDATE_B
//           </button>
//         </div>
//         <div className="col">
//           <h1 style={{ color: "pink" }}>{this.props.balance}</h1>
//           <button onClick={this.props.deposit}>DEPOSIT</button>
//           <button onClick={this.props.withdraw}>WITHDRAW</button>
//         </div>
//       </div>
//     );
//   }
// }

// const recive = state => {
//   return {
//     a: state.rA.a,
//     b: state.rB.b,
//     balance: state.r.bal
//   };
// };

// const send = dispatch => {
//   return {
//     updateA: val => {
//       dispatch({ type: "UPDATE_A", value: val });
//     },
//     updateB: val => {
//       dispatch({ type: "UPDATE_B", value: val });
//     },
//     deposit: () => {
//       dispatch({ type: "DEPOSIT", value: 10000 });
//     },
//     withdraw: () => {
//       dispatch({ type: "WITHDRAW", value: 5000 });
//     }
//   };
// };

// export default connect(recive, send)(App);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "./App.css";
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="col">
//           <h1>
//             {" "}
//             AccountBalance:
//             <span style={{ color: "red" }}>{this.props.bal}</span>
//           </h1>
//           <br></br>
//         </div>
//         <div className="col">
//           <input
//             type="number"
//             placeholder="Enter the Ammount"
//             ref="amt"
//             required
//           />
//         </div>
//         <br></br>
//         <div className="col">
//           <button
//             onClick={() => {
//               this.props.deposit(this.refs.amt.value);
//             }}
//           >
//             DEPOSIT
//           </button>
//           <button
//             onClick={() => {
//               this.props.withdraw(this.refs.amt.value);
//             }}
//           >
//             WITHDRAW
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// const recive = state => {
//   return {
//     bal: state.bal
//   };
// };

// const send = dispatch => {
//   return {
//     deposit: val => {
//       dispatch({ type: "DEPOSIT", value: val });
//     },
//     withdraw: val => {
//       dispatch({ type: "WITHDRAW", value: val });
//     }
//   };
// };

// export default connect(recive, send)(App);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "./App.css";
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>
//           Age...<span style={{ color: "red" }}>{this.props.age}</span>
//         </h1>
//         <br></br>
//         <br></br>
//         <button onClick={this.props.onAgeUp}>AgeUp</button>
//         <button onClick={this.props.onAgeDown}>AgeDown</button>
//         <br></br>
//         <br></br>
//         <ul>
//           {this.props.history.map((element, index) => (
//             <li
//               onClick={() => {
//                 this.props.onDeleteItem(element.id);
//               }}
//             >
//               {element.id}...{element.age}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// const recive = state => {
//   return {
//     age: state.age,
//     history: state.history
//   };
// };

// const send = dispatch => {
//   return {
//     onAgeUp: () => {
//       dispatch({ type: "AGE_UP", value: 1 });
//     },
//     onAgeDown: () => {
//       dispatch({ type: "AGE_DOWN", value: 1 });
//     },
//     onDeleteItem: id => {
//       dispatch({ type: "DEL_ITEM", value: id });
//     }
//   };
// };

// export default connect(recive, send)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Age:<span style={{ color: "red" }}>{this.props.age}</span>
        </h1>
        <br></br>
        <br></br>
        <button onClick={this.props.onAgeUp}>AgeUp</button>
        <button onClick={this.props.onAgeDown}>AgeDown</button>
      </div>
    );
  }
}
const recive = state => {
  return {
    age: state.age
  };
};

const send = dispatch => {
  return {
    onAgeUp: () => {
      dispatch({ type: "AGE_UP", value: 1 });
    },
    onAgeDown: () => {
      dispatch({ type: "AGE_DOWN", value: 1 });
    }
  };
};
export default connect(recive, send)(App);
