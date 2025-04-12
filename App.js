<<<<<<< HEAD
// import React from "react";
// import Navigation from "./src/navigation/Navigation";

// export default function App() {
//   return <Navigation />;
// }

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation/Navigation'; // adjust as per your structure

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

=======
import React from "react";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return <Navigation />;
}
>>>>>>> e6530eae2b707fbb7e7621e081908c62cdf311a0
